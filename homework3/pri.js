function isPrime(n)
{
  for(i = 2; i < n; i++)
  {
    if (n % i == 0)
    return false;
  }
  return true;
}



z = 0;
for(j = 3; j <= 7; j++)
{
  if (isPrime(j))
  z+=1;
}
console.log('isPrime(3, 7) =', z);