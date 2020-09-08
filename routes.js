const router = require('express').Router();
const game = require('./ModelGameController');

router.get('/game', game.getVideoJuegos);
router.get('/game/:id', game.getIdVideoJuegos);
router.get('/gameNombre/:nombre', game.getNameVideoJuegos);
router.get('/gameYear/:year', game.getYearVideoJuegos);
router.post('/game', game.saveVideoJuego);
router.delete('/game/:id', game.deleteVideoJuego)

module.exports = router;