const experss = require("express");

const router = experss.Router();
const Todo = require("./models/todo");

//retrive all todo
router.get("/todos", async (req,res) => {
    const todos = await Todo.find();
    res.status(200).json(todos);
});

//display
router.post("/todos", async (req,res) => {
    const task = req.body.task;

    const newTodo = new Todo({task:task})

    await newTodo.save();
    res.status(201).json(newTodo);
});

//edit
router.put("/todos/:id", (req,res) => {
    res.status(200).json({
        msg: "PUT todos /api/todos"
    });
});

//delete
router.delete("/todos/:id", (req,res) => {
    res.status(200).json({
        msg: "DELETE todos /api/todos"
    });
});


//for export
module.exports = router;
