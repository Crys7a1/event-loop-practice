// console.log(arguments); // js 的数组

// console.log(require("module").wrapper);

//modile.exports
// const C = require("./test-module-1");
// const calc1 = new C();
// console.log(calc1.add(2, 5));

//exports
// const calc2 = require("./test-module-2");

// console.log(calc2.add(2, 3));

//解构赋值写法
// const { add, multiply } = require("./test-module-2"); //限制访问

// console.log(multiply(2, 3));

//缓存

require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();

// console.log("hello from the modules"); 只运行一次       每次require调用函数不会再次导入module 而是直接从缓存中获取
