function emailCheck(str)
{
    var  reg = /^[a-zA-Z]+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;

  if(reg.test(str))
  {
    console.log('valid')
  }

  else
  {
    console.log('not valid')
  }
    
}

    






emailCheck('2dharun@gmail.com')