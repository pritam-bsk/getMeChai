"use client"
import React from 'react'
import Script from 'next/script';
import { useSession } from "next-auth/react"
import { useState } from 'react'
import { initialize } from "@/actions/useraction";

const Paymentpage = ({username}) => {
    const { data: session } = useSession();
    const [paymentform, setPaymentForm] = useState({name:"", message:"", amount:""});
    

    const handlePayment = async (amount) => {
        setPaymentForm({...paymentform, amount: amount});
        const order = await initialize(amount, username, paymentform);
        const orderId = order.id;
        var options = {
            "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "./tea.gif", //logo url
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": `${session.user.name}`, //your customer's name
                "email": `${session.user.email}`, //Provide the customer's email for better conversion rates
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);
        rzp1.open();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className="min-h-screen bg-[#0b1221] text-white p-6 flex flex-col items-center">

                <div className="w-full max-w-5xl bg-linear-to-b from-[#0b1221] to-[#141c2f] rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative w-full h-32 bg-linear-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                        <img
                            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/10635869/5cc4e6eb120a40b9be0746d077185037/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/3.jpg?token-hash=ZHhLUZ9p1dboKV-UVBKYnAOuRHWegWZ5LrpQ2VQjPhM%3D&token-time=1764806400"
                            alt="Banner"
                            className="w-full h-full object-cover opacity-80"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-6 border-b border-gray-700">
                        <div className="flex items-center gap-4">
                            <img
                                src="./image.png"
                                alt="Profile"
                                className="w-20 h-20 rounded-full border-4 border-yellow-500"
                            />
                            <div>
                                <h2 className="text-xl font-semibold">@{username}</h2>
                                <p className="text-gray-400">Creating Animated art for VTT's</p>
                                <p className="text-sm text-gray-500 mt-1">
                                    9,719 members · 82 posts · $15,450/release
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 p-8">
                        <div className="bg-[#111a2e] p-6 rounded-2xl shadow-md scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 max-h-[500px] overflow-y-auto">
                            <h3 className="text-xl font-semibold mb-4">Supporters</h3>
                            <div className="space-y-4">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between bg-[#0b1324] p-4 rounded-xl"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img
                                                src="./avatar.gif"
                                                className="w-8 h-8"
                                                alt="user"
                                            />
                                            <div>
                                                <p className="font-medium">
                                                    Shubham donated <span className="text-green-400">$30</span>
                                                </p>
                                                <p className="text-sm text-gray-400">
                                                    “I support you bro. Lots of ❤️”
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#111a2e] p-6 rounded-2xl shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Make a Payment</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    className="w-full p-3 rounded-lg bg-[#0b1324] text-white outline-none"
                                    value={paymentform.name}
                                    onChange={(e) => setPaymentForm({...paymentform, name: e.target.value})}
                                />
                                <input
                                    type="text"
                                    placeholder="Enter Message"
                                    className="w-full p-3 rounded-lg bg-[#0b1324] text-white outline-none"
                                    value={paymentform.message}
                                    onChange={(e) => setPaymentForm({...paymentform, message: e.target.value})}
                                />
                                <input
                                    type="number"
                                    placeholder="Enter Amount"
                                    className="w-full p-3 rounded-lg bg-[#0b1324] text-white outline-none"
                                    value={paymentform.amount}
                                    onChange={(e) => setPaymentForm({...paymentform, amount: e.target.value})}
                                />
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-linear-to-r from-purple-600 to-indigo-600 rounded-lg font-semibold hover:opacity-90 transition"
                                    onClick={() => handlePayment(paymentform.amount)}
                                >
                                    Pay
                                </button>
                            </form>

                            <div className="flex justify-between mt-6">
                                {[10, 20, 30].map((value) => (
                                    <button
                                        key={value}
                                        onClick={() => handlePayment(value)}
                                        className="px-4 py-2 bg-[#0b1324] rounded-lg hover:bg-[#1a2340] transition"
                                    >
                                        Pay ${value}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paymentpage
