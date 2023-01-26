addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})


async function handleRequest(request) {
    // Get the unique ID from the request URL
    // This commit is compleatly working fine with minimal fewatures  
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    // Get the list of URLs from the raw text file
    const urlList = await fetch('https://gist.githubusercontent.com/developeranaz/e3ed847f88459106498b615375c2b902/raw')
    .then(response => response.text())
    .then(text => text.split('\n'))
    .catch(error => {
        return new Response(error, { status: 500 })
    })
    // Find the URL associated with the unique ID
    const redirectURL = urlList.find(u => u.split(" ")[0] === id);
    if (!redirectURL) {
        return new Response('Invalid ID', { status: 404 });
    }
    // Redirect to the associated URL
    return new Response('', {
        status: 301,
        headers: { 'Location': redirectURL.split(" ")[1] }
    });
}
