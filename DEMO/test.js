setTimeout(function () {
  console.log('2'); 
},0);

setImmediate(function () {
  console.log('1'); 
});
