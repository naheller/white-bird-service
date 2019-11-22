const express = require('express')
const router = express.Router()
const Organization = require('../models/Organization')

router.get('/', (_, res) => {
  Organization.find({})
    .then(orgs => {
      return res.status(200).json(orgs)
    })
    .catch(err => console.log('Error finding organizations:', err))
})

router.get('/:id', (req, res) => {
  Organization.findOne({ _id: req.params.id }).then(org => res.status(200).json(org))
})

router.put('/:id', (req, res) => {
  Organization.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true, runValidators: true }
  )
    .then(updatedOrg => res.status(200).json(updatedOrg))
    .catch(err => {
      const isValidationError = err.name === 'ValidationError'
      return res.status(isValidationError ? 400 : 500).json(err)
    })
})

module.exports = router
