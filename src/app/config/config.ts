const http = 'http://';
const host = 'localhost:80';
// const api = '/api/result.json';

export const $url = http + host;

export class Config {
    private static div = '/';
    public static host = 'http://admin.ace.cn.com';
    // public static host = 'http://artapi.jxxglc.cn';
    public static pathList = {
        home: 'home',
        login: 'login',
        userM: 'user-mana',
        sysM: 'sys-mana',
        account: 'account',
        accountI: 'info',
        accountU: 'update',
        accountW: 'weal',
        accountWU: 'update',
        accountR: 'recharge',
        accountD: 'draw',
        admin: 'admin',
        adminA: 'add',
        adminU: 'update',
        adminD: 'delete',
        adminI: 'info',
        market: 'market',
        marketL: 'item',
        marketO: 'order',
        marketU: 'updateItem',
        marketOD: 'orderDetail',
        marketOA: 'orderAdd',
        sHome: 'home',
        invitation: 'invitation',
        mine: 'mine',
        trade: 'trade'
    };
    public static routerList = {
        home: Config.div + Config.pathList.home,
        login: Config.div + Config.pathList.login,
    };
    public static userMana = {
        userM: Config.div + Config.pathList.userM,
        account: Config.div + Config.pathList.userM + Config.div + Config.pathList.account,
        accountI: Config.div + Config.pathList.userM + Config.div + Config.pathList.account + Config.div + Config.pathList.accountI,
        accountU: Config.div + Config.pathList.userM + Config.div + Config.pathList.account + Config.div + Config.pathList.accountU,
        accountW: Config.div + Config.pathList.userM + Config.div + Config.pathList.account + Config.div + Config.pathList.accountW,
        accountWU: Config.div + Config.pathList.userM + Config.div + Config.pathList.accountWU,
        accountR: Config.div + Config.pathList.userM + Config.div + Config.pathList.account + Config.div + Config.pathList.accountR,
        accountD: Config.div + Config.pathList.userM + Config.div + Config.pathList.account + Config.div + Config.pathList.accountD,
        admin: Config.div + Config.pathList.userM + Config.div + Config.pathList.admin,
        adminA: Config.div + Config.pathList.userM + Config.div + Config.pathList.admin + Config.div + Config.pathList.adminA,
        adminU: Config.div + Config.pathList.userM + Config.div + Config.pathList.admin + Config.div + Config.pathList.adminU,
        adminD: Config.div + Config.pathList.userM + Config.div + Config.pathList.admin + Config.div + Config.pathList.adminD,
        adminI: Config.div + Config.pathList.userM + Config.div + Config.pathList.admin + Config.div + Config.pathList.adminI,
    };

    public static sysMana = {
        sysM: Config.div + Config.pathList.sysM,
        market: Config.div + Config.pathList.sysM + Config.div + Config.pathList.market,
        marketU: Config.div + Config.pathList.sysM + Config.div + Config.pathList.marketU,
        marketOA: Config.div + Config.pathList.sysM + Config.div + Config.pathList.marketOA,
        marketL: Config.div + Config.pathList.sysM + Config.div + Config.pathList.market + Config.div + Config.pathList.marketL,
        marketO: Config.div + Config.pathList.sysM + Config.div + Config.pathList.market + Config.div + Config.pathList.marketO,
        marketOD: Config.div + Config.pathList.sysM + Config.div + Config.pathList.marketOD,
        sHome: Config.div + Config.pathList.sysM + Config.div + Config.pathList.sHome,
        invitation: Config.div + Config.pathList.sysM + Config.div + Config.pathList.invitation,
        mine: Config.div + Config.pathList.sysM + Config.div + Config.pathList.mine,
        trade: Config.div + Config.pathList.sysM + Config.div + Config.pathList.trade
    };

    public static apis = {
        login: '/api/bgUserManager/bgLogin',
        reLogin: '/api/bgUserManager/bgLoginSecurity',
        adminInfo: '/api/bgUserManager/showAllManager',
        adminAdd: '/api/bgUserManager/createAdmin',
        adminDelete: '/api/bgUserManager/deleteAdmin',
        adminUpdate: '/api/bgUserManager/updateAdminPwd',
        accountInfo: '/api/bgUserManager/userInfoManagerPageShow',
        accountDetail: '/api/bgUserManager/userInfoDetail',
        accountDraw: '/api/bgUserManager/coinTransactionOutPage',
        accountRecharge: '/api/bgUserManager/coinTransactionInPage',
        accountWeal: '/api/bgUserManager/userAssetsManagerPageShow',
        accountWealU: '/api/bgUserManager/updateUserAssets',
        accountWealD: '/api/bgUserManager/oneUserAssetsInfo',
        sysHome: '',
        homeCarousel: '',
        carouselU: '',
        postU: '',
        homePost: '',
        sysInv: '',
        sysMarket: '',
        sysMarketL: '/api/bgSystemManager/showGoodInfo',
        sysMine: '',
        sysMineU: '',
        upload: 'https://jsonplaceholder.typicode.com/posts/'
    };

    public static page = {
        account: '',
        page: 1,
        pageSize: 999
    };
}
