var nums = document.querySelectorAll("#keyboard>div");
  var bag = document.querySelector("#display");
  for (var i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", myCalculator);
  }
  function myCalculator() {
    var targetNumber = event.target.innerText;
    switch (targetNumber) {
      case "C":
        bag.innerText = "";
        break;
      case "=":
        bag.innerText = eval(bag.innerText);
        break;
      default:
        bag.innerText += targetNumber;
    }
  }