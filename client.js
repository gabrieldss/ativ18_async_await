const axios = require('axios').default;

axios.post('http://localhost:3000/books/3', {
    ID: 3,
    name: 'My Boook',
    author: 'Me and only me'
})
    .then((res) => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err.response.data);
    });

axios.post('http://localhost:3000/books/4', {
    ID: 4,
    name: 'My New Boook',
    author: 'Me and only me, not more'
})
    .then((res) => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err.response.data);
    });

axios.get('http://localhost:3000/books')
    .then((response) => {
        console.log(response.data);
    });

axios.get('http://localhost:3000/log')
    .then((response) => {
        console.log(response.data);
    });