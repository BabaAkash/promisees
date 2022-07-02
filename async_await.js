console.log('person1 :  show ticket');
console.log('person2 :  show ticket ');

const posts =  [
    {title: 'Post one'  , body: 'this is post one'},
    {title: 'post two'  ,body: 'this is post two'}
]

const premovie = async () => {
    
    const promisewifebringigtickets = new Promise((resolve , reject) =>{
        setTimeout(() => resolve(`ticket`) , 2000 ) ;

    })

    const getpopcorn = new Promise((resolve , reject)  =>  resolve(`popcorn`));

    const getbutteronit  = new Promise((resolve , reject)  => resolve(`butter`)) ;

    const  getsomecolddrink = new Promise ((resolve , reject)  => resolve(`Cold drink`))

    let ticket = await promisewifebringigtickets ;
    console.log('wife  :  I have tickets')
    console.log('husband : lets go in') ;
    console.log('wife : NO!  I am hungry') ;


    let popcorn = await getpopcorn ;
    console.log('husband : i got some popcorn');
    console.log('husband : we should go in') ;
    console.log('wife : I want some butter on it ') ;

    let butter = await getbutteronit ;
    console.log("husband  : see I got butter topings")
    console.log("husband : we should go in")
    console.log("NO , last thing I am feeling thirsty pls bring COldDrink") ;
    
    let coldrink= await getsomecolddrink ;

    console.log("husband : this is colddrink") ;
    console.log("wife : let go in we are getting late")
    console.log("OK!  you get to know we are in thrature")    
    
    return ticket ;


}

premovie().then((m) =>  console.log(`person3: shows   ${m}`)) ;
console.log('person4 :  show ticket')
console.log('person5 : show ticket ')


// const posts =  [
//     {title: 'Post one' , body: 'this is post one'},
//     {title: 'post two'  ,body: 'this is post two'}
    
// ]



//  const posts =  [
//      {title: 'Post one' , body: 'this is post one'},
//      {title: 'post two'  ,body: 'this is post two'}
    
//  ]


//  function createpost(post){
//      return new Promise((resolve , reject) => {
//          setTimeout(() => {
//              posts.push(post) ;
//              resolve(posts) ;
            
//          }, 2000);
//      }) 
//  }
//  function del()
//  {
//  return new Promise((resolve,reject) =>{
//      setTimeout(() => {
//          if(posts.length!=0){
//              let deleted_post = posts.pop() 
//              resolve(deleted_post);
//          }
//          else{
//              reject();
//          }
//      }, 0);
//  })
//  }
 //const fifthpost = createpost({ title : "post six"   , body : " he is good"}) 



 const  cd = async() => {
     const posts = await  createpost({title : "fifth post"   ,  body : "he is goog"})
     console.log(posts);
     const del_post = await del()
      console.log(del_post);     

 }
 cd() ;