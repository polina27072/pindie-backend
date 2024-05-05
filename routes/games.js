const gamesRouter = require('express').Router();

const { findAllGames, createGame, findGameById, updateGame, 
  deleteGame, checkIsGameExists, checkIfCategoriesAvaliable, 
  checkEmptyFields, checkIfUsersAreSafe } = require('../middlewares/games');
const { sendAllGames, sendGameCreated, sendGameUpdated, 
  sendGameDeleted } = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);

gamesRouter.post(
    "/games", 
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,    
    createGame,
    sendGameCreated
);

gamesRouter.put(
    "/games/:id",  
    findGameById,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    updateGame,
    sendGameUpdated
);

gamesRouter.delete(
    "/games/:id",
    deleteGame,
    sendGameDeleted 
  );

module.exports = gamesRouter;