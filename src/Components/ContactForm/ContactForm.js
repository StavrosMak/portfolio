import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
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
    const userId = process.env.REACT_APP_USER_ID;

    const formData = new FormData(e.target);
    const templateParams = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      user_company: formData.get("user_company"),
      user_message: formData.get("user_message"),
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        e.target.reset();
        setIsLoading(false);
        setSubmissionStatusMessage("Email sent successfully!"); 
        setTimeout(() => {
          setSubmissionStatusMessage(null); 
          window.scrollTo(0, 0);
        }, 1500);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setSubmissionStatusMessage("Email sending failed. Please try again."); 
        setIsLoading(false);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        id="contact"
        sx={{
          display: "flex",
          flexDirection: "column",  
          alignItems: "center",
          justifyContent: "center",
          margin:'200px 0',
          minHeight: "700px", // Set minimum height to cover the entire viewport
          backgroundColor: "#22282f",
        }}
      >
        {submissionStatusMessage && ( // Render submission status message if it's available
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: "#4CAF50",
              color: "#fff",
              textAlign: "center",
              padding: "10px",
              zIndex: 9999,
            }}
          >
            {submissionStatusMessage}
          </div>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 700,
            mx: "auto",
            p: 2,
            borderRadius: "12px",
            color: "cyan",
            boxShadow: 1,
          }}
        >
          <Typography variant="h4" align="center" mb={2}>
            Contact
          </Typography>
          <form onSubmit={handleSubmit} style={{ color: "#fff" }}>
            <TextField
              fullWidth
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              label="Name"
              name="user_name"
              margin="normal"
              required
            />
            <TextField
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              fullWidth
              label="Email"
              name="user_email"
              margin="normal"
              required
              type="email"
            />
            <TextField
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              fullWidth
              label="Company"
              name="user_company"
              margin="normal"
              required
            />
            <TextField
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              fullWidth
              label="Message"
              name="user_message"
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button
              fullWidth
              type="submit"
              sx={{
                mt: 2,
                backgroundColor: "#000",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#111",
                },
              }}
              disabled={isLoading}
            >
              {isLoading ? <ThreeDots color="white" height={24} width={24} /> : "Submit"}
            </Button>
          </form>
        </Box>
      </Box>
    </motion.div>
  );
}
