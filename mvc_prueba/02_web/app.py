import web  # web.py library

urls = (
    "/", "mvc.controllers.index.Index",
)

app = web.application(urls, globals())  # Instantiate the application

if __name__ == "__main__":  # If run as main
    web.config.debug = False  # Debug mode
    app.run()  # Run the application