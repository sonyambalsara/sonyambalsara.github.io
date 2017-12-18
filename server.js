var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'public/index.html', 'text/html', 200)
      break
    case '/index.html':
      sendFile(res, 'public/index.html', 'text/html', 200)
      break
    case '/resume.html':
      sendFile(res, 'public/resume.html', 'text/html', 200)
      break
    case '/photos/index.html':
      sendFile(res, 'public/photos.html', 'text/html', 200)
      break
    case '/about/index.html':
      sendFile(res, 'public/about.html', 'text/html', 200)
      break
    case '/videos/index.html':
      sendFile(res, 'public/videos.html', 'text/html', 200)
      break
    case '/css/style.css':
      sendFile(res, 'public/css/style.css', 'text/css', 200)
      break
    case '/js/scripts.js':
      sendFile(res, 'public/js/scripts.js', 'text/javascript', 200)
      break
    case '/resume.jpg':
      sendFile(res, 'public/resume.jpg', 'image/jpeg', 200)
      break
    default:
      sendFile(res, 'public/404.html', 'text/html', 404)
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

function sendFile(res, filename, type, code) {
  fs.readFile(filename, function(error, content) {
    res.writeHead(code, {'Content-type': type})
    res.end(content, 'utf-8')
  })
}