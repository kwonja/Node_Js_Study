var bar=10

function foo(){   //완전함수는 함수에서 쓰이는 변수를 기억할수있음
    var bar=0             //클로져 변수

    return function(){     //클로져 함수
        bar++
    console.log(bar)
    }
}
let clouser=foo()
console.log(bar) //함수를 리턴을 해주기때문에 변수를 기억해줘야한다.
clouser()
clouser()
clouser()
clouser()