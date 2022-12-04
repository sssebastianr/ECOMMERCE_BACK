const express =  require ("express");
const authMidd = require("../middleware/authMidd");
const router = express.Router();
const categoriaController = require ("../controllers/categoriaController");

router.get("/", authMidd,categoriaController.obtenerCategoria);
router.post("/", authMidd,categoriaController.crearCategoria);
router.put("/:id", authMidd,categoriaController.actualizarCategoria);
router.delete("/:id", authMidd,categoriaController.borrarCategoria);

//Definir las rutas
module.exports = router;