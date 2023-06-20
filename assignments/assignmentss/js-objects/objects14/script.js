Student.prototype.rollno = true;
console.log(allKeys(new Student("Sara")));

const st = new Student('Dharun')

st.rollno=18

for (var s in st )
console.log(st[s])
