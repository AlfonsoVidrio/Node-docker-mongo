const { Router } = require('express');
const router = Router()

router.get('/', (req,res) => {
    res.send('hello world :D')
})

module.exports = router;