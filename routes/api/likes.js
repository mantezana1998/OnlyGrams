const express = require('express');
const router = express.Router();
const likesCtrl = require('../../controllers/likes');

router.get('/posts/:id/likes', likesCtrl.create)
router.delete('/likes/:id', likesCtrl.unlike)