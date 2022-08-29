
function runProgram(input){
    input=input.trim().split("\n")
    let tc=input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++].trim()
        let arr=input[line++].trim().split(" ").map(Number)
        console.log(SquareSorting(N,arr).join(" "))
    }
}
function SquareSorting(N,arr){
    let newArr=[]
    for(let i=0;i<N;i++){
        newArr.push(arr[i]*arr[i])
    }
    // return newArr
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
           if(newArr[j]>newArr[j+1]){
            swapNums(newArr,j,j+1)
            swapNums(arr,j,j+1)
           }
        }
    }
    return arr
}
function swapNums(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`1
  5
  -2 3 1 -4 6`);
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