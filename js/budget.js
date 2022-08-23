function getAmount(elementId) {
    const elmentField = document.getElementById(elementId);
    const amountString = elmentField.value;
    elmentField.value = ''
    const amount = parseFloat(amountString)
    return amount;
}

function setAmount(totalAmount, elementId) {
    const expensesField = document.getElementById(elementId);
    let totalAmountFiexdTwoDigit = totalAmount.toFixed(2);
    expensesField.innerText = totalAmountFiexdTwoDigit;
}

document.getElementById('btn-calculate').addEventListener('click', function () {

    const totalSelectedPlayersField = document.getElementById('number-of-selected-player')
    const totalSelectedPlayersString = totalSelectedPlayersField.innerText;
    const totalSelectedPlayers = parseInt(totalSelectedPlayersString)

    const perPlayerAmount = getAmount('per-player-amount')
    let totalPlayerExpenses = perPlayerAmount * totalSelectedPlayers;

    if (isNaN(totalPlayerExpenses)) {
        totalPlayerExpenses = 0;
        alert('Please all filup amount');
        return setAmount(totalPlayerExpenses, 'total-player-expenses')
    }
    setAmount(totalPlayerExpenses, 'total-player-expenses')
})

document.getElementById('btn-calculate-totale').addEventListener('click', function () {
    const playerExpensesField = document.getElementById('total-player-expenses');
    const totalPlayerExpensesString = playerExpensesField.innerText;
    const totalPlayerExpenses = parseFloat(totalPlayerExpensesString);

    let managerCost = getAmount('manager-cost')
    let coashCost = getAmount('coach-cost')
    if (isNaN(managerCost)) {
        managerCost = 0;
        alert('Please all filup amount');

        if (isNaN(coashCost)) {
            coashCost = 0;
        }
        return setAmount(managerCost + coashCost, 'totale-cost-psg')
    }

    if (isNaN(coashCost)) {
        coashCost = 0;
        alert('Please all filup amount');
        return setAmount(managerCost + coashCost, 'totale-cost-psg')
    }
    const totalCostPsg = totalPlayerExpenses + managerCost + coashCost;
    setAmount(totalCostPsg, 'totale-cost-psg')
})