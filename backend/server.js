const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// เชื่อมต่อกับ MongoDB Atlas 
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch(err => console.error("❌ Connection Error:", err));

// --- ส่วนที่ 1: สำหรับโปรเจกต์ (ที่คุณมีอยู่แล้ว) ---
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    tech: Array,
    github: String
});
const Project = mongoose.model('Project', projectSchema);

app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));