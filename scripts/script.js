function show_header() {
	document.getElementById('header-content').style.display = 'flex';
	try {
		document.querySelector('.subheader').style.display = 'flex';
	} catch (error) {}
	document.getElementById('header-show').style.display = 'none';
}
function hide_header() {
	document.getElementById('header-content').style.display = '';
	try {
		document.querySelector('.subheader').style.display = '';
	} catch (error) {}
	document.getElementById('header-show').style.display = 'block';
}