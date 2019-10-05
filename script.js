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
    const idx1 = Number(ev.target.getAttribute("data-idx"));
    const idx2 = Number(ev.target.id);
    const idx = idx1 + idx2;

    const user = users[idx];
    user.selected = !user.selected;
  }
  if ((ev.target.tagName = "BUTTON")) {
    // if (ev.target.className === "left") {
    const redOnes = [...ev.target.parentNode.lastElementChild.children].filter(
      child => {
        if (child.className === "user selected") {
          return child;
        }
      }
    );
    if (redOnes.length > 0) {
      redOnes.forEach(child => {
        const childId = Number(child.getAttribute("data-idx"));
        const parentId = Number(child.id);

        const indx = childId + parentId;

        const targetChild = users[indx];
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
    const html = users
      .filter(user => {
        if (slots[i] === user.slot) {
          return user;
        }
      })
      .map((user, idx) => {
        // let num = slots.indexOf(user.slot);
        return `<div id='${slots.indexOf(user.slot)}' class='user ${
          user.selected ? "selected" : ""
        }'  data-idx='${idx}'>${user.name}</div>`;
      })
      .join(" ,");
    console.log(html);

    document.getElementsByClassName(slots[i])[0].innerHTML = html;
  }
};

render();
