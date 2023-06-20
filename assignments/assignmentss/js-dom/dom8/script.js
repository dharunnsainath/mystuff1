


function removecolor()
{
    var color=prompt('enter color to remove')
    console.log(color)
    
    var dropdown = document.getElementById('colorSelect')

    var options = dropdown.options  

    for(var i=0; i< options.length;i++)
    {   
        console.log*(color)

        if(options[i].value==color)
        {
            options[i].remove()
            break;
        }
    }


   
   
    
    


}