const http = require('http')
// req = request(what we receive) res= response(what we send back)
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our homepage')
  }
  if (req.url === '/about') {
    res.end('Here is our short history')
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you're looking for</p>
  <a href="/">BackHome</a>
  `)
})

server.listen(5000)
