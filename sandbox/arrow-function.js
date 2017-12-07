var square = (x) => x*x; //no need of return
console.log(square(9));

var user = {
  name: 'Vattghern',
  sayHi: () => {
    console.log(`Hello I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(`Hello I'm ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt();
