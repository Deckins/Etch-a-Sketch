function createGrid(x){
	for(var rows=0; rows<x; rows++){
		for(var clms=0; clms<x; clms++){
			$('.container').append("<div class ='grid'></div>");
		}
	}
	return x;
}
function boxHover()
{
	var colors = ['orange','green','aqua','pink','coral','plum'];
	$('.grid').mouseover(function(){
		//randomly picks a number between 1 and size of the array and returns the value
		var index = colors[Math.floor(Math.random() * colors.length)];
		$(this).addClass(index);
	});
}
//Global variables input is set to 16 so that reset will create a new grid with the same default size
var input = 16;
$(document).ready(function(){
	createGrid(input);
	boxHover();
	$('.change').click(function(){
		
		input=prompt('Please Enter the Number of Columns and Rows');
		$('.grid').remove();
		createGrid(input); //input is changed once the chance button is clicked
		boxHover();

	})
	$('.reset').click(function(){
		$('.grid').removeClass();
		createGrid(input);
		boxHover();

	});
});

