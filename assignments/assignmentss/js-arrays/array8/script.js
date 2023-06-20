arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
hash={}
for(i=0;i<arr.length;i++)
{
    if(arr[i] in hash)
    {
     hash[arr[i]]+=1
    }
    else{
     hash[arr[i]]=1
    }
}
let max=0
let maxv=0
for(key in hash)
{
     if(hash[key]>max)
     {
          maxv=key
          max=hash[key]
     }

}

console.log(max,maxv)
 