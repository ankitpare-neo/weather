const a = function(a,b,cb){
    cb(a+b)
}
function cb(data){
console.log("------------",data)
}

a(1,2,cb)