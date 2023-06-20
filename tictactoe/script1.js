$(function()
{

    let  winning_array = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    let x_array=[]
    let o_array=[]
    let moves = 0
    let e=0
    let r;
    let return_array={'flag':false}

    $('.start').show()

    $('.cell').on('click',clickCell)

    function clickCell()
    {   
        
        
      
        $('.start').hide()
        var cell_click = $(this)

        var clickedCell = String($(this).attr('id'))[1]
       

       
        moves++;
        console.log(moves)
       
       

        cell_click.off('click')

        
       
 
        if(e%2==0)
        {   
            x_array.push(Number(clickedCell));
            // console.log(e,Number(clickedCell),'x')
            e++;
            // console.log(e,Number(clickedCell),'x')
            cell_click.html('<div style="display:flex;justify-content:center;align-items:center"><p style="font-size:5rem;text-align:center;margin:2rem">X</p></div>')
            
           r=validation(x_array,'X')

           
           
          




           

        }
        else {
           
            // console.log(e,Number(clickedCell),'o')
            o_array.push(Number(clickedCell));
            e++;
            // console.log(e,Number(clickedCell),'o')
           

            cell_click.html('<div style="display:flex;justify-content:center;align-items:center;"><p style="font-size:5rem;text-align:center;margin:2rem">O</p></div>')
     
       
            r= validation(o_array,'O')

            

           
        }

       
        console.log(x_array,o_array)

        if(r['flag'])
        {
            displayWinner(r['player'],r['winningArray'])
        }
        else if((moves==9))
        {
            $('.cell').off()
           console.log('no one won')
            displayWinner(false,'no')
            $('.start').show()
           

        }
        

        

















    }
    
    $('.start').on('click',function()
    {
        location.reload(true)
    })
    // function restart()  {

    //     console.log('restart')

    //     $('.cell').html('<p></p>')
        
    //     x_array.splice(0,x_array.length)
    //     o_array.splice(0,o_array.length)
    //     moves = 0
    //     e=0;
    //     console.log(e)
    //     r;
    //     console.log(x_array,o_array)
    //     return_array={'flag':false}
    //     $('.winner').hide()
    //     $('.cell').on('click',clickCell)
    //     for(i=0;i<winning_array.length;i++)
    //     {
    //         $('#e'+winning_array[i]).css('background-color','white')
    //     }

    //     $('.cell').css('background-color','white')
       



        
    // }


    function displayWinner(player,win)
    {
        
        if(player=='X' || player=='O')
        {
        $('.winner').text('The winner is '+ player)
        $('.winner').show()
        for(i=0;i<win.length;i++)
        {
            $('#e'+win[i]).css('background-color','green')
        }
    
    }
        
       
        else
        {
            console.log('helllo')
            $('.winner').show()
            $('.winner').text('No one won')
        }
       
    }









    function validation(arr,player)
    {

        

       
        if(moves<=9 )
        {
        if(arr.length>=3)
        {
            for(i=0;i<winning_array.length;i++)
            {
               var  count = 0;

               for(j=0;j<arr.length;j++)
               {
                
                if(winning_array[i].includes(arr[j]))  
                {
                    ++count;
                    


                    
                    if(count==3)
                    {
                        return_array['player']=player;
                        return_array['winningArray']=winning_array[i];
                        return_array['flag']=true
                        $('.start').show()
                        $('.cell').off('click')
                        return return_array
                    }
                    
                   
                    
                }
               }
            }
        }
      
    }
    else if(moves==9 && (return_array['flag']==false))
    {
        $('.start').show()
        return  {'flag':true,'player':'No'}
    }
    else
    {
        pass
    }


    return return_array
      


       
    
        

    }






















})