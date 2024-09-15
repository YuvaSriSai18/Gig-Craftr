import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Tabs,
  Tab,
  Box,
  Divider,
  Link,
  Grid,
} from "@mui/material";

const SignInSignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [tabValue, setTabValue] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tabValue === 0) {
      // Handle sign-in logic here
      console.log("Sign In - Email:", email);
      console.log("Sign In - Password:", password);
    } else {
      // Handle sign-up logic here
      console.log("Sign Up - Name:", name);
      console.log("Sign Up - Email:", email);
      console.log("Sign Up - Password:", password);
      console.log("Sign Up - Confirm Password:", confirmPassword);
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault()
    setTabValue(newValue);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
  };

  const containerStyle = {
    backgroundImage: "url('path/to/your/background-image.jpg')", // Update this with the correct path
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const formStyle = {
    backgroundColor: "rgba(224, 242, 241, 0.8)",
    padding: "2rem",
    borderRadius: "8px",
    backdropFilter: "blur(10px)",
  };

  return (
    <div style={containerStyle}>
      <Container maxWidth="sm" style={formStyle}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Sign In" />
          <Tab label="Sign Up" />
        </Tabs>

        <form onSubmit={handleSubmit} style={{ marginTop: "1.5rem" }}>
          {tabValue === 1 && (
            <TextField
              label="Full Name"
              type="text"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ marginBottom: "1rem" }}
            />
          )}
          <TextField
            label="Email ID"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginBottom: "1rem" }}
          />
          {tabValue === 1 && (
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ marginBottom: "1rem" }}
            />
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginBottom: "1rem" }}
          >
            {tabValue === 0 ? "Log In" : "Sign Up"}
          </Button>
        </form>

        {tabValue === 0 && (
          <Box textAlign="center" marginBottom="1rem">
            <Link href="#" underline="hover">
              Forgot Password?
            </Link>
          </Box>
        )}

        <Divider style={{ marginBottom: "1rem" }} />

        <Box display="flex" justifyContent="center" alignItems="center">
          <Grid container spacing={2} maxWidth="sm">
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={
                  <img
                    src="https://cdn-icons-png.flaticon.com/256/2702/2702602.png"
                    alt="Google"
                    style={{ width: 20, height: 20 }}
                  />
                }
              >
                Sign {tabValue === 0 ? "in" : "up"} with Google
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="Microsoft"
                    style={{ width: 20, height: 20 }}
                  />
                }
              >
                Sign {tabValue === 0 ? "in" : "up"} with Microsoft
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={
                  <img
                    src="https://static-00.iconduck.com/assets.00/apple-logo-icon-1661x2048-8adk63j7.png"
                    alt="Apple"
                    style={{ width: 20, height: 20 }}
                  />
                }
              >
                Sign {tabValue === 0 ? "in" : "up"} with Apple
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    alt="GitHub"
                    style={{ width: 20, height: 20 }}
                  />
                }
              >
                Sign {tabValue === 0 ? "in" : "up"} with GitHub
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default SignInSignUp;
