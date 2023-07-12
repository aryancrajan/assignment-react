const a=[[1,2,3],[4,5,6],[7,8,9]];
var s1=0;
var s2=0;
var j
for(let i=0;i<a.length;i++)
    {
        s1=s1+a[i][i];   
    }
for(let k=0;k<a.length;k++) 
    {
        j=(a[k].length-k-1);
        s2=s2+a[k][j];
    }
console.log(s1);
console.log(s2);