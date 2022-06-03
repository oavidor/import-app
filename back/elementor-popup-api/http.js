export class Http {
    static fetchData(url, data = {}) {
        return new Promise((resolve, reject) => {
            const HTTP = new XMLHttpRequest();
            HTTP.open('GET', url);
            HTTP.onreadystatechange = function() {
                if (HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200) {
                    const RESPONSE_DATA = JSON.parse(HTTP.responseText);
                    resolve(RESPONSE_DATA);
                } else if (HTTP.readyState == XMLHttpRequest.DONE) {
                    console.log('jo'); //todo-ortal remove
                    reject('Something went wrong');
                }
            };
            HTTP.send(data);
        });
    }
}