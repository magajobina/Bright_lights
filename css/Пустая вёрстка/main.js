class Qwe {
  static #stat = "private string";

  static get qweee() {
    console.log(this.#stat);
  }

  static set qweee(ewq) {
    this.#stat = ewq;
    // console.log(this.#stat);
  }

  constructor() {
    this.poop = "Done";
  }

  logSomething() {
    console.log("Inside method");
  }
}

Qwe.prototype.qwe = "private string";

console.log(Qwe);











const obj1 = {
  a: 5,
  log: function () {
    console.log(this.a);
  },
};

const logger = obj1.log;

logger()

