export * from './config/config';
export * from './tools/console';
export * from './tools/tools';
export * from './directive/tab.directive';

// interface
export * from './interface/component';
export * from './interface/http';
export * from './interface/login';
export * from './interface/admin';
export * from './interface/announce';
export * from './interface/reply';
export * from './interface/account';
export * from './interface/c2c';
export * from './interface/currency';
export * from './interface/video';
export * from './interface/invest';
export * from './interface/game';
export * from './interface/common';
export * from './interface/line-up';

export * from './animation';

// test api name
export const STATIC = 'static';
export const FORMATE = 'formate';
export const RANDOM = 'random';

// 权限列表
export const rightList = [
  {
    name: '修改管理员',
    code: '1'
  },
  {
    name: '添加管理员',
    code: '2'
  }
];

export const superList = [
  {
    name: '',
    code: '9999'
  }
];

export const normalList = [

];

export const IMACC = 'IMACC';
export const ETH = 'ETH';
export const USTD = 'USDT';
export const EOS = 'EOS';

export const VIDEO_PATH = 'videoPath';

export const SELECTED_ITEM = 'selectedItem';
export const MENU = 'menu';
export const MENU_MAP = 'menuMap';

import { Config } from './config/config';

const {
  userM,
  adminI,
  admin,
  adminPayment,
  accountI,
  accountID,
  accountIncome,
  accountBackIncome,
  accountExtraIncome,
  accountExchange,
  accountTransfer,
  accountTransferIn,
  accountTransferOut,
  accountCheck,
  accountRecharge,
  accountDraw,
  accountOrderList,
  accountWealModify,
  accountLevelModify,
  accountRelation,
  accountPayment,
  accountW,
  tradeD,
  tradeR,
  tradeT,
  ruleModify,
  ruleModifyRecord,
  total,
  nodeList,
  nodeReqList,
  homeMana,
  carousel,
  announcement,
  market,
  marketOrderDeliver,
  marketOrderUndeliver,
  marketOrderDone,
  reply,
  currencyCheckList,
  currencyDoneList,
  currencyDoneImacc,
  currencyDoneEth,
  currencyDoneUsdt,
  currencyLockList,
  currencyLockEth,
  currencyLockImacc,
  currencyLockUsdt,
  currencySellingImacc,
  currencySellingEth,
  currencySellingUsdt,
  currencyCheckImacc,
  currencyCheckEth,
  currencyCheckUsdt,
  currency,
  currencyRequestUsdt,
  currencyRequestModify,
  currencyCancelList,
  currencyRefuseList,
  weal,
  wealEth,
  wealUstd,
  prop,
  propUpdate,
  c2cDone,
  c2cSelling,
  wallet,
  walletBuy,
  walletReBuy,
  walletExchange,
  video,
  artical,
  homepage,
  accountInviters,
  invest,
  gameBuy,
  gameIncome,
  gameRecharge,
  gameWbsc,
  order
} = Config.userMana;

export const accountStatus = {
  0: '未认证',
  1: '已认证'
};

export const adminLevel = {
  1: '高级管理员',
  2: '普通管理员'
};

export const menu = {
  0: [
    {
      label: 'account',
      name: '用户管理',
      open: true,
      children: [
        {
          name: '用户列表',
          url: accountI
        }
      ]
    },
    {
      label: 'weal',
      name: '钱包管理',
      open: true,
      children: [
        // {
        //   name: '充币记录',
        //   url: accountRecharge
        // },
        // {
        //   name: '提币记录',
        //   url: accountDraw
        // },
        {
          name: '交易记录',
          url: accountTransfer
        }
      ]
    },
    {
      label: 'p2p',
      name: '排单管理',
      open: true,
      children: [
        {
          name: '排单列表',
          url: order
        }
      ]
    },
    {
      label: 'sys',
      name: '平台管理',
      open: false,
      children: [
        {
          label: 'announce',
          name: '平台统计',
          url: total
        },
        {
          name: '公告管理',
          url: announcement
        },
        {
          name: '规则设置',
          url: ruleModify
        },
        {
          name: '员工管理',
          url: admin
        }
      ]
    }
  ]
};
