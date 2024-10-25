import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEMS_PER_PAGE = 6; // Changed variable name for clarity
  try {
    await connectToDB(); // Ensure DB connection

    // Get total count of matching users
    const count = await User.find({
      username: { $regex: regex },
    }).countDocuments();

    // Perform the query with regex, limit, and skip applied correctly
    const users = await User.find({ username: { $regex: regex } }) // Corrected field here
      .limit(ITEMS_PER_PAGE) // Apply limit
      .skip(ITEMS_PER_PAGE * (page - 1)); // Apply pagination

    // Return count and users as an object
    return { count, users };
  } catch (error) {
    console.log("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEMS_PER_PAGE = 6; // Changed variable name for clarity
  try {
    await connectToDB(); // Ensure DB connection

    // Get total count of matching users
    const count = await Product.find({
      title: { $regex: regex },
    }).countDocuments();

    // Perform the query with regex, limit, and skip applied correctly
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEMS_PER_PAGE) // Apply limit
      .skip(ITEMS_PER_PAGE * (page - 1)); // Apply pagination

    // Return count and products as an object
    return { count, products };
  } catch (error) {
    console.log("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
};
