const express = require("express");
const router = express.Router();
const User = require("../models/Users");

router.post("/", async (req, res) => {
  const profile = req.body;
  try {
    const name = capitalizeFirstLetterOfEachWord(profile.displayName);
    const email = profile.email;
    const photoUrl = profile.photoURL || `https://ca.slack-edge.com/T0266FRGM-U015ZPLDZKQ-gf3696467c28-512`;

    const user = await User.findOneAndUpdate(
      { email },
      { email, photoUrl: photoUrl, displayName: name },
      { new: true, upsert: true }
    );

    // Send a response to indicate success
    res.status(200).json({
      message: "User profile updated successfully",
      user,
    });
  } catch (error) {
    console.error(`Error occurred in Auth Route: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message }); // Handle errors
  }
});

router.get("/:email", async (req, res) => {
  try {
    const email = req.params.email; // Get the email from the request parameters
    const user = await User.findOne({ email: email }); // Find the user by email

    if (!user) {
      return res.status(404).json({ message: "User not found" }); // Return 404 if user is not found
    }

    res.status(200).json(user); // Send the user data if found
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message }); // Handle errors
  }
});

function capitalizeFirstLetterOfEachWord(str) {
  if (!str) return ""; // Handle undefined or null strings
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

module.exports = router;
