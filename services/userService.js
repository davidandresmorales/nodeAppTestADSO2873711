const db = require('../models');

const getAllUsers = async () => {
    try {
        return await db.User.findAll();
    } catch (error) {
        throw new Error(`Error al traer los usuarios: ${error.message}`);
    }
};

const getOneUser = async (id) => {
    try {
        return await db.User.findByPk(id);
    } catch (error) {
        throw new Error(`Error al traer el usuario: ${error.message}`);
    }
};

const saveUser = async (name, email, password) => {
    try {
        return await db.User.create({ name, email, password });
    } catch (error) {
        throw new Error(`Error al crear el usuario: ${error.message}`);
    }
};

const updateUser = async (id, name, email, password) => {
    try {
        await db.User.update({ name, email, password }, { where: { id } });
        const updatedUser = await db.User.findByPk(id);
        return updatedUser;
    } catch (error) {
        throw new Error(`Error al actualizar el usuario: ${error.message}`);
    }
};

const deleteUser = async (id) => {
    try {
        return await db.User.destroy({ where: { id } });
    } catch (error) {
        throw new Error(`Error al eliminar el usuario: ${error.message}`);
    }
};

module.exports = {
    getAllUsers,
    getOneUser,
    saveUser,
    updateUser,
    deleteUser
};
