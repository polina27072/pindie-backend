<<<<<<< Updated upstream
// Файл middlewares/users.js

// Импортируем модель
const users = require('../models/user');

const findAllUsers = async (req, res, next) => {
    // По GET-запросу на эндпоинт /users найдём все документы пользователей
=======
const users = require('../models/user');

const findAllUsers = async (req, res, next) => {
>>>>>>> Stashed changes
  req.usersArray = await users.find({});
  next();
}

<<<<<<< Updated upstream
// Экспортируем функцию поиска всех пользователей
module.exports = findAllUsers;
=======
const findUserById = async (req, res, next) => {
  console.log("GET /users/:id");
  try {
    req.user = await users.findById(req.params.id);
    next();
  } catch (error) {
        res.status(404).send({ message: "Пользователь не найден" });
  }
};

const createUser = async (req, res, next) => {
  console.log("POST /users");
  try {
    //console.log(req.body);
    req.user = await users.create(req.body);
    next();
  } catch (error) {
    res.status(400).send({ message:"Ошибка создания пользователя" });
  }
};

const updateUser = async (req, res, next) => {
  try {
      req.user = await users.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка обновления пользователя" });
  }
};

const checkEmptyNameAndEmail = async (req, res, next) => {
  if (!req.body.username || !req.body.email) {
    res.status(400).send({ message: "Введите имя и почту" });
  } else {
    next();
  }
};

const deleteUser= async (req, res, next) => {
  console.log("DELETE /users/:id");
  try {
    req.user = await users.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
        res.status(400).send({ message: "Ошибка удаления пользователя" });
  }
};

module.exports = { findAllUsers, createUser, findUserById, 
  updateUser, checkEmptyNameAndEmail, deleteUser };
>>>>>>> Stashed changes
