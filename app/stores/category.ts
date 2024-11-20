export const useCategoryStore = defineStore("category", () => {
    const appConfig = useAppConfig();
    const categoryNames = Object.keys(appConfig.article.categories);

    const currentCate = ref('分类');

    const setCateName = (name: string )=>{
        currentCate.value=name;
    }

    return {
        categoryNames,
        currentCate,
        setCateName
    }
});
