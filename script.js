function createGrid(){
	for(var rows=0; rows<16; rows++){
		for(var clms=0; clms<16; clms++){
			$('.container').append("<div class ='grid'></div>");
		}
	}
}
function reset(){
		$('.grid').css("background-color","white");	


}
$(document).ready(function(){
createGrid();
$('.grid').mouseover(function(){
	$(this).css("background-color","black");
	});
});
$('button').click(reset());
