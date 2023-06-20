$(function()
{

   $('#btn').on('click',
   function()
   {
    $.ajax(
        {
            url:'index3.html',
            method: 'POST',
            data:{
                name:$('#input1').val()
            },

            success: function()
            {
                console.log($('#input1').val())
            }
        }
    )
   }) 
   

   $.ajax(
    {
        url: 'index3.html',
        method: 'GET',
        success: function(data)
        {
            $('#text').html(data)
        }
    }
   )
})

