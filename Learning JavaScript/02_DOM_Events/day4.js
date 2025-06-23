// document.querySelector('selector')
/* Ye method HTML ke andar se pehla element return karta hai jo selector match karta hai (just like CSS selector).
➡️ Sirf pehla match return karega. */

// JavaScript me event names case-sensitive hote hain. Sirf "click" (lowercase) likho, "Click" nahi.


// document.querySelectorAll(".show-modal");


/* modal.classList.remove("hidden"); 
.classList ek JavaScript property hai jo kisi HTML element ki saari classes ko manage karne ke liye use hoti hai.

Kya karta hai?
Aap kisi element ki classes ko add, remove, ya toggle kar sakte hain.
element.classList.add("className") — class add karta hai
element.classList.remove("className") — class hataata hai
element.classList.toggle("className") — class ho toh hataata hai, nahi ho toh add karta hai   */


 ///////////////////////////
//  btnsOpenModal[i].addEventListener("click",function(){
// Node list ko ek ek krke iterate kr rhe h and event listener laga rhe h taki each button ko function de sakey

/* z-index ek CSS property hai jo decide karti hai ki konsi element upar dikhegi aur konsi neeche, jab do ya zyada elements ek dusre ke upar overlap kar rahe ho.
Higher z-index → element upar dikhega
Lower z-index → element peeche chala jaayega

 Important: z-index sirf positioned elements pe kaam karta hai:
Yaani jinke position:
relative
absolute
fixed
sticky  */
/* Example:- boxes overlapping

<div style="width:100px; height:100px; background:red; position:absolute; left:20px; top:20px; z-index:1;"></div>
<div style="width:100px; height:100px; background:green; position:absolute; left:40px; top:40px; z-index:3;"></div>
<div style="width:100px; height:100px; background:blue; position:absolute; left:60px; top:60px; z-index:2;"></div>
✅ Output:

Green box sabse upar
Blue box beech me
Red box sabse neeche  */


// Jab aap modal open karte ho, blur effect sirf background (overlay) par lagta hai, modal par nahi. Yeh ek important CSS concept hai.

///////////////////////////////////////
// Handling Key press
/* document.addEventListener("keydown",function(e){
    console.log(e.key);
    if(e.key === "Escape"){  // case sensitive
        if(!modal.classList.contains("hidden")){
            closeModal();
        }
    }
}) */

/* Kya hai e?
Jab bhi koi event (jaise keydown) hota hai, browser ek event object banata hai.
Yeh object event ke baare me saari information rakhta hai (kaunsa key dabaya, kaunsa button click hua, etc.).
Aap is object ko function ke parameter ke roop me le sakte hain.
(Yahan e likha hai, aap event bhi likh sakte hain.) */

//////////////////PigGame//////////////////

