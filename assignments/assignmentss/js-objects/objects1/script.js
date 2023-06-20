function _keys(obj) 
 {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    
  }
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'object' && !!obj;
  }
console.log(_keys({name: "Harris", age: 56, email: "harris@gmail.com"}));