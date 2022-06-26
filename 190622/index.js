console.log('Game is started')

// một biến
const length = 8;
// data table
let dataBoard = new Map();

// viết hàm tạo bảng dựa theo số cột
function createBoard() {
    document.getElementById('start-btn').style.display = 'none';
    let boardHTML = '';
    for (let i = 1; i <= length; i++) {
        boardHTML += '<tr>';
        for (let j = 1; j <= length; j++) {
            boardHTML += `<td id=${i}.${j}></td>`
        }
        boardHTML += '</tr>'
    }
    document.getElementById('main-table').innerHTML = boardHTML;
}

// generate data cho bảng
// [[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1]]
// Map
function generateDataBoard() {
    for (let i = 1; i <= length; i++) {
        for (let j = 1; j <= length; j++) {
            let cellData = Math.round(Math.random());
            dataBoard.set(`${i}.${j}`, cellData);
        }
    }
}

// thêm sự kiện clikc event
function addAllCellEvtClick() {
    for (let i = 1; i <= length; i++) {
        for (let j = 1; j <= length; j++) {
            document.getElementById(`${i}.${j}`).addEventListener('click', () => {
                console.log(`data at cell row ${i}, column ${j}: `, dataBoard.get(`${i}.${j}`))
                let bombCount = checkDataInCell(i, j);
                if (bombCount >= 0) {
                    document.getElementById(`${i}.${j}`).style.backgroundColor = 'white';
                    document.getElementById(`${i}.${j}`).innerHTML = bombCount;
                }
                else {
                    document.getElementById(`${i}.${j}`).innerHTML = '<img class="bomb-img" src="./bomb.jpg" />'
                    alert('Game over');
                    document.getElementById('start-btn').style.display = 'block';
                }

            })
        }
    }
}

// hàm check ô được click có mìn hay k, nếu có thì game over, nếu k thì hiển thị số mìn xung quanh.
function checkDataInCell(i, j) {
    // check if dataBoard tạ=i row i column j = 0
    if (dataBoard.get(`${i}.${j}`) === 0) {
        return -1;
    }
    // if dataBoard tại i j bằng 1
    if (dataBoard.get(`${i}.${j}`) === 1) {
        let count = 0;
        // hiển thị xem xung quanh ô hiện tại có bao nhiêu mìn
        // [i-1][j-1]
        if (dataBoard.get(`${i - 1}.${j - 1}`) !== undefined) {
            if (dataBoard.get(`${i - 1}.${j - 1}`) === 0) {
                count++;
            }
        }
        // [i-1][j]
        if (dataBoard.get(`${i - 1}.${j}`) !== undefined) {
            if (dataBoard.get(`${i - 1}.${j}`) === 0) {
                count++;
            }
        }
        // [i-1][j+1]
        if (dataBoard.get(`${i - 1}.${j + 1}`) !== undefined) {
            if (dataBoard.get(`${i - 1}.${j + 1}`) === 0) {
                count++;
            }
        }
        // [i][j-1]
        if (dataBoard.get(`${i}.${j - 1}`) !== undefined) {
            if (dataBoard.get(`${i}.${j - 1}`) === 0) {
                count++;
            }
        }
        // [i][j+1]
        if (dataBoard.get(`${i}.${j + 1}`) !== undefined) {
            if (dataBoard.get(`${i}.${j + 1}`) === 0) {
                count++;
            }
        }
        // [i+1][j-1]
        if (dataBoard.get(`${i + 1}.${j - 1}`) !== undefined) {
            if (dataBoard.get(`${i + 1}.${j - 1}`) === 0) {
                count++;
            }
        }
        // [i+1][j]
        if (dataBoard.get(`${i + 1}.${j}`) !== undefined) {
            if (dataBoard.get(`${i + 1}.${j}`) === 0) {
                count++;
            }
        }
        // [i+1][j+1]
        if (dataBoard.get(`${i + 1}.${j + 1}`) !== undefined) {
            if (dataBoard.get(`${i + 1}.${j + 1}`) === 0) {
                count++;
            }
        }
        console.log('booms around: ', count);
        return count;
    }
}

function startGame() {
    createBoard()
    generateDataBoard()
    addAllCellEvtClick();
}
console.log(dataBoard)