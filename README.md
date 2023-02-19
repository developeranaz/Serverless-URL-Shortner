# Serverless-URL-Shortner
Serverless URL shortener based on raw text link via cloudflare workers
# URL Redirector

This JavaScript script uses the Fetch API and the `addEventListener` function to handle a request event and redirect the user to a specific URL based on a unique ID passed in the request URL.

## How it works

1. The script listens for a `fetch` event using the `addEventListener` function and calls the `handleRequest` function when the event is triggered. The request object is passed to the `handleRequest` function as an argument.

2. The `handleRequest` function extracts the unique ID from the request URL by creating a new `URL` object and using the `searchParams.get()` method.

3. Next, the function fetches a raw text file containing a list of URLs and splits the text into an array of strings, one for each line. 

4. The function then uses the `Array.prototype.find()` method to find the URL associated with the unique ID from the above array.

5. If the ID is not found, the function returns a new Response object with a status code of 404 and a message "Invalid ID"

6. If the ID is found, the function redirects the user to the associated URL by returning a new Response object with a status code of 301 and a `Location` header set to the URL associated with the ID.

## Example

For example, if the raw text file contains the following URLs:

```
abc123 https://example1.com
def456 https://example2.com
ghi789 https://example3.com
```


and a request is made to `https://example.com?id=abc123`, the script will redirect the user to `https://example1.com`.

## TODO and Limitations
I have not yet created an encrypted admin page for the URL shortener to add or remove shortened links. I will make it later. For now, please edit your raw text URL in your hosted location. I have used a raw Gist GitHub link, which can be edited later using our GitHub account. I am not aware of any security issues or disadvantages for this project, as using Gist GitHub or personal GitHub may have some rate limits. You can customize this to meet your own needs. I made this project for personal use.
