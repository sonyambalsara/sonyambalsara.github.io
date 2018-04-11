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
    case '/gallery.html':
      sendFile(res, 'public/gallery.html', 'text/html', 200)
      break
    case '/resume.html':
      sendFile(res, 'public/resume.html', 'text/html', 200)
      break
    case '/media.html':
      sendFile(res, 'public/media.html', 'text/html', 200)
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
    case '/gallery1.jpg':
      sendFile(res, 'public/gallery1.jpg', 'image/jpeg', 200)
      break
    case '/gallery2.jpg':
      sendFile(res, 'public/gallery2.jpg', 'image/jpeg', 200)
      break
    case '/gallery3.jpg':
      sendFile(res, 'public/gallery3.jpg', 'image/jpeg', 200)
      break
    case '/gallery4.jpg':
      sendFile(res, 'public/gallery4.jpg', 'image/jpeg', 200)
      break
    case '/gallery5.jpg':
      sendFile(res, 'public/gallery5.jpg', 'image/jpeg', 200)
      break
    case '/gallery6.jpg':
      sendFile(res, 'public/gallery6.jpg', 'image/jpeg', 200)
      break
    case '/gallery7.jpg':
      sendFile(res, 'public/gallery7.jpg', 'image/jpeg', 200)
      break
    case '/gallery8.jpg':
      sendFile(res, 'public/gallery8.jpg', 'image/jpeg', 200)
      break
    case '/gallery9.jpg':
      sendFile(res, 'public/gallery9.jpg', 'image/jpeg', 200)
      break
    case '/gallery10.jpg':
      sendFile(res, 'public/gallery10.jpg', 'image/jpeg', 200)
      break
    case '/gallery11.jpg':
      sendFile(res, 'public/gallery11.jpg', 'image/jpeg', 200)
      break
    case '/gallery12.jpg':
      sendFile(res, 'public/gallery12.jpg', 'image/jpeg', 200)
      break
    case '/gallery13.jpg':
      sendFile(res, 'public/gallery13.jpg', 'image/jpeg', 200)
      break
    case '/gallery14.jpg':
      sendFile(res, 'public/gallery14.jpg', 'image/jpeg', 200)
      break
    case '/gallery15.jpg':
      sendFile(res, 'public/gallery15.jpg', 'image/jpeg', 200)
      break
    case '/gallery16.jpg':
      sendFile(res, 'public/gallery16.jpg', 'image/jpeg', 200)
      break
    case '/gallery17.jpg':
      sendFile(res, 'public/gallery17.jpg', 'image/jpeg', 200)
      break
    case '/gallery18.jpg':
      sendFile(res, 'public/gallery18.jpg', 'image/jpeg', 200)
      break
    case '/gallery19.jpg':
      sendFile(res, 'public/gallery19.jpg', 'image/jpeg', 200)
      break
    case '/gallery20.jpg':
      sendFile(res, 'public/gallery20.jpg', 'image/jpeg', 200)
      break
    case '/gallery21.jpg':
      sendFile(res, 'public/gallery21.jpg', 'image/jpeg', 200)
      break
    case '/gallery22.jpg':
      sendFile(res, 'public/gallery22.jpg', 'image/jpeg', 200)
      break
    case '/gallery23.jpg':
      sendFile(res, 'public/gallery23.jpg', 'image/jpeg', 200)
      break
    case '/gallery24.jpg':
      sendFile(res, 'public/gallery24.jpg', 'image/jpeg', 200)
      break
    case '/headshot1.jpg':
      sendFile(res, 'public/headshot1.jpg', 'image/jpeg', 200)
      break
    case '/headshot2.jpg':
      sendFile(res, 'public/headshot2.jpg', 'image/jpeg', 200)
      break
    case '/headshot3.jpg':
      sendFile(res, 'public/headshot3.jpg', 'image/jpeg', 200)
      break
    case '/headshot4.jpg':
      sendFile(res, 'public/headshot4.jpg', 'image/jpeg', 200)
      break
    case '/headshot5.jpg':
      sendFile(res, 'public/headshot5.jpg', 'image/jpeg', 200)
      break
    case '/headshot6.jpg':
      sendFile(res, 'public/headshot6.jpg', 'image/jpeg', 200)
      break
    case '/headshot7.jpg':
      sendFile(res, 'public/headshot7.jpg', 'image/jpeg', 200)
      break
    case '/headshot8.jpg':
      sendFile(res, 'public/headshot8.jpg', 'image/jpeg', 200)
      break
    case '/headshot9.jpg':
      sendFile(res, 'public/headshot9.jpg', 'image/jpeg', 200)
      break
    case '/mozartpic.jpg':
      sendFile(res, 'public/mozartpic.jpg', 'image/jpeg', 200)
      break
    case '/mozart.mp4':
      sendFile(res, 'public/mozart.mp4', 'video/mp4', 200)
      break
    case '/resume.pdf':
      sendFile(res, 'public/resume.pdf', 'application/pdf', 200)
      break
    case '/BobbyandJackieandJack.mp3':
      sendFile(res, 'public/BobbyandJackieandJack.mp3', 'audio/mpeg', 200)
      break
    case '/vienna.mp3':
      sendFile(res, 'public/vienna.mp3', 'audio/mpeg', 200)
      break
    case '/android-chrome-192x192.png':
      sendFile(res, 'public/vandroid-chrome-192x192.png', 'image/png', 200)
      break
    case '/android-chrome-512x512.png':
      sendFile(res, 'public/vandroid-chrome-512x512.png', 'image/png', 200)
      break
    case '/apple-touch-icon.png':
      sendFile(res, 'public/apple-touch-icon.png', 'image/png', 200)
      break
    case '/favicon-16x16.png':
      sendFile(res, 'public/favicon-16x16.png', 'image/png', 200)
      break
    case '/favicon.ico':
      sendFile(res, 'public/favicon.ico', 'image/x-icon', 200)
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