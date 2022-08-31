
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let arr=input[1].trim().split(" ").map(Number)
    var left=0;
    var right=N-1
    mergeSort(arr,left,right)
    console.log(arr.join(" "))
}
function mergeSort(arr,left,right){
    if(left>=right){
        return
    }
   let middle=Math.floor((left+right)/2)
   mergeSort(arr,left,middle)
   mergeSort(arr,middle+1,right)
   mergeTheArr(arr,left,right,middle)
}
function mergeTheArr(arr,left,right,mid){
    let arr1=[]
    let arr2=[]
    let i=0;
    let j=0
    let curr=left
    for(let a=left;a<=mid;a++){
        arr1.push(arr[a])
    }
    for(let a=mid+1;a<=right;a++){
        arr2.push(arr[a])
    }

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            arr[curr]=arr1[i]
            i++
        }
        else{
            arr[curr]=arr2[j]
            j++
        }
        curr++
    }
    while(i<arr1.length){
        arr[curr]=arr1[i]
        i++
        curr++
    }
    while(j<arr2.length){
        arr[curr]=arr2[j]
        j++
        curr++
    }
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