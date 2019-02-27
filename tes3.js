// $("#tambah").click(function() {
// 	let isian1 = parseInt($('#isian1').val());// nilai dalam value
// 	let isian2 = parseInt($('#isian2').val());// nilai dalam value
// 	// let hasil = $('#isian1').html(); //nilai dalam tag
// 	let hasil = isian1+isian2;
// 	alert(hasil);
// });

// $("#kurang").click(function() {
// 	let isian1 = $('#isian1').val();// nilai dalam value
// 	let isian2 = $('#isian2').val();// nilai dalam value
// 	// let hasil = $('#isian1').html(); //nilai dalam tag
// 	let hasil = isian1-isian2;
// 	alert(hasil);
// });

function tambah(var1, var2){
	return var1+var2;
}

function kurang(var1, var2){
	return var1-var2;
}

function hitungkan(operator){
	// let operator = $(this).html();
	let isian1 = parseInt($('#isian1').val());// nilai dalam value
	let isian2 = parseInt($('#isian2').val());// nilai dalam value
	let hasil = 0;
	if (operator == "+") {
		// hasil = isian1+isian2;
		hasil = tambah(isian1, isian2);
	}
	else if(operator == '-'){
		// hasil = isian1-isian2;
		hasil = kurang(isian1, isian2);
	}
	else{
		hasil = 'Operator tidak ditemukan';
	}

	// alert(hasil);
	$("#hasil").html(hasil);
}

$(".hitung").on('click',function() {
	let operator = $(this).html();
	hitungkan(operator)
});

$("#isian1").on('change',function() {
	// alert('sdfds');
	let operator = "+";
	hitungkan(operator)
});


$("#isian2").on('blur',function() {
	// alert('sdfds');
	let operator = "-";
	hitungkan(operator)
});

$("#optsel").on('change', function(){
	let operator = $(this).val();
	hitungkan(operator)
});

$("#optsel2").on('blur', function(){
	let operator = $(this).val();
	hitungkan(operator)
});















