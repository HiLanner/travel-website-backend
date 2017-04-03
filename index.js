var express = require('express')
var app = express()

// app.get('/',function (req,res) {
//     res.send('hello, word')
// });
//
// app.get('/users/:name',function (req,res) {
//     res.send('hello' + req.params.name)
// })

app.use(function (req,res,next) {
    console.log('1')
    next()
})

app.use(function (req,res,next) {
    console.log('2')
    res.status(200).end()
})

// 错误处理
app.use(function (err,req,res,next) {
    console.error(err.stack)
    res.status(500).send('something broke!')
})

app.listen(3000,function () {
    console.log('the server has been listen at 3000')
});