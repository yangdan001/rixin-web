//项目中的过滤器都定义在此文件中，统一管理
//下面是已经定义好的两个例子
const filterFun1 = function(val,parms1,parms2) {
    return val+parms1+parms2;//默认第一个参数就是默认要过滤的那个值
};
const filterFun2 = function(val) {
    return '人物介绍：'+val;
}
export {
    filterFun1,
    filterFun2
}