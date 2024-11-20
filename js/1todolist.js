//starts from 2024.11.11

function addListItem(){
    const inputValue=document.getElementById('itemInput').value;
    //add
    const newItem=document.createElement('li');
    const newText=document.createElement('h3');
    newText.textContent=inputValue;
    if(newText.textContent==''){
        return;
    }
    newItem.appendChild(newText);
    const list=document.getElementById('itemList');
    list.appendChild(newItem);
    document.getElementById('itemInput').value='';
    //remove
    newItem.addEventListener('contextmenu',function(event){
        event.preventDefault();
        newItem.remove();
    });

    newItem.addEventListener('click',function(){
        if(newItem.style.textDecoration=='none'){
            newItem.style.textDecoration='line-through';
        }
        else{
            newItem.style.textDecoration='none';
        }
    });
}

function clearAll(){
    const ul=document.getElementById('itemList');
    ul.replaceChildren();
};

//set the butotn function to add a list element
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('submit');

    // Add event listener (without parentheses)
    button.addEventListener('click', addListItem);
});

//set a button to clear the ul
document.addEventListener('DOMContentLoaded',function(){
    const clearButton=document.getElementById('clearButton');
    clearButton.addEventListener('click',clearAll);
})