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

// --- ส่วนที่ 2: เพิ่มใหม่! สำหรับเก็บข้อมูล Contact ---
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now } // เก็บเวลาที่ส่งมา
});
const Contact = mongoose.model('Contact', contactSchema);

// สร้าง Route สำหรับรับข้อมูลจากฟอร์มหน้าเว็บ
app.post('/api/contact', async (req, res) => {
    try {
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
        await newContact.save(); // บันทึกลง Database
        res.status(201).json({ message: "บันทึกข้อมูลการติดต่อเรียบร้อยแล้ว!" });
    } catch (err) {
        res.status(400).json({ message: "เกิดข้อผิดพลาด: " + err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));