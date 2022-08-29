
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let str=input[1].trim()
    countValleysInStr(N,str)
}
function countValleysInStr(N,str){
    let count1=0
    let count2=0
    for(let i=0;i<N;i++){
        if(str[i]=="U"){
            count1++
            if(count1==0){
                count2++
            }
        }
        else{
            count1--
        }
    }
    console.log(count2);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`8
  UDDDUDUU`);
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