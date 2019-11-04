const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const Schema = mongoose.Schema

const OrganizationSchema = new Schema(
  {
    Category: {
      type: String
    },
    Sub_category: {
      type: String
    },
    Service_name: {
      type: String
    },
    Main_Phone: {
      type: String
    },
    Web_Address: {
      type: String
    },
    Hours_of_Operation: {
      type: String
    },
    Physical_Site_Address_1: {
      type: String
    },
    Email: {
      type: String
    },
    Description_of_Service: {
      type: String
    },
    ADA_Access: {
      type: String
    },
    Languages_Spoken: {
      type: String
    }
  },
  { timestamps: true }
)

const Organization = mongoose.model('organizations', OrganizationSchema)

module.exports = Organization
