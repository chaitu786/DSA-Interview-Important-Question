
function runProgram(input){
    input=input.trim().split("\n")
    var tc = +input[0].trim();
    let line=1
    for(let i=1;i<=tc;i++){
        let str = input[line++].trim().split("");
        console.log(Againaclassicalproblem(str)) ;
    } 
}
function Againaclassicalproblem(str){
    let obj={
        "}":"{",
        "]":"[",
        ")":"("
    }
    let stack=[]

    for(let i=0;i<str.length;i++){
        if(str[i]=="{" || str[i]=="[" || str[i]=="("){
            stack.push(str[i])
        }
        else{
            if(stack.length===0){
                return "not balanced"
            }
            else if(
                obj[str[i]]!==stack[stack.length-1]
            ){
                return "not balanced"
            }
            else{
                stack.pop()
            }
        }
    }
    if(stack.length===0){
        return "balanced"
    }
    else{
        return "not balanced"
    }
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3
  {([])}
  ()
  ([]`);
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