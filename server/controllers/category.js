const Category = require("../models/category");
const slugify = require("slugify"); // npm i slugify

exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    //console.log("name de controllers, que fue enviada por req.body", name);
    // const category = await new Category({ name, slug: slugify(name) }).save();
    // res.json(category);
    res.json(await new Category({ name, slug: slugify(name) }).save());
  } catch (err) {
    // console.log(err);
    res.status(400).send("Create category failed");
  }
};

exports.list = async (req, res) =>
  //.sort({ createdAt: -1 } will sort by latest create categories
  res.json(await Category.find({}).sort({ createdAt: -1 }).exec());

exports.read = async (req, res) => {
  let category = await Category.findOne({ slug: req.params.slug }).exec();
  res.json(category);
};

exports.update = async (req, res) => {
  const { name } = req.body;
  //console.log("name of req.body", name);
  try {
    const updated = await Category.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name) }, //slugify become some link like Asus Strix to asus-strix, just to use it as a param
      { new: true } //if we dont put new:true, this function will save the old category intead the new.
    );
    //console.log("name of req.params.slug", req.params.slug);
    res.json(updated);
  } catch (err) {
    res.status(400).send("Create update failed");
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Category.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Create delete failed");
  }
};
