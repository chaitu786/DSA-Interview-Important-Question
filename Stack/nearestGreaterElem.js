
function runProgram(input){
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let N=+input[line++].trim()
        let arr=input[line++].trim().split(" ").map(Number)
        Greater(arr,N)
    }
}
function Greater(arr,N){
    let left=[]
    let right=[]
    let stack=[]
    let stack2=[]
    let ans=[]
    for(i=0;i<arr.length;i++){
        while(stack.length>0 && arr[i]>=arr[stack[stack.length-1]]){
            stack.pop()
        }
        if(stack.length==0){
            left.push(-1)
        }
        else{
            left.push(stack[stack.length-1])
        }
        stack.push(i)
    }
    // console.log(left);

    for(let i=arr.length-1;i>=0;i--){
        while(stack2.length>0 && arr[i]>=arr[stack2[stack2.length-1]]){
            stack2.pop()
        }
        if(stack2.length==0){
            right.push(-1)
        }
        else{
            right.push(stack2[stack2.length-1])
        }
        stack2.push(i)
    }
    right.reverse()
    for(let i=0;i<N;i++){
        if(left[i]==right[i]){
            ans.push(-1)
        }
        
        else{
            if(left[i]==-1){
                ans.push(arr[right[i]])
            }
            else if(right[i]==-1){
                ans.push(arr[left[i]])
            }
            else{
                let l=Math.abs(i-left[i])
                let r=Math.abs(i-right[i])
                if(l<=r){
                    ans.push(arr[left[i]])
                }
                else{
                    ans.push(arr[right[i]])
                }
            }
        }
    }
    console.log(ans);
}
if (process.env.USERNAME === "Chaithanya") {
  runProgram(`1
  5
  5 4 1 3 2`);
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