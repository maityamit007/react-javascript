// EVENT PROPAGATION
// Question 1 : Event Bubbling
document.addEventListener('DOMContentLoaded', (event)=>{
    const div = document.querySelector("div");
    const form = document.querySelector("form");
    const button = document.querySelector("button");
    
    // div.addEventListener("click", function (event) {
    //   alert("div");
    // });
    
    // form.addEventListener("click", function (event) {
    //   alert("form");
    // });
    
    // button.addEventListener("click", function (event) {
    //   alert("button");
    // });
    
    
    // Question 2 : event.target vs this.target vs event.currentTarget
    
    const div2 = document.querySelector("div");
    const form2 = document.querySelector("form");
    const button2 = document.querySelector("button");
    
    function func(event) {
      alert("currentTarget = " + event.currentTarget.tagName + ", target = " + event.target.tagName + ", this=" + this.tagName);
    }
    
    div2.addEventListener("click", func);
    form2.addEventListener("click", func);
    button2.addEventListener("click", func);
    
    
    // Question 3 : Event Capturing
    
    const div3 = document.querySelector("div");
    const form3 = document.querySelector("form");
    const button3 = document.querySelector("button");
    
    div3.addEventListener("click", function (event) {
      alert("div");
    },{capture: true});
    
    form3.addEventListener("click", function (event) {
      alert("form");
    },{capture: true});
    
    button3.addEventListener("click", function (event) {
      alert("button");
    },{capture: true});
    
    
    // Question 4 : Stop Propagation
    
    const div4 = document.querySelector("div");
    const form4 = document.querySelector("form");
    const button4 = document.querySelector("button");
    
    div4.addEventListener("click", function (event) {
      alert("div");
    });
    
    form4.addEventListener("click", function (event) {
        event.stopPropagation();
      alert("form");
    });
    
    button4.addEventListener("click", function (event) {
      alert("button");
    });
    
    
    // Question 5 : Event Delegation
    
    document.querySelector(".products").addEventListener("click", (event) => {
        console.log(event.target.className);
      
        if (event.target.tagName === "SPAN") {
          window.location.href += "/" + event.target.className;
        }
    });
    
    
    // Question 6 : What is the Output?
    
    const div5 = document.querySelector("div");
    const form5 = document.querySelector("form");
    const button5 = document.querySelector("button");
    
    div5.addEventListener("click", function (event) {
      alert("div");
    });
    
    form5.addEventListener("click", function (event) {
      alert("form");
    }, {capture: true});
    
    button5.addEventListener("click", function (event) {
      alert("button");
    });
    
    
    // Question 7 : Create a Modal which closes by clicking on negative space
    
    const container = document.querySelector(".modalContainer");
    const button6 = document.querySelector(".modalButton");
    
    button6.addEventListener("click", () => {
      toggleModal(true);
    });
    
    function toggleModal(toggle) {
      container.style.display = toggle ? "flex" : "none";
    }
    
    container.addEventListener("click", (e) => {
      if (e.target.className === "modalContainer") toggleModal(false);
    });      
})  