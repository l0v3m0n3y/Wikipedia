# Wikipedia
JavaScript library for wikipedia.org
# main
```js
const {wikipedia} = require('./wikipedia');

const wiki = new wikipedia();
wiki.search_post("qwery",10).then(info => {
    console.log(info);
}).catch(error => {
    console.error('Error:', error);
});
```
