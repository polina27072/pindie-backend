<<<<<<< Updated upstream
const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const generateGamesList = (gamesArray, template, parent) => {
  gamesArray.forEach(element => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('h3').textContent = element.title;
    clone.querySelector('.text').textContent = element.description;
    clone.querySelector('.developer').textContent = element.developer;
    const catlist = clone.querySelector('.categories');
    element.categories.forEach(category => {
      const listItem = document.createElement('li');
      listItem.textContent = category.name;
      catlist.append(listItem);
    });
    const voteslist = clone.querySelector('.votes');
    element.users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.username;
      voteslist.append(listItem);
    });
    clone.querySelector('img').src = element.image;
    clone.querySelector('a').href = element.link;
    clone.querySelector('a').textContent = element.link;
    parent.append(clone);
  });
};

(async () => {
  const gamesArray = await getData('/games');
  const template = document.querySelector('#game-list-item');
  const parent = document.querySelector('.games-list');
  generateGamesList(gamesArray, template, parent);
})();

const generateUsersList = (usersArray, template, parent) => {
  usersArray.forEach(element => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.name').textContent = element.username;
    clone.querySelector('.email').textContent = element.email;
    parent.append(clone);
  });
}

(async () => {
  const usersArray = await getData('/users');
  const template = document.querySelector('#user-list-item');
  const parent = document.querySelector('.users-list');
  generateUsersList(usersArray, template, parent);
})();

const generateCategoriesList = (categoriesArray, template, parent) => {
  categoriesArray.forEach(element => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.name').textContent = element.name;
    parent.append(clone);
  });
}

(async () => {
  const categoriesArray = await getData('/categories');
  const template = document.querySelector('#category-list-item');
  const parent = document.querySelector('.categories-list');
  generateCategoriesList(categoriesArray, template, parent);
})();
=======
import { getData } from "./api-interactors.js";
import {
  renderGames,
  renderUsersList,
  renderCategoriesList
} from "./dom-creators.js";
import { addCategoriesEditModeListeners } from "./categories-edit-mode.js";
import { addGamesEditModeListeners } from "./games-edit-mode.js";
import { addUsersEditModeListeners } from "./users-edit-mode.js";
import {
  addGameFormListeners,
  addCategoryFormListeners,
  addUserFormListeners,
  addDeleteGameListeners,
  addDeleteCategoryListeners,
  addDeleteUsersListeners
} from "./requests.js";

export let gamesState = [];
export let usersState = [];
export let categoriesState = [];

export async function reload(blockName) {
  switch (blockName) {
    case "games":
      loadGamesBlock();
      break;
    case "users":
      loadUsersBlock();
      break;
    case "categories":
      loadCategoriesBlock();
      break;
    default:
      console.log("Unknown block name");
      break;
  }
}

(async function init() {
  await loadGamesBlock();
  await loadCategoriesBlock();
  await loadUsersBlock();
})();

async function loadGamesBlock() {
  gamesState = await getData("/games");
  document.querySelector(".games-list").innerHTML = "";
  renderGames(gamesState);
  addGamesEditModeListeners();
  addGameFormListeners();
  await addDeleteGameListeners();
}

async function loadUsersBlock() {
  usersState = await getData("/users");
  document.querySelector(".users-list").innerHTML = "";
  renderUsersList(usersState);
  addUsersEditModeListeners();
  await addUserFormListeners();
  await addDeleteUsersListeners();
}

async function loadCategoriesBlock() {
  categoriesState = await getData("/categories");
  document.querySelector(".categories-list").innerHTML = "";
  renderCategoriesList(categoriesState);
  addCategoriesEditModeListeners();
  await addCategoryFormListeners();
  await addDeleteCategoryListeners();
}
>>>>>>> Stashed changes
