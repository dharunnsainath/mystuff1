$(function()
{var ourSecretNumber=''





    $('input[type="number"').css({
        color:'white',
        fontSize:'3rem',
        width:'7rem',
        backgroundColor: 'black',
        border:'1px ssolid white'
    })

    $('h1').css({
        color:'white',
        backgroundColor: 'black',
        textAlign:'center'
    })

    $('#output').css(
        {
            display: 'flex',
            justifyContent: 'center'
        }
    )

    $('.btn').css(
        {
          textAlign: 'center',
          marginTop: '1.5rem',
          backgroundColor:'gray',
          padding: '1rem',
          width: '10%'
            
        }
    )

    $('.start-btn').css(
        {
            textAlign: 'center',
            padding: '1rem',
            backgroundColor: 'gray',
            display: 'inline-block',
            marginLeft: '47.5%',
            marginRight: '50%',
            marginBottom:'1rem'
        }
    )
})

$('.output-1').hide();

$('#start-btn').on('click',startGame)
$('#checkLock').on('click',openLock)

function openLock()
{
    var win=0

    for(x=0;x<$('input[type="number"]').length; x++)
    {
        console.log("win",win   )
        var guessNumber = $('input[type="number"]').eq(x);
        var result=checkNumber(guessNumber.val(), ourSecretNumber[x])
        console.log(guessNumber.val(), ourSecretNumber[x]   ,win)
        guessNumber.css({
            backgroundColor:result.backgrd
        })
        if(result.checker)
        {
            win++
        }
    }

    
   
    if(win==3)
    {
        $('#start-btn').show()
        // $("#start-btn").on('click',startGame())
        $('small').html('you got it <br>' + ourSecretNumber)
    }
}

function refresh()
{
    
}


function checkNumber(a,b)
{
    var response ={}
    if(a>b)
    {
        response.checker = false,
        response.backgrd = 'red'
    }
    if(a<b)
    {
        response.checker = false,
        response.backgrd = 'blue'
    }
    if(a==b)
    {
        response.checker = true,
        response.backgrd = 'green'

    }

    return response;
}


function startGame()
{

    // for(x=0;x<$('input[type="number"').length;x++)
    // {
    //     $('input[type="number').eq(x).val()
    // }

    ourSecretNumber= Math.floor(Math.random()*(999-101)).toString();
    console.log(ourSecretNumber)
    $('#start-btn').hide();
    $('.output-1').show();

    for(x=0;x<$('input[type="number"').length;x++)
    {
        $('input[type="number').eq(x).val()
    }

    $('small').html('Red background guess is high and blue background guess is low')
    


}

