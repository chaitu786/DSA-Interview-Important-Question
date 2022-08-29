
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++].trim()
        let arr=input[line++].trim().split(" ").map(Number)
        console.log(DailyTemperatures(N,arr))
    }
}
function DailyTemperatures(N,arr){
    let ans=[]
    for(let i=0;i<N;i++){
        let curr=0
        for(let j=i+1;j<N;j++){
            if(arr[i]<arr[j]){
                curr=j-i
                break
            }
        }
        ans.push(curr)
    }
    return ans.join(" ")
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`2
  4
  30 40 50 60
  8
  73 74 75 71 69 72 76 73`);
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