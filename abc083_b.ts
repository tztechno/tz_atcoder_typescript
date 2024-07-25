abc083_b.ts
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
##########################################
[after fix: AC]
const stdin = require('fs').readFileSync('/dev/stdin', 'utf8')
const [N,A,B] = stdin.split('\n')[0].split(' ').map(Number)
    
function value(i: number): number {
  let p = 0;
  while (i>0) {
    p = p + i%10; 
    i = Math.floor(i/10); 
  }
  return p;
}

var ans=0    
for (let i=1; i<N+1; i++) {
  var p=value(i)
  if (A<=p && p<=B) {
    ans=ans+i
  }
}
console.log(ans)
##########################################
[before fix]
import * as readlineSync from 'readline-sync';
const S0: string = readlineSync();
const S: number[] = S0.split(' ').map(Number);
const N=S[0]
const A=S[1]
const B=S[2]
    
function value(i: number): number {
  let p = 0;
  while (i > 0) {
    p = i % 10; 
    i = Math.floor(i / 10); 
  }
  return p;
}
 
var ans=0    
for (let i=0; i<N+1; i++) {
  p=value(i)
  if (A<=p and p<=B) {
    ans=ans+i      
  }
console.log(ans)

##########################################
[python]
N,A,B=map(int,input().split())
def value(i):
  p=0
  while i>0:
    p+=i%10
    i=i//10
  return p
ans=0    
for i in range(1,N+1):
  p=value(i)
  if A<=p<=B:
    ans+=i
print(ans)
##########################################
