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
	if (req.file) {
		res.status(200).json({size: req.file.size});
	} else {
		res.status(400).json({error: 'Missing file input'});
	}
});

router.use('/api/', (err, req, res, next) => {
	if (err) {
		res.status(400).json({error: err.message});
	} else {
		next();
	}
});

module.exports = router;
