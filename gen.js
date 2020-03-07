let gen = function* (n) {
    for(var i = 0;i<3;i++){
        n++

        yield n //yied 暂停 返回结果 ，保留上一次结果
    }
}

var genObj = gen(2) //保留了上一次结果 使用next才会继续调用下一次，从上次的结果开始

console.log(genObj.next()) //3
console.log(genObj.next()) //3
console.log(genObj.next())
console.log(genObj.next())