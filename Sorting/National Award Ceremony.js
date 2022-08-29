//sort with 0 1 2

function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0].trim()
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++].trim()
        let arr=input[line++].trim().split(" ").map(Number)
        Winners(N,arr)
    }
}
function Winners(N,arr){
    let left=0
    let right=N-1
    let mid=0

    while(mid<=right){
        if(arr[mid]==0){
            let temp=arr[left]
            arr[left]=arr[mid]
            arr[mid]=temp
            left++
            mid++
        }
        else if(arr[mid]==1){
            mid++
        }
        else{
            let temp=arr[right]
            arr[right]=arr[mid]
            arr[mid]=temp
            right--
        }
    }
    console.log(arr.join(" "));
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3
  1
  2
  3
  2 0 1
  4
  2 0 2 1`);
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