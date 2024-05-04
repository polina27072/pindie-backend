const games = require("../models/game");

const findAllGames = async (req, res, next) => {
    req.gamesArray = await games.find({})
    .populate("categories")
    .populate({
      path: "users",
      select: "-password"
    });
  next();
};

const findGameById = async (req, res, next) => {
  console.log("GET /games/:id");
  try {
      req.game = await games.findById(req.params.id).populate("categories");
  next();
  } catch (error) {
    console.log(error)
      res.status(404).send({ message: "Игра не найдена" });
  }
};

const createGame = async (req, res, next) => {
  console.log("POST /games");
  try {
    //console.log(req.body);
    req.game = await games.create(req.body);
    next();
  } catch (error) {
      res.status(400).send("Ошибка создания игры");
  }
};

const updateGame = async (req, res, next) => {
  console.log("PUT /games/:id");
  try {
      req.game = await games.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка обновления игры" });
  }
};

const deleteGame = async (req, res, next) => {
  console.log("DELETE /games/:id");
  try {
    req.game = await games.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
        res.status(400).send({ message: "Ошибка удаления игры" });
  }
};

module.exports = { findAllGames, createGame, findGameById, updateGame, deleteGame };
