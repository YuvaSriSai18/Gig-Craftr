import React from "react";
import { Button, Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// Type definition for the category items
interface Category {
  title: string;
  image: string;
}

// Importing categories
import { categories } from "../../Constants/categories";

// Freelance_Categories component
const Freelance_Categories: React.FC = () => {
  const [Categories, setCategories] = React.useState<Category[]>(categories);

  // Logic to conditionally clear categories (if necessary)
  if (false) {
    setCategories([]);
  }

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="nowrap"
      sx={{
        width: "100%", // Ensures the box is responsive
        px: 2, // Padding
        mb: 2,
        gap: { xs: 1, sm: 2 }, // Responsive gap
      }}
    >
      {Categories.map((category) => (
        <Button
          key={category.title} // Use a unique key for each button
          variant="outlined"
          endIcon={<ArrowDropDownIcon />}
          sx={{
            height: "60px",
            flex: 1,
            padding: "2px 2px",
            borderRadius: "50px",
            backgroundColor: "white",
            fontSize: { xs: "22px", sm: "18px" },
            fontWeight: "normal",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            textTransform: "none",
            color: "#333",
            border: "1px solid #e0e0e0",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            "&:hover": {
              backgroundColor: "#f5f5f5",
              borderColor: "#d0d0d0",
            },
          }}
        >
          {category.title}
        </Button>
      ))}
    </Box>
  );
};

export default Freelance_Categories;
