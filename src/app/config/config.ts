const http = 'http://';
const host = 'localhost:80';
// const api = '/api/result.json';

export const $url = http + host;

export class Config {
    public static routerList = {
        home: '/home',
        login: '/login',
        actMana: '/account-mana/account'
    };
}
