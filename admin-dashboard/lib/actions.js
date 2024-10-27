"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (FormData) => {
  const data = Object.fromEntries(FormData);
  const { username, email, password, phone, isAdmin, isActive, address } = data;

  try {
    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      isAdmin,
      isActive,
      address,
    });
    console.log(newUser);
    await newUser.save();
    return { success: true, message: "User added successfully" };
  } catch (err) {
    console.error(err);
    throw new Error("Failed to add user to the database");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (FormData) => {
  const data = Object.fromEntries(FormData);
  const { title, desc, price, stock, color, size } = data;

  try {
    await connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });
    console.log(newProduct);
    await newProduct.save();
    return { success: true, message: "Product added successfully" };
  } catch (err) {
    console.error(err);
    throw new Error("Failed to add user to the database");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
