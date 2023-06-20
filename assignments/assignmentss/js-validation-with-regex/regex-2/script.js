function regexCheck(str)
{
    reg=/4[0-9]{15}|5[1-5][0-9]{14}/

    if(reg.test(str))
    {
        return true
    }
    else{
        return false
    }



}


console.log(regexCheck('4554334323211323'))