const updateJsonFile = require('update-json-file')

const filePath = '/Users/graceike/Documents/Personal/dummy-people-info/buildScripts/db.json'
const options = { defaultValue: {} }

updateJsonFile(filePath, (data) => {
  for (i in data.results) {
    console.log(data.results[i])
    for (k = 1; k < 100; k++) {
      return Object.assign({}, data.results[i], {
        id: k
      })
    }
  }
  // not safe to return `data`, need to return a modified clone

}, options)
// var fs = require('fs');

// var data = {}
// data.table = []
// for (i=1; i <26 ; i++){
//    var obj = {
//        id: i
//    }
//    data.table.push(obj)
// }
// fs.writeFile ("input.json", JSON.stringify(data), function(err) {
//     if (err) throw err;
//     console.log('complete');
//     }
// );