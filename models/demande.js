const mongoose = require("mongoose");
const schema = mongoose.Schema;

const demandeSchema = new schema({
    id_user:String,
    name_user:String,
    tel_user:String,
    email_user:String,
    name_product:String,
    img_product:String,
    prix:Number,
    date:String,
    status:{type:String, default:"non confirmé"}


});

const Demande = mongoose.model("Demande", demandeSchema);

module.exports = Demande;