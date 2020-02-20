$(document).on("click","#soma",function(){

	var valor1 = $("#valor1").val();
	var valor2 = $("#valor2").val();

	var result = parseFloat(valor1) + parseFloat(valor2);
	$("#res").val(result);

})
$(document).on("click","#sub",function(){

	var valor1 = $("#valor1").val();
	var valor2 = $("#valor2").val();

	var result = parseFloat(valor1) - parseFloat(valor2);
	$("#res").val(result);

})
$(document).on("click","#multi",function(){

	var valor1 = $("#valor1").val();
	var valor2 = $("#valor2").val();

	var result = parseFloat(valor1) * parseFloat(valor2);
	$("#res").val(result);

})
$(document).on("click","#dividir",function(){

	var valor1 = $("#valor1").val();
	var valor2 = $("#valor2").val();

	var result = parseFloat(valor1) / parseFloat(valor2);
	$("#res").val(result);

})
$(document).on("click","#limpar",function(){

	var limpar = "";

	$("#res").val(limpar);
	$("#valor1").val(limpar);
	$("#valor2").val(limpar);

})