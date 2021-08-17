/*

class Car{
    String m_strname;
    Car(string name)
    {
        this.m_strName=name;
    }
}
*/
function Car(name,speed)
{
    this.name=name
    this.speed=speed

    this.printName=()=>{
        console.log(this.name)
    } //애는 선언될때마다 계속 선언
}
    Car.prototype.printName2=function(){
    console.log(this.name)
}
//프로토타입 코드를 공유하기때문에 한번만 선언해주면 된다
var car1=new Car("bmw",220)  //단순 함수가 아닌 객체생성

car1.printName()
car1.printName()
car1.printName2()
car1.printName2()
car1.printName2()