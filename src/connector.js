const fetch = require('node-fetch');
 
const accessToken = 'c74a4a5f8bdbc1b5a3c987d52cd341d97ce49f89';
const query = `
  query {
    repository(owner:"dougueta", name:"github") {
      issues(starred_url) {
        starred_url
      }
    }
  }`;
 
fetch('https://api.github.com/repos/dougueta/todo-app', {
  method: 'GET',
//   body: JSON.stringify({query}),
  headers: {
    'Authorization': `Bearer ${accessToken}`,
  },
}).then(res => res.text())
  .then(body => console.log(body)) // {"data":{"repository":{"issues":{"totalCount":247}}}}
  .catch(error => console.error(error));