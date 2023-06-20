// $('#e1').data('value',0)
// $('#e2').data('value',1)
// $('#e3').data('value',2)
// $('#e4').data('value',3)
// $('#e5').data('value',4)
// $('#e6').data('value',5)
// $('#e7').data('value',6)
// $('#e8').data('value',7)
// $('#e9').data('value',8) 


// $('.cell').on('click',function()
// {
   
//     var clickedCell=String($(this).attr('id'))[1]
//     console.log(clickedCell )
//     console.log()

$(function()
{





var player=null
var r1=['hi']
var r2=['hi']

winning_array = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

x_array=[]
o_array=[]
e=0

moves=0
let count
let cand=[]
// console.log(x_array, o_array)
function restart()
{   
        console.log('hello')
   
        $('.cell').text('')
        $('.cell').css('background-color','white')
        $('#e0','#e1','#e2','#e3','#e4','#e5','#e6','#e7','#e8').css('background-color','white')
        x_array=[]
        o_array=[]
        moves=0
        count=0
        $('.cell').on('click',clickcell)
        
}

function validation(arr,player)

{
   
    if(moves<=9 && arr.length>=3)
    {
       

    for(i=0;i<winning_array.length;i++)
    {
        count=0;
    
   for(j=0;j<arr.length;j++)
   {
    
   
     if(winning_array[i].includes(arr[j]))
     {
       ++count;
       console.log(winning_array[i],arr,player,count)
       if(count==3)
       {
       
        // cand={'player':player,'winning_array':winning_array[i]}
        return [player,winning_array[i]]
       }
      
     }
     
   }
}
    }
  

 




   
//    console.log(arr)
//    console.log('count',count)   
 


   
    
    
    
    
  
    
    

    

   
    if(moves>=9 && (r1.length==1 || r2.length))
    {
     return(['No one won'])
    }

    

   
   


    $('.start').on('click',restart)
}







    
    $('.cell').on('click',clickcell)



function clickcell()

    {
    var cell_click = $(this)



   
   

   
    var clickedCell=String($(this).attr('id'))[1]
    moves++;
    // console.log(clickedCell )
    cell_click.prop('disabled',true)
    

    if(e%2==0)
{
    x_array.push(Number(clickedCell))
    e++;

   cell_click.html('<div style="display:flex;justify-content:center;align-items:center"><p style="font-size:5rem;text-align:center;margin:2rem">X</p></div>')
    
   if(validation(x_array,'X'))
   {
    r1=validation(x_array,'X')
   }
   else{
    r1=[1]
   }
   console.log(r1)
   

}
else{
    o_array.push(Number(clickedCell))
    e++
    cell_click.html('<div style="display:flex;justify-content:center;align-items:center;"><p style="font-size:5rem;text-align:center;margin:2rem">O</p></div>')
     
    if(validation(o_array,'O'))
    {
     r2=validation(o_array,'O')
    }
    else{
     r2=[1]
    }
   
}
console.log(r2)

if(r1.length>=2)
{
    kaa=r1
}
else if(r2.length>=2)
{
    kaa=r2
}
else{
    kaa=['hi']
}

if(kaa.length >=2)
{
    

    $('.winner').append("<p> player "+kaa[0] +" won</p>")
    arr=kaa[1]
    for(i=0;i<arr.length;i++)
    {
        $('#e'+arr[i]).css('background-color','green')
    }

    $('.cell').off('click')
}

if(r1.length==1 && r2.length==1 && moves>=9)
{
    $('.winner').append("<p> No one won</p>")
}

// if(!r)
// {
//     $('.winner').append("<p> "+r[0] +"</p>")
// }
// console.log(x_array, o_array)
    
}



})






