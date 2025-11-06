"use server"
import Razorpay from "razorpay";
import Payment from "@/models/payment";
import connectDB from "@/db/connectdb";


export const initialize = async (amount, to_user, pymentform) => {
    await connectDB();

    var instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    var options = {
        amount: Number.parseInt(amount*100),  // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR"
    };
    const order = await instance.orders.create(options);

    await Payment.create({
        name: pymentform.name,
        to_user: to_user,
        oid: order.id,
        amount: amount,
        currency: order.currency,
        to_user: to_user,
        message: pymentform.message,
    });
    return order;
}