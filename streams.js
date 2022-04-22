const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //solution 1
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  //solution 2 streams  背压，无法像接受数据一样快地发送数据
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk); //将每一条数据发送到该流中 chunk by chunk
  //   });
  //   readable.on("end", () => {
  //     res.end();  //     already finished
  //   });

  //   另一个在可读流可以监听的事件 错误事件

  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("file not found");
  //   });
  //solution 3 管道自动处理数据进出的速度
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  //工作原理 readableSource.pipe(writeableDest)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening");
}); //启动服务器
