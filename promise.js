// var data = new Promise((resolve,reject)=>{
//     let count = 1 + 2
//     if(count == 2){
//       resolve("resolved")
//     }
//     else{
//       reject("reject")
//     }
// })

// data.then((msg)=>{
//   console.log("this is successful " + msg)
// }).catch((msg)=>{
//   console.log("this is unsuccessful "+ msg)
// })


// const myfun = (prom) =>{
//       return new Promise((resolve,reject)=>{
//          document.write("<h1>it is working...</h1>")
//          setTimeout(()=>{
//                  if(prom){
//             resolve()
//           }
//           else{
//             reject()
//           }
//          },3000)
//       })
// }

// myfun(true).then(()=>{
//   document.write("it is SUCCESSFUL")
// }).catch(()=>{
//   document.write("it is unsuccessful")
// })


// const myfun = (a,b) =>{
//         var c = a / b ; 
//     return new Promise((resolve,reject)=>{
//          document.write("<h1>Now fetching your data...</h1>")
//          setTimeout(()=>{
//               if(a,b){
//              resolve("now your answer" + c)
//               }else{
//                 reject("error of this code")
//               }
//          },3000)
//       })
// }

// myfun(9,0).then((result)=>{
//  document.write(result)
// }).catch((error)=>{
//  document.write(error)
// })



// const myfun = () =>{
//       return new Promise((resolve,reject)=>{
//          document.write("<h1>Now fetching your data...</h1>")
//          setTimeout(()=>{
//                 $.get("https://jsonplaceholder.typicode.com/posts",
//                 function(data){
//                     console.log(data)
//                 })
//          },3000)
//       })
// }

// myfun().then((result)=>{
//   console.log(result)
// }).catch((error)=>{
//   console.log(error)
// })
const posts = [
     {title : "post one"},
     {title : "post two"},
     {title : "post three"},
]

 function getpost(post){
      setTimeout(()=>{
          let output =  ''
          for(let i=0; i<posts.length; i++){
                output += '<li>'+ posts[i].title +'</li>'
          }
          document.body.innerHTML = output
     },2000)        
 }

 function createPost(post){
          return new Promise((resolve,reject)=>{
             setTimeout(() =>{
              posts.push(post)
              const  error = true
              if(error){
               resolve();
              }else{
                reject('array is empty now...')
              }
             },1000)
          })
     }

 function del(){
      return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    if(posts.values !== 0){
                   resolve(posts.pop())                        
                    }
                    else{
                         reject('Array is empty now')
                    }
                },2000)
      })
}

 function newPost(startpost){
     console.log(startpost,"hii")
          setTimeout(()=>{
          // let newoutput =  ''
          // for(let i=0; i<posts.length; i++){
          //       newoutput += '<li>'+startpost +'</li>'
          // }
     //     document.getElementById("demo").innerHTML = startpost.title ;
         document.body.innerHTML = startpost.title ;
     },1000)   
     }

 createPost({title:"post four"})
.then(()=>{
   getpost()
   del().then((msg)=>{
       getpost()
        getpost()
        newPost(msg)
        del().then((msg) => {
             getpost()
             getpost()
               newPost(msg)
             del().then(() => {
                  getpost()
                  
                  console.log(posts)
             }).catch((err) => {
                  document.write("array is blank")
             })
             console.log(posts)
        }).catch((err) => {
             document.write("array is blank")
        })
      console.log(posts)
   }).catch((err)=>{
        document.write("array is blank")
   })
})

  




// var output = []
// data.forEach((value,index)=>{
//      output.push(value.title)
//      console.log(output)
  
// })

//  document.write(output)

// function del(){
//      output.forEach((value,index)=>{
//                output.splice(index,1)
//      })
//    console.log("remove",output)
// }

// setTimeout(()=>{
//          del() 
// },2000)


