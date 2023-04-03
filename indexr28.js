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

let testScore =100;
if (testScore >= 95) {
    console. log('კეთილი იყოს თქვენი მობრძანება საუკეთესო კარგ სკოლაში')
}  else if(testScore>=70) {
    console.log('კეთილი იყოს თქვენი მობრძანება ციფრულ ძალიან მაგარ და კარგ სკოლა ნოვატორში');
} else if(testScore>=50) {
    console.log("კეთილი იყოს თქვენი მობრძანება გეპეიში");
} else {
    console.log("იმეცადინე კარგად რომ შეძლო მიშას ონლაინ კურსის ყიდვა და მიიღო კარგი განათლება :)");
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

let fuel = 160;

if(fuel>=80) {
    console.log("ბათუმის ამინდებს ჩახედე?");
    if(fuel>=80+80) {
        console.log("თბილისში კი ჩახვალ ");
    } else if(fuel>=80+70) {
        console.log("იგოეთში საწვავს ვერ ჩაასხამ");
    } else if(fuel>=80+60) {
        console.log("გორში დიდხანს არ გავჩერდეთ,");
    } else if(fuel>=80+50) {
        console.log("ხაშურში ჩავედით");
    } else if(fuel>=80+30) {
        console.log("უკანა გზაზე ცოტას დავისვენებ და საწვავსაც შეავსებ");
    }
} else if(fuel>=50) {
    console.log("ქუთაისში ჩავქრებით ;)");
} else if(fuel>=30) {
    console.log(" ხაშურში რატო გადაწყვიტე საწვავის შევსება?");
} else if(fuel>=20) {
    console.log("თბილისში ვერ გაავსე გორში რომ არ გაგეჩერებინა?");
} else if(fuel>=10) {
    console.log("იგოეთამდე თუ ჩავალთ ბარემ თბილისამდეც წამოგყვები თბილისში ჩამიყვანე");
}