function function_name() {
        console.log( arguments.callee.name );
    }
    
    function_name();