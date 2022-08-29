
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0].trim()
    let line=1
    for(let i =0;i<tc;i++){
        let mat=[]
        let [N,K]=input[line++].trim().split(" ").map(Number)
        for(let j=0;j<N;j++){
            mat.push(input[line++].trim().split(" ").map(Number))
        }
        console.log(RowWithMax1S(mat,N,K))
    }
}

function RowWithMax1S(arr,N,K){
    let max=-Infinity
    let res
    for(let i=0;i<N;i++){
        let count=0
        for(let j=0;j<K;j++){
            if(arr[i][j]==1){
                count++
            }
        }
        if(count>max){
            max=count
            res=i+1
        }
    }
    return res
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`3
  3 3
  0 0 0
  0 0 0
  0 0 0
  3 3
  0 1 1
  0 1 1
  0 1 1
  2 2
  0 1
  1 1`);
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