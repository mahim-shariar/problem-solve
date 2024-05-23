let payment = [1000, 2000, 2500];
let libingcost = 5000;

let montlySavings = (payment, libingcost) => {

    if (!Array.isArray(payment) || typeof libingcost !== 'number') {
        console.log("invalid Input");
        return;
    }
    
    let totalpaymet = 0;
    payment.forEach(element => {
        if (element >= 3000) {
            element = element - (element * 0.20);
        }
        totalpaymet = totalpaymet + element;
    });

    if (totalpaymet < libingcost) {
        console.log("earn more");
    } else {
        console.log(totalpaymet - libingcost);
    }
};

montlySavings(payment, libingcost);
