const express = require("express");
const router = express.Router();
const User = require("../models/Users");

router.post("/", async (req, res) => {
  const profile = req.body;

  try {
    const name = capitalizeFirstLetterOfEachWord(profile.displayName);
    const email = profile.email;
    const photoUrl = profile.photoUrl;

    const user = await User.findOneAndUpdate(
      { email },
      { email, name, photoUrl, displayName: name },
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

function capitalizeFirstLetterOfEachWord(str) {
  if (!str) return ""; // Handle undefined or null strings
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

module.exports = router;
