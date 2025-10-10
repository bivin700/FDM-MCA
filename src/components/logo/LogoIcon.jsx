// material-ui
import { Box, Typography } from "@mui/material";
import foodLogo from "../../assets/logo/Food_logo_main.png"; 

// ==============================|| LOGO IMAGE + TEXT ||============================== //

export default function LogoMain() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={0}      // space between logo and text
      sx={{ py: 2 }} // optional padding top/bottom
    >
      {/* PNG Logo */}
      <img
        src={foodLogo}
        alt="Food Logo"
        width={40}      // adjust size as needed
        height={40}
        style={{ objectFit: "contain" }}
      />

  
    </Box>
  );
}
