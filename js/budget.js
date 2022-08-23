// get amount from input field function 
function getAmount(elementId) {
    const elmentField = document.getElementById(elementId);
    const amountString = elmentField.value;
    elmentField.value = ''
    const amount = parseFloat(amountString)
    return amount;
}
// set amount to inner text function 
function setAmount(totalAmount, elementId) {
    const expensesField = document.getElementById(elementId);
    let totalAmountFiexdTwoDigit = totalAmount.toFixed(2);
    expensesField.innerText = totalAmountFiexdTwoDigit;
}

// click handler total player amount calculator 
document.getElementById('btn-calculate').addEventListener('click', function () {
    // get selected list total player from inner text 
    const totalSelectedPlayersField = document.getElementById('number-of-selected-player')
    const totalSelectedPlayersString = totalSelectedPlayersField.innerText;
    const totalSelectedPlayers = parseInt(totalSelectedPlayersString)
    // get per player cost from input field function
    const perPlayerAmount = getAmount('per-player-amount')
    let totalPlayerExpenses = perPlayerAmount * totalSelectedPlayers;

    if (isNaN(totalPlayerExpenses)) {
        totalPlayerExpenses = 0;
        alert('Please all filup amount');
        return setAmount(totalPlayerExpenses, 'total-player-expenses')
    }
    //set total player cost function
    setAmount(totalPlayerExpenses, 'total-player-expenses')
})

// click handler total tean cost amount calculator 
document.getElementById('btn-calculate-totale').addEventListener('click', function () {
    // get total player cost from innerText
    const playerExpensesField = document.getElementById('total-player-expenses');
    const totalPlayerExpensesString = playerExpensesField.innerText;
    const totalPlayerExpenses = parseFloat(totalPlayerExpensesString);
    //get manager cost from input field functon
    let managerCost = getAmount('manager-cost')
    //get coach cost from input field functon
    let coachCost = getAmount('coach-cost')
    if (isNaN(managerCost)) {
        managerCost = 0;
        alert('Please all filup amount');

        if (isNaN(coachCost)) {
            coachCost = 0;
        }
        return setAmount(managerCost + coachCost, 'totale-cost-psg')
    }

    if (isNaN(coachCost)) {
        coachCost = 0;
        alert('Please all filup amount');
        return setAmount(managerCost + coachCost, 'totale-cost-psg')
    }
    //set total psg team cost functon
    const totalCostPsg = totalPlayerExpenses + managerCost + coachCost;
    setAmount(totalCostPsg, 'totale-cost-psg')
})