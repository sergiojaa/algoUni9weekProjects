// ### პროექტი 42 - Anagram Checker - ანაგრამის შემმოწმებელი
// შექმენით პროგრამა, რომელიც ადარებს ორ სტრიქონს და ადგენს არის თუ არა ისინი ანაგრამა (სიტყვა, რომელიც 
//წარმოიქმნება სხვა სიტყვის ასოების გადაადგილებით). პროგრამამ უნდა მოითხოვოს ორივე input-ის წინადადება და 
//პასუხი ისე დაბეჭდოს, როგორც მაგალითშია ნაჩვენები.
// Example Output
// ```shell
// > Enter two strings and I'll tell you if they
// > are anagrams:
// > Enter the first string: note
// > Enter the second string: tone
// > "note" and "tone" are anagrams.
// ```
// * გამოიყენეთ ფუნქცია, სახელად isAnagram, რომელიც არგუმენტად იღებს ორ სტრიქონს და აბრუნებს boolean-ს. 
//გამოიძახეთ ეს ფუნქცია თქვენი მთავარი ფუნქციიდან.
// * შეამოწმეთ, ორივე სიტყვა ერთნაირი სიგრძისაა თუ არა.
// function isAnagram(str1, str2){
//     if(str1.length === str2.length ){

//     }
// }
// isAnagram(anano, onana)

// ### პროექტი 43 - Password Strength Indicator - პაროლის სიძლიერის შემფასებელი
// ექმენით პროგრამა, რომელიც განსაზღვრავს მოცემული პაროლის სიძლიერეს ამ წესების საფუძველზე:

// • ძალიან სუსტი პაროლი შეიცავს მხოლოდ ციფრებს და რვა სიმბოლოზე ნაკლებია.
// • სუსტი პაროლი შეიცავს მხოლოდ ასოებს და რვა სიმბოლოზე ნაკლებია.
// • ძლიერი პაროლი შეიცავს ასოებს და მინიმუმ ერთ რიცხვს, ასევე, მინიმუმ რვა სიმბოლოს.
// • ძალიან ძლიერი პაროლი შეიცავს ასოებს, ციფრებს და სპეციალურ სიმბოლოებს და არის მინიმუმ რვა სიმბოლოს სიგრძის.

// Example Output
// ```shell
// > The password '12345' is a very weak password.
// > The password 'abcdef' is a weak password.
// > The password 'abc123xyz' is a strong password.
// > The password '1337h@xor!' is a very strong password.
// ```
// * შექმენით passwordValidator ფუნქცია, რომელიც მიიღებს პაროლს არგუმენტად და დააბრუნებს მნიშვნელობას, რომელიც შეფასდება პაროლის სიძლიერის 
// დასადგენად. ფუნქციამ არ უნდა დააბრუნოს სტრიქონის (string) ტიპის მნიშვნელობა.
// let password1 = 1234567
// let password2 = 'abcdef'
// let password3 = 'abc123xyz'
// let password4 = '1337h@xor!'
// function passwordValidator(password){
//     if(password1 === )
// }
// passwordValidator(sergi123)
// ### პროექტი 44 - Months to Pay Off a Credit Card - საკრედიტო ბარათის დაფარვისთვის საჭირო თვეები
// საკრედიტო ბარათის ბალანსის დაფარვას შეიძლება გაცილებით მეტი დრო დასჭირდეს, ვიდრე მის მფლობელს წარმოუდგენია.
//  გასარკვევად ფორმულა კი არც ისე "მიმზიდველია"... მაგრამ ფორმულის სირთულე შეგიძლიათ, ფუნქციით დამალოთ. 

// შექმენით პროგრამა, რომელიც დაგეხმარებათ განსაზღვროთ, რამდენი თვე დასჭირდება საკრედიტო ბარათის ბალანსის დაფარვას. 
// პროგრამამ უნდა სთხოვოს მომხმარებელს შემდეგი ინფორმაციის შეყვანა: საკრედიტო ბარათის ბალანსი, ბარათის APR (წლიური საპროცენტო განაკვეთი),
//  და თვიური გადასახადი. შემდეგ პროგრამამ უნდა დააბრუნოს თვეების რაოდენობა. ფორმულა შემდეგია:

// ![Image](/images/week3-formula.png)

