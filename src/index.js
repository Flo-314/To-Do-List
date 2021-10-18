const itemFactory = (title, description, checklist, priority, dueDate) => {
  return { title, description, checklist, priority, dueDate };
  // root (what project is from)
  // notes
};

const domMethods = (() => {
  const itemBtn = document.querySelector("#itemBtn");
  itemBtn.addEventListener("click", () => itemPrompt());

  function itemPrompt() {
    itemBtn.remove();

    const addItemContainer = document.createElement("div");
    addItemContainer.classList.add("addItemContainer")

    const itemTitle = document.createElement("input");
    itemTitle.type = "text";
    const itemDescription = document.createElement("input");
    itemDescription.type = "text";

    const itemCheckList = document.createElement("input");
    itemCheckList.type = "checkbox";

    const sumbitBtn = document.createElement("button")
    sumbitBtn.addEventListener("click", () => {})

    const main = document.querySelector("main");
    addItemContainer.append(itemTitle, itemDescription, itemCheckList);
    main.append(addItemContainer);
  }
  function createItem(){
      
  }
  return{itemPrompt}
}

)();
