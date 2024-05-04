<<<<<<< Updated upstream
// Создаём роут для запросов пользователей 
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции
const findAllUsers = require('../middlewares/users');
const sendAllUsers = require('../controllers/users');

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get('/users', findAllUsers, sendAllUsers);

// Экспортируем роут для использования в приложении — app.js
=======
const usersRouter = require('express').Router();

const { findAllUsers, createUser, updateUser, 
  checkEmptyNameAndEmail, deleteUser } = require('../middlewares/users');
const { sendAllUsers, sendUserCreated, sendUserUpdated, 
  sendUserDeleted } = require('../controllers/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post(
    "/users",
    findAllUsers,
    checkEmptyNameAndEmail,
    createUser,
    sendUserCreated
  );

  usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    updateUser, 
    sendUserUpdated
  );

  usersRouter.delete(
    "/users/:id",
    deleteUser,
    sendUserDeleted 
  );

>>>>>>> Stashed changes
module.exports = usersRouter;
  