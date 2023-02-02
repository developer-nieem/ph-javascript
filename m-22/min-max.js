/* 
function getMax(nila, dila, mila) {
  if (nila > dila && dila > mila) {
    console.log("nila will get cake");
  } else if (dila > nila && dila > mila) {
    console.log("dila will get cake");
  } else {
    console.log("mila will get cake");
  }
}
 */


// function getMax(nila, dila, mila) {
//     var cake = Math.max(nila, dila , mila)
//     console.log(cake);
    
//   }
  
// getMax(67, 97, 99);

function getMax(nila, dila, mila) {
    var cake = Math.min(nila, dila , mila)
    console.log(cake);
    
  }
  
getMax(67, 97, 99);
