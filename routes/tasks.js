const express = require('express');

const router = express.Router()

const {getAllTasks,createTask,getTask,putTask,deleteTask} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(putTask).delete(deleteTask);

module.exports = router;




    