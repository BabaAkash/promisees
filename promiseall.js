var promise1 = Promise.resolve("hello word");
var promis2  = 10;
var promise = new Promise((resolve,reject)=>{
      setTimeout(resolve,2000,'goodbye')
});
Promise.all([promise1,promis2,promise]).then((values)=>{
  console.log(values)
})