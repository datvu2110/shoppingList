function deleteBox(e){
	if (e.target.classList.contains("shopping-item-delete")){
		e.target.parentElement.parentElement.remove();
	}

  if (e.target.classList.contains("shopping-item-toggle")){
    console.log(e.target.parentElement.parentElement.querySelector("span").classList.toggle("shopping-item__checked"));
  }
}

function addBox(e){
  e.preventDefault();
	if (input.value.length > 0){
		ul.insertAdjacentHTML('afterbegin', `<li>
        <span class="shopping-item">${input.value}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>`);
        input.value="";
	}
	
}
let btn =  document.getElementsByClassName("shopping-item-delete")
for (let i =0; i<btn.length; i++){
  this.addEventListener("click", deleteBox);
}
let ul = document.getElementsByClassName("shopping-list")[0];
let enter = document.querySelector('#js-shopping-list-form button');
enter.addEventListener("click", addBox);
let input = document.getElementById("shopping-list-entry");


