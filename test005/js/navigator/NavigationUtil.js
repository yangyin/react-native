export default class NavigationUtil {

    /**
     * 返回上一页
     * @param {*} params 
     */
    static goBack(params) {
        const { navigation } = params;
        navigation.goBack();
    }
    /**
     * 重置到首页
     * @param {*} params 
     */
    static resetToHomePage(params) {
        const { navigation } = params;
        navigation.navigate('Main');
    }

    /**
     * 跳转到指定页面
     * page:路由名
     * params:参数
     */
    static goPage(params,page) {
        const  { navigation }  = NavigationUtil;
        if( !navigation ) {
            console.log('NavigationUtil navigation 不能为空');
            return;
        }
        navigation.navigate(
            page,
            { ...params}
        )
    }
    

}