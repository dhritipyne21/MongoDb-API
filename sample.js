// function add(a,b,cbfn) {
//     cbfn(a+b)
//     const d=a+b;
//     if(d > 100) 
//         cbfn('pass smaller numbers to add');
//         else 
//                 cbfn(undefined,d)
        
// }

// add(2,3, function(error,data){
//     if(error)
//         console.error(error);
//     else
//         console.log(data);
  
// })
// const pr=new Promise(function(resolve,reject){
//     if(true)
//     resolve('All Works');
//     else
//     reject('fail')
// })

// pr.then(()=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })


function add(a,b,cbfn){
    const d=a+b;
    if(d>100){
        //failure
        cbfn('pass smaller numbers to add')
    }else{
    //success
    cbfn(undefined,d)
    }
}

add(20,3,function(error,data){
    if(error)
    {
        console.log(error)
    }
    else
    console.log(data)
})

// Promise

const pr = new Promise(function(resolve,reject){
    //success
    if(true)
        resolve('All Works')
    //failure
    else
        reject('Nothing Works')
})

// pr.then((data)=>{},(error)=>{});

pr.then((data)=>{
    console.log('success: '+data)
}).catch((error)=>{
    console.log('Error: '+error)
})

function addPromise(a,b){
    return new Promise((resolve,reject)=>{
        const d=a+b;
        setTimeout(()=>{
            if(d>100) {
                //failure
                reject('pass smaller numbers to add')
            }else{
            //success
            //cbfn(undefined,d)
            resolve(d)
            }
        },2000)
       
    })
} 
    addPromise(270,3)
        .then((data)=>{
            console.log(data)
        })
        .catch((error)=>{
        console.error(error)
    });