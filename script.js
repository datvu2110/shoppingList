function deleteBox(e){
	if (e.target.classList.contains("shopping-item-delete")){
		e.target.parentElement.parentElement.remove();
	}

  if (e.target.classList.contains("shopping-item-toggle")){
    console.log(e.target.parentElement.parentElement.querySelector("span").classList.toggle("shopping-item__checked"));
  }
}

function addBox(e){
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

document.getElementById("shoppingList").addEventListener("click",deleteBox);
document.getElementById("enter").addEventListener("click", addBox);
document.getElementById("enter").addEventListener("keypress",function (e){
  if (e.keyCode ===13){
    deleteBox(e);
  }
});
let ul = document.getElementById("shoppingList");
let input = document.getElementById("shopping-list-entry");
