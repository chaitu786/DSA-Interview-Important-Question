
function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0].trim()
    let arr=input[1].trim().split(" ").map(Number)
    premutations(N,arr,{},[])
}
function premutations(N,arr,obj,ans){
    if(arr.length==ans.length){
        console.log(ans.join(" "));
    }

    for(let i=0;i<N;i++){
        if(obj[arr[i]]==true){
            continue
        }
        else{
            obj[arr[i]]=true
            ans.push(arr[i])
            premutations(N,arr,obj,ans)
            obj[arr[i]]=false
            ans.pop()
        }
    }
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3
  1 2 3`);
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