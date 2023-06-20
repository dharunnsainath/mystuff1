function changeContent(row,col,data)
{
    
    var table = document.getElementById('myTable')

    var cell=table.rows[row].cells[col]

    

    cell.innerHTML=data

   
   
    
    


}