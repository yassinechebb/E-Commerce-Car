const express = require("express");
const Demande = require("../models/demande");
const demandeRouter = express.Router();

//add demande
demandeRouter.post("/add", async (req, res) => {
  try {
    let newdemande = new Demande(req.body);
    let result = await newdemande.save();
    res.send({ demande: result, msg: "demande is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all demandes
demandeRouter.get("/", async (req, res) => {
  try {
    let result = await Demande.find();
    res.send({ demandes: result, msg: "all demandes" });
  } catch (error) {
    console.log(error);
  }
});

//get demande by id
demandeRouter.get("/:id", async (req, res) => {
  try {
    let result = await Demande.findById(req.params.id);
    res.send({ demande: result, msg: " demande" });
  } catch (error) {
    console.log(error);
  }
});

demandeRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Demande.findByIdAndDelete(req.params.id);
    res.send({ msg: "demande is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update demande
demandeRouter.put("/:id", async (req, res) => {
  try {
    let result = await Demande.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ demande: "result", msg: "demande is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = demandeRouter;