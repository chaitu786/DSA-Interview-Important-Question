
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0].trim()
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++].trim()
        let str=input[line++].trim().split("")
        console.log(BalancedCharacters(N,str))
    }
}
function BalancedCharacters(N,arr){
    let stack=[]
    for(let i=0;i<N;i++){
        if(arr[i]==arr[i].toLowerCase()){
            stack.push(arr[i].toUpperCase())
        }
        else{
            if(arr[i]===stack[stack.length-1]){
                stack.pop()
            }
            else{
                return "False"
            }
        }
    }
    return stack.length===0?"True":"False"
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`5
  2
  aA
  6
  aAbBcC
  2
  cD
  4
  caCA
  4
  daAD`);
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