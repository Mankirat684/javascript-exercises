function getTheTitles(Array){
    let arr=[]
    for(i=0;i<Array.length;i++){
       arr[i] = Array[i][`title`]
    }
console.log(arr)
}
getTheTitles(books)

// Do not edit below this line
module.exports = getTheTitles;
