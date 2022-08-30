
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0]
    let str=input[1].trim()
    let bag=""
    let index=0
    SubSequence(N,str,bag,index)
}
function SubSequence(N,str,bag,index){
    if(bag.length>0){
        console.log(bag)
    }
    if(index==str.length){
        return 
    }
    for(let i=index;i<N;i++){
        bag+=str[i]
        SubSequence(N,str,bag,i+1)
        bag=bag.slice(0,-1)
    }
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`4
  abcd`);
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