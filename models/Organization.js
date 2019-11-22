const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const Schema = mongoose.Schema

const OrganizationSchema = new Schema(
  {
    Category: {
      type: String,
      default: ''
    },
    Subcategory: {
      type: String,
      default: ''
    },
    Service_Name: {
      type: String,
      required: true
    },
    Phone_Number: {
      type: String,
      default: ''
    },
    Web_Address: {
      type: String,
      default: ''
    },
    Hours_of_Operation: {
      type: String,
      default: ''
    },
    Physical_Address: {
      type: String,
      default: ''
    },
    Email_Address: {
      type: String,
      default: ''
    },
    Description: {
      type: String,
      default: ''
    },
    Wheelchair_Access: {
      type: String,
      default: ''
    },
    Language_Help: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
)

const Organization = mongoose.model('organizations', OrganizationSchema)

module.exports = Organization
