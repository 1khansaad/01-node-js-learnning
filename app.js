const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<header><title>My Form</title></header>");
    res.write(
      "<body><form action='/message' method='post'><input type='text' name='message'><button type='submit'>send</button></input></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY TEXT");
    res.statusCode = 302;
    res.setHeader("location", "/");
    return res.end();
  }
  res.write("<html>");
  res.write("<header><title>My First Web Page</title></header>");
  res.write("<body><h2>hello from node js</h2></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
