var data = {
    'login': '@boolean',// boolean值
    'captcha': "@image('100x40', '#FFFFFF', '@word')",
    'message': '这里是登录提交后错误提示信息@increment',
    'uid': '@id',
    'name': '@cname',//中文名称
    'token': '@guid'
}

export default [{
    path: '/login',
    data: data
}]
