#!/usr/bin/env node

import { exec } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

// 获取当前路径和参数
const args = process.argv.slice(2)
const blogTitle = args[0]

if (!blogTitle) {
    console.error('请提供博客标题，如：pnpm new blog-title')
    process.exit(1)
}

// 获取当前年份
const year = new Date().getFullYear()
const directory = path.join('D:', 'Lab', 'blog-v3-main', 'content', 'posts', year.toString())

// 确保目录存在
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true })
}

// 创建 Markdown 文件
const filePath = path.join(directory, `${blogTitle}.md`)
fs.writeFileSync(filePath, `---
title: 
description: 
date: ${new Date().toLocaleDateString('en-CA')} ${new Date().toLocaleTimeString()}
# updated: 
# image: 
# type: story #类型可选tech|story, tech标题左对齐, story居中
categories: [] #专栏类，第二，三个参数分别对应分类层级
tags: []
# cover_revert: boolean #封面是否反转样式
# hideInfo: boolean #是否隐藏文章头部相关信息
# recommend: number | boolean #轮播图推荐指数
# references: { title: string, link: string }[] #参考文献
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
