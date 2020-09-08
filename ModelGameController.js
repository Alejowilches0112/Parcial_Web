let game = require("./game")
ModelGameController = {};
Juegos = [];
let id = 1;
ModelGameController.getVideoJuegos = function(req, res) {
    res.json(Juegos);
}

ModelGameController.getIdVideoJuegos = function(req, res) {
    const id = req.params.id;
    juego = Juegos.filter(d => Number(d.id) == Number(id));
    if (juego.length > 0) {
        res.json(juego);
    } else {
        res.json({ "Detalle": "El juego no fue encontrado" });
    }
}

ModelGameController.getNameVideoJuegos = function(req, res) {
    const id = req.params.nombre;
    juego = Juegos.filter(d => d.Titulo == id);
    if (juego.length > 0) {
        res.json(juego);
    } else {
        res.json({ "Detalle": "El juego no fue encontrado" });
    }
}

ModelGameController.getYearVideoJuegos = function(req, res) {
    const id = req.params.year;
    juego = Juegos.filter(d => Number(d.AnioLanzamiento) <= id);
    if (juego.length > 0) {
        res.json(juego);
    } else {
        res.json({ "Detalle": "El juego no fue encontrado" });
    }
}

ModelGameController.saveVideoJuego = function(req, res) {
    game = req.body;
    game.id = id;
    id++;
    Juegos.push(game);
    res.json(Juegos)
}

ModelGameController.deleteVideoJuego = function(req, res) {
    const id = req.params.id;
    Juegos = Juegos.filter(d => Number(d.id) != Number(id));
    res.json(Juegos);
}

module.exports = ModelGameController;