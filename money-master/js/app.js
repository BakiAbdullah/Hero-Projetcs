// Get all Ids for Calculate btn
document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeAmount = getValueById("income-input");
  const foodExpenses = getValueById("food");
  const rentExpenses = getValueById("rent");
  const clothesExpenses = getValueById("clothes");

  if (
    isNaN(incomeAmount) ||
    isNaN(foodExpenses) ||
    isNaN(rentExpenses) ||
    isNaN(clothesExpenses)
  ) {
    alert("Input is not valid!");

    ClearInput("income-input");
    ClearInput("food");
    ClearInput("rent");
    ClearInput("clothes");
    return;
  } else {
    const expensesTotal = foodExpenses + rentExpenses + clothesExpenses;
    if (incomeAmount < expensesTotal) {
      alert("Your income is not enough!");
      return;
    }
    const grandTotalExpense = getId("total-expense");
    grandTotalExpense.innerText = expensesTotal;

    const balanceTotal = getId("balance");
    balanceTotal.innerText = incomeAmount - expensesTotal;
  }
});

// Savings Section
document.getElementById("save-btn").addEventListener("click", function () {
  const incomeAmount = getValueById("income-input");
  const saveInputAmount = getValueById("save-input");

  if (isNaN(saveInputAmount)) {
    alert('Input is not valid!"');
    ClearInput("save-input");
    return;
  }
  const savingAmountField = getId("saving-amount");
  const savingsAmount = (incomeAmount * saveInputAmount) / 100;
  savingAmountField.innerText = savingsAmount;

  const balanceTotal = getId("balance");
  const balanceTotalStr = balanceTotal.innerText;
  const balanceToatalNum = parseInt(balanceTotalStr);

  const remainingBalance = getId("remaining-balance");
  remainingBalance.innerText = balanceToatalNum - savingsAmount;
  ClearInput("save-input");
});
