const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/students", (req, res) => {
    res.json({
        message: "Student details",
        id: 101,
        name: "Manasa",
        course: "AI&DS"
    });
});
app.get("/students/:id", (req, res) => {
    const studentId = req.params.id;
    res.json({
        message: "Student found",
        id: studentId,
        name: "Manasa",
        course: "AI&DS"
    });
});
app.post("/students", (req, res) => {
    const student = req.body;
    res.json({
        message: "Student added successfully",
        student: student
    });
});
app.put("/students/:id", (req, res) => {
    const studentId = req.params.id;
    const student = req.body;
    res.json({
        message: "Student updated successfully",
        id: studentId,
        student: student
    });
});
app.delete("/students/:id", (req, res) => {
    const studentId = req.params.id;
    res.json({
        message: "Student deleted successfully",
        id: studentId
    });
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});