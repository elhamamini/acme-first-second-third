const slots = ["first", "second", "third"];
const users = [
  { id: 1, name: "moe", slot: "first" },
  { id: 2, name: "larry", slot: "second" },
  { id: 3, name: "curly", slot: "third" },
  { id: 4, name: "lucy", slot: "third", selected: true }
];
const list = document.getElementById("lists");

// const render = () => {
//   users.forEach((user, idx) => {
//     const ppl = document.createElement("div");
//     ppl.textContent = user.name;

//     ppl.classList = `user ${user.selected ? "selected" : ""}`;
//     ppl.setAttribute("data-idx", idx);

//     console.log(ppl);
//     document.getElementById(user.slot).appendChild(ppl);
//   });
// };

list.addEventListener("click", ev => {
  if (ev.target.tagName === "DIV") {
    const id = Number(ev.target.id);
    const user = users[id];
    user.selected = !user.selected;
  }
  if ((ev.target.tagName = "BUTTON")) {
    const redOnes = [...ev.target.parentNode.lastElementChild.children].filter(
      child => {
        if (child.className === "user selected") {
          return child;
        }
      }
    );
    if (redOnes.length > 0) {
      redOnes.forEach(child => {
        const parentId = Number(child.getAttribute("data-idx"));

        const idx = Number(child.id);

        const targetChild = users[idx];
        if (ev.target.className === "left") {
          targetChild.slot = slots[parentId - 1];
        } else {
          targetChild.slot = slots[parentId + 1];
        }
      });
    }
  }

  render();
});

const render = () => {
  for (let i = 0; i < slots.length; i++) {
    let html = "";
    users.forEach((user, id) => {
      if (slots[i] === user.slot) {
        html += `<div id='${id}' data-idx='${slots.indexOf(
          user.slot
        )}' class='user ${user.selected ? "selected" : ""}'>${user.name}</div>`;
      }
    });

    document.getElementsByClassName(slots[i])[0].innerHTML = html;
  }
};

render();
