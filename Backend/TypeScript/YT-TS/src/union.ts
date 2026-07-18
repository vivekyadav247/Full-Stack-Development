// Union
let subs : string | number = "1M" ;
subs = 1000;

let airlineSeat : "aisle" | "middle" | "window" ;
airlineSeat = "aisle" ;

const orders = ["12", "13", "14"] ;

let customer : string | undefined ; // to avoid we use union like this

for(let order of orders){
    if(order === "13"){
        customer = order ;
    }
}

console.log(customer) ; // 13