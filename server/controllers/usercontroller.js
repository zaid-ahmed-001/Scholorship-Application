const userModel = require('../models/usermodel');
const mongoose = require('mongoose');

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Invalid ID' });
    }

    const foundUser = await userModel.findById(id);

    if (!foundUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(foundUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createUser = async (req, res) => {
  try {
    const { FirstName,
      LastName,
      FatherName,
      PassWord,
      ConfirmWord,
      email,
      CnntactNumber,
      DateofBirth,
      Enrollno,
      Gender,
      Religion,
      MaritalStatus,
      SpouseName,
      Disabled,
      Orphan,
      Agreement } = req.body;
    const newUser = await userModel.create({ FirstName,
      LastName,
      FatherName,
      PassWord,
      ConfirmWord,
      email,
      CnntactNumber,
      DateofBirth,
      Enrollno,
      Gender,
      Religion,
      MaritalStatus,
      SpouseName,
      Disabled,
      Orphan,
      Agreement });
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Invalid ID' });
    }

    const deletedUser = await userModel.findOneAndDelete({ _id: id });

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Invalid ID' });
    }

    const updatedUser = await userModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
};
