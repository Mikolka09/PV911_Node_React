const http = require("http"); //using is C#
const os = require("os");

http.createServer(function (request, response ){

    console.log(request.url);
response.write("<h1>Hello World</h1>");
response.write("<p>User name in my OS: ");
response.write(os.userInfo().username);
response.write("</p>");
response.end();
}).listen(3000);

