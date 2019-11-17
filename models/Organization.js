const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const Schema = mongoose.Schema;

const OrganizationSchema = new Schema(
  {
    Category: {
      type: String,
      default: ""
    },
    Sub_category: {
      type: String,
      default: ""
    },
    Service_Name: {
      type: String,
      required: true
    },
    Main_Phone: {
      type: String,
      default: ""
    },
    Web_Address: {
      type: String,
      default: ""
    },
    Hours_of_Operation: {
      type: String,
      default: ""
    },
    Physical_Site_Address_1: {
      type: String,
      default: ""
    },
    Email: {
      type: String,
      default: ""
    },
    Description_of_Service: {
      type: String,
      default: ""
    },
    ADA_Access: {
      type: String,
      default: ""
    },
    Languages_Spoken: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

const Organization = mongoose.model("organizations", OrganizationSchema);

module.exports = Organization;
