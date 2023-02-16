
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


## Creating a Gist Link

To create a Gist link, follow these steps:

1. Create a GitHub account if you don't already have one.
2. Go to gist.github.com in your web browser.
3. Click the "New gist" button in the top-right corner of the page.
4. In the "Filename" field, enter a unique filename for your Gist.
5. In the "Add file" field, enter any text you like on the first line.
6. Click the "Create public gist" button at the bottom of the page.
7. Once the Gist is created, copy the URL of the page and save it for later.
8. In your HTML file, replace the file name, Gist ID, and URL as needed.

## Obtaining a GitHub Token with Only Gist Access

To obtain a GitHub token with only Gist access, follow these steps:

1. Log in to your GitHub account.
2. Go to the "Settings" page for your account.
3. Click the "Developer settings" link in the sidebar.
4. Click the "Personal access tokens" link in the sidebar.
5. Click the "Generate new token" button.
6. In the "Note" field, enter a description for the token (e.g., "Gist access token").
7. Under "Select scopes", click the checkbox next to "gist".
8. Click the "Generate token" button at the bottom of the page.
9. Copy the token that is displayed on the screen and use it as needed in your code.
