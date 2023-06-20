const emailhide=(str)=>{
        let a=str.substring(0,5)
        let b=str.split('@')[1]
        hide=a+'...'+b
        return hide
}

console.log(emailhide('dharundash@gmail.com'))



