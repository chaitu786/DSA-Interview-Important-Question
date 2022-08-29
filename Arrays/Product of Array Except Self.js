let arr = [1,2,3,4]
let N=arr.length
// [24,12,8,6]
const ProductOfArray=(arr,N)=>{
    let left=[]
    let right=[]
    let ans=[]
    let prod=1
    for(let i=0;i<N;i++){
        left.push(prod*=arr[i])
    }
    prod=1
    for(let i=N-1;i>=0;i--){
        right.push(prod*=arr[i])
    }
    right.reverse()
    ans[0]=right[1]
    ans[N-1]=left[N-2]
    for(let i=1;i<N-1;i++){
        ans[i]=(left[i-1]*right[i+1])
    }
    console.log(ans.join(" "));
}
ProductOfArray(arr,N)