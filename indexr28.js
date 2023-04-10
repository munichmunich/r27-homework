// 1. ახალი მესიჯი 

let newMessages = true;
console. log ('სალამი შემოგევლე');
if(newMessages){
    console. log ('შენ გაქვს რამდენიმე წაუკითხავი მესიჯი');
}


// 2. ონლაინ მაღაზია

let userBalance = 35;
let userCartTotal = 35;
if(userBalance >= userCartTotal) {
    console. log('გადახდა წარმატებით შესრულდა')
} else {
    console.log('თქვენ არ გაქვთ საკმარისი თანხა');
};

// 3.  სტუდენტი გამოცდაზე

let testScore = 75;

if(testScore >= 95) {
    console.log('გილოცავ შენ მოხვდი ნოვატოში');
} else if (testScore >= 70) {
    console.log('გილოცავ შემ მოხვდი კემბრიჯის უნივერსიტეტში');
} else if (testScore >= 50) {
    console.log('გილოცავ შენ მოხვდი გეპეიში');
}

// 4. ფასდაკლებების სისტემა

let adminSale = 35;
let frequentClientsale = 30;
let studentSale = 20;
let balance = 100;
let total = 105;
let userIsAdmin = false;
let userIsFrequentClient = false;
let userIsStudent = false;
if(userIsAdmin) {
    if(balance >= total - adminSale) {
        console.log("გადახდა წარმატებით შესრულდა");
    } else {
        console.log("თქვენ არ გაქვთ საკმარისი თანხა");
    }
} else if(userIsFrequentClient) {
    if(balance >= total - userIsFrequentClient) {
        console.log("გადახდა წარმატებით შესრულდა");
    } else {
        console.log("თქვენ არ გაქვთ საკმარისი თანხა");
    }
} else if(userIsStudent) {
    if(balance >= total - userIsStudent) {
        console.log("გადახდა წარმატებით შესრულდა");
    } else {
        console.log("თქვენ არ გაქვთ საკმარისი თანხა");
    }
} else {
    if(balance >= total) {
        console.log("გადახდა წარმატებით შესრულდა");
    } else {
        console.log("თქვენ არ გაქვთ საკმარისი თანხა");
    }
}


// 5. თბილისი - ბათუმი


let fuel = 140;

if(fuel >= 10 && fuel < 20) {
    console.log('ამ საწვავით ჩახვალ იგოეთამდე');
} else if(fuel >= 25 && fuel < 30) {
    console.log('ამ საწვავით ჩახვალ გორამდე');
} else if(fuel >= 35 && fuel < 50) {
    console.log('ამ საწვავით ჩახვალ ხაშურამდე');
} else if(fuel >= 50 && fuel < 70) {
    console.log('ამ საწვავით ჩახვალ ქუთაისამდე');
} else if(fuel = 80) {
    console.log('ამ საწვავით ჩახვალ ბათუმამდე');
}

// 6. თბილისი - ბათუმი - თბილისი

{
    let fuel = 150;

    if(fuel >= 70 && fuel < 110) {
        console.log('ეს საწვავი ჩაგიყვანს ქუთაისამდე')
    } else if(fuel >= 109 && fuel < 130) {
        console.log('ეს საწვავი ჩაგიყვანს ხაშურამდე')
    } else if(fuel >= 125 && fuel < 150) {
        console.log('ეს საწვავი ჩაგიყვანს გორამდე')
    } else if(fuel >= 150 && fuel < 160) {
        console.log('ეს საწვავი ჩაგიყვანს თბილისამდე')
    }
}