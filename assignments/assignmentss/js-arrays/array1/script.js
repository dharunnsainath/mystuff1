function is_array(val)
{
    if (toString.call(val) === "[object Array]")
    return true;
  return false; 
}

console.log(is_array([1,2]))