import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 1 }}
      >
        <Box
          sx={{
            my: 1,
            "& svg": {
              fontSize: "50px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "orange",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <a href="https://www.instagram.com/dee.kshaa/"><InstagramIcon /></a>
          <a href="https://twitter.com/DeekshaLakhotia"><TwitterIcon /></a>
          <a href="https://github.com/deekshaaa001"><GitHubIcon /></a>
          <a href="https://www.linkedin.com/in/deeksha-lakhotia/"><LinkedInIcon /></a>
        </Box>
        <Typography
          variant="h6"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Deeksha
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
