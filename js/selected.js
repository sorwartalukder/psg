const selectedPlayers = []

function setPlayerSelectionList(players) {
    const playerlistField = document.getElementById('seleted-players')
    playerlistField.innerHTML = ''
    for (player of players) {
        const ol = document.createElement('ol');
        ol.innerHTML = `<li>${player}`;
        playerlistField.appendChild(ol)
    }
}

function getButton(element) {
    const playerName = element.parentNode.children[1].innerText
    element.disabled = true;
    if (element.disabled == true) {
        element.style.backgroundColor = 'rgba(162, 169, 175, 1)'
    }

    selectedPlayers.push(playerName)
    document.getElementById('number-of-selected-player').innerText = selectedPlayers.length;
    setPlayerSelectionList(selectedPlayers)

    if (selectedPlayers.length == 6) {
        alert('more than five player not select please')
    }
}
