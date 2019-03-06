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
      label: 'admin',
      name: '管理员管理',
      open: true,
      children: [
        {
          name: '管理员列表',
          url: admin
        }
      ]
    },
    {
      label: 'info',
      name: '用户信息管理',
      open: true,
      children: [
        {
          name: '用户信息',
          url: accountI
        },
        {
          name: '用户邀请码',
          url: ''
        },
        {
          name: '用户收款信息',
          url: accountPayment
        }
      ]
    },
    {
      label: 'right',
      name: '用户权限管理',
      open: true,
      children: [
        {
          name: '冻结用户交易权限',
          url: order
        },
        {
          name: '冻结用户列表',
          url: order
        }
      ]
    },
    {
      label: 'comunicate',
      name: '交易订单',
      open: false,
      children: [
        {
          label: 'announce',
          name: '寄售中',
          url: currencySellingUsdt
        },
        {
          name: '已锁定',
          url: currencyLockUsdt
        },
        {
          name: '审核中',
          url: currencyCheckUsdt
        },
        {
          name: '审核失败',
          url: currencyCheckUsdt
        },
        {
          name: '已完成',
          url: currencyDoneUsdt
        }
      ]
    },
    {
      label: 'request',
      name: '申述订单',
      open: false,
      children: [
        {
          label: 'announce',
          name: '申述中',
          url: currencyRequestUsdt
        },
        {
          name: '申述成功',
          url: currencyRequestUsdt,
        },
        {
          name: '申述失败',
          url: currencyRequestUsdt
        }
      ]
    },
    {
      label: 'exchange',
      name: '兑换码管理',
      open: false,
      children: [
        {
          label: 'announce',
          name: '生成兑换码',
          url: total
        },
        {
          name: '未使用兑换码',
          url: announcement
        },
        {
          name: '已使用兑换码',
          url: ruleModify
        }
      ]
    },
    {
      label: 'announce',
      name: '通知栏管理',
      open: false,
      children: [
        {
          name: '公告管理',
          url: announcement
        }
      ]
    }
  ]
};
