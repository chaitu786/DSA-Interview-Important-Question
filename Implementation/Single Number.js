
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
     let N=+input[line++]
     let arr=input[line++].split(" ").map(Number)
     findNum(N,arr)
    }
}
function findNum(N,arr){
    let obj={}
    for(let i=0;i<N;i++){
        if(obj[arr[i]]){
            obj[arr[i]]+=1
        }
        else{
            obj[arr[i]]=1
        }
    }
    let res
    for(let key in obj){
        if(obj[key]==1){
            res=key
        }
    }
    console.log(res);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`1
  3
  1 2 2`);
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