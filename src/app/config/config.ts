const http = 'http://';
const host = 'localhost:80';
// const api = '/result.json';

export const $url = http + host;

const PAGE = 'pageNo';
const PAGE_SIZE = 'pageSize';

export { PAGE, PAGE_SIZE };

export class Config {
  public static USER_INFO = 'userInfo';
  // public static host = 'http://42.51.39.90:80';
  // public static host = 'http://192.168.1.111:8082';
  // public static host = 'http://123.207.14.240';
  // 服务器测试
  // public static host = 'http://42.51.39.90:8095';
  // public static downloadUrl = 'http://42.51.39.90:80';
  // public static imgUrl = 'http://42.51.39.90:9023/image';
  // 本地测试
  // public static host = 'http://192.168.1.100:8631';
  // public static host = 'http://42.51.391.90:8095';
  // public static downloadUrl = 'http://192.168.1.111:8082';
  // public static imgUrl = 'http://192.168.1.111:8089/image/';
  // 正式
  public static host        = 'http://103.210.239.122:8631';
  // public static host        = 'http://38.21.243.30:9999';
  public static downloadUrl = 'http://38.21.243.86:80';
  public static imgUrl      = 'http://38.21.243.30:8089/image/';

  // dev-server for test
  // public static host = 'http://127.0.0.1:7001';
  public static pathList    = {
    home                      : '/home',
    login                     : '/login',
    userM                     : '/mana',
    account                   : '/account',
    accountI                  : '/info',
    accountID                 : '/accountDetail',
    accountAdd                : '/addAccount',
    accountU                  : '/update',
    accountW                  : '/wealInfo',
    accountWU                 : '/wealUpdate',
    accountDev                : '/deviceInfo',
    accountR                  : '/recharge',
    accountD                  : '/draw',
    accountCheck              : '/check',
    accountInviters           : '/inviters',
    accountInvitersD          : '/inviterDetail',
    accountOrderList          : '/orderListInfo',
    accountIncome             : '/incomeInfo',
    accountBackIncome         : '/backIncomeInfo',
    accountExtraIncome        : '/extraIncomeInfo',
    accountExchange           : '/exchangeInfo',
    accountTransfer           : '/transfer',
    accountTransferIn         : '/in',
    accountTransferOut        : '/out',
    accountDraw               : '/drawInfo',
    accountRecharge           : '/rechargeInfo',
    accountWealModify         : '/wealModify',
    accountLevelModify        : '/levelModify',
    accountCurrencyModify     : '/currencyModify',
    accountRelation           : '/relationInfo',
    accountRelationDetail     : '/relationDetail',
    accountPayment            : '/paymentInfo',
    accountUpdate             : '/update',
    admin                     : '/admin',
    adminA                    : '/add',
    adminU                    : '/update',
    adminD                    : '/delete',
    adminI                    : '/info',
    adminPayment              : '/payment',
    trade                     : '/trade',
    tradeR                    : '/rechargeInfo',
    tradeD                    : '/drawInfo',
    tradeT                    : '/transfer',
    carousel                  : '/carousel',
    homepage                  : '/homepage',
    announcement              : '/announce',
    announcementAdd           : '/addAnnounce',
    announcementUpdate        : '/updateAnnounce',
    order                     : '/order',
    system                    : '/system',
    ruleModify                : '/ruleModify',
    ruleModifyRecord          : '/ruleModifyRecord',
    total                     : '/total',
    nodeMana                  : '/node',
    nodeList                  : '/list',
    nodeReqList               : '/reqList',
    homeMana                  : '/home',
    market                    : '/market',
    marketAdd                 : '/addItem',
    marketUpdate              : '/updateItem',
    marketOrderUndeliver      : `/orderUndeliver`,
    marketOrderDeliver        : `/orderDeliver`,
    marketOrderDone           : `/orderDone`,
    marketOrderUndeliverDetail: `/orderUndeliverDetail`,
    marketOrderDeliverDetail  : `/orderDeliverDetail`,
    marketOrderDoneDetail     : `/orderDoneDetail`,
    weal                      : '/weal',
    wealEth                   : '/wealEth',
    wealUstd                  : '/wealUstd',
    prop                      : '/prop',
    propUpdate                : '/propUpdate',
    reply                     : '/reply',
    replyDetail               : '/detail',
    currencyCheckList         : `/currencyCheck`,
    currencyCheckEth          : `/Eth`,
    currencyCheckImacc        : `/Imacc`,
    currencyCheckUsdt         : `/Usdt`,
    currencyCheckEthDetail    : `/ethDetail`,
    currencyCheckImaccDetail  : `/imaccDetail`,
    currencyCheckUsdtDetail   : `/usdtDetail`,
    currencyDoneList          : `/currencyDone`,
    currencyDoneEth           : `/Eth`,
    currencyDoneImacc         : `/Imacc`,
    currencyDoneUsdt          : `/Usdt`,
    currencyDoneEthDetail     : `/ethDetail`,
    currencyDoneImaccDetail   : `/imaccDetail`,
    currencyDoneUsdtDetail    : `/usdtDetail`,
    currencyLockList          : `/currencyLock`,
    currencyLockEth           : `/Eth`,
    currencyLockImacc         : `/Imacc`,
    currencyLockUsdt          : `/Usdt`,
    currencyLockEthDetail     : `/ethDetail`,
    currencyLockImaccDetail   : `/imaccDetail`,
    currencyLockUsdtDetail    : `/usdtDetail`,
    currencySellingList       : '/currencySelling',
    currencySellingEth        : `/Eth`,
    currencySellingImacc      : `/Imacc`,
    currencySellingUsdt       : `/Usdt`,
    currencySellingEthDetail  : `/ethDetail`,
    currencySellingImaccDetail: `/imaccDetail`,
    currencySellingUsdtDetail : `/usdtDetail`,
    currencyRequestList       : '/currencyRequest',
    currencyRequestUsdt       : '/Usdt',
    currencyRequestModify     : '/modifyList',
    currencyCancelList        : '/cancal',
    currencyRefuseList        : '/refuse',
    currency                  : `/currency`,
    c2c                       : `/c2c`,
    c2cDone                   : `/done`,
    c2cSelling                : `/selling`,
    artical                   : `/artical`,
    articalAdd                : `/add`,
    articalDelete             : `/delete`,
    articalUpdate             : `/update`,
    articalFile               : ``,
    video                     : `/video`,
    videoAdd                  : `/add`,
    videoDelete               : `/delete`,
    videoUpdate               : `/update`,
    wallet                    : `/wallet`,
    walletBuy                 : `/buy`,
    walletReBuy               : `/reBuy`,
    walletExchange            : `/exchange`,
    invest                    : `/invest`,
    game                      : `/game`,
    gameBuy                   : `/buy`,
    gameRecharge              : `/recharge`,
    gameIncome                : `/income`,
    gameWbsc                  : `/wbsc`

  };

