import web

urls = (
    '/', 'mvc.controllers.index.Index',
)

app = web.application(urls, globals())

if __name__ == "__main__":  # If run as main
    web.config.debug = False  # Debug mode
    app.run()  # Run the application