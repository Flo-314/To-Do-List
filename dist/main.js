(()=>{let e=[];(()=>{function e(){const n=document.querySelector("main"),c=document.createElement("button");c.textContent="Add New Task!",c.setAttribute("id","itemBtn"),c.addEventListener("click",(()=>function(){document.querySelector("#itemBtn").remove();const n=document.createElement("div");n.classList.add("addItemContainer");const c=document.createElement("input");c.type="text",c.placeholder="Task Title",c.classList.add("itemTitle");const o=document.createElement("input");o.type="text",o.placeholder="Description",o.classList.add("itemDescription");const d=document.createElement("button");d.textContent="Add new Task!",d.addEventListener("click",(()=>{let n=o.value,d=c.value;t.createItem(d,n),document.querySelector(".addItemContainer").remove(),e()}));const i=document.querySelector("main");n.append(c,o,d),i.append(n)}())),n.appendChild(c)}e()})();const t={createItem:function(t,n,c){let o=((e,t,n,c,o)=>({title:e,description:t,checklist:n,priority:void 0,dueDate:void 0}))(t,n,c);e.push(o),console.log(e)}}})();