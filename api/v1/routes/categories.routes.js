// Creamos el router para poder usar los verbos HTTP
const { Router } = require('express');
// Incluimos nuestro controlador de categoría
const categoryController = require('../../../controllers/categoryController');
const router = Router(); // Llamamos al método Router de Express

router.get("/", categoryController.getAllCategories);

router.get('/:categoryId', categoryController.getCategory);

router.post('/', categoryController.createCategory);

router.put('/:categoryId', categoryController.updateCategory);

router.delete('/:categoryId', categoryController.deleteCategory);

module.exports = router;
