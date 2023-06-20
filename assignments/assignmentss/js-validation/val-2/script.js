function is_Error(input) {
    return input instanceof Error || toString.call(input) === '[object Error]';
 }
 
 console.log(is_Error(new Error('Dharun')));
 console.log(is_Error(100));
 console.log(is_Error('foo'));
 