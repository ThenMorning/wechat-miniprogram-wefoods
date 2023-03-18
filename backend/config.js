/**
 *  后台配置文件
 */
module.exports = {
    // TODO
    // 不修改，前端部分固定了port

    port: 8086,

    // 静态文件
    staticPath: './static',

    // 微信小程序配置
    // 用于登录请求
    customer: {
        appid: 'wx1bf6861212610fd5',
        appsecret: '4859d40ed04842594d76f3fc07a8abd5'
    }, 

    // 数据库设置
    database: {       
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'app'
    }
}