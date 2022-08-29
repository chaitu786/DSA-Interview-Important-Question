
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0].trim()
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++].trim()
        let arr=input[line++].trim().split(" ").map(Number)
        let arr2=input[line++].trim().split(" ").map(Number)
        console.log(Validate(N,arr,arr2))
        // console.log(arr,arr2)
    }
}
function Validate(N,arr,arr2){
    // let flag=false
    // for(let i=0;i<N;i++){
    //     if(arr[i]==arr2[N-1-i]){
    //         flag=true
    //     }
    // }
    // return flag?"YES":"NO"
    let p1=0
    let p2=0
    let stack=[]
    while(p1<N){
        if(stack.length>0 && arr2[p2]==stack[stack.length-1]){
            stack.pop()
            p2++
        }
        else{
            stack.push(arr[p1])
        p1++
        }
    }
    while(stack.length>0 && arr2[p2]==stack[stack.length-1] ){
        stack.pop()
        p2++
    }
    return stack.length===0 ? "YES":"NO"
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`2
  5
  1 2 3 4 5
  4 5 3 2 1
  5
  1 2 3 4 5
  4 3 5 1 2`);
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