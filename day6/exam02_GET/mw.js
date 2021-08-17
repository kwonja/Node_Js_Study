const logger = ((req,res,next)=>{
    console.log(req.method,req.url,new Date())  //경로,횟수,날짜
    next() //미들웨어엣 넘어가게 해준다.
})
const autho = ((req,res,next)=>{
    console.log(req.method,req.url,new Date())  //경로,횟수,날짜
    next() //미들웨어엣 넘어가게 해준다.
})
const test_mw1 = ((req,res,next)=>{
    console.log(req.method,req.url,new Date())  //경로,횟수,날짜
    console.log('test1');
    next() //미들웨어엣 넘어가게 해준다.
})
const test_mw2 = ((req,res,next)=>{
    console.log(req.method,req.url,new Date())  //경로,횟수,날짜
    console.log('test2');
    next() //미들웨어엣 넘어가게 해준다.
})

export{logger,autho,test_mw1,test_mw2}