  public static routerList = {
    home : `${Config.pathList.home}`,
    login: `${Config.pathList.login}`
  };

  public static userMana = {
    userM                     : `${Config.pathList.userM}`,
    account                   : `${Config.pathList.userM}${Config.pathList.account}`,
    accountI                  : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountI}`,
    accountU                  : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountU}`,
    accountAdd                : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountAdd}`,
    accountW                  : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountW}`,
    accountWU                 : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountWU}`,
    accountDev                : `${Config.pathList.userM}${Config.pathList.accountDev}`,
    accountID                 : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountID}`,
    accountUpdate             : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountUpdate}`,
    accountR                  : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountR}`,
    accountD                  : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountD}`,
    accountCheck              : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountCheck}`,
    accountInviters           : `${Config.pathList.userM}${Config.pathList.accountInviters}`,
    accountInvitersD          : `${Config.pathList.userM}${Config.pathList.accountInvitersD}`,
    accountOrderList          : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountOrderList}`,
    accountIncome             : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountIncome}`,
    accountBackIncome         : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountBackIncome}`,
    accountExtraIncome        : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountExtraIncome}`,
    accountExchange           : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountExchange}`,
    accountTransfer           : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountTransfer}`,
    accountRelation           : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountRelation}`,
    accountRelationDetail     : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountRelationDetail}`,
    accountPayment            : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountPayment}`,
    accountTransferIn         : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountTransfer}${Config.pathList.accountTransferIn}`,
    accountTransferOut        : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountTransfer}${Config.pathList.accountTransferOut}`,
    accountDraw               : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountDraw}`,
    accountRecharge           : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountRecharge}`,
    accountWealModify         : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountWealModify}`,
    accountLevelModify        : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountLevelModify}`,
    accountCurrencyModify     : `${Config.pathList.userM}${Config.pathList.account}${Config.pathList.accountWealModify}`,
    admin                     : `${Config.pathList.userM}${Config.pathList.admin}`,
    adminA                    : `${Config.pathList.userM}${Config.pathList.admin}${Config.pathList.adminA}`,
    adminU                    : `${Config.pathList.userM}${Config.pathList.admin}${Config.pathList.adminU}`,
    adminD                    : `${Config.pathList.userM}${Config.pathList.admin}${Config.pathList.adminD}`,
    adminI                    : `${Config.pathList.userM}${Config.pathList.admin}${Config.pathList.adminI}`,
    adminPayment              : `${Config.pathList.userM}${Config.pathList.admin}${Config.pathList.adminPayment}`,
    trade                     : `${Config.pathList.userM}${Config.pathList.trade}`,
    tradeR                    : `${Config.pathList.userM}${Config.pathList.trade}${Config.pathList.tradeR}`,
    tradeD                    : `${Config.pathList.userM}${Config.pathList.trade}${Config.pathList.tradeD}`,
    tradeT                    : `${Config.pathList.userM}${Config.pathList.trade}${Config.pathList.tradeT}`,
    carousel                  : `${Config.pathList.userM}${Config.pathList.carousel}`,
    homepage                  : `${Config.pathList.userM}${Config.pathList.homepage}`,
    announcement              : `${Config.pathList.userM}${Config.pathList.announcement}`,
    announcementAdd           : `${Config.pathList.userM}${Config.pathList.announcement}${Config.pathList.announcementAdd}`,
    announcementUpdate        : `${Config.pathList.userM}${Config.pathList.announcement}${Config.pathList.announcementUpdate}`,
    order                     : `${Config.pathList.userM}${Config.pathList.order}`,
    ruleModify                : `${Config.pathList.userM}${Config.pathList.system}${Config.pathList.ruleModify}`,
    ruleModifyRecord          : `${Config.pathList.userM}${Config.pathList.system}${Config.pathList.ruleModifyRecord}`,
    total                     : `${Config.pathList.userM}${Config.pathList.system}${Config.pathList.total}`,
    nodeMana                  : `${Config.pathList.userM}${Config.pathList.nodeMana}`,
    nodeList                  : `${Config.pathList.userM}${Config.pathList.nodeMana}${Config.pathList.nodeList}`,
    nodeReqList               : `${Config.pathList.userM}${Config.pathList.nodeMana}${Config.pathList.nodeReqList}`,
    homeMana                  : `${Config.pathList.userM}${Config.pathList.homeMana}`,
    market                    : `${Config.pathList.userM}${Config.pathList.market}`,
    marketAdd                 : `${Config.pathList.userM}${Config.pathList.market}${Config.pathList.marketAdd}`,
    marketUpdate              : `${Config.pathList.userM}${Config.pathList.market}${Config.pathList.marketUpdate}`,
    marketOrderUndeliver      : `${Config.pathList.userM}${Config.pathList.market}${Config.pathList.marketOrderUndeliver}`,
    marketOrderDeliver        : `${Config.pathList.userM}${Config.pathList.market}${Config.pathList.marketOrderDeliver}`,
    marketOrderDone           : `${Config.pathList.userM}${Config.pathList.market}${Config.pathList.marketOrderDone}`,
    marketOrderUndeliverDetail: `${Config.pathList.userM}${Config.pathList.market}${Config.pathList.marketOrderUndeliverDetail}`,
    marketOrderDeliverDetail  : `${Config.pathList.userM}${Config.pathList.market}${Config.pathList.marketOrderDeliverDetail}`,
    marketOrderDoneDetail     : `${Config.pathList.userM}${Config.pathList.market}${Config.pathList.marketOrderDoneDetail}`,
    reply                     : `${Config.pathList.userM}${Config.pathList.reply}`,
    replyDetail               : `${Config.pathList.userM}${Config.pathList.reply}${Config.pathList.replyDetail}`,
    prop                      : `${Config.pathList.userM}${Config.pathList.prop}`,
    propUpdate                : `${Config.pathList.userM}${Config.pathList.propUpdate}`,
    // 法币管理
    // 待审核列表
    currencyCheckList       : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyCheckList}`,
    currencyCheckImacc      : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyCheckList}${Config.pathList.currencyCheckImacc}`,
    currencyCheckEth        : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyCheckList}${Config.pathList.currencyCheckEth}`,
    currencyCheckUsdt       : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyCheckList}${Config.pathList.currencyCheckUsdt}`,
    currencyCheckImaccDetail: `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyCheckList}${Config.pathList.currencyCheckImaccDetail}`,
    currencyCheckEthDetail  : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyCheckList}${Config.pathList.currencyCheckEthDetail}`,
    currencyCheckUsdtDetail : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyCheckList}${Config.pathList.currencyCheckUsdtDetail}`,

    // 已完成列表
    currencyDoneList       : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyDoneList}`,
    currencyDoneImacc      : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyDoneList}${Config.pathList.currencyDoneImacc}`,
    currencyDoneEth        : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyDoneList}${Config.pathList.currencyDoneEth}`,
    currencyDoneUsdt       : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyDoneList}${Config.pathList.currencyDoneUsdt}`,
    currencyDoneImaccDetail: `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyDoneList}${Config.pathList.currencyDoneImaccDetail}`,
    currencyDoneEthDetail  : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyDoneList}${Config.pathList.currencyDoneEthDetail}`,
    currencyDoneUsdtDetail : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyDoneList}${Config.pathList.currencyDoneUsdtDetail}`,

    // 锁定的订单
    currencyLockList       : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyLockList}`,
    currencyLockImacc      : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyLockList}${Config.pathList.currencyLockImacc}`,
    currencyLockEth        : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyLockList}${Config.pathList.currencyLockEth}`,
    currencyLockUsdt       : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyLockList}${Config.pathList.currencyLockUsdt}`,
    currencyLockImaccDetail: `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyLockList}${Config.pathList.currencyLockImaccDetail}`,
    currencyLockEthDetail  : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyLockList}${Config.pathList.currencyLockEthDetail}`,
    currencyLockUsdtDetail : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyLockList}${Config.pathList.currencyLockUsdtDetail}`,

    // 主目录
    currency: `${Config.pathList.userM}${Config.pathList.currency}`,

    // 寄售列表
    currencySellingImacc      : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencySellingList}${Config.pathList.currencySellingImacc}`,
    currencySellingEth        : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencySellingList}${Config.pathList.currencySellingEth}`,
    currencySellingUsdt       : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencySellingList}${Config.pathList.currencySellingUsdt}`,
    currencySellingImaccDetail: `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencySellingList}${Config.pathList.currencySellingImaccDetail}`,
    currencySellingEthDetail  : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencySellingList}${Config.pathList.currencySellingEthDetail}`,
    currencySellingUsdtDetail : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencySellingList}${Config.pathList.currencySellingUsdtDetail}`,
    currencyRequestList       : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyRequestList}`,
    currencyRequestUsdt       : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyRequestList}${Config.pathList.currencyRequestUsdt}`,
    currencyRequestModify     : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyRequestModify}`,
    currencyCancelList        : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyCancelList}`,
    currencyRefuseList        : `${Config.pathList.userM}${Config.pathList.currency}${Config.pathList.currencyRefuseList}`,
    weal                      : `${Config.pathList.userM}${Config.pathList.weal}`,
    wealEth                   : `${Config.pathList.userM}${Config.pathList.weal}${Config.pathList.wealEth}`,
    wealUstd                  : `${Config.pathList.userM}${Config.pathList.weal}${Config.pathList.wealUstd}`,
    c2c                       : `${Config.pathList.userM}${Config.pathList.c2c}`,
    c2cDone                   : `${Config.pathList.userM}${Config.pathList.c2c}${Config.pathList.c2cDone}`,
    c2cSelling                : `${Config.pathList.userM}${Config.pathList.c2c}${Config.pathList.c2cSelling}`,
    artical                   : `${Config.pathList.userM}${Config.pathList.artical}`,
    articalAdd                : `${Config.pathList.userM}${Config.pathList.artical}${Config.pathList.articalAdd}`,
    articalDelete             : `${Config.pathList.userM}${Config.pathList.artical}${Config.pathList.articalDelete}`,
    articalUpdate             : `${Config.pathList.userM}${Config.pathList.artical}${Config.pathList.articalUpdate}`,
    video                     : `${Config.pathList.userM}${Config.pathList.video}`,
    videolAdd                 : `${Config.pathList.userM}${Config.pathList.video}${Config.pathList.videoAdd}`,
    videoDelete               : `${Config.pathList.userM}${Config.pathList.video}${Config.pathList.videoDelete}`,
    videoUpdate               : `${Config.pathList.userM}${Config.pathList.video}${Config.pathList.videoUpdate}`,
    wallet                    : `${Config.pathList.userM}${Config.pathList.wallet}`,
    walletBuy                 : `${Config.pathList.userM}${Config.pathList.wallet}${Config.pathList.walletBuy}`,
    walletReBuy               : `${Config.pathList.userM}${Config.pathList.wallet}${Config.pathList.walletReBuy}`,
    walletExchange            : `${Config.pathList.userM}${Config.pathList.wallet}${Config.pathList.walletExchange}`,
    invest                    : `${Config.pathList.userM}${Config.pathList.invest}`,
    gameBuy                   : `${Config.pathList.userM}${Config.pathList.game}${Config.pathList.gameBuy}`,
    gameRecharge              : `${Config.pathList.userM}${Config.pathList.game}${Config.pathList.gameRecharge}`,
    gameIncome                : `${Config.pathList.userM}${Config.pathList.game}${Config.pathList.gameIncome}`,
    gameWbsc                  : `${Config.pathList.userM}${Config.pathList.game}${Config.pathList.gameWbsc}`
  };

  public static prifix = '';
  // public static prifix = '/test';
  // public static prifix = '/cawdapi';
  // public static prifix = '/imaccapi';
  // public static prifix = '/kllapi';
  public static apis = {
    testRandom             : `${Config.prifix}/dev/randomJson`,
    testFormate            : `${Config.prifix}/dev/formateJson`,
    testStatic             : `${Config.prifix}/dev/staticJson`,
    testStaticList         : `${Config.prifix}/dev/staticList`,
    login                  : `${Config.prifix}/emp/login`,
    carouselInfo           : `${Config.prifix}/admin/bannelList`,
    carouselDelete         : `${Config.prifix}/admin/deleteNotice`,
    carouselUpdate         : `${Config.prifix}/admin/updateBannel`,
    homepage               : `${Config.prifix}/admin/informationBannel`,
    updateHomePage         : `${Config.prifix}/admin/updateInformationBanner`,
    announcementInfo       : `${Config.prifix}/config/findNoticeByPage`,
    announcementAdd        : `${Config.prifix}/config/addNotice`,
    announcementUpdate     : `${Config.prifix}/admin/updateNoticeInfo`,
    announcementDelete     : `${Config.prifix}/config/deleteNotice`,
    orderInfo              : `${Config.prifix}/adminUser/findUserAssetsData`,
    adminInfo              : `${Config.prifix}/emp/findEmpByNameOrAccount`,
    adminAdd               : `${Config.prifix}/emp/addEmp`,
    adminDelete            : `${Config.prifix}/emp/deleteEmp`,
    adminUpdate            : `${Config.prifix}/emp/updateEmp`,
    defaultInviteCodeSet   : `${Config.prifix}/admin/updateUserCode`,
    accountInviteCodeSet   : `${Config.prifix}/admin/updateUserCodeLog`,
    accountInfo            : `${Config.prifix}/adminUser/findUserInfoByPage`,
    accountInfoD           : `${Config.prifix}/adminUser/findUserInfo`,
    accountInfoUpdateDetail: `${Config.prifix}/adminUser/findUserById`,
    accountNameALl         : `${Config.prifix}/adminUser/findAllUserAccount`,
    accountAdd             : `${Config.prifix}/userManage/save`,
    downloadSportInfo      : `${Config.prifix}/adminUser/outPutToExcl`,
    downloadNodeInfo       : `${Config.prifix}/adminUser/outPutToExclManager`,
    accountInviters        : `${Config.prifix}/adminUser/subordinate`,
    accountOrderList       : `${Config.prifix}/userManage/business`,
    accountOrderTotal      : `${Config.prifix}/admin/fundOrderByMonthTotal`,
    accountDetail          : `${Config.prifix}/admin/userInfo`,
    accountUpdate          : `${Config.prifix}/adminController/updateUserOperatorLevel`,
    accountDraw            : `${Config.prifix}/coinTransferManage/coinOutList`,
    accountRecharge        : `${Config.prifix}/coinTransferManage/coinInList`,
    accountTransfer        : `${Config.prifix}/adminUser/findTransferByPage`,
    accountTransferIn      : `${Config.prifix}/admin/transferIn`,
    accountTransferOut     : `${Config.prifix}/admin/transferOut`,
    accountExchange        : `${Config.prifix}/admin/findConsumeLogByPage`,
    accountTradeCheck      : `${Config.prifix}/coinTransferManage/outComeCoinAuditing`,
    accountIncome          : `${Config.prifix}/admin/userProfit`,
    accountWsbcIncome      : `${Config.prifix}/userManage/inComeJournalRemarks`,
    accountRelation        : `${Config.prifix}/admin/userInvitation`,
    accountRelationDetail  : `${Config.prifix}/adminController/findSubordinateByPage`,
    accountPayment         : `${Config.prifix}/admin/allUserBank`,
    adminPayment           : `${Config.prifix}/admin/dueBank`,
    adminPaymentUpdate     : `${Config.prifix}/admin/updateDueBank`,
    accountWeal            : `${Config.prifix}/userManage/purse`,
    accountWealModify      : `${Config.prifix}/adminController/findAdminUpdateAssetsLog`,
    accountLevelModify     : `${Config.prifix}/admin/updateUserPruse`,
    accountWealUpdate      : `${Config.prifix}/userManage/updatePurse`,
    accountCheckList       : `${Config.prifix}/admin/`,
    accountCheckRecharge   : `${Config.prifix}/admin/rechargeAudit`,
    accountCheckDraw       : `${Config.prifix}/admin/cashAudit`,
    registerRulePriceUpdate: `${Config.prifix}/admin/updateRelatedSetup`,
    speedupRulePriceUpdate : `${Config.prifix}/admin/updateRelatedSetup`,
    rewardRulePriceUpdate  : `${Config.prifix}/admin/updateRelatedSetup`,
    rulePriceList          : `${Config.prifix}/admin/findRelatedSetup`,
    nodeList               : `${Config.prifix}/adminUser/findAllKing`,
    nodeReqList            : `${Config.prifix}/applyLog/findAll`,
    nodeReqRefuse          : `${Config.prifix}/applyLog/examineApply`,
    nodeReqCheck           : `${Config.prifix}/applyLog/examineApply`,
    totalInfo              : `${Config.prifix}/adminUser/getStatistics`,
    ipAddr                 : 'http://pv.sohu.com/cityjson?ie=utf-8',
    upload                 : `${Config.prifix}/admin/uploadPictures`,
    updateCarousel         : `${Config.prifix}/admin/updateBannel`,
    updateCarouselBase64   : `${Config.prifix}/kllapi/notice/saveImage`,
    productList            : `${Config.prifix}/admin/allGoods `,
    productAdd             : `${Config.prifix}/admin/addGoods`,
    productUpdate          : `${Config.prifix}/admin/updateGoods`,
    productDelete          : `${Config.prifix}/admin/deleteGoods`,
    productDetail          : `${Config.prifix}/admin/goodsInfo`,
    productShelf           : `${Config.prifix}/admin/goodsUp`,
    productUnShelf         : `${Config.prifix}/admin/goodsDown`,
    productOrderUndeliver  : `${Config.prifix}/admin/unshippedList`,
    productOrderDeliver    : `${Config.prifix}/admin/getShipped `,
    productOrderDone       : `${Config.prifix}/admin/getSuccessShipped`,
    productDeliver         : `${Config.prifix}/admin/deliverGoods`,
    replyList              : `${Config.prifix}/admin/allUserMsg`,
    replyRespone           : `${Config.prifix}/admin/adminReply`,
    currencyCheckList      : `${Config.prifix}/orderManage/orderList`,
    currencyDoneList       : `${Config.prifix}/orderManage/orderList`,
    currencyLockList       : `${Config.prifix}/admin/findP2PTradeLogByPage`,
    currencySellingList    : `${Config.prifix}/orderManage/goodsList`,
    currencyRequestList    : `${Config.prifix}/orderManage/orderList`,
    currencyCancel         : `${Config.prifix}/orderManage/appeal`,
    currencyConfirm        : `${Config.prifix}/orderManage/appeal`,
    currencyDetail         : `${Config.prifix}/orderManage/orderDetil`,
    currencyRequestModify  : `${Config.prifix}/adminController/findAdminExamineLog`,
    c2cDone                : `${Config.prifix}/admin/findTradeCenterFinishByPage`,
    c2cSelling             : `${Config.prifix}/admin/findTradeCenterByPage`,
    walletBuy              : `${Config.prifix}/admin/payment`,
    walletReBuy            : `${Config.prifix}/admin/receivables`,
    walletExchange         : `${Config.prifix}/admin/findProductExcLogByPage`,
    videoList              : `${Config.prifix}/admin/findNoticeInPage`,
    videoAdd               : `${Config.prifix}/admin/createVideoNotice`,
    videoDelete            : `${Config.prifix}/admin/deleteNotice`,
    articalDelete          : `${Config.prifix}/admin/deleteNotice`,
    articalAdd             : `${Config.prifix}/admin/createArticleNotice`,
    articalFile            : `${Config.prifix}/admin/uploadFile`,
    articalList            : `${Config.prifix}/admin/information`,
    articalUpdate          : `${Config.prifix}/admin/updateInformation`,
    investModifyNumber     : `${Config.prifix}/privatePlacementManage/updateP`,
    investList             : `${Config.prifix}/privatePlacementManage/list`,
    investAdd              : `${Config.prifix}/privatePlacementManage/save`,
    ruleList               : `${Config.prifix}/config/findLineConfig`,
    initCodeModify         : `${Config.prifix}/admin/updateInitialCodeLog`,
    userCodeModify         : `${Config.prifix}/admin/updateUserCodeLog`,
    updateInitCode         : `${Config.prifix}/admin/updateInitialCode`,
    updateUserCode         : `${Config.prifix}/admin/updateUserCode`,
    updateLineUp           : `${Config.prifix}/config/updateLineUpTime`,
    updateRewardTime       : `${Config.prifix}/config/updateHarvestTime`,
    weal                   : `${Config.prifix}/admin/allUserManageMoney`,
    propList               : `${Config.prifix}/admin/allParameters`,
    propUpdate             : `${Config.prifix}/admin/adminUpdateParameter`,
    gameRecharge           : `${Config.prifix}/gamesManage/rechargeRemarks`,
    gameBuy                : `${Config.prifix}/gamesManage/goldJournalRemarks`,
    gameWbsc               : `${Config.prifix}/admin/adminUpdateParameter`,
    gameWbscDetail         : `${Config.prifix}/admin/adminUpdateParameter`,
    gameIncome             : `${Config.prifix}/gamesManage/mineInComeRemarks`,
    gameIncomeDetail       : `${Config.prifix}/gamesManage/mineInComeRemarksDetil`,
    videoUpload            : `${Config.prifix}/admin/createVideoNotice`,
    imageUpload            : `${Config.prifix}/admin/uploadImg`,
    lineUpList             : `${Config.prifix}/adminLineUp/findLineUpByPage`,
    downloadUrl            : ``

  };

  // 测试服务器每个项目都添加了对应路径
  // 要添加imagePrifix才能匹配对应图片到 如 /kll
  public static imagePrifix = '';
  public static images = {
    jumper       : `../../..${Config.imagePrifix}/assets/pic/login-jumper.png`,
    inputLogin   : `../../..${Config.imagePrifix}/assets/pic/account.png`,
    inputPassword: `../../..${Config.imagePrifix}/assets/pic/password.png`,
    powerOff     : `../../..${Config.imagePrifix}/assets/pic/start.png`,
    search       : `../../..${Config.imagePrifix}/assets/pic/search.png`,
    menuIcon     : `../../..${Config.imagePrifix}/assets/pic/menu-icon.png`
  };

  // 默认的单页条数
  public static pageSize                   = 10;
  public static defaultPage                = 1;
  public static page                       = { [PAGE]: Config.defaultPage, [PAGE_SIZE]: Config.pageSize };
  public static defaultCheckData           = { phone: '', ...Config.page };
  public static defaultDrawData            = { account: '', ...Config.page };
  public static defaultRechargeData        = { account: '', ...Config.page };
  public static defaultExchangeData        = { account: '', ...Config.page };
  public static defaultTransferData        = { phone: '', ...Config.page };
  public static defaultWalletData          = { phone: '', ...Config.page};
  public static defaultData                = { username: '', ...Config.page };
  public static sportInfoData              = { startTime: 19700701, endTime: new Date().getTime(), pageNo: 1};
  public static defaultIncomeData          = { account: '', ...Config.page };
  public static defaultGameIncomeData      = { account: '', ...Config.page };
  public static defaultGameBuyData         = { account: '', ...Config.page };
  public static defaultGameRechageData     = { account: '', ...Config.page };
  public static defaultWbscIncomeData      = { phone: '', ...Config.page };
  public static defaultReplyData           = { userId: '', ...Config.page };
  public static defaultCurrencyData        = { goodsSellerAccount: '', buyerAccount: '', orderId: '', ...Config.page };
  public static defaultCurrencyCheckData   = { goodsSellerAccount: '', buyerAccount: '', orderId: '', ...Config.page };
  public static defaultCurrencyRequestData = { goodsSellerAccount: '', buyerAccount: '', orderId: '', ...Config.page };
  public static defaultCurrencyDoneData    = { goodsSellerAccount: '', buyerAccount: '', orderId: '', ...Config.page };
  public static defaultC2cData             = { expression: '', ...Config.page };
  public static defaultProductData         = { goodsId: '', ...Config.page };
  public static defaultProductOrderData    = { userId: '', ...Config.page };
  public static defaultPropData            = { name: '', ...Config.page };
  public static defaultWealData            = { userId: '', ...Config.page };
  public static defaultMarketData          = { orderNo: '', ...Config.page };
  public static defaultOrderListData       = { id: 0, ...Config.page };
  public static defaultInviterData         = { userId: 0, ...Config.page };
  public static defaultAdminData           = { account: '', ...Config.page };
  public static defaultAccountData         = { phone: '', ...Config.page };
  public static defaultCodeData            = { phone: '', ...Config.page };
  public static defaultAnnounceData        = { ...Config.page };
  public static defaultLineUpData          = { phone: '', ...Config.page };
}
