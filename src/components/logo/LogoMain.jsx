// material-ui
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import foodLogo from "../../assets/logo/Food_logo_main.png"; 

// ==============================|| LOGO IMAGE + TEXT ||============================== //

export default function LogoMain() {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={1}       // space between logo and text
      sx={{ py: 1 }} // optional padding top/bottom
    >
      <img
        src={foodLogo}
        alt="Food Logo"
        width={50}      // adjust size as needed
        height={50}
        style={{ objectFit: "contain" }}
      />
      <Typography
        variant="h4"
        component="span"
        sx={{ fontWeight: "bold", textAlign: "center" }}
      >
        PFMOS ADMIN
      </Typography>
    </Box>
  );
}
