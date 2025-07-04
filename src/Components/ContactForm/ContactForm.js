import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { Email, LinkedIn, GitHub, Phone } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import { ThreeDots } from "react-loader-spinner";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatusMessage, setSubmissionStatusMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const formData = new FormData(e.target);
    const templateParams = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      user_company: formData.get("user_company"),
      user_message: formData.get("user_message"),
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        e.target.reset();
        setIsLoading(false);
        setSubmissionStatusMessage("✅ Email sent successfully!");
        setTimeout(() => {
          setSubmissionStatusMessage(null);
          window.scrollTo(0, 0);
        }, 3000);
      })
      .catch(() => {
        setSubmissionStatusMessage("❌ Failed to send. Please try again.");
        setIsLoading(false);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="contact"
      style={{ margin: 0 }} // Remove big margin that breaks mobile
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          my: 3,
          fontWeight: "bold",
          color: "#13bbff",
          px: 2,
        }}
      >
        Get in Touch
      </Typography>

      <Box
        sx={{
          color: "#fff",
          p: { xs: 3, md: 8 },
          borderRadius: "20px",
          maxWidth: "1200px",
          mx: "auto",
          boxShadow: "0 0 25px rgba(19, 187, 255, 0.1)",
          position: "relative",
        }}
      >
        {submissionStatusMessage && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{
              backgroundColor: "#13bbff",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "10px",
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            {submissionStatusMessage}
          </motion.div>
        )}

        <Grid
          container
          spacing={4}
          position="relative"
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* LEFT: Contact Info */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: "flex-start",
              textAlign: { xs: "center", md: "left" },
              zIndex: 2,
              mb: { xs: 4, md: 0 },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                borderBottom: "1px solid #13bbff",
                width: "100%",
              }}
            >
              Contact Information
            </Typography>

            <Box sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
              <Email color="primary" />
              <Typography variant="body1" sx={{ wordBreak: "break-all" }}>
                <a
                  href="mailto:makrygiannis.stavros@outlook.com"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  makrygiannis.stavros@outlook.com
                </a>
              </Typography>
            </Box>

            <Box sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
              <Phone color="primary" />
              <Typography variant="body1">
                <a
                  href="tel:+306971718969"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  +30 6971718969
                </a>
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <IconButton
                href="https://www.linkedin.com/in/stavros-makrygiannis-b1691b256"
                target="_blank"
                rel="noopener"
                sx={{ color: "#13bbff" }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://github.com/StavrosMak"
                target="_blank"
                rel="noopener"
                sx={{ color: "#13bbff" }}
              >
                <GitHub />
              </IconButton>
            </Box>
          </Grid>

          {/* RIGHT: Contact Form */}
          <Grid
            item
            xs={12}
            md={7}
            zIndex={2}
            sx={{
              maxWidth: "100%",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: "100%" }}
              noValidate
              autoComplete="off"
            >
              {["Name", "Email", "Company"].map((label, index) => (
                <TextField
                  key={index}
                  label={label}
                  name={`user_${label.toLowerCase()}`}
                  fullWidth
                  margin="normal"
                  required
                  type={label === "Email" ? "email" : "text"}
                  InputLabelProps={{ style: { color: "#aaa" } }}
                  InputProps={{ style: { color: "#fff" } }}
                />
              ))}

              <TextField
                label="Message"
                name="user_message"
                fullWidth
                margin="normal"
                required
                multiline
                rows={4}
                InputLabelProps={{ style: { color: "#aaa" } }}
                InputProps={{ style: { color: "#fff" } }}
              />

              <Button
                type="submit"
                fullWidth
                disabled={isLoading}
                sx={{
                  mt: 3,
                  background: "linear-gradient(90deg, #13bbff, #007bff)",
                  color: "#fff",
                  fontWeight: 600,
                  py: 1.5,
                  borderRadius: "10px",
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": {
                    background: "linear-gradient(90deg, #0da9e4, #006de1)",
                  },
                }}
              >
                {isLoading ? (
                  <ThreeDots color="#fff" height={24} width={24} />
                ) : (
                  "Send Message"
                )}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
}
