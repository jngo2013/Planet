const router = require('express').Router();
const todoRoutes = require('./todoRoutes');
const authRoutes = require('./authRoutes');
const userTodoRoutes = require('./userTodoRoutes');
const eventRoutes = require('./eventRoutes');
const messageRoutes = require('./messageRoutes');

router.use('/todos', todoRoutes);
router.use('/auth', authRoutes);
router.use('/user', userTodoRoutes);
router.use('/event', eventRoutes);
router.use('/dashboard', messageRoutes);


module.exports = router;
