const http = 'http://';
const host = 'localhost:80';
// const api = '/api/result.json';

export const $url = http + host;

export class Config {
    private static div = '/';
    public static pathList = {
        home: 'home',
        login: 'login',
        userM: 'user-mana',
        account: 'account',
        accountI: 'info',
        admin: 'admin',
        adminA: 'add',
        adminU: 'update'
    };
    public static routerList = {
        home: Config.div + Config.pathList.home,
        login: Config.div + Config.pathList.login,
    };
    public static userMana = {
        userM: Config.div + Config.pathList.userM,
        account: Config.div + Config.pathList.userM + Config.div + Config.pathList.account,
        accountI: Config.div + Config.pathList.userM + Config.div + Config.pathList.account + Config.div + Config.pathList.accountI,
        admin: Config.div + Config.pathList.userM + Config.div + Config.pathList.admin,
        adminA: Config.div + Config.pathList.userM + Config.div + Config.pathList.admin + Config.div + Config.pathList.adminA,
        adminU: Config.div + Config.pathList.userM + Config.div + Config.pathList.admin + Config.div + Config.pathList.adminU,
    };
}
