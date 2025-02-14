import http from './index.js';


// 登录
export const getLogin = function (data) {
    return http('get', '/http/login', data)
}
// 登录
export const getLoginMes = function (data) {
    return http('post', 'http://localhost:54621/user/getLogin', data)
}

// 发现所有用户
export const findAllUser = function (data) {
    return http('get', 'http://localhost:54621/user/findAllUser', data)
}

// 分页查询用户
export const findUserPage = function (data) {
    return http('post', 'http://localhost:54621/user/findUserPage', data)
}

// 添加用户
export const registerUser = function (data) {
    return http('post', 'http://localhost:54621/user/registerUser', data)
}

// 删除用户
export const deleteUser = function (data) {
    return http('post', 'http://localhost:54621/user/deleteUser', data)
}

// 获取路由菜单
export const getRoutesApi = function (data) {
    return http('post', 'http://localhost:54621/route/findAll', {
        tablename: 'routes',
        ...data
    })
}

// // 获取用户菜单
// export const getUsersApi = function (data) {
//     return http('get', '/http/getTable', {
//         tablename: 'user',
//         ...data
//     })
// }

// 新键节点
export const createNewNode = function (data) {
    return http('post', 'http://localhost:54621/singleNode/createNode', data)
}
//清除仿真数据缓存
export const clearCache = function (data) {
    return http('post', 'http://localhost:54621/singleNode/clearCache', data)
}
//查找节点
export const findNodeByAddressId = function (data) {
    return http('post', 'http://localhost:54621/singleNode/findByAddressID', data)
}

//设置节点类型
export const updateNodeType = function (data) {
    return http('post', 'http://localhost:54621/singleNode/setNodeType', data)
}

//查看矿工是否存在
export const findMinExist = function (data) {
    return http('post', 'http://localhost:54621/singleNode/isMiningExist', data)
}

//查找钱包结构
export const findWalletCon = function (data) {
    return http('post', 'http://localhost:54621/wallet/findWalletById', data)
}

//查找区块
export const findBlockByBlockId = function (data) {
    return http('post', 'http://localhost:54621/singleBlock/findByBlockId', data)
}

//删除节点
export const deleteNode = function (data) {
    return http('post', 'http://localhost:54621/singleNode/deleteNode', data)
}

//创建交易
export const TransactionSingle = function (data) {
    return http('post', 'http://localhost:54621/transSingle/createTrans', data)
}

//创建交易
export const getUnconfirmed = function (data) {
    return http('post', 'http://localhost:54621/transSingle/getAllUnConfirmedTrans', data)
}

//通过ID列表查询所有交易
export const FindTransListBYid = function (data) {
    return http('post', 'http://localhost:54621/transSingle/findTransListBYid', data)
}


//获取当前账本拥有者
export const findpresentMin = function (data) {
    return http('post', 'http://localhost:54621/singleBlock/findpresentMin', data)
}
// 新键区块
export const createNewBlock = function (data) {
    return http('post', 'http://localhost:54621/singleBlock/createBlock', data)
}

// 每次创建节点后会进行区块链网络构建
export const addP2pNet = function (data) {
    return http('post', 'http://localhost:54621/p2pNetwork/addP2pNet', data)
}


// 获取所有区块链网络结构
export const getAllNetWork = function (data) {
    return http('post', 'http://localhost:54621/p2pNetwork/getAllNetWork', data)
}

// 获取到所以矿工节点
export const getAllMiner = function (data) {
    return http('post', 'http://localhost:54621/singleNode/getAllMiner', data)
}

//查询10个以内未确定交易
export const getNewBlockDif = function (data) {
    return http('post', 'http://localhost:54621/singleBlock/getNewBlockDif', data)
}

//创建分叉区块
export const createBifurcatedChain = function (data) {
    return http('post', 'http://localhost:54621/singleBlock/createBifurcatedChain', data)
}


//通过ID交易详情
export const findTransCon = function (data) {
    return http('post', 'http://localhost:54621/transSingle/findTransId', data)
}
//获取交易输入信息
export const findTXInput = function (data) {
    return http('post', 'http://localhost:54621/txInput/findTXInput', data)
}

//获取交易输出信息
export const findTXOutput = function (data) {
    return http('post', 'http://localhost:54621/txOutput/findTxOutput', data)
}


//登出
export const loginOut = function (data) {
    return http('post', 'http://localhost:54621/user/loginOut', data)
}


//判断用户是否需要引导，默认每个用户只需要引导一次
export const needGuide = function (data) {
    return http('post', 'http://localhost:54621/user/needGuide', data)
}


//检查登录状态
export const checkLoginStatus = function (data) {
    return http('post', 'http://localhost:54621/user/checkLogin', data)
}

//查询 数据
export const findSearchUserPage = function (data) {
    return http('post', 'http://localhost:54621/user/findSearchUserPage', data)
}

