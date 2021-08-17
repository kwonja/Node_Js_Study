import express from 'express'
import dotenv from 'dotenv'
import {logger,autho,test_mw1,test_mw2} from './mw.js'
dotenv.config()
const app=express()
//req->[middle ware]->res
app.use//그냥 미들웨어 get보다 먼저 선언된다.
((req,res,next)=>{
    console.log(req.method,req.url,new Date())  //경로,횟수,날짜
    next() //미들웨어엣 넘어가게 해준다.
})

//app.use(logger)
//app.use(autho)  //전역스코프
app.use(logger,autho)  //배열로 다수 넘기기
app.use('/home',[test_mw1]) //홈영역에만 적용되는 스코프
app.use('/about',test_mw2) //about 스코프에만 적용
//path명 생략시 전역변수 사용

app.use((req,res,next)=>{
    if(req.query.apikey == 'qwer'){

        next()
    }
    else{
        res.send('인증이 필요합니다')
    }
})

app.get('/home',(req,res)=>{
    res.send('<h1>홈</h1>')
})
app.get('/home/welcome',(req,res)=>{
    res.send('<h1>welcome</h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h1>어바웃</h1>')
})
//use 쓰지 않고 직접 미들웨어 등록하기 (get으로)
app.get('/blog',
    [(req, res, next) => { //미들웨어 임배딩 
        console.log('blog middle ware')
        next()
    }],
    (req, res) => { //콜백 
        res.send('<h1> blog </h1>')
    })


app.listen(process.env.PORT,()=>{
    console.log(`server start at : ${process.env.PORT}`)
})
