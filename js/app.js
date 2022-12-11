
//Detecting the section in viewport
const observer= new IntersectionObserver(function(entries, observer){
    
    entries.forEach(function (entry) {
        //getting the id of the href attribute to see if the id matches the name of the section beeing viewed
        const linkId= document.querySelector(`a[href="#${entry.target.id}"]`);

        if (!entry.isIntersecting) {
            //remove the active class from it and from its corresponding navbar item
            linkId.classList.remove('linkActive');
     
        }
        //if it IS intersecting
        else {
            //ok, now add the active classes
            linkId.classList.add('linkActive');
    }
    });
}, //the option we declared earlier at the top of the page
options);

//revoking the function passing the array 'sections' and looping over each 'section' and detecting it
sections.forEach(section => {
    observer.observe(section);
});




function wwe(){
    fetch("https://api.thingspeak.com/channels/1909818/feeds.json?api_key=ZQT8QOHAFZQW601U&results=2")
    .then(Response => Response.json())
    .then(data => 
        console.log("read feed",data))
}
wwe()


function law(){
    fetch("https://api.thingspeak.com/channels/1909818/fields/1.json?api_key=ZQT8QOHAFZQW601U&results=2")
    .then(Response => Response.json())
    .then(data => 
        console.log("read field",data))
}
law()


document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Quickly!.", "Before.", "It.", "Is", "Too Late!"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector(".welcome").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });


  function myFunction(x) {
    if (x.matches) { // If media query matches
      document.ul.removeAttribute("data");
    }
  }
  
  
  var x = window.matchMedia("(max-width: 790px)")
  myFunction(x) // Call listener function at run time
  x.addEventListener(myFunction) // Attach listener function on state changes