const selectedPlayers = []

function setPlayerSelectionList(players) {
    const playerlistField = document.getElementById('seleted-players')
    playerlistField.innerHTML = ''
    for (player of players) {
        // console.log(players)
        const ol = document.createElement('ol');
        ol.innerHTML = `<li>${player}`;
        playerlistField.appendChild(ol)
    }
}
function getButton(element) {
    const playerName = element.parentNode.children[1].innerText
    element.disabled = true;
    /* const selectedPlayerName = {
        name: playerName
    } */
    selectedPlayers.push(playerName)
    document.getElementById('number-of-selected-player').innerText = selectedPlayers.length;
    setPlayerSelectionList(selectedPlayers)
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
