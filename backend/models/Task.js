const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },           // 🔧 Change: required validator
  description: String,
  dueDate: Date,
  status: { type: String, enum: ['Open','Complete'], default: 'Open' }
}, { timestamps: true }); // 🔧 Change: auto track createdAt & updatedAt

module.exports = mongoose.model('Task', taskSchema);
