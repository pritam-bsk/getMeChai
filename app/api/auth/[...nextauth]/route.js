import mongoose from "mongoose";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";
import connectDB from "@/db/connectdb";

export const authoptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log(user)
      connectDB();
      const currUser = await User.findOne({email: user.email})
      if(!currUser){
        const newUser = await User.create({
          email: user.email,
          username: user.email.split('@')[0]
        })
      }
      return true;
    },
    async session({ session }) {
      connectDB();
      const currUser = await User.findOne({email: session.user.email})
      session.user.id = currUser._id.toString();
      session.user.username = currUser.username;
      session.user.email = currUser.email;
      return session;
    }
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { authoptions as GET, authoptions as POST };