$(function()
{
 
// $('body').on('click',function(e) {
//   // Selecting the clicked element using "this"
//   var clickedElement = e.target;
//     console.log(clickedElement.tagName.toLocaleLowerCase())

    
//   // Selecting the clicked element using "event.target"
 
  
//   // Further operations on the clicked element
//   // ...
// });

$('#btn').on('click',function(){
    console.log($('#myDiv'))
    $('#myDiv').toggleClass('hi')
})

var allData = $('#myDiv').data('p')

console.log(allData)


$('li').each(function()
{
    var id = $(this).data('id')
    $(this).data('price', getPriceById(id));

})

$('li').click(function() {
    var price = $(this).data('price');
    console.log('Price:', price);
  });


function getPriceById(id)
{
    var prices={
        1:10,
        2:20,
        3:30
    }

    return prices[id]
}
   
})



    