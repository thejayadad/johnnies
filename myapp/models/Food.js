import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema(
    {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    instructions: {
        type: String
    },
    prepstyle: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.Food || mongoose.model("Food", FoodSchema)