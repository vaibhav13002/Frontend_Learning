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

/////Event Bubbling
/*🔹 Definition (Simple Words):
Event bubbling is a process in which an event starts from the deepest (innermost) element and bubbles up to its parent elements, one by one.

Matlab:
Jab tum kisi element pe click karte ho, toh sirf ussi element pe nahi, uske parent, grandparent, etc. sab pe event listener activate ho sakta hai — agar lagaya ho toh.

///////////////////
🔹 What is IntersectionObserver?
JavaScript ka ek built-in browser API jo detect karta hai:
✅ "Koi element screen (viewport) me aa gaya ya nahi?"

🧠 Simple Words:
Tum bolte ho browser ko:
"Yeh element pe nazar rakho. Jaise hi yeh viewport me dikhe ya gayab ho, mujhe batana!"

✅ Basic Syntax:

const observer = new IntersectionObserver(callback, options);
observer.observe(targetElement);
🔍 Breakdown:
🔸 callback:
Ek function jo run hota hai jab target element screen me visible ho ya ho chuka ho.

(entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element visible hai
    }
  });
}
🔸 options:
Observer ka configuration object.

{
  root: null, // by default: viewport
  threshold: 0.5 // 50% visible hone par trigger kare
}

//// aise bhi likh sktey h 
const aboutSection = document.getElementById('about');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('About section is visible!');
    }
  });
}, {
  threshold: 0.5 // 50% visible hone par trigger hoga
});

observer.observe(aboutSection);
*/
