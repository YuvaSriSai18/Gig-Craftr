import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { categories } from "../../Constants/catogiryforhome";

// Type definition for category item
interface Category {
  image: string;
  title: string;
}

// Component to display a single category card
const CategoryCard: React.FC<{ item: Category }> = ({ item }) => (
  <Card
    sx={{
      p:3,
      borderRadius:5,
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-around',
      width:'250px'
    }}
  >
    <Box
      component="img"
      src={item.image}
      alt={item.title}
      sx={{
        height: "150px",
        width: "150px",
        alignSelf:'center',
        borderRadius: "10px",
      }}
    />
    <CardContent>
      <Typography variant="h6">{item.title}</Typography>
    </CardContent>
  </Card>
);

// Component to display grid of category cards
const CategoryGrid: React.FC = () => {
  const [visibleCategories, setVisibleCategories] = useState<number>(6); // Initially show 6 categories

  const loadMoreCategories = () => {
    setVisibleCategories((prev) => prev + 3); // Load 3 more categories
  };

  return (
    <div
      style={{ padding: "100px", marginBottom: "50px" }}
    >
      <Typography variant="h2" align="center" gutterBottom>
        Choose Different <span style={{ color: "#2979ff" }}>Category</span>
      </Typography>

      <Box display={'flex'} gap={2} flexWrap={'wrap'}>
        {categories
          .slice(0, visibleCategories)
          .map((category: Category, index: number) => (
            <Box key={index}>
              <CategoryCard item={category} />
            </Box>
          ))}
      </Box>

      {visibleCategories < categories.length && (
        <Box textAlign="center" mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={loadMoreCategories}
          >
            Load More
          </Button>
        </Box>
      )}
    </div>
  );
};

export default CategoryGrid;
