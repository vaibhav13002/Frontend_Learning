// document.getElementByTagName JavaScript ka ek method hai jo HTML page ke elements ko unke tag name ke basis par access karta hai. Lekin yahaan ek chhoti si typing mistake hai — sahi syntax hai:
document.getElementsByTagName();

// Notice karo getElement**s**ByTagName — yah plural "Elements" hota hai, kyunki yeh multiple elements ka collection return karta hai.
// Return Value:
// Yeh ek HTMLCollection return karta hai (live collection of elements), jisme matching tag ke saare elements hote hain.

//  Use Case:

const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].style.border = "2px solid red";
}