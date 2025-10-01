//if18
let n1=6
let n2=6
let n3=1

if(n1==n2){
    if(n1<n3){console.log(n1,n3)}
    else{console.log(n3,n1)}}

if(n1==n3){
    if(n1<n2){console.log(n1,n2)}
    else{console.log(n2,n1)}}

if(n3==n2){
    if(n3<n1){console.log(n3,n1)}
    else{console.log(n1,n3)}}
if(n1==!n2 || n2==!n3 || n1==!n3){console.log("all three numbers are different")}