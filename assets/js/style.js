// BAI 1
function mark (){
        var mark = 75;
        if(mark >= 85){
            console.log("A");
        }
        else if(75 <= mark && mark < 85){
            console.log("B");
        }
        else if(40 <= mark && mark < 70){
            console.log("C");
        }
        else{
            console.log("D");
        }
    }
    mark();


// BAI 2
function num(a,b){
    if(a>b){
        console.log("So a lon hon so b");
    }else if(a<b){
        console.log("So b lon hon so a");
    }else{
        console.log("So a bang b");
    }
}
let data = num(4,7);
console.log(data);

// BAI 3
function numBer(a){
    if(a>0){
        console.log(`${a} la so duong`);
    }else if(a<0){
        console.log(`${a} la so am`);
    }else{
        console.log(`${a} la so 0`);
    }
}
let d = numBer(152);
console.log(d);

//BAI 4
function Test(x){
    if(x % 2 == 0){
        console.log("Day la so chan");
    }else{
        console.log("Day la so le");
    }
}
const nuBer = Test(23);
console.log(nuBer);
    
//BAI 5
function divisible(a){
    if(a % 3 == 0 && a % 5 == 0){
        console.log(`"${a} chia het cho 3 va 5"`);
    }else{
        console.log(`"${a} khong chia het cho ca 3 va 5"`);
    }
}
const numberDivisible = divisible(33);
console.log(numberDivisible);

//BAI 6
function Dec(a,b,c) {
    if((a+b)==c){
        console.log(`${a} cong ${b} bang ${c}`);
    }else{
        console.log(`${a} cong ${b} khac ${c}`);
    }
}
const ex = Dec(1,2,3);
console.log(ex);