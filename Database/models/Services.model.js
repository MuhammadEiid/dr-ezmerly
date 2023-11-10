import mongoose, { Schema, model } from "mongoose";

const serviceSchema = new Schema(
  {
    title: {
      en: {
        type: String,
        trim: true,
        min: 3,
      },
      ar: {
        type: String,
        trim: true,
        min: 3,
      },
    },

    description: {
      en: {
        type: String,
        trim: true,
        min: 3,
      },
      ar: {
        type: String,
        trim: true,
        min: 3,
      },
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
    imageCover: String,
  },
  { timestamps: true }
);

serviceSchema.post("init", function () {
  if (this.imageCover)
    this.imageCover = process.env.BaseURL + "services/" + this.imageCover;
});

export const serviceModel =
  mongoose.models.service || model("service", serviceSchema);
