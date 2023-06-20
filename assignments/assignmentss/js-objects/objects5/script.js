function Cylinder (ht,d){
  this.ht=ht
  this.d=d
}

Cylinder.prototype.Volume=function () {
  var r = this.d / 2;
  return this.ht * Math.PI * r * r;
};

let cylin = new Cylinder(3,4)
console.log(cylin.Volume().toFixed(3))

