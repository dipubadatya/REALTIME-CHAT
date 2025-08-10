// src/index.js
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./lib/db.js";

const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ MongoDB connected");

    const express = (await import("express")).default;
    const cookieParser = (await import("cookie-parser")).default;
    const cors = (await import("cors")).default;
    const path = (await import("path")).default;
    const { app, server } = await import("./lib/socket.js");

    const authRoutes = (await import("./routes/auth.route.js")).default;
    const messageRoutes = (await import("./routes/message.route.js")).default;

    const PORT = process.env.PORT || 5001;
    const __dirname = path.resolve();

    // Middleware - ensure cookieParser is applied before protectRoute is used
    app.use(express.json({ limit: "10mb" }));
    app.use(cookieParser());
    app.use(
      cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173",
        credentials: true,
      })
    );

    app.use("/api/auth", authRoutes);
    app.use("/api/messages", messageRoutes);

    if (process.env.NODE_ENV === "production") {
      app.use(express.static(path.join(__dirname, "../frontend/dist")));
      app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
      });
    }

    server.listen(PORT, () => {
      console.log(`🚀 Server running on PORT: ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  }
};

startServer();
