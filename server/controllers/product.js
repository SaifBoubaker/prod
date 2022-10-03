const ProductCollection = require("../models/product");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_SECRETKEY,
});

const createProduct = async (req, res) => {
  console.log(req);
  const { title, description, price, category } = req.body;
  try {
    // const img = await cloudinary.uploader.upload(image, {
    //   folder: "images",
    //   resource_type: "auto",
    // });
    const product = await ProductCollection.create({
      title,
      description,
      price,
      category,
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await ProductCollection.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductCollection.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductCollection.findByIdAndUpdate(id, {
      ...req.body,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductCollection.findByIdAndDelete(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
