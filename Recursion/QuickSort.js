
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let arr=input[1].trim().split(" ").map(Number)
    var left=0;
    var right=N-1
    quickSort(arr,left,right)
    console.log(arr.join(" "))
}
function quickSort(arr,left,right){
    if(left>=right){
        return 
    }
    let index=Partion(arr,left,right)
    quickSort(arr,index+1,right)
    quickSort(arr,left,index-1)
}
function Partion(arr,left,right){
    let i=left
    let j=right
    let pivot=arr[left]
    while(i<j){
      while(arr[i]<=pivot && i<right){
        i++
      }
      while(arr[j]>=pivot && j>left){
        j--
      }
      if(i<j){
        swap(arr,i,j)
      }
    }
    swap(arr,left,j)
    return j
}
function swap(arr,i,j){
  let temp=arr[i]
  arr[i]=arr[j]
  arr[j]=temp
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5
  3 5 0 9 8`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}