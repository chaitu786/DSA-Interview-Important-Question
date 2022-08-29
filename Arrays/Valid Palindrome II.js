let str="abca"
let N=str.length
let left=0
let right =N-1
function CheckPal(str,N,left,right){
    while(str.length>0 && str[right]===str[left] && left<right){
        left++
        right--
    }
    return Validate(str,N,left+1,right) || Validate(str,N,left,right-1) 
}
console.log(CheckPal(str,N,left,right));

function Validate(str,N,left,right){
    while(left<right){
        if(str[left]!==str[right]){
            return false
        }
        left++
        right--
    }
    return true
    
}