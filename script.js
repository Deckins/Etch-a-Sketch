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

$(document).ready(function(){
	createGrid(16);
	boxHover();
	$('.change').click(function(){
		$('.grid').remove();
		var input=prompt('Please Enter the Number of Columns and Rows');
		createGrid(input);
		boxHover();

	})
	$('.reset').click(function(){
		$('.grid').remove();
		createGrid(16);
		boxHover();

	});
});

