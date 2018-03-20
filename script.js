function createGrid(x){
	for(var rows=0; rows<x; rows++){
		for(var clms=0; clms<x; clms++){
			$('.container').append("<div class ='grid'></div>");
		}
	}
	//Scales the height and width of the container depending on the dimensions.
	$('.grid').height(500/x);
	$('.grid').width(500/x);
}
function boxHover()
{
	//var colors = ['orange','green','aqua','pink','coral','plum'];
	$('.grid').mouseover(function(){
		//randomly picks a number between 1 and size of the array and returns the value
		//var index = colors[Math.floor(Math.random() * colors.length)];
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		var color = 'rgb('+r+','+g+','+b+')';
		$(this).css("background-color",color);
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
		$('.grid').remove();
		createGrid(input);
		boxHover();

	});
});

