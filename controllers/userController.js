const user_service = require('../services/userService');

const testUserAPI = (req, resp) => {
    console.log('TestUserAPI')
    resp.status(200).send({
        "status": "OK",
        "message": "API User state: available",
    });
};

// Controladores de la API de usuarios
const getAllUsers = async (req, resp) => {
    const users = await user_service.getAllUsers();
    if (users) {
        resp.status(200).send({ status: "OK", message: "Usuarios traídos exitosamente", data: users });
    } else {
        resp.status(400).send({ status: "FAILED", message: "Error al traer los usuarios" });
    }
};

const getOneUser = async (req, resp) => {
    const id = req.params.id;
    const user = await user_service.getOneUser(id);
    if (user) {
        resp.status(200).send({ status: "OK", message: "Usuario traído exitosamente", data: user });
    } else {
        resp.status(400).send({ status: "FAILED", message: "Error al traer el usuario" });
    }
};

const saveUser = async (req, resp) => {
    const { name, email, password } = req.body;
    const savedUser = await user_service.saveUser(name, email, password);
    if (savedUser) {
        resp.status(200).send({ status: "OK", message: "Usuario creado exitosamente", data: savedUser });
    } else {
        resp.status(400).send({ status: "FAILED", message: "Error al crear al usuario" });
    }
};

const updateUser = async (req, resp) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    const updatedUser = await user_service.updateUser(id, name, email, password);
    if (updatedUser) {
        resp.status(200).send({ status: "OK", message: "Usuario actualizado exitosamente", data: updatedUser });
    } else {
        resp.status(400).send({ status: "FAILED", message: "Error al actualizar el usuario" });
    }
};

const deleteUser = async (req, resp) => {
    const id = req.params.id;
    const deletedUser = await user_service.deleteUser(id);
    if (deletedUser) {
        resp.status(200).send({ status: "OK", message: "Usuario eliminado exitosamente", data: deletedUser });
    } else {
        resp.status(400).send({ status: "FAILED", message: "Error al eliminar el usuario" });
    }
};

// Solo exportamos getOneUser, no getUser
module.exports = {
    testUserAPI,
    getAllUsers,
    getOneUser,
    saveUser,
    updateUser,
    deleteUser
};
