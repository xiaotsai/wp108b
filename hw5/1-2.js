var a = [1,2,3,4,5];

var sum = 0 ;
var tot =0;
for (i=0;i<a.length;i++)
{
  sum = sum + a[i];
}
Av = sum/a.length;


for (i=0;i<a.length;i++)
{
  tot = tot + (a[i] - Av)*(a[i] - Av);
}
sd = Math.sqrt((1/a.length)*tot);
console.log(sd)


