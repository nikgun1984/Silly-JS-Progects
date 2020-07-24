const list = document.querySelectorAll('li button');

// for (let i=0;i<list.length;i++){
//     list[i].addEventListener('click', function(){
//         list[i].parentElement.remove();
//     })
// }

const form = document.querySelector("#form");
const ul = document.querySelector('#friend-list');

ul.addEventListener('click',function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    } else {
        e.target.classList.add('best-friend');
        const heart = document.createElement('span');
        heart.innerHTML = '&hearts;';
        e.target.prepend(heart);
    }
});

form.addEventListener("submit", function(e){
    e.preventDefault();
    const li = document.createElement('li'),
          button = document.createElement('button');
    li.innerText = document.querySelector('input[type="text"]').value;
    button.innerText = "Unfriend";
    li.append(button);
    ul.append(li);
    form.reset();
})