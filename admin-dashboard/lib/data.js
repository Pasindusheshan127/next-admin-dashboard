import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
  try {
    await connectToDB(); // Ensure DB connection
    const users = await User.find();
    return users;
  } catch (error) {
    console.log("Error fetching users:", error);
    throw new Error("failed to fetch users");
  }
};
