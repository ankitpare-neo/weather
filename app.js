// const request = require('request');
// const url = "https://api.darksky.net/forecast/daaf656451920a2cefaf688289267b97/37.8267,-122.4233?units=si";

// request({url:url},(err, res)=>{
//   console.log(JSON.parse(res.body));
// })

const add = (a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },2000)
}


add(1,2,(sum)=>{
    console.log(sum);
})


