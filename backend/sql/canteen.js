const query = require('../db/query')

module.exports = {
    /**
     * @查找食堂信息
     */
    findCanteen: canteenId =>
        (query(`select * from v_canteen_list ${canteenId ? 'where id = '+ canteenId : ''}`))
}