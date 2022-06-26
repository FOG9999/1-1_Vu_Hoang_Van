console.log('xxx')

// delacre: length, currentTurn, startGame, 
const length = 3;
let currentTurn = 0; // =0 Khi game chưa bắt đầu, =1 khi người đánh, = 2 khi máy đánh
let gameIsStarted = false;
let gameData = new Map();

// generate table
const generateBoardGame = () => {
    let tableBody = document.getElementById('table-body');
    let board = "";
    for (let i = 1; i <= length; i++) {
        board += '<tr>'
        for (let j = 1; j <= length; j++) {
            board += `<td id=${i}.${j}></td>`
        }
        board += '</tr>'
    }
    tableBody.innerHTML = board;
}

// init data
const initData = () => {
    for (let i = 1; i <= length; i++) {
        for (let j = 1; j <= length; j++) {
            gameData.set(`${i}.${j}`, 0);
        }
    }
}

// thêm sự kiện click
const addEvtClickOnTable = () => {
    for (let i = 1; i <= length; i++) {
        for (let j = 1; j <= length; j++) {
            let clickedCell = document.getElementById(`${i}.${j}`)
            clickedCell.addEventListener('click', () => {
                // turn user
                if (currentTurn === 1) {
                    clickedCell.innerHTML = 'X';
                    gameData.set(`${i}.${j}`, 1);
                    let isGameOver = checkGameOver();
                    if (isGameOver) {
                        // startGame();
                        return;
                    }
                }
                // turn machine
                // else if (currentTurn === 2) {
                //     clickedCell.innerHTML = 'O';
                // }
                // game is not started
                else {
                    alert('Game not started')
                }
                currentTurn = (currentTurn === 1) ? 2 : 1;
                document.getElementById('current-turn').innerHTML = (currentTurn === 1) ? "It's your turn" : "It's machine's turn"
                // let machine play
                setTimeout(() => {
                    machinePlay();
                }, 2000);
            })
        }
    }
}

// on turN MACHINE
const machinePlay = () => {
    // mảng lưu trữ các key của những ô chưa được đánh
    let emptyCells = [];
    gameData.forEach((val, key) => {
        if (!val) {
            emptyCells.push(key);
        }
    })
    // pick random 1 key, update data = 2
    let randomIndex = Math.floor(Math.random() * emptyCells.length); // 0 -> n-1
    gameData.set(emptyCells[randomIndex], 2);
    document.getElementById(emptyCells[randomIndex]).innerHTML = 'O';
    currentTurn = (currentTurn === 1) ? 2 : 1;
    document.getElementById('current-turn').innerHTML = (currentTurn === 1) ? "It's your turn" : "It's machine's turn"
    let isGameOver = checkGameOver();
    if (isGameOver) {
        startGame();
        return;
    }
}

// thêm hàm check điều kiện thắng, hàm check game over
const checkGameOver = () => {
    // check if there is a winner
    let currentUserWin = true;
    // horizontal
    for (let i = 1; i <= length; i++) {
        currentUserWin = true;
        for (let j = 1; j <= length; j++) {
            if (gameData.get(`${i}.${j}`) !== currentTurn) {
                currentUserWin = false;
            }
        }
        if (currentUserWin) {
            break;
        }
    }
    if (currentUserWin) {
        console.log("thắng theo hàng ngang")
        alert((currentTurn === 1) ? "You win" : "You lose");
        return true;
    }
    // vetical
    currentUserWin = true;
    for (let i = 1; i <= length; i++) {
        currentUserWin = true;
        for (let j = 1; j <= length; j++) {
            if (gameData.get(`${j}.${i}`) !== currentTurn) {
                currentUserWin = false;
            }
        }
        if (currentUserWin) {
            break;
        }
    }
    if (currentUserWin) {
        console.log("thắng theo chiều dọc")
        alert((currentTurn === 1) ? "You win" : "You lose");
        return true;
    }
    // diagonal
    currentUserWin = true;
    let arrDauHuyen = [], arrDauSac = [];
    for (let i = 1; i <= length; i++) {
        arrDauHuyen.push(gameData.get(`${i}.${i}`));
        arrDauSac.push(gameData.get(`${i}.${length + 1 - i}`));
    }
    if (arrDauHuyen.filter(ele => ele !== currentTurn).length > 0) {
        currentUserWin = false;
    }
    if (currentUserWin) {
        console.log("thắng theo đường chéo")
        alert((currentTurn === 1) ? "You win" : "You lose");
        return true;
    }
    currentUserWin = true;
    if (arrDauSac.filter(ele => ele !== currentTurn).length > 0) {
        currentUserWin = false;
    }
    if (currentUserWin) {
        console.log("thắng theo đường chéo")
        alert((currentTurn === 1) ? "You win" : "You lose");
        return true;
    }
    // no empty cells
}

const startGame = () => {
    gameIsStarted = true;
    currentTurn = Math.round(Math.random() + 1);
    document.getElementById('current-turn').innerHTML = (currentTurn === 1) ? "It's your turn" : "It's machine's turn"
    console.log('current turn: ', currentTurn);
    generateBoardGame();
    initData();
    addEvtClickOnTable();
}

// startGame();