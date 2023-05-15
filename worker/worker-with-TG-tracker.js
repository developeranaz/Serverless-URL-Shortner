addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))

    fetch('https://api.telegram.org/bot000000000:XXxxxxx-XXXXXXXXXXXXXXXXXxxxxXXXXXXX/sendMessage?chat_id=00000000&text=Someone%20has%20Pinged')
        .catch(error => {
            console.error('Error sending POST request:', error);
        });
})

async function handleRequest(request) {

    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    const urlList = await fetch('https://gist.githubusercontent.com/xxxloperaxxz/3xxx1971d7xxxx72c7axxx85/raw/links.txt')
        .then(response => response.text())
        .then(text => text.split('\n'))
        .catch(error => {
            return new Response(error, { status: 500 })
        });

    const redirectURL = urlList.find(u => u.split(" ")[0] === id);
    if (!redirectURL) {
        return new Response('Invalid ID', { status: 404 });
    }

    return Response.redirect(redirectURL.split(" ")[1], 301);
}