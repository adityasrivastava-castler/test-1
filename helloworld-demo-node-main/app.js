const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(`
          ##         .
    ## ## ##        ==
 ## ## ## ## ##    ===
/""""""""""""""""\\___/ ===
{                       /  ===-
\\______ O           __/
 \\    \\         __/
  \\____\\_______/

// adding comments
// for dev branch
// just added comment to check if cron job is working
Hello from Docker!
`);
  res.end();
});

server.listen(8080, () => {
  console.log('Server started!');
});
