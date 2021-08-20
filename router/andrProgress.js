const router = require("express").Router()

const { find } = require("../models/AndrProgress");
const AndrProgress = require("../models/AndrProgress")

router.post("/", async (req, res) => {
    try {

        const { _id, ...data } = req.body;

        if (data.aid && (data.pinRange || data.pinPublicProgress)) {
 
            if (_id && _id != "") {
                let AProgressUpdated = await AndrProgress.findOne({ _id })
                if (AProgressUpdated._id) {
                    await AProgressUpdated.updateOne( { $set: data } )
                    AProgressUpdated = await AndrProgress.findOne({ _id })
                    return res.status(200).json(AProgressUpdated)
                } 
            }

            const newAndrProgress = new AndrProgress(data)
            const AProgress = await newAndrProgress.save()

            return res.status(200).json(AProgress)
        

        } else {
            return res.status(400).send("invalid input !")
        }
    } catch (err) {
        console.error(err)
        return res.status(500).json(err)
    }
})


router.delete("/:aid/:_id", async (req, res) => {
    try {
        const { aid, _id } = req.params;
        if (aid && _id) {
            const deleteAProgress = await AndrProgress.deleteOne(req.body)
            res.status(200).json(deleteAProgress)
        } else {
            res.status(400).send({
                error: "invalid input !",
                status: 400,
                aid: aid,
                _id: _id,
                event: "deleteProgress",
            })
        }
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})


router.delete("/all/:aid", async (req, res) => {
    try {
        const { aid } = req.params
        if (aid) {
            const deleteAProgress = await AndrProgress.deleteMany(req.params)
            res.status(200).json(deleteAProgress)
        } else {
            res.status(400).json({
                error: "invalid input !",
                status: 400,
                aid: aid,
                event: "deleteAllProgress",
            })
        }
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})


router.get("/all/:aid/:_id", async (req, res) => {
    try {

        const { aid, _id } = req.params;

        if (aid && _id) {
            const AProgress = await AndrProgress.findOne(req.params)
            res.status(200).json(AProgress)
        } else {
            res.status(400).send({
                error: "invalid input !",
                status: 400,
                aid: aid,
                _id: _id,
                event: "getProgress"
            })
        }
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})


router.get("/all/:aid", async (req, res) => {
    try {

        const { aid } = req.params;

        if (aid) {
            const AProgress = await AndrProgress.find(req.params)
            res.status(200).json(AProgress)
        } else {
            res.status(400).send({
                error: "invalid input !",
                status: 400,
                aid: aid,
                event: "getAllProgress",
            })
        }
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})

module.exports = router;