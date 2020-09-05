const axios = require('axios').default;

(async () => {
    
axios.post('http://localhost:3000/books/3', {
    ID: 3,
    name: 'My Boook',
    author: 'Me and only me'
}),

axios.post('http://localhost:3000/books/4', {
    ID: 4,
    name: 'My New Boook',
    author: 'Me and only me, not more'
}),

axios.get('http://localhost:3000/books'),

axios.get('http://localhost:3000/log')

}).then((res) => {
    console.log(res.data);
})
.catch(err => {
    console.log(err.response.data);
})();