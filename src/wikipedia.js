class wikipedia{
    constructor(){
        this.api = "https://ru.wikipedia.org"
        this.headers={"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","x-requested-with": "xmlhttprequest"}
    }
    async req(url, data,method="GET"){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: method,
                headers: this.headers,
                body: data
            }).then(res => res.json()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    async get_post(name){
        return (await this.req(`${this.api}/api/rest_v1/page/summary/${name}`));
    }
    async search_post(q,limit){
        return(await this.req(`${this.api}/w/api.php?action=opensearch&format=json&formatversion=2&search=${q}&namespace=0&limit=${limit}`))
    }
}
module.exports = {wikipedia};