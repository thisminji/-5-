const horse = {
  name: "적토마",
  age:13,
  rider: null,
  sayHello: function (){
    console.log("hi My name is "+this.name+" My age is "+this.age);
  }
}


const person={
  name: "아기사자",
  age:13
}

horse.rider=person;

horse.sayHello();