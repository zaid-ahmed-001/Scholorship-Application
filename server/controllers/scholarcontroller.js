const scholarModel = require('../models/scholarmodel');
const mongoose = require('mongoose');

const getScholars = async (req, res) => {
  try {
    const scholars = await scholarModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(scholars);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getScholar = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Invalid ID' });
    }

    const foundScholar = await scholarModel.findById(id);

    if (!foundScholar) {
      return res.status(404).json({ error: 'Scholarship not found' });
    }

    res.status(200).json(foundScholar);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createScholar = async (req, res) => {
  try {
    const { Name, Deadline, Description, Eligibility, Doc_req } = req.body;
    const newScholar = await scholarModel.create({ Name, Deadline, Description, Eligibility, Doc_req });
    res.status(201).json({ message: 'Scholarship created successfully', scholar: newScholar });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteScholar = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Invalid ID' });
    }

    const deletedScholar = await scholarModel.findOneAndDelete({ _id: id });

    if (!deletedScholar) {
      return res.status(404).json({ error: 'Scholarship not found' });
    }

    res.status(200).json({ message: 'Scholarship deleted successfully', scholar: deletedScholar });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateScholar = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Invalid ID' });
    }

    const updatedScholar = await scholarModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedScholar) {
      return res.status(404).json({ error: 'Scholarship not found' });
    }

    res.status(200).json({ message: 'Scholarship updated successfully', scholar: updatedScholar});
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createScholar,
  getScholar,
  getScholars,
  deleteScholar,
  updateScholar
};
