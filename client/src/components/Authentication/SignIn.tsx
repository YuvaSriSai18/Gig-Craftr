import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Tabs,
  Tab,
  Box,
  Divider,
  Grid,
  Link,
} from "@mui/material";
import {
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, provider, gitHubProvider } from "../../utils/Config";

import { setUserData } from "../../reducers/auth/authSlice";
import { useDispatch } from "react-redux";
import * as api from "../../apis/index";

const SignInSignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [tabValue, setTabValue] = useState<number>(0); // 0: Sign In, 1: Sign Up

  const dispatch = useDispatch();
  // const userData = useSelector((state:any) => state.auth.userData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tabValue === 0) {
      // Handle Sign-In
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (!user.emailVerified) {
            alert("Please verify your email address before signing in.");
            signOut(auth); // Optionally sign out the user if email is not verified
          } else {
            console.log("Sign In Success:", user);
            dispatch(setUserData(user));
          }
        })
        .catch((error) => {
          console.error("Error during sign-in:", error.message);
        });
    } else {
      // Handle Sign-Up
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          sendEmailVerification(user)
            .then(() => {
              console.log("Verification email sent.");
              alert(
                "A verification email has been sent to your email address. Please verify it before logging in."
              );
              const userData = {
                displayName: user.displayName || name, // Use displayName from user or input name
                email: email,
              };
              // Post user data to the server
              api.postUserData(userData); // <-- Add this to post user data after successful login
            })
            .catch((error) => {
              console.error("Error sending verification email:", error.message);
            });
        })
        .catch((error) => {
          console.error("Error during sign-up:", error.message);
        });
    }
  };

  const handleForgotPassword = () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent.");
        alert("A password reset email has been sent to your email address.");
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error.message);
        alert("Error sending password reset email. Please try again.");
      });
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setTabValue(newValue);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
  };

  const handleGoogleLogin = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userData = await signInWithPopup(auth, provider);
      console.log("Google Sign In Success:", userData.user);
      dispatch(setUserData(userData.user));
      api.postUserData(userData.user);
    } catch (error) {
      console.error(`Error during Google sign-in: ${error}`);
    }
  };
  const gitHubAuthentication = async () => {
    try {
      const result = await signInWithPopup(auth, gitHubProvider);
      const user = result.user;
      if (!user.email) {
        throw new Error("GitHub account does not have an email associated.");
      }
      api.postUserData(user);
      dispatch(setUserData(user));

      console.log("GitHub Sign-In Success:", user);
    } catch (error: any) {
      console.error("Error during GitHub sign-in:", error.message);
      // alert("Error during GitHub sign-in. Please try again.");
      alert(error);
    }
  };
  return (
    <Box
      sx={{
        // backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: {
          xs: "80vh",
          sm: "100vh",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "rgba(224, 242, 241, 0.8)",
          padding: "2rem",
          borderRadius: "8px",
          backdropFilter: "blur(10px)",
        }}
      >
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
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleForgotPassword();
              }}
              underline="hover"
            >
              Forgot Password?
            </Link>
          </Box>
        )}

        <Divider style={{ marginBottom: "1rem" }} />

        <Box>
          <Grid container spacing={2} maxWidth="sm">
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                onClick={handleGoogleLogin}
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
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    alt="GitHub"
                    style={{ width: 20, height: 20 }}
                  />
                }
                onClick={gitHubAuthentication}
              >
                Sign {tabValue === 0 ? "in" : "up"} with GitHub
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
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SignInSignUp;
