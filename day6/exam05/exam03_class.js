class Car{
    constructor(name,speed)
    {
        this.name=name
        this.speed=speed
        this.printName2=()=>{
            console.log(this.speed)
        }
    }
    printName(){
        console.log(this.name)
    }

}

var car1=new Car('bmw',100)

car1.printName2()