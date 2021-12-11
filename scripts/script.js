function show_header() {
	document.getElementById('header-content').style.display = 'flex';
	document.getElementById('header-show').style.display = 'none';
}
function hide_header() {
	document.getElementById('header-content').style.display = '';
	document.getElementById('header-show').style.display = 'block';
}

function show_sublist(sublistName) {
	document.getElementById(sublistName+'-item-sublist').style.display = 'flex';
}
function hide_sublist(sublistName) {
	document.getElementById(sublistName+'-item-sublist').style.display = 'none';
}