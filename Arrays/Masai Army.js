
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0].trim()
    let line=1
    for(let i=0;i<tc;i++){
        let [N,K]=input[line++].trim().split(" ").map(Number)
        let arr=input[line++].trim().split(" ").map(Number)
        Masai_Army(N,K,arr)
    }
}function Masai_Army(N,K,arr){
    let count=0
    for(let i=0;i<N;i++){
        for(let j=i+1;j<N;j++){
            if(Math.abs(arr[i]-arr[j])<=K){
                count++
            }
        }
    }
    console.log(count*2);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`1
  5 10
  10 20 50 60 65`);
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