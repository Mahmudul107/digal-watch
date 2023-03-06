


const getData = new Promise ((resolve,reject) =>{
    const number = Math.random()*10
    console.log(number)
    if(number < 5){
        resolve(7548);
    }
    else{
        reject('no data available')
    }
})

getData
    .then(data => console.log(data + 22))
    .catch( err => console.error('err', err))
