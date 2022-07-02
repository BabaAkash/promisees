// const posts =[    
//    {title:'post one',
//     body:'this is post one',
//     createAt: new Date().getTime()
//    }, 
//    {title:'post two',
//     body:'this is post two',
//     createAt: new Date().getTime()
//    }
//    ]

//    function getpost()
//          {   
//             setTimeout(()=>{
//                let output =''
//                   for(var i=0; i<posts.length; i++){
//                   output +=`<li>${posts[i].title} - update time ${(new Date().getTime() - posts[i].createAt)/1000 } second </li>`    
//                   }    
//                document.body.innerHTML=output;   
//                },1000)
//          }

//          function creatpost(post, callback){
//          setTimeout(()=>{
//          posts.push({...post, createAt: new Date().getTime() })  
//          callback()  },2000)  
//       }

//          creatpost({title:'three post', body:'this is post three'},getpost)
//          function create4thPost (post, callback)
//           { 
//          setTimeout(()=>{ 
//          posts.push({...post, createAt: new Date().getTime() })
//          callback() 
//        },4000)}create4thPost({title:'Post Four', body:'this is post Four'},getpost)












   // const posts = [
   //   {name:"akash yadav",
   //    age : 25,
   //    address : "naisadak",
   //   },
   //   {name:"Nilesh",
   //    age : 26,
   //    address : "pune",
   //   }
   // ]
    
   //  function getPost(){
   // setTimeout(() => {
   //    var output = ""
   //    posts.forEach((value,index)=>{
   //       output += '<li>' + value.name + '</li>'
   //    })
   //   document.body.innerHTML = output
   //   console.log("second")
   // },1000)
   //  }

   // function createPost(post,callback){
   //    setTimeout(function(){
   //            posts.push(post)  
   //              callback() 
   //              console.log("first")
   //    },3000)
   // }

   // createPost({name:"Shubham Pandey",age:20},getPost)
   

  