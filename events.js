// const EventEmitter = require("events");

// const myEmitter = new EventEmitter();

// 观察者模式

// myEmitter.on("newSale", () => {
//   事件监听1 观察者1，观察发射器
//   console.log("there wa a new sale!");
// });
// myEmitter.on("newSale", () => {
//   事件监听2 观察者2，观察发射器
//   console.log("costumer name:Jonas");
// });
// myEmitter.on("newSale", (stock) => {
//   console.log(`there are now ${stock} items left in stock`);
// });
// myEmitter.emit("newSale", 9);
// 事件发射,发出事件的对象

const http = require("http");
const EventEmitter = require("events");

class Sales extends EventEmitter {
  //类继承   EventEmitter是导入的一个类 ， Sales是创建的一个新类，继承一切来自EventEmitter类
  constructor() {
    //一旦从一个类中创建一个对象 每个类都有一个构造函数
    super(); //调用super  访问父类的所有方法     Sale是父类  EventEmitter是超类
  }
}

const myEmitter = new Sales();
//观察者模式

myEmitter.on("newSale", () => {
  //事件监听1 观察者1，观察发射器
  console.log("there wa a new sale!");
});
myEmitter.on("newSale", () => {
  //事件监听2 观察者2，观察发射器
  console.log("costumer name:Jonas");
});
myEmitter.on("newSale", (stock) => {
  console.log(`there are now ${stock} items left in stock`);
});
myEmitter.emit("newSale", 9); //事件发射,发出事件的对象

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request received!");
  res.end("resquest received!");
});
server.on("request", (req, res) => {
  // console.log("request received!");
  res.end("another resquest received!");
});

server.on("close", () => {
  console.log("server closed!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for requests...");
});

//为什么不关闭 ，等待传入的IO
//一旦有url请求 服务器会自动发出请求对象
//发出两次请求是因为有个/和/fvico
