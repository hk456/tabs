// tabs 
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section');

function changeTab(elem) {
	if (elem == tabs[0]) {
		sections[0].style.display = 'block';
		sections[1].style.display = 'none';
		sections[2].style.display = 'none';		
	} 

	if (elem == tabs[1]) {
		sections[0].style.display = 'none';
		sections[1].style.display = 'block';
		sections[2].style.display = 'none';
	}

	if (elem == tabs[2]) {
		sections[0].style.display = 'none';
		sections[1].style.display = 'none';
		sections[2].style.display = 'block';
	}
}

document.addEventListener("click", function(e) {
	if (e.target == tabs[0]) changeTab(e.target); 
	if (e.target == tabs[1]) changeTab(e.target);
	if (e.target == tabs[2]) changeTab(e.target);
});