const express = require('express')
const router = express.Router()
const Organization = require('../models/Organization')

router.get('/', (req, res) => {
  console.log('FIND ORGS')
  Organization.find({})
    .then(orgs => {
      console.log('orgs', orgs)
      return res.status(200).json(orgs)
    })
    .catch(err => console.log('Error finding organizations:', err))
})

module.exports = router
