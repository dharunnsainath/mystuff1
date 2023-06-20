function rectangle(l,b){
  this.l=l;
  this.b=b


}

rectangle.prototype.area=function()
{
  return this.l*this.b
}

rectangle.prototype.perimeter=function()
{
  return 2*this.l+2*this.b
}

const rect = new rectangle(3,4)

console.log(rect.area())
console.log(rect.perimeter())