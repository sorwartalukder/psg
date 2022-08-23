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

    /* const selectedPlayerName = {
        name: playerName
    } */
    selectedPlayers.push(playerName)
    document.getElementById('number-of-selected-player').innerText = selectedPlayers.length;
    setPlayerSelectionList(selectedPlayers)

    if (selectedPlayers.length == 6) {
        alert('more than five player not select please')
    }
}


// console.log(document.getElementById('number-of-selected-player'))
/* 
const selectButtons = document.getElementsByClassName('player-select')
for (selectButton of selectButtons) {
    selectButton.addEventListener('click', function (event) {
        let seletedButtonField = event.target.parentNode
        let playerName = document.getElementsByClassName('player-name')
        event.target.parentNode.removeChild(event.target.playerName)


        console.log(playerName)
    })
} */
