const path = require('path');
const express = require('express');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({storage, limits: {fileSize: 10485760}});
const router = new express.Router();

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.post('/api/', upload.single('file'), (req, res) => {
	res.status(200).json( {size: req.file.size});
});

module.exports = router;
