var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

context.font= '38pt Arial';
context.fillStyle = 'cornflowerblue';
context.strokeStyle = 'blue';

var timeID;

function clear_face(){
    context.clearRect(0,0,context.canvas.width, context.canvas.height);
}

var life = new Life({lines : 50, cols : 50});


function drawBoard(li,size){
    var lines = li.getLines();
    var cols = li.getCols();
    var board = li.getBoard();
    for(var i = cols; i < (cols * (lines - 1)); i++){
	if(board[i]){
	    context.fillRect((i%cols) * size, Math.floor(i/cols) * size, size,size);
	}
    }
}

life.randomizeBoard();

function do_life(li){
    li.updateBoard();
    clear_face();
    drawBoard(li,4);
    setTimeout('do_life(life)',200);
}

document.addEventListener("DOMContentLoaded",function(){
    console.log("test");
    var rand = document.getElementById('random');
    var start = document.getElementById('start');
    rand.onclick =function (){
        console.log("rand");
        life.randomizeBoard();
        return false;
    };
    start.onclick = function(){
        console.log("start");
        do_life(life);
        return false;
    };
});
