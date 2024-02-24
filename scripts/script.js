// const budget= document.getElementById('budget');

// const btPrice= budget.innerText;
// const price = parseInt(budgetPrice)

// const card= document.getElementById('card')
// const convertedPrice= card.innerText;
// const cardPrice=parseInt(convertedPrice)
// console.log(cardPrice)

// const left= document.getElementById('left')
// const convertedLeftPrice= card.innerText;
// const leftPrice=parseInt(convertedPrice)
// console.log(leftPrice)

function getConvertedValue(id) {
  const price = document.getElementById(id).innerText;
  const convertedPrice = parseInt(price);
  return convertedPrice;
}

const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
  btn.addEventListener("click", function (event) {
    const name = event.target.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    const catagory =
      event.target.parentNode.childNodes[5].childNodes[1].innerText;

    const selectedContainer = document.getElementById("selected-player");
    //     event.target.setAttribute("disable, false");

    const div = document.createElement("div");
    div.classList.add("grid");
    div.classList.add("grid-cols-3");

    const totalBudget = getConvertedValue("budget");
    console.log(totalBudget);
    const updatedBudget = totalBudget - parseInt(price);

    if (updatedBudget <= 0) {
      alert("Budget Limited");
      return;
    }
    event.target.setAttribute("disabled", true);
    event.target.parentNode.style.background = "gray";

    document.getElementById("budget").innerText = updatedBudget;
    console.log(updatedBudget);

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerText = name;
    p2.innerText = price;
    p3.innerText = catagory;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    selectedContainer.appendChild(div);

    const firstCount = getConvertedValue("card");
    if (firstCount + 1 > 6) {
      alert("Limit Completed");
      return;
    }

    const leftCardCount = getConvertedValue("left");
    if (leftCardCount <= 0 || firstCount == 6) {
      alert("Not more");
      return;
    }

    const playerBudget = getConvertedValue("budget");
    console.log(playerBudget);

    const cardCount = getConvertedValue("card");
    document.getElementById("card").innerText = cardCount + 1;

    const leftCount = getConvertedValue("left");
    document.getElementById("left").innerText = leftCount - 1;

    updatedTotalCost(price);
    updatedGrandTotal();
  });
}

function updatedGrandTotal(status) {
  const totalCost = getConvertedValue("total-Cost");
  if (status == undefined) {
    document.getElementById("grand-total").innerText = totalCost;
  } else {
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode == "Love420") {
      const discount = totalCost * 0.2;
      document.getElementById("grand-total").innerText = totalCost - discount;
    } else {
      alert("Please Enter Valid Coupon Code");
    }
  }
}

function updatedTotalCost(value) {
  const totalCost = getConvertedValue("total-Cost");
  const sum = totalCost + parseInt(value);
  document.getElementById("total-Cost").innerText = sum;
}
