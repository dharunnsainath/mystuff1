var library = [ 
  {
      title: 'Bill Gates',
      author: 'The Road Ahead',
      libraryID: 1254
  },
  {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      libraryID: 4264
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      libraryID: 3245
  }];


  library.sort(function(a,b){
    if(a.title>b.title)
    return 1
    else if(a.title<b.title)
    return -1
    else
    return 0
  })


  console.log(library)