const router = require("express").Router()

const AndrPublicProgress = require("../models/AndrPublicProgress")

router.post("/", async (req, res) => {
    try {
        const APublicProgressL = await AndrPublicProgress.find({})

        // console.log(Array.from(APublicProgressL), Array.from(APublicProgressL).length)

        APublicProgressL.length = APublicProgressL.length == undefined ? 0 : APublicProgressL.length

        req.body = {...req.body, index: APublicProgressL.length}

        console.log(req.body)

        const newAndrPublicProgress = new AndrPublicProgress(req.body)

        const APublicProgress = await newAndrPublicProgress.save()

        res.status(200).json(APublicProgress)

    } catch (err) {

        console.error(err)
        res.status(500).json(err)
        
    }
})


router.get("/all", async (req, res) => {
    try {
        const APublicProgress = await AndrPublicProgress.find({})
        console.log(APublicProgress)

        res.status(200).json(APublicProgress)
    } catch (err) {

        console.error(err)
        res.status(500).json(err)
        
    }
})

module.exports = router