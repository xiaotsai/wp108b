function isPrime(n)
{  
  for(var i = 2;  i < n/2; i++)
  {
    if (n % i == 0) return false;  
  }
  
  return true;
}

let e = process.argv[2];
let c = process.argv[3];

var z = 0;
for(j = e; j <= c; j++)
{
  if (isPrime(j))
  z+=1;
}

console.log('isPrime','(' + e  + ','+ c + ')' + '=' , z);