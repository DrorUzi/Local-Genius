const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { addBooking, getBookings, deleteBooking } = require('./booking.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getBookings)
router.post('/', addBooking) //requireAuth,
router.delete('/:id', deleteBooking) //requireAuth,

module.exports = router