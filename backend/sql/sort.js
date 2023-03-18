const query = require('../db/query')

const SORT = {
    /**
     * @获取食堂下所有的分类
     */
    findAllSort: canteenId => (query('select * from sort where canteenId = ? order by weight ASC', canteenId))
}

module.exports = SORT