function trimstring(str)
{ 
    
    var reg = /^\s+|\s+$/g;

 let result = str.replace(reg,'')
    
 return result
}

    






console.log(trimstring('  hello Dharun          '))