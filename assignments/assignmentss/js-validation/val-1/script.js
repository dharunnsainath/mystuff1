function validate_boolean(val)
{ 
    
    if(typeof(val)=='boolean')
    {
        return true
    }
    else{
        return false
    }
    }

console.log(validate_boolean(true))