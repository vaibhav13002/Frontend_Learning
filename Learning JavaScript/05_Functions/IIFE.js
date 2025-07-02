const runOnce = function(){
    console.log("This will run only one time");
}
runOnce();

(function(){
    console.log("Immediately Invoke Function Running....");
})();

// Arrow function

(()=> console.log("This also will run 1 time"))();

   