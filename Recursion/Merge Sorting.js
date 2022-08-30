
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
    if(left==right){
        return 
    }
    let mid=Math.floor(arr.length/2)
    mergeSort(arr,left,right)
    mergeSort(arr,mid+1,right)
    mergeTheArr(arr,left,right,mid)
}
function mergeTheArr(arr,left,right,mid){
    let arr1=[]
    let arr2=[]
    let i=0
    let j=0
    let curr=left
    for(let x=left;x<=mid;x++){
        arr1.push(arr[x])
    }
    for(let x=mid+1;x<=right;x++){
        arr1.push(arr[x])
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
        arr[curr]=arr1[j]
        i++
        curr++
    }
    while(j<arr1.length){
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