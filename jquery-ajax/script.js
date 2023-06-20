
$(function(){
var apiKey = "c73174bb915c49abbcb5b5966cbf4810";

var apiUrl = "https://newsapi.org/v2/top-headlines";


$(window).scroll(function() {
    
    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
      
      loadMoreContent();
    }
  });

  $.ajax({
    url: apiUrl,
    method: "GET",
    data: {
      apiKey: apiKey,
      country: "in", 
      category: "business",
      pageSize: 100, 
      page: 1 
    },
    success: function(response) {
      
      var articles = response.articles;
  
      console.log(articles)
     
      $.each(articles,function(index,value)
      {
        var source=JSON.stringify(value['source']['name'])
        var author =JSON.stringify(value['author'])
        var title = JSON.stringify(value['title'])
        title = title.substring(1,title.length-1)
        author=author.substring(1,author.length-1)
        source=source.substring(1,source.length-1)
        var description = JSON.stringify(value['description'])
        var link = JSON.stringify(value['url'])
        link = link.substring(1,link.length-1)
        var content=JSON.stringify(value['content'])
        content = content.substring(1,content.length-1)
        description = description.substring(1,description.length-1)
        var image_url = JSON.stringify(value['urlToImage'])
        image_url = image_url.substring(1,image_url.length-1)
        
        $('#contentContainer').append('<div class="content"><div class="header-1"><div class="author">By  <b>'+source+'</b></div><div class="source">authored by  <b>'+author+'</b></div></div><div class="heading-2"> <b>'+title+'</b></div><div class="description">'+description+'</div><div class="content-1">'+content+'</div><div style="display: flex;justify-content: center"><img src="'+image_url+'" class="image" width="70%" height="50%"/></div><a class="link" href="'+link+'">'+link+'</a></div>')
        


    
    
    
    
    
    })
      
    }
  });


  

function loadMoreContent()
{

$.ajax({
  url: apiUrl,
  method: "GET",
  data: {
    apiKey: apiKey,
    country: "in", 
    category: "general", 
    pageSize: 100, 
    page: 1 
  },
  success: function(response) {
        
    var articles = response.articles;

    console.log(articles)
    
    $.each(articles,function(index,value)
    {
        var source=JSON.stringify(value['source']['name'])
        var author =JSON.stringify(value['author'])
        var title = JSON.stringify(value['title'])
        title = title.substring(1,title.length-1)
        author=author.substring(1,author.length-1)
        source=source.substring(1,source.length-1)
        var description = JSON.stringify(value['description'])
        var link = JSON.stringify(value['url'])
        link = link.substring(1,link.length-1)
        var content=JSON.stringify(value['content'])
        content = content.substring(1,content.length-1)
        description = description.substring(1,description.length-1)
        var image_url = JSON.stringify(value['urlToImage'])
        image_url = image_url.substring(1,image_url.length-1)
        
        $('#contentContainer').append('<div class="content"><div class="header-1"><div class="author">By  <b>'+source+'</b></div><div class="source">authored by  <b>'+author+'</b></div></div><div class="heading-2"> <b>'+title+'</b></div><div class="description">'+description+'</div><div class="content-1">'+content+'</div><div style="display: flex;justify-content: center"><img src="'+image_url+'" class="image" width="70%" height="50%"/></div><br><a class="link" href="'+link+'">'+link+'</a></div>')
        


    
    
    
    
    
    })
    
  }
});
}

})