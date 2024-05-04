<<<<<<< Updated upstream
// Файл routes/games.js

const gamesRouter = require('express').Router();

const findAllGames = require('../middlewares/games');
const sendAllGames = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
=======
const gamesRouter = require('express').Router();

const { findAllGames, createGame, findGameById, updateGame, deleteGame } = require('../middlewares/games');
const { sendAllGames, sendGameCreated, sendGameUpdated, sendGameDeleted } = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post(
    "/games", 
    findAllGames, 
    createGame, 
    sendGameCreated
);

gamesRouter.put(
    "/games/:id",  
      findGameById,
      updateGame,
      sendGameUpdated
);

gamesRouter.delete(
    "/games/:id",
    deleteGame,
    sendGameDeleted 
  );
>>>>>>> Stashed changes

module.exports = gamesRouter;