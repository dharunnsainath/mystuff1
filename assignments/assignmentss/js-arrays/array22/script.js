
const union=(arr1,arr2)=>{
  hash={}
  arr1.forEach(e=>
    {
      if(!(e in hash))
      {
        hash[e]=1
      }
    })

    arr2.forEach(e=>
      {
        if(!(e in hash))
        {
          hash[e]=1
        }
      })


    console.log(Object.keys(hash))
}



union([1, 2, 3], [100, 2, 1, 10])