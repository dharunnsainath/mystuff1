const binary_search = (arr,x,start,end)=>{
        if (start > end) return false;
  
    
    let mid=Math.floor((start + end)/2);
  
    
    if (arr[mid]===x) return true;
         
    
    if(arr[mid] > x)
        return binary_search(arr, x, start, mid-1);
    else
 
        
        return binary_search(arr, x, mid+1, end);
}


console.log(binary_search([1,2,3,5,88,108],8,0,6))