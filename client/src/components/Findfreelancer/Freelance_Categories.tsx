import React from "react";
import { Button, Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {categories} from '../../Constants/categories.ts'


const Freelance_Categories = () => {
  const [Categories, setCategories] = React.useState(categories);
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
        width: "100%", // Centers the box if it's less than 100% width
        px: 2, // Adds 16px padding left and right (equivalent to mx: 2)
        mb: 2,
        gap: { xs: 1, sm: 2 }, // Responsive gap
      }}
    >
      {Categories.map((category) => (
        <Button
          key={category}
          variant="outlined"
          endIcon={<ArrowDropDownIcon />}
          sx={{
            height: "60px",
            flex: 1,
            padding: "2px 2px",
            borderRadius: "50px",
            backgroundColor: "white",
            fontSize: { xs: "22px", sm: "18px" }, // Increased font size
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
          {category}
        </Button>
      ))}
    </Box>
  );
};

export default Freelance_Categories;
