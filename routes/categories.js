const categoriesRouter = require('express').Router();

const { findAllCategories, createCategory, updateCategory, 
  checkEmptyName, deleteCategory, checkIsCategoryExists } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryCreated, sendCategoryUpdated, 
  sendCategoryDeleted } = require('../controllers/categories');

categoriesRouter.get('/categories', findAllCategories,
  sendAllCategories);

categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  createCategory,
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

module.exports = categoriesRouter;