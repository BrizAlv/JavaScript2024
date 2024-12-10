function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      return response.json().then(errData => {
        console.log(errData);
        throw new Error('Something went wrong - server-side.');
      });
    }
  });
}
async function fetchPosts(){
  const responseData = await
  sendHTTPRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
  console.log(responseData);
  const listOfPosts =responseData;
}