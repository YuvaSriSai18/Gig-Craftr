import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, CardMedia, Button } from "@mui/material";
import {categories} from "../../Constants/catogiryforhome.ts"


const CategoryGrid = () => {
  const [visibleCategories, setVisibleCategories] = useState(6); // Initially show 6

  const loadMoreCategories = () => {
    setVisibleCategories((prev) => prev + 3); // Load 3 more categories
  };

  return (
    <div style={{ padding: "20px" ,marginBottom:'50px',marginLeft:'200px',marginRight:'200px' }}>
      <Typography variant="h2" align="center" gutterBottom>
        Choose Different <span style={{ color: "#2979ff" }}>Category</span>
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {categories.slice(0, visibleCategories).map((category, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                textAlign: "center",
                borderRadius: "20px", // Slight border radius
                width: "300px", 
                height: "250px", // Make square cards
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional shadow
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={category.image}
                alt={category.title}
                sx={{
                  borderTopLeftRadius: "10px", // Add border radius to image
                  borderTopRightRadius: "10px",
                }}
              />
              <CardContent>
                <Typography variant="h6">{category.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {visibleCategories < categories.length && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button variant="contained" color="primary" onClick={loadMoreCategories}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategoryGrid;
