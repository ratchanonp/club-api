const router = require("express").Router();
const student = require('../model/student');


router.post("/", async (req, res) => {
    const STD = new student ({
        stdId: req.body.stdId,
        thaiId: req.body.thaiId,
        gender: req.body.gender,
        name: req.body.name,
        lastname: req.body.lastname,
        level: req.body.level,
        room: req.body.room,
        no: req.body.no,
        activity_id: req.body.activity_id
    });

    try {
        const addStudent = await STD.save();
        res.send(addStudent)
    } catch (err) {
        res.status(400).send(err);
    }

});

router.get("/", (req, res) => {
  res.send("Get Student List");
});

router.patch("/", (req, res) => {
  res.send("Update Student Success");
});

router.delete("/", (req, res) => {
  res.send("Delete Student Success");
});

module.exports = router;
