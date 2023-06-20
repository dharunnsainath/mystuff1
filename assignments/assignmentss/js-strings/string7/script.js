const string_parametrize=(str)=>{
        let str1=str.toLowerCase()
        strarr=str1.split(' ')
        final=strarr.join('-')
        return final
}

console.log(string_parametrize('Robin Singh from USA.'))



