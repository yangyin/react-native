export default class NavigationUtil {
    /**
     * 返回上一页
     * @param {*} navigation 
     */
    static goBack(navigation) {
        navigation.goBack();
    }

    /**
     * 重置到首页
     * @param {navigation} params 
     */
    static resetToHomePage(params) {
        console.log(params)
        const { navigation } = params
        navigation.navigate('Main')
    }
    /**
     * 跳转到指定页面
     * @param {*} params 要传递的参数
     * @param {*} page 要跳转的页面
     */
    static goPage(params,page) {
        const navigation = NavigationUtil.navigation
        if(!navigation) {
            return;
        }
        navigation.navigate(page,{...params});
    }
}