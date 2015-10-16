var Life = function (size){
    this.lines = size.lines;
    this.cols = size.cols;
    this.board = new Array(size.lines * size.cols);
    this.resetBoard();
};

Life.prototype = {
    getLines: function (){return this.lines;},
    getCols: function (){return this.cols;},
    getBoard: function (){return this.board;},
    setLines: function (lines){this.lines = lines;},
    setCols: function (cols){this.cols = cols;},
    setBoard: function (board){this.board = board;},
    updateBoard: function (){
	var nboard = new Array(this.board.length);
	var count; // cell counter
	var right, left, top, bottom; // is end cell?
	var t,c,l,i;
	for(i = 0; i < this.board.length; i++){
	    count = 0;
	    for(l = -1; l < 2; l++){
		for(c = -1; c < 2; c++){
		    t = i + this.cols*l + c;
		    if(!(t<0 ||
			 t >= this.lines * this.cols ||
			 ((t % this.cols == this.cols-1) && (t == i - 1)) ||
			 ((t % this.cols == 0) && (t == i + 1)))){
			if((l!==0) || (c!==0)){ 
			    count += (this.board[t])? 1 : 0;
			}
		    }
		}
	    }
	    if(this.board[i]){
		nboard[i] = (count==2||count==3)? true:false;
	    }else{
		nboard[i] = (count==3)? true:false;
	    }
	}
	this.board = nboard.slice();
    },
    resetBoard: function (){
	for(var i = 0; i < this.board.length; i++){
	    this.board[i] = false;
	}
    },
    randomizeBoard: function (rand){
	if(!rand) rand = Math.random;
	for(var i = 0; i < this.board.length; i++){
	    this.board[i] = rand() > 0.75;
	}
    }
};
