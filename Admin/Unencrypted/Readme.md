
# ⚠️Caution⚠️
This HTML file is only intended to be used on the localhost or by opening it locally via a web browser. Serving this webpage publicly is not recommended as it can lead to the exposure of both the HTML and your access tokens.
# Cloudflare URL Shortener Admin Panel

This is a simple admin panel for Cloudflare's URL shortener service. The panel allows you to manage shortened URLs through a user-friendly interface.

## How to use

To use the admin panel, follow these steps:

1. Download the HTML file to your local directory or copy the contents and paste them into your code editor. Save the file with the `.html` extension.

2. In the HTML file, update the following values to match your own setup:

```
const GIST_ID = '1xxx1x1x1x1x1x1x1x1';
const FILE_NAME = 'your-gist-filename.txt';
const GITHUB_TOKEN = 'ghp_XxXxxXXXxXX7XCcCK';
```

`GIST_ID`: The ID of your Gist file where the short URLs are stored
`FILE_NAME`: The name of the file within the Gist where the short URLs are stored
`GITHUB_TOKEN`: A personal access token with the necessary permissions to access your Gist file
Once you have updated the values, you can open the HTML file in your web browser to access the admin panel.
