// 🔧 .insertAdjacentHTML(position, htmlString)
/* 
element.insertAdjacentHTML("position", "<tag>your HTML</tag>");

"position":-	Kahan insert karna hai (explained below)
htmlString:- 	Jo HTML tum insert karna chahte ho (string format)

Position	Meaning	Example
"beforebegin"	Element ke bahar, pehle	✅ Inserted before the element
"afterbegin"	Element ke andar, shuru me	✅ As first child
"beforeend"	Element ke andar, end me	✅ As last child
"afterend"	Element ke bahar, baad me	✅ Inserted after the element */

/////Example
{/* <div id="box">Hello</div>
let box = document.getElementById("box"); */}

box.insertAdjacentHTML("beforebegin", "<p>👈 Before Box</p>");
box.insertAdjacentHTML("afterbegin", "<p>🔼 Inside Box - Top</p>");
box.insertAdjacentHTML("beforeend", "<p>🔽 Inside Box - Bottom</p>");
box.insertAdjacentHTML("afterend", "<p>👉 After Box</p>");


// 🖼 Final DOM Structure:
  /*
<p>👈 Before Box</p>
<div id="box">
  <p>🔼 Inside Box - Top</p>
  Hello
  <p>🔽 Inside Box - Bottom</p>
</div>
<p>👉 After Box</p>

*/

/* Use Cases:
Tum JS se card ya alert box inject karna chahte ho page me

Tum page me kisi section ke andar HTML add karna chahte ho bina pura innerHTML wipe kiye

Avoids replacing whole innerHTML (better performance) 

⚠️ Important:
HTML string hone chahiye valid (like "<p>...</p>")

Directly DOM insert hota hai, no need to create elements manually

Doesn’t run <script> tags injected this way (for security)


✅ Comparison: innerHTML vs insertAdjacentHTML
Feature	innerHTML	insertAdjacentHTML()
Replaces content?	❌ Replaces full content	✅ Adds without replacing
Performance	⛔ Slower (DOM rebuild)	✅ Faster (targeted insert)
Insertion Options	❌ Only inside	✅ Inside + outside both
*/