//重置用户
export const resetPasswords = function (data) {
    return http('post', 'http://localhost:54621/user/resetPasswords', data)
}

//检查登录状态
export const checkExistCache = function (data) {
    return http('post', 'http://localhost:54621/singleNode/isExistCache', data)
}

//查找可以全节点
export const findFullNodeToEnquire = function (data) {
    return http('post', 'http://localhost:54621/singleNode/findFullNodeToEnquire', data)
}

//设置矿工节点算力
export const setMinerHashRate = function (data) {
    return http('post', 'http://localhost:54621/singleNode/setHashRates', data)
}


//调整当前仿真交易费比例
export const editRewardPre = function (data) {
    return http('post', 'http://localhost:54621/singleReward/editReward', data)
}

//账户创建
export const createAccount = function (data) {
    return http('post', 'http://localhost:54621/singleAccount/createAccount', data)
}

//账户删除
export const deleteAccount = function (data) {
    return http('post', 'http://localhost:54621/singleAccount/deleteAccount', data)
}

//查找所有账户
export const findAllAccountList = function (data) {
    return http('post', 'http://localhost:54621/singleAccount/findAllAccount', data)
}
//查找节点下账户列表
export const findAccountList = function (data) {
    return http('post', 'http://localhost:54621/singleAccount/findAccountList', data)
}

//查找节点下账户列表
export const insertToVisitor = function (data) {
    return http('post', 'http://localhost:54621/logMesData/insertToVisitor', data)
}

//查找节点下账户列表
export const getLogMesData = function (data) {
    return http('post', 'http://localhost:54621/logMesData/getLogMesDatas', data)
}

//Modify network parameters in manual mode.
export const manualP2pNetModift = function (data) {
    return http('post', 'http://localhost:54621/p2pNetwork/manualSetP2pNet', data)
}




//查找用户所有日志信息
export const findUserLogMes = function (data) {
    return http('post', 'http://localhost:54621/user/findUserLogMes', data)
}
//修改单流程节点地域
export const changeNodeRegion = function (data) {
    return http('post', 'http://localhost:54621/singleNode/changeNodeRegion', data)
}

/*
 * 全流程相关接口
 */
//初始配置全流程仿真参数
export const configWholeSettingData = function (data) {
    return http('post', 'http://localhost:54621/wholeSim/configSimData', data)
}

//初始配置全流程仿真参数,大量级仿真通道
export const configWholeSettingBigData = function (data) {
    return http('post', 'http://localhost:8086/wholeSim/configSimData', data)
}

//仿真结束或者终止进行数据配置
export const configWholeSettingEndData = function (data) {
    return http('post', 'http://localhost:54621/wholeSim/configSimEndData', data)
}

//初始配置全流程节点基本内容
export const configWholeNodeData = function (data) {
    return http('post', 'http://localhost:54621/wholeNode/configWholeNodeData', data)
}

//初始配置全流程节点基本内容
export const configWholeBlockMes = function (data) {
    return http('post', 'http://localhost:54621/wholeBlock/configWholeBlockMes', data)
}


//工单提交页
export const insertToBugOrder = function (data) {
    return http('post', 'http://localhost:54621/bugOrder/insertToBugOrder', data)
}

//仿真信息获取页
export const getConfigSimData = function (data) {
    return http('post', 'http://localhost:54621/wholeSim/getConfigSimData', data)
}

// 获取权限菜单
export const getRolesApi = function (data) {
    return http('get', '/http/getTable', {
        tablename: 'role',
        ...data
    })
}

//teamAgent sim api list1
export const configWholeSettingDataTeam = function (data) {
    return http('post', 'http://localhost:8082/wholeSim/configSimData', data)
}


export const configWholeNodeDataTeam = function (data) {
    return http('post', 'http://localhost:8082/wholeNode/configWholeNodeData', data)
}

//仿真结束或者终止进行数据配置
export const configWholeSettingEndDataTeam = function (data) {
    return http('post', 'http://localhost:8082/wholeSim/configSimEndData', data)
}

//初始配置全流程节点基本内容
export const configWholeBlockMesTeam = function (data) {
    return http('post', 'http://localhost:8082/wholeBlock/configWholeBlockMes', data)
}

//仿真信息获取页
export const getConfigSimDataTeam = function (data) {
    return http('post', 'http://localhost:8082/wholeSim/getConfigSimData', data)
}

//查看当前用户正在进行的仿真
export const getUserisOnSimState = function (data) {
    return http('post', 'http://localhost:8082/wholeSim/getUserisOnSimState', data)
}

//返回继续仿真的相关参数，相关仿真数据，最近的仿真行为记录（10条），仿真团队的 用户数据以及用户在线状态
export const getUserTeamSimAgain = function (data) {
    return http('post', 'http://localhost:8082/wholeSim/getUserTeamSimAgain', data)
}