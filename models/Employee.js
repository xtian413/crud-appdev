const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Employee name is required.'], // Added validation
    trim: true
  },
  address: {
    type: String,
    required: [true, 'Employee address is required.'],
    trim: true
  },
  position: {
    type: String,
    required: [true, 'Employee position is required.'],
    trim: true
  },
  salary: {
    type: Number,
    required: [true, 'Employee salary is required.']
  }
}, { 
  // This option automatically adds createdAt and updatedAt fields
  timestamps: true 
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;