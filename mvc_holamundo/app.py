import http.server
import socketserver

PORT = 8000

class MVCHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = 'views/index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), MVCHandler) as httpd:
        print(f"Servidor corriendo en http://localhost:{PORT}")
        httpd.serve_forever()
