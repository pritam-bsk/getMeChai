//implement razorpay payment capture route
import Razorpay from "razorpay";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import connectDB from "@/db/connectdb";
import Payment from "@/models/payment";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
    await connectDB();
    const data = await request.formData();
    const paymentId = data.get("razorpay_payment_id");
    const orderId = data.get("razorpay_order_id");
    const signature = data.get("razorpay_signature");

    // Here, you would typically verify the payment signature and capture the payment.
    // For simplicity, we'll assume the payment is successful.

    // Update payment status in the database
    const p = await Payment.findOneAndUpdate(
        { oid: orderId },
    );
    if (!p) {
        return new Response(JSON.stringify({ status: "failure", message: "Order not found" }), {
            headers: { "Content-Type": "application/json" },
        });
    }

    let user = await User.findOne({ username: p.to_user })
    const secret = process.env.RAZORPAY_KEY_SECRET; // Change this to user's secret if using multiple users
    let xx = validatePaymentVerification({ "order_id": orderId, "payment_id": paymentId }, signature, secret)

    if (!xx) {
        return new Response(JSON.stringify({ status: "failure", message: "Payment verification failed" }), {
            headers: { "Content-Type": "application/json" },
        });
    }
    p.done = true;
    await p.save();
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${p.to_user}?payment=success`);
}