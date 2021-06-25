import asyncHandler from "express-async-handler";
import Match from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getMatches = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Match.countDocuments({ ...keyword });
  const matches = await Match.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ matches, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
// const getMatchById = asyncHandler(async (req, res) => {
//   const match = await Match.findById(req.params.id);

//   if (match) {
//     res.json(match);
//   } else {
//     res.status(404);
//     throw new Error("Product not found");
//   }
// });

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
// const deleteProduct = asyncHandler(async (req, res) => {
//   const product = await Product.findById(req.params.id);

//   if (product) {
//     await product.remove();
//     res.json({ message: "Product removed" });
//   } else {
//     res.status(404);
//     throw new Error("Product not found");
//   }
// });

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createMatch = asyncHandler(async (req, res) => {
  const match = new Match({
    user: "Sample name",
    city: "City Name",
    // user: req.user._id,
    // image: "/images/sample.jpg",
    // brand: "Sample brand",
    // category: "Sample category",
    // countInStock: 0,
    // numReviews: 0,
    // description: "Sample description",
    date:"enter date",
    TeamA:"enter TeamA Name",
    TeamB:"enter TeamB Name",
  });

  const createdMatch = await match.save();
   res.status(201).json(createdMatch);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
// const updateMatch = asyncHandler(async (req, res) => {
//   const { user,city , date, TeamA, TeamB } =
//     req.body;

//   const match = await Match.findById(req.params.id);

//   if (match) {
//     product.name = name;
//     product.price = price;
//     product.description = description;
//     product.image = image;
//     product.brand = brand;
//     product.category = category;
//     product.countInStock = countInStock;

//     const updatedProduct = await product.save();
//     res.json(updatedProduct);
//   } else {
//     res.status(404);
//     throw new Error("Product not found");
//   }
// });

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
// const createProductReview = asyncHandler(async (req, res) => {
//   const { rating, comment } = req.body;

//   const product = await Product.findById(req.params.id);

//   if (product) {
//     const alreadyReviewed = product.reviews.find(
//       (r) => r.user.toString() === req.user._id.toString()
//     );

//     if (alreadyReviewed) {
//       res.status(400);
//       throw new Error("Product already reviewed");
//     }

//     const review = {
//       name: req.user.name,
//       rating: Number(rating),
//       comment,
//       user: req.user._id,
//     };

//     product.reviews.push(review);

//     product.numReviews = product.reviews.length;

//     product.rating =
//       product.reviews.reduce((acc, item) => item.rating + acc, 0) /
//       product.reviews.length;

//     await product.save();
//     res.status(201).json({ message: "Review added" });
//   } else {
//     res.status(404);
//     throw new Error("Product not found");
//   }
// });

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
// const getTopProducts = asyncHandler(async (req, res) => {
//   const products = await Product.find({}).sort({ rating: -1 }).limit(3);

//   res.json(products);
// });

export {
  getMatches,
  //getMatchById,
  // deleteProduct,
  createMatch,
  //updateMatch,
  // createProductReview,
  // getTopProducts,
};
