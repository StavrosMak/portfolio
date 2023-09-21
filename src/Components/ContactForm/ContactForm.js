import { TextField, Button, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { ThreeDots } from 'react-loader-spinner';

import { useState } from "react";
export default function ContactForm() {

  const [isLoading, setIsLoading] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Define your email service, template, and public key here
    const serviceId = "service_rfptbms";
    const templateId = "template_v59h6gp";
    const userId = "WBYxSTRafwRb9h9FM";

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
        console.log("Email sent successfully:", response);
        // Reset form fields here if needed
        window.scrollTo(0, 0);
        e.target.reset();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      }).finally(() => {
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
          alignItems: "center",
          justifyContent: "center",
          height: "700px",
          backgroundColor: "#22282f",
          margin: "100px 0",
        }}
      >
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
          <form onSubmit={handleSubmit} style={{ color: '#fff' }}>
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
