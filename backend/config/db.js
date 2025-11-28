import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://nikitarathod3601_db_user:nikita3636@cluster0.w4xkimp.mongodb.net/food-del").then(() => console.log("DB Connected"));
};