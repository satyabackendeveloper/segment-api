const axios = require('axios');
var Analytics = require('analytics-node');

var analytics = new Analytics('GxLSp3aFdiRvJGwDR7K8wIFH1aSCNvP7');

async function doGetRequest() {

//   let res = await axios.get('http://webcode.me');

//   let data = res.data;
//   console.log(data);

  let res1 =  analytics.page({
    userId: '019mr8mf4r',
    "type": "page",
    "name": "Home",
    "properties": {
      "title": "Welcome | Initech",
      "url": "https://athulyatech.com"
    }
  
    });

    console.log(res1);

}


var analytics = new Analytics('YOUR_WRITE_KEY', {
    host: "https://events.eu1.segmentapis.com"
  });
doGetRequest();