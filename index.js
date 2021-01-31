// alert("alert!");

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // {alert("i got clicked!");

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);


});
};


document.addEventListener("keypress", function(event) {

    makeSound(event.key);
  
    buttonAnimation(event.key);
  
  });