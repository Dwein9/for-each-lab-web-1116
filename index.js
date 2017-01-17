function iterativeLog(arr) {
  arr.forEach(( element, index )=> {
    console.log(`${index}: ${element}`)
  })
}

function iterate( callback ) {
  var arr = ['here', 'is', 'my', 'array']
  arr.forEach(callback)
  return arr
}

function doToArray( arr, callback) {
  arr.forEach(callback)
}
