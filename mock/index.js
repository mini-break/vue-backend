import Mock from 'mockjs'
import navlist from './navlist'
import login from './login'
import echarts from './echarts'
import table from './table'
import groupList from './groupList'
import getToken from './getToken'

let data = [].concat(navlist, login, echarts, table, groupList, getToken)

data.forEach(function(res){// 模拟访问路径及数据
    Mock.mock(res.path, res.data)
})

export default Mock
