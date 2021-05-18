const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const Message = require('../models/Message')
const User = require('../models/User')
const Keyboards = require('../models/Keyboards')
const Monitors = require('../models/Monitors')
const Mouse = require('../models/Mouse')
const PCs = require('../models/PCs')
const Chairs = require('../models/Chairs')


router.post(`/add-message`, authorize, (req, res) => {
    let msg = req.body
    msg.ownerId = res.locals.user._id
    Message.create(msg).then(message => res.json(message))
})

router.get(`/get-user`, authorize, async (req, res) => {
    //console.log("in get user after next", res.locals.user._id)
    let user = await User.findById(res.locals.user._id)
    res.json(user)
})


router.post('/signUp', (req, res) => {
    console.log(req.body)
})


router.get(`/get-messages`, (req, res) => {
    Message.find().then(messages => res.json(messages))
})

router.get(`/get-my-messages`, authorize, (req, res) => {
    Message.find({ ownerId: res.locals.user._id }).then(messages => res.json(messages))
})


router.get(`/`, (req, res) => {
    res.json({ serverWorks: true })
})





// ---- Products ---- //

// PCs
router.get('/get-main-PC', async (req, res) => {
    let PC = await PCs.find({ best: true });
    res.json(PC)
})
router.get('/get-other-PCs', async (req, res) => {
    let PCs = await PCs.find({ best: false });
    res.json(PCs)
})

// Mouse
router.get('/get-main-mouse', async (req, res) => {
    let mouse = await Mouse.find({ best: true });
    res.json(mouse)
})
router.get('/get-other-mouse', async (req, res) => {
    let mouse = await Mouse.find({ best: false });
    res.json(chamouseirs)
})

// Chairs
router.get('/get-main-chair', async (req, res) => {
    let chair = await Chairs.find({ best: true });
    res.json(chair)
})
router.get('/get-other-chairs', async (req, res) => {
    let chairs = await Chairs.find({ best: false });
    res.json(chairs)
})

// Monitors
router.get('/get-main-monitor', async (req, res) => {
    let monitor = await Monitors.find({ best: true });
    res.json(monitor)
})
router.get('/get-other-monitors', async (req, res) => {
    let monitors = await Monitors.find({ best: false });
    res.json(monitors)
})

// Keyboards
router.get('/get-main-keyboard', async (req, res) => {
    let keyboard = await Keyboards.find({ best: true });
    res.json(keyboard)
})
router.get('/get-other-keyboards', async (req, res) => {
    let keyboards = await Keyboards.find({ best: false });
    res.json(keyboards)
})





router.post(`/logMeIn`, async (req, res) => {
    console.log(req.body)
    //Find user
    let user = await User.findOne({ email: req.body.email })
    //If no user >> Create User
    if (!user) {
        user = await User.create(req.body)
    } else {
        if (req.body.password === user.password) {

        } else {
            res.json({ error: "passwords dont match" })
        }
    }

    //No matter what i have a user and now I can create the jwt token 
    jwt.sign({ user }, 'secret key', { expiresIn: '30min' }, (err, token) => {
        res.json({ user, token })
    })

})




function authorize(req, res, next) {
    console.log('monkey in the mittle', req.headers)
    if (req.headers.authorization) {
        let token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, 'secret key', async (err, data) => {
            if (!err) {
                console.log(data)
                res.locals.user = data.user
                next()
            } else {
                console.error(err)
                res.json({ err })
            }
        })
    } else {
        res.status(403).json({ message: 'You dont have no token' })
    }

}
module.exports = router