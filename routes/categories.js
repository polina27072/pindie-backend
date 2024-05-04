<<<<<<< Updated upstream
// Создаём роут для запросов категорий 
const categoriesRouter = require('express').Router();

// Импортируем вспомогательные функции
const findAllCategories = require('../middlewares/categories');
const sendAllCategories = require('../controllers/categories');

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);

// Экспортируем роут для использования в приложении — app.js
=======
const categoriesRouter = require('express').Router();

const { findAllCategories, createCategory, updateCategory, 
  checkEmptyName, deleteCategory } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryCreated, sendCategoryUpdated, 
  sendCategoryDeleted } = require('../controllers/categories');

categoriesRouter.get('/categories', findAllCategories,
  sendAllCategories);

categoriesRouter.post(
  "/categories",
  findAllCategories,
  createCategory,
  checkEmptyName,
  sendCategoryCreated
);

categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  updateCategory,
  sendCategoryUpdated
);

categoriesRouter.delete(
  "/categories/:id",
  deleteCategory,
  sendCategoryDeleted 
);

>>>>>>> Stashed changes
module.exports = categoriesRouter;