// • n არის თვეების რაოდენობა.
// • i არის დღიური მაჩვენებელი (APR / 365).
// • b - ბალანსი.
// • p - ყოველთვიური გადასახდელი თანხა.

// Example Output
// ```shell
// > What is your balance? 5000
// > What is the APR on the card (as a percent)? 12
// > What is the monthly payment you can make? 100

// > It will take you 70 months to pay off this card.
// ```

// * გამოიყენეთ ფუნქცია, სახელწოდებით countMonthsUntilPaidOff, რომელიც არგუმენტად იღებს ბალანსს, APR-ს და ყოველთვიურ გადასახადს და
//  აბრუნებს თვეების რაოდენობას. ამ მნიშვნელობებს ფუნქციის გარედან არ მიწვდეთ.

// ### პროექტი 45 - Validating Inputs - Input-ების ვალიდაცია
// ხშირად პროგრამის ლოგიკის დაშლა პატარა ფუნქციებად გვიწევს, რომლებიც თითოეულ დავალებას ასრულებენ. შემდეგ ეს ფუნქციები 
// თანმიმდევრობით, მთლიანი პროგრამის ასამუშავებლად გამოძახება.

// დაწერეთ პროგრამა, რომელიც მოგთხოვთ სახელს, გვარს, თანამშრომლის ID-ს და ZIP კოდს. დარწმუნდით, რომ input-ები ვალიდურია 
// შემდეგი წესების მიხედვით:

// • სახელი უნდა იყოს შევსებული.
// • გვარი უნდა იყოს შევსებული.
// • სახელი და გვარი უნდა იყოს მინიმუმ ორი სიმბოლოს სიგრძის.
// • თანამშრომლის ID არის AA-1234 ფორმატში - ორი ასო, დეფისი და ოთხი რიცხვი.
// • ZIP კოდი უნდა იყოს რიცხვი.

// არასწორ მონაცემებზე აჩვენეთ შესაბამისი შეცდომის შეტყობინებები.
// Example Output
// ```shell
// > Enter the first name: J
// > Enter the last name:
// > Enter the ZIP code: ABCDE
// > Enter an employee ID: A12-1234
// > "J" is not a valid first name. It is too short.
// > The last name must be filled in.
// > The ZIP code must be numeric.
// > A12-1234 is not a valid ID.

// > Enter the first name: Jimmy
// > Enter the last name: James
// > Enter the ZIP code: 55555
// > Enter an employee ID: TK-421
// > There were no errors found.
// ```
// * შექმენით ფუნქცია თითოეული ტიპის ვალიდაციისთვის. შემდეგ შექმენით validateInput ფუნქცია, რომელიც იღებს ყველა Input-ის მონაცემს და
//  იძახებს კონკრეტული ვალიდაციის ფუნქციებს.

// ### პროექტი 46 - Camel Case
// თუ ცვლადი არაერთ სიტყვას შეიცავს, ზოგიერთ ენაში ხშირია ცვლადების სახელებისთვის camel case-ის გამოყენება, - პირველი
//  სიტყვის პირველი ასო პატარაა, ყოველი მომდევნო სიტყვის პირველი ასო კი დიდი. მაგალითად, მომხმარებლის სახელის ცვლადს შეიძლება ეწოდოს
//   firstName, მისთვის სასურველი მეტსახელისთვის კი - preferredFirstName.

// ზოგიერთ ენაში ამის საპირისპიროდ ე.წ. snake case გამოიყენება, სადაც სიტყვები გამოყოფილია ქვედა ხაზებით (_) და ყველა ასო მცირე რეგისტრშია.
//  მაგალითად, იმავე ცვლადებს დაერქმევა first_name და preferred_first_name.

// შექმენით პროგრამა, რომელიც მომხმარებელს მოუწოდებს, input-ად შეიყვანოს ცვლადის სახელი camel case-ში, პროგრამამ კი უნდა დაბეჭდოს იგივე 
// სახელი snake case-ში. დაუშვით, რომ მომხმარებლის ჩანაწერი აუცილებლად camel case სტილში იქნება. 

// Example Output
// ```shell
// > camelCase: name
// > snake_case: name
// > camelCase: firstMame
// > snake_case: first_name
// > camelCase: preferredFirstName
// > snake_case: preferred_first_name

