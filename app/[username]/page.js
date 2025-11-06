import React from 'react'
import PaymentPage from "@/components/Paymentpage";
import { notFound } from "next/navigation"
import connectDB from '@/db/connectdb'
import User from '@/models/User'

export default async function Username({ params }) {
    const { username } = await params; // unwrap params Promise

    await connectDB();
    const u = await User.findOne({ username });
    if (!u) return notFound();

    return <PaymentPage username={username} />;
}