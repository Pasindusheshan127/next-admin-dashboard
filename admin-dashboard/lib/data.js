import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    await connectToDB(); // Ensure DB connection
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (error) {
    console.log("Error fetching users:", error);
    throw new Error("failed to fetch users");
  }
};
