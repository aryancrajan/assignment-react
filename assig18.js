const str="This is a test statement.";
var a=[];
var b='';
var i=0;
while(i<str.length)
    {
     b=b+str[i];
     if(str[i]==' ' || str[i]=='.')
        {
        a.push(b);
        b='';
        } 
     i++;  
    }
console.log(a);
