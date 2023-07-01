class Api{
    #secure;

    constructor(url, method = 'GET'){
        this.url = url;
        this.method = method;
        this.#setSecure();
    }

    isSecure(){
        return this.#secure;
    }

    updateUrl(url){
        this.url = url;
        this.#setSecure();
    }

    #setSecure(){
        this.#secure = this.url.startsWith('https');
    }
}

export default Api;

const s = new Api('http://api.com/api/hello');
console.log(s.isSecure()); // false

s.updateUrl('http://api.com/api/hello');
console.log(s.isSecure) // true

console.log(s.url);
console.log(s.method);
console.log(s.secure); 