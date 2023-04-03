// 1. მისალმების ტექსტი

let userFirstName = 'giga';
console. log('სალამი $ {userFirstName}');
console. log('სალამი ' + userFirstName);


// 2. ონლაინ მაღაზია

let userBalance = 15;
let cartTotal = 35;

if(userBalance>=cartTotal) {
    console.log("გადახდა წარმატებით შესრულდა");
} else {
    console.log(`თქვენ არ გაქვთ საკმარისი თანხა, გთხოვთ დამატებით ჩარიცხოთ ${cartTotal - userBalance} ლარი ოპერაციის დასასრულებლად`);
}

// 3. გამოცდის ქულა

let maxScore = 100;
let barrier = 55;
let studentScore = 100;
if (studentScore >= barrier) {
    console.log(`გილოცავთ, თქვენ გადალახეთ ${barrier} ქულიანი ბარიერი ${studentScore/maxScore} ქულით`);
} else {
    console.log('ვწუხვარ, თქვენ ვერ გადალახეთ ' +barrier + ' ქულიანი ბარიერი ' + studentScore/maxScore + 'ქულით');
}

// 4. მიტანის სერვისი

let shippingIsPossible = true;
console.log(`თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდომი ${shippingIsPossible ? "" : "არ"} არის`);

// 5. პოლიტკორექტული მისალმება-დამშვიდობების მექანიზმი

let userLoggedIn = true;
let firstName = 'გიგა';
let userIsFemale = false;

if(userLoggedIn) {
    console.log(`სალამი ${userIsFemale ? 'ქალბატონო '+ firstName : `ბატონო ${firstName}`}`);
} else {
    console.log(`დროებით ${userIsFemale ? 'ქალბატონო '+ firstName : `ბატონო ${firstName}`}`);
}

// 6. ChatGPT-ის ლიმიტომეტრი

let userQuestions = [];
userQuestions[24] = 'question';

if(userQuestions.length >= 25) {
    console.log('შემდეგი კითხვის დასმას შეძლებთ 3 საათში');
}

// 7. ფიტნეს აპლიკაცია

let userWeights = [95, 85, 80, 80, 79];
let goal = 75;

console.log(`შედეგის მიღწევამდე დაგრჩა ${userWeights[userWeights.length - 1] - goal} კილო`);

// 8. როგორ სწავლობს ჩემი ბიჭი?

let gigosTestResults = [12, 5, 14];

if(gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0] >= 10) {
    console.log('კარგი შვილი გყავთ ქალბატონო, ნუ ნერვიულობთ');
} else if(gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0] >= 1) {
    console.log('რავიცი, ნიჭიერია მარა ზარმაცი');
} else {
    console.log('უხ გიგო გიგოოო');
}

// 9. როგორ სწავლობს ჩემი ბიჭი? ვერსია 2

if(gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0] >= 5) {
    console.log('კარგი შვილი გყავთ ქალბატონო, ნუ ნერვიულობთ');
} else if(gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0] >= 2) {
    console.log('რავიცი, ნიჭიერია მარა ზარმაცი');
} else {
    console.log('უხ გიგო გიგოოო');
}

// 10. ეროვნულები

let gigosResults = [25, 50];

if(gigosResults.length == 4) {
    if(gigosResults[0] >= 25 && gigosResults[1] >= 25 && gigosResults[2] >= 25 && gigosResults[3] >= 25) {
        console.log('ჩაგიბარებია და ვერ გაგიგია');
    } else {
        console.log('მომავალ წელს გამოიარე');
    }
} else if(gigosResults.length == 3) {
    if(gigosResults[0] >= 25 && gigosResults[1] >= 25 && gigosResults[2] >= 25) {
        console.log(`${4 - gigosTestResults.length} გამოცდაც და ეგაა`);                 // აქ რა შეცდომაა? მეძინება მაგრად ხვალ კიდევ ვნახავ :)))
    } else {
        console.log('მომავალ წელს გამოიარე');
    }
} else if(gigosResults.length == 2) {
    if(gigosResults[0] >= 25 && gigosResults[1] >= 25) {
        console.log(`${4 - gigosTestResults.length} გამოცდაც და ეგაა`);
    } else {
        console.log('მომავალ წელს გამოიარე');
    }
} else if(gigosResults.length == 1) {
    if(gigosResults[0] >= 25) {
        console.log(`${4 - gigosTestResults.length} გამოცდაც და ეგაა`);
    } else {
        console.log('მომავალ წელს გამოიარე');
    }
} else {
    console.log('დაგავიწყდა ხო გამოცდა, რომ გქონდა?');
}