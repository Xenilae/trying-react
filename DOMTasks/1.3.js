const chessShow = () => {
    const chess = document.querySelector(".chessboard");
    let num = 0;

    for (let i = 0; i < 8; i++) {

        for (let h = 0; h < 8; h++) {

            if (num % 2 === 0) {
                chess.innerHTML += `<div class="chess_create black"></div>`;
            } else {
                chess.innerHTML += `<div class="chess_create"></div>`;
            }

            num++;
        }

    }
};

chessShow();