#!/usr/bin/env node
import { exec } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const args = process.argv.slice(2)
const columnName = args[0]
const blogTitle = args[1]

if (!columnName || !blogTitle) {
    console.error('请提供专栏名和博客标题，如：pnpm new column-name blog-title')
    process.exit(1)
}

const columnsDir = path.join(process.cwd(), 'content', 'columns')  
const categoryDir = path.join(columnsDir, columnName)  // 根据分类名创建目录

if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true })
}

const filePath = path.join(categoryDir, `${blogTitle}.md`)
fs.writeFileSync(filePath, `---
title: 
description: 
date: ${new Date().toLocaleDateString('en-CA')} ${new Date().toLocaleTimeString()}
# updated: 
# image: 
# type: story #类型可选tech|story, tech标题左对齐, story居中
categories: [专栏, ${columnName}] # 专栏类，第二，三个参数分别对应分类层级
tags: []
# cover_revert: boolean #封面是否反转样式
# hideInfo: boolean #是否隐藏文章头部相关信息
# recommend: number | boolean #轮播图推荐指数
# references: { title: string, link: string }[] #参考文献
show: false 
---\n\n
`, 'utf8')

// 使用 VS Code 打开文件
exec(`code "${filePath}"`, (error) => {
    if (error) {
        console.error(`无法打开文件: ${error.message}`)
    }
    else {
        console.log(`已创建并打开 ${filePath}`)
    }
})