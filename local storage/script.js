// const preferences = {
//     fontSize: '18px',
//     favColor: 'purple'
// }

// localStorage.setItem('preferences', JSON.stringify(preferences));

// console.log(JSON.parse(localStorage.getItem("preferences")));

const toggle = document.querySelector('input[type="checkbox"]');
if(localStorage.getItem('darkMode')) {
    document.body.className = 'dark';
    toggle.checked = true;
}
toggle.addEventListener('click', function(e){
    const {checked} = toggle;
    if(checked){
        localStorage.setItem('darkMode',true);
    } else {
        localStorage.removeItem('darkMode');
    }
    document.body.classList = checked?"dark":"";
})