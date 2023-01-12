  let todo;
   todo=localStorage.getItem('keyTodo') ?JSON.parse(localStorage.getItem('keyTodo')):[];
  function add(inpVal){
    let todoItem={
      text:inpVal,
      checked:false,
      id:Date.now()
    }; 
    todo.push(todoItem);
    localStorage.setItem("keyTodo",JSON.stringify(todo));
    renderTodo(todo);
  }
    const form=document.querySelector('form');      
    form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const input=document.querySelector('.js-todo-input');
    inpVal=input.value.trim();
    if(inpVal)
    {
      add(inpVal);
      input.value='';
      input.focus();
    }
});
function renderTodo(todo){
  const emptyState=document.querySelector('.empty-state');
      let tabel=''; 
      const list=document.querySelector('.js-todo-list');
      todo.forEach(ele => {
      const isChecked=ele.checked?'done':'';
      tabel+=`    
       <li class="todo-item ${isChecked}" data-key="${ele.id}">
          <input type="checkbox" name="" id="${ele.id}">
          <label for="${ele.id}" class="tick js-tick"></label>
          <span>${ele.text}</span>
          <button class="delete-todo js-delete-todo" 
           onclick="${getId()}" data-key="${ele.id}">
          <svg><use href="#delete-icon"></use></svg>
          </button> 
       </li>`; 
     });
     if(todo.length>=1)
        list.innerHTML=tabel;
    //list.appendChild(node);
}
renderTodo(todo); 

  function getId(e)
  {
    //  const eleId=e.target;
     console.log(e);
    //  delItem(eleId);
    //  renderTodo(todo);
   }
    //  getId();
    //  btnDel.forEach(btnDel=>{
    //   btnDel.addEventListener('click',()=>{
    //   const eleId=btnDel.parentNode.dataset.key;
    //   delItem(eleId); 
    //  })
    //  })
    const delItem=(id)=>{
        const index=todo.findIndex(todo=>todo.id==id);
        todo.splice(index,1);
        console.log(todo);
        localStorage.keyTodo=JSON.stringify(todo);    
    }
 
  
