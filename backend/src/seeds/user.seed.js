// scripts/user.seed.js
import { config } from "dotenv";
import { connectDB } from "../src/lib/db.js";
import User from "../src/models/user.model.js";
import bcrypt from "bcryptjs";

config();

const seedUsers = [
  // ... same array but without plaintext passwords, we will hash below
];

const seedDatabase = async () => {
  try {
    await connectDB();

    // remove existing (optional)
    await User.deleteMany({});

    const usersToInsert = await Promise.all(
      seedUsers.map(async (u) => {
        const salt = await bcrypt.genSalt(10);
        return {
          ...u,
          password: await bcrypt.hash(u.password || "123456", salt),
        };
      })
    );

    await User.insertMany(usersToInsert);
    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
