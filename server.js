var express = require('express');
const path = require('path');
var Analytics = require('analytics-node');

var analytics = new Analytics('GxLSp3aFdiRvJGwDR7K8wIFH1aSCNvP7');

const {BetaAnalyticsDataClient} = require('@google-analytics/data');
const analyticsDataClient = new BetaAnalyticsDataClient();

let propertyId = '342217427';

var app = express();

// sendFile will go here
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'));
//   });


  app.get('/coconclean?id=NDc=', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
  
  app.get('/Cinarra?id=NDY=', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
  // sendFile will go here
app.get('/index1', function(req, res) {
  res.sendFile(path.join(__dirname, '/index-1.html'));
});

app.get('/home', function (req, res) {
    const { query, cookies, url, path, ip } = req

   // runReport();
//   analytics.page({
//     userId: '019mr8mf4r',
//     category: 'Docs',
//     name: 'Home',
//     properties: {
//       url: url,
//       path: path,
//       title: 'Node.js Library - Segment',
//     }
//   });
  
   res.send('Home Page');
})

app.get('/service', function (req, res) {
    const { query, cookies, url, path, ip } = req

  analytics.page({
    userId: '019mr8mf4r',
    category: 'Docs',
    name: 'Service',
    properties: {
      url: url,
      path: path,
      title: 'Node.js Library - Segment',
    }
  });
  
   res.send('Service Page');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

  