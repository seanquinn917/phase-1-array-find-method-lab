// function superbowlWin (array){
//     for(let item of array){
//         if(item.result === "W"){
//             return item.year
//         }
//    }
// }

function superbowlWin(record){
let obj = record.find((item)=>{
    if(item.result === "W"){
        return item
    }
})
  if(obj){

   return obj.year}
}


