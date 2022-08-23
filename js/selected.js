const selectedPlayers = []

function setPlayerSelectionList(players) {
    //get set player list field
    const playerlistField = document.getElementById('seleted-players')
    playerlistField.innerHTML = ''
    for (player of players) {
        const ol = document.createElement('ol');
        ol.innerHTML = `<li>${player}`;
        //set player list to player list field
        playerlistField.appendChild(ol)
    }
}
// onclick functon all player select button
function getButton(element) {
    // get player name
    const playerName = element.parentNode.children[1].innerText
    // selected button disable
    element.disabled = true;
    if (element.disabled == true) {
        //disable button color
        element.style.backgroundColor = 'rgba(162, 169, 175, 1)'
    }
    // push player name to selected list
    selectedPlayers.push(playerName)
    //selected player list field
    document.getElementById('number-of-selected-player').innerText = selectedPlayers.length;
    // set selected player list to selected player list field function
    setPlayerSelectionList(selectedPlayers)
    // alert message more than five player select 
    if (selectedPlayers.length == 6) {
        alert('more than five player not select please')
    }
}