// ### პროექტი 47 - Coke Machine - კოკა-კოლის მანქანა
// დავუშვათ, რომ მანქანა ყიდის კოკა-კოლას ბოთლებს 50 ცენტად. მასში მხოლოდ შემდეგი მონეტების ჩაგდება შეგვიძლია: 25-ცენტიანი, 
// 10-ცენტიანი და 5-ცენტიანი.

// დაწერეთ პროგრამა, რომელიც Input-ად სთხოვს მომხმარებელს მონეტის "ჩაგდებას" მანამ, სანამ თანხა 50 ცენტს არ მიაღწევს.
//  პროგრამამ ყოველი მონეტის "ჩაგდების" შემდეგ მომხმარებელს უნდა აცნობოს, რამდენი დარჩა გადასახდელი და კვლავ სთხოვოს
//   input-ის შეყვანა. მას შემდეგ, რაც მომხმარებელი მინიმუმ 50 ცენტს შეიტანს, დაბეჭდეთ, რამდენი ცენტი ხურდა ეკუთვნის მას. 
//   დაუშვით, რომ მომხმარებელი მხოლოდ მთელ რიცხვებს შეიყვანს - ყველა ისეთი რიცხვის იგნორირება მოახდინეთ, რომელიც დაშვებული
//    მონეტებიდან არც ერთს არ ემთხვევა.

// Example Output
// ```shell
// > Amount Due: 50
// > Insert Coin: 25
// > Amount Due: 25
// > Insert Coin: 10
// > Amount Due: 15
// > Insert Coin: 5
// > Amount Due: 10
// > Insert Coin: 10
// > Change Owed: 0
// ```

// vqmnit arrays sadac validuri cifrebi ikneba.1,5,10,25. vqmnit cvlads vanichbt 50s. whileshi vwert sanam 50naklebia nulze,gamoakonsolos 
// vali ra.50 rasac mivanichet.whileshive vkmnit momxmarebeli rasac sheikvans prompts.
//mere ifshi vwert tu validuri shekvanili sheicavs im cifrsr rac momxmarebelmasheikvana,mashin 50s vaklebt momxmareblis shekvanils.
// tyarada invalid coin.mere 50s vadarebt 0s ifshi,da vwert consolshi 50is cvlads imitoro kve gamoklebulia.aseve vareturnebt
// vakonsolebt if is garet chagdeower 0. vidzaebt funqcias
// function coinGame(){
//     const  validCoins = [5,10,25]
//     let debt = 50;
//     while(debt > 0){
//         console.log(`gadasaxadi: ${debt}`);
//         const userMoney = Number(prompt('enter the amount of money'))
//         if (validCoins.includes(userMoney)) {
//             debt -= userMoney;
//         } else {
//             console.log('aravaliduri fuli');
//         }
//     }
    
//     if(debt <= 0){
//         console.log(`davalianebis cvlileba ${debt}`)

//     }else{
//         console.log(`davalianebis cvlileba: 0`)
//     }
// }

    


// coinGame()


// ### პროექტი 48 - Just setting up my twttr - ჩემი twttr-ის დაყენება
// ტექსტური შეტყობინებების ან ე.წ. "ტვიტების" გაგზავნისას, არც ისე იშვიათია სიტყვების შემოკლება დროისა და შეტყობინების სიგრძის დაზოგვის მიზნით. 
//ეს ხშირად ხმოვანთა გამოტოვების ხარჯზე ხდება, როგორც თავდაპირველად Twitter-ს ეძახდნენ twttr-ს. 

// შექმენით პროგრამა, რომელიც მომხმარებელს სთხოვს ტექსტის შეყვანას და შემდეგ იმავე ტექსტს დაბეჭდავს, მაგრამ ყველა ხმოვანს (A, E, I, O და U) 
//გამოტოვებს, მიუხედავად იმისა, დიდი ასოებით ეწერა ისინი თუ - პატარა ასოებით.

// Example Output
// ```shell
// > Input: Twitter
// > Output: Twttr
// > Input: What's your name?
// > Output: Wht's yr nm?
// let userString = prompt('enter the sentences')
// let newUserString = userString.replace(/[aeiou]/gi, ''); // mdn-ze vnaxe es.
// console.log(newUserString)




