const query = require('../db/query')
module.exports = {
    /**
     * @查找该种类的所有餐品
     */
    findGoods: sortId => (query('select * from goods where sortId = ? ', sortId))
}