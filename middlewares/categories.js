<<<<<<< Updated upstream
// Файл middlewares/categories.js

// Импортируем модель
const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
    // По GET-запросу на эндпоинт /categories найдём все документы категорий
=======
const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
>>>>>>> Stashed changes
  req.categoriesArray = await categories.find({});
  next();
}

<<<<<<< Updated upstream
// Экспортируем функцию поиска всех категорий
module.exports = findAllCategories;
=======
const findCategoryById = async (req, res, next) => {
  console.log("GET /categories/:id");
  try {
    req.category = await categories.findById(req.params.id);
    next();
  } catch (error) {
      res.status(404).send({ message: "Категория не найдена" });
  }
};

const createCategory = async (req, res, next) => {
  console.log("POST /categories");
  try {
    console.log("req.body");
    req.category = await categories.create(req.body);
    next();
  } catch (error) {
    res.status(400).send({ message:"Ошибка создания категории" });
  }
};

const updateCategory = async (req, res, next) => {
  console.log("PUT /categories/:id");
  try {
      req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка обновления категории" });
  }
};

const checkEmptyName = async (req, res, next) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Введите название категории" });
  } else {
    next();
  }
};

const deleteCategory = async (req, res, next) => {
  console.log("DELETE /categories/:id");
  try {
    req.category = await categories.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
        res.status(400).send({ message: "Ошибка удаления категории" });
  }
};

module.exports = { findAllCategories, createCategory, 
  findCategoryById, updateCategory, checkEmptyName, deleteCategory };
>>>>>>> Stashed changes
