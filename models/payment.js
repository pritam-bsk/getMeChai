import mongoose from "mongoose";
const { Schema, model } = mongoose;

const paymentSchema = new Schema({
    name: { type: String, required: true },
    to_user: { type: String, required: true },
    oid: { type: String, required: true },
    message: { type: String },
    amount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    done: { type: Boolean, default: false },
});

// guard access to mongoose.models (HMR / multiple instances / bundler)
const existing = mongoose?.models || {};
const Payment = existing.Payment || model("Payment", paymentSchema);

export default Payment;