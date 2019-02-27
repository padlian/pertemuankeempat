function tampil(msg) {
	alert(msg);
}

$('#tbl2').click(function(){
	alert('ini tombol 2');
});

// $('.clstbl').click(function(){
// 	alert('ini tombol class');
// });


$( ".clstbl" ).on( "click", function( event ) {
    event.preventDefault();
	alert('ini tombol class');
});










