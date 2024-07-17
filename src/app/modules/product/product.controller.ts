import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { productService } from "./product.service";

//destructure services
const {
  addProductIntoDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  getAllProductFromDB,
  updateProductFromDB,
  getProductsByCategoryFromDB,
  addProductToCartIntoDB,
  getCartsProductFromDB,
} = productService;

const addProduct = catchAsync(async (req, res) => {
  const result = await addProductIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product carted successfully !",
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleProductFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is retrieved succesfully !",
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteProductFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product deleted successfully",
    data: result,
  });
});
const getAllProduct = catchAsync(async (req, res) => {
  const name = req.query;
  const result = await getAllProductFromDB(name);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product are retrived successfully",
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await updateProductFromDB(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product updated successfully",
    data: result,
  });
});

const getProductsByCategory = catchAsync(async (req, res) => {
  const { category } = req.params;
  const result = await getProductsByCategoryFromDB(category);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products are retrieved succesfully !",
    data: result,
  });
});

const addProductToCart = catchAsync(async (req, res) => {
  const result = await addProductToCartIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is added successfully !",
    data: result,
  });
});

const getCartProducts = catchAsync(async (req, res) => {
  const result = await getCartsProductFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Carted Products are retrieved succesfully !",
    data: result,
  });
});

export const productController = {
  addProduct,
  getSingleProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
  addProductToCart,
  getProductsByCategory,
  getCartProducts,
};
