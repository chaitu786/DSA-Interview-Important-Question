
function runProgram(input){
    input=input.trim().split("\n")
    let [N,K]=input[0].trim().split(" ").map(Number)
    let arr=input[1].trim().split(" ").map(Number).sort((a,b)=>a-b)
    MarkandtoysForSon(N,K,arr)
}
function MarkandtoysForSon(N,K,arr){
    let count=0
    for(let i=0;i<N;i++){
        if(K>arr[i]){
            K=K-arr[i]
            count++
        }
    }
    console.log(count);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`7 50
  1 12 5 111 200 1000 10`);
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