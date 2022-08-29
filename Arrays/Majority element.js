
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++]
        let arr=input[line++].split(' ').map(Number).sort()
        console.log(Majorityelement(N,arr))
    }
}
function Majorityelement(N,arr){
    let mid=Math.floor(N/2)
    for(let i=0;i<=mid;i++){
        if(arr[i]==arr[mid+i]){
            return arr[i]
        }
    }
    return -1
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`2
  6
  1 1 1 1 2 3
  5
  1 1 2 2 3`);
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