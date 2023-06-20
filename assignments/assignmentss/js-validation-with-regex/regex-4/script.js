function dateCheck(str)
{
    var  reg = /([0-2][0-9][-\b\/]([0-1]|[0-2]){1,2}[-\b\/]([0-9]){4})|([3][0-1][-\b\/]([0-1]|[0-2]){1,2}[-\b\/]([0-9]){4})/;

  if(reg.test(str))
  {
    console.log('valid')
  }

  else
  {
    console.log('not valid')
  }
    
}

    






dateCheck('32-12-2023')