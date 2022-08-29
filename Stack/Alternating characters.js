
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let line=1
    for(let i=1;i<=N;i++){
        let arr=input[line++].trim()
        Alternating_characters(arr)
    }
}
function Alternating_characters(str){
    let count=0
    let stack=[str[0]]
    for(let i=1;i<str.length;i++){
        if(str[i]==stack[stack.length-1]){
            count++
        }
        stack.push(str[i])
    }
    console.log(count);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5
  AAAA
  BBBBB
  ABABABAB
  BABABA
  AAABBB`);
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