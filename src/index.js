const itemFactory = (title, description, checklist, priority, dueDate) => {
  return { title, description, checklist, priority, dueDate };
};

let array = [];


const promptMethods = (() => {
  createItemBtn();

  function createItemBtn() {
    const main = document.querySelector("main");
    const itemBtn = document.createElement("button");
    itemBtn.textContent = "Add New Task!";
    itemBtn.setAttribute("id", "itemBtn");
    itemBtn.addEventListener("click", () => itemPrompt());

    main.appendChild(itemBtn);
  }

  function removePromp() {
    const itemContainer = document.querySelector(".addItemContainer");
    itemContainer.remove();
  }

  function itemPrompt() {
    const itemBtn = document.querySelector("#itemBtn");
    itemBtn.remove();

    const addItemContainer = document.createElement("div");
    addItemContainer.classList.add("addItemContainer");

    const itemTitle = document.createElement("input");
    itemTitle.type = "text";
    itemTitle.placeholder = "Task Title";
    itemTitle.classList.add("itemTitle");

    const itemDescription = document.createElement("input");
    itemDescription.type = "text";
    itemDescription.placeholder = "Description";
    itemDescription.classList.add("itemDescription");
    
    const dueDate = document.createElement("input")
    duedate.type = "date"


    const sumbitBtn = document.createElement("button");
    sumbitBtn.textContent = "Add new Task!";

    sumbitBtn.addEventListener("click", () => {
      let descriptionValue = itemDescription.value;
      let titleValue = itemTitle.value;
      let dateValue = duedate.value




      itemMethods.createItem(titleValue, descriptionValue,dateValue);
      domItemMethods.printItem(titleValue,descriptionValue,dateValue)
      removePromp();
      createItemBtn();
    });

    const main = document.querySelector("main");
    addItemContainer.append(itemTitle, itemDescription,dueDate, sumbitBtn);
    main.append(addItemContainer);
  }
  return { itemPrompt };
})();


const domItemMethods = (() => {
  function printArray (){
  array.forEach(item => {
      printItem()
    });

  }
  function printItem(title,description,duedate,checklist) {
    const itemContainer = document.querySelector("#item-container")
    const item = document.createElement("div")
    item.classList.add("item")
    const leftContainer = document.createElement("div")
    leftContainer.classList.add("left-container")
    const itemTitle = document.createElement("div")
    itemTitle.classList.add("item-title")
    const itemDescription = document.createElement("div")
    itemDescription.classList.add("item-description")
    const rightContainer = document.createElement("div")
    rightContainer.classList.add("right-container")
    const itemCheckList = document.createElement("div")
    itemCheckList.classList.add("item-checklist")
    const itemDueDate = document.createElement("div")
    itemDueDate.classList.add("item-duedate")
    const hr = document.createElement("hr")


    itemTitle.textContent = title
    itemDescription.textContent = description
    itemDueDate.textContent = duedate

    leftContainer.append(itemTitle,itemDescription)
    rightContainer.append(itemCheckList,itemDueDate)
    item.append(leftContainer,rightContainer,hr)
    itemContainer.appendChild(item)
  } 

function expandItem(){

 }
  return{printArray,printItem}

 })();

const itemMethods = (() => {
  function createItem(title, description, duedate) {
    let newItem = itemFactory(title, description, duedate);
    array.push(newItem);
    console.log(array);
  }

  return { createItem };
})();

