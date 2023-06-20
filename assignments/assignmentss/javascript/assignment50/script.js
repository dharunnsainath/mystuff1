
sentence="pessimist speaks the fact, optimist makes money"
cap_first=[]
  const words=sentence.split(' ')
  words.forEach(element => {
    cap_first.push(element.charAt(0).toUpperCase()+element.slice(1,))
    
  });



sent_=cap_first.join(' ')
console.log(sent_)