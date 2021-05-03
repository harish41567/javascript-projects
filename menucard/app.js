const menu = [
  {
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam nam officia architecto nihil consequatur quo ex, ullam ab sed!`,
  },
  {
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, in temporibus! Tenetur laborum aperiam inventore? `,
  },
  {
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos voluptas voluptate temporibus obcaecati? Harum. `,
  },

  {
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laborum id sunt in modi accusantium esse illo similique? Laborum, eaque!`,
  },
  {
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni in iure suscipit iste hic aliquam minus, nostrum quos architecto.`,
  },
  {
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ullam delectus eligendi tempora laboriosam? Beatae!`,
  },
  {
    title: "steak dinner",
    category: "dinner",
    price: 25.99,
    img: "./images/item-10.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel incidunt similique excepturi corrupti sequi harum dolor a, eius quia.`,
  },
  {
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, explicabo eligendi nostrum veniam architecto rerum quod quae vel libero `,
  },
  {
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat animi accusantium sit aliquam sapiente modi sint nisi!`,
  },

  {
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum quam tempore provident, unde fugit laborum sapiente, distinctio, accusantium.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

function displayMenuItems(menu) {
  let displayMenu = menu.map(function (item) {
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price"><strong>$${item.price}</strong></h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) values.push(item.category);
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;

  const btns = document.querySelectorAll(".btn");
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});
