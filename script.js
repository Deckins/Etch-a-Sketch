function createGrid(x){
	for(var rows=0; rows<x; rows++){
		for(var clms=0; clms<x; clms++){
			$('.container').append("<div class ='grid'></div>");
		}
	}
}
function boxHover()
{
	$('.grid').mouseover(function(){
		$(this).addClass('style');
	});
}
//Reset should clear out all the hovers of the original dimensions

var input=prompt('Please Enter the Number of Columns and Rows');
$(document).ready(function(){
	createGrid(16);
	boxHover();
	$('.change').click(function(){
		$('.grid').remove();
		createGrid(input);
		boxHover();

	})
	$('.reset').click(function(){
		$('.grid').remove();
		createGrid(input);
		boxHover();

	});
});

