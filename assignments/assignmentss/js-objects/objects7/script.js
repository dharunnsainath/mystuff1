String.prototype.substringg = function()
{
  let subset=[]
  for(var m=0;m<this.length;m++)
  {
    for (var n = m+1; n<this.length+1; n++) 
    {
      subset.push(this.slice(m,n));
    }
  }

  return subset
}

st='Hello'

console.log(st.substringg())