const USERNAME = "user1";
const PASSWORD = "!Korea8080";
const mongoURL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.c1j88.mongodb.net/?retryWrites=true&w=majority`;
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const food = Schema({
  f_id: String,
  f_date: String,
  f_name: String,
  f_eat: Number,
  f_kalo: Number,
});
const food_model = mongoose.model("food", food);
export { mongoURL, food_model };
