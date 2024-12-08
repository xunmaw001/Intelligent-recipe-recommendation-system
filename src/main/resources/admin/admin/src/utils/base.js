const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootct3p7/",
            name: "springbootct3p7",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootct3p7/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "智能菜谱推荐系统"
        } 
    }
}
export default base
