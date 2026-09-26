const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware configuration
app.set('view engine', 'ejs'); // Sets EJS as template engine
app.use(express.json()); // Parses incoming JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded form submissions

// MongoDB Atlas Connection
const dbURI = 
'mongodb+srv://varikutimanasa2_db_user:<db_password>@cluster0.waxzt4j.mongodb.net/?appName=Cluster0';
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB Atlas successfully!'))
  .catch((err) => console.error('Database connection error:', err));

// Mongoose Schema & Model
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: Number, required: true, unique: true },
  course: { type: String, required: true },
  isActive: { type: Boolean, default: true }
});

const Student = mongoose.model('Student', studentSchema);

// --- REST API & SPA ROUTES ---

// 1. HOME ROUTE: Render EJS UI with active student list
app.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.render('apphome', { students });
  } catch (error) {
    res.status(500).send('Error loading page: ' + error.message);
  }
});

// 2. CREATE: Add a new student record
app.post('/students', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ message: 'Error saving student', error: error.message });
  }
});

// 3. READ: Retrieve all student records (JSON API)
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error: error.message });
  }
});

// 4. UPDATE: Modify an existing student record by ID
app.put('/students/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: 'Error updating student', error: error.message });
  }
});

// 5. DELETE: Remove a student record by ID
app.delete('/students/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log('Ready for CRUD operations testing.');
});