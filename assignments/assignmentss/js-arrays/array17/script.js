const arra1=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var ctr = arra1.length, temp, index;


    while (ctr > 0) {

        index = Math.floor(Math.random() * ctr);

        ctr--;

        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }

console.log(arra1)