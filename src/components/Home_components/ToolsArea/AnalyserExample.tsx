"use client";

import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";
import TokenPicture from "../../Analyser_components/AnalyserV1-interface/tokenPicture";
import Link from "next/link";

// 🎨 Criando um tema personalizado
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: "#d24d19", // Azul personalizado
          solidHoverBg: "#c05c15",
        },
        neutral: {
          softBg: "#F5F5F5",
          softColor: "#333",
        },
      },
    },
  },
  typography: {
    h2: {
      fontSize: "1.8rem",
      fontWeight: "bold",
    },
    "body-md": {
      fontSize: "1rem",
      color: "#666",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

const AnalyserExample = () => {
  return (
    <CssVarsProvider theme={theme}>
      <Card
        variant="outlined"
        color="primary"
        invertedColors
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%" },
          height: {
            xs: '50%'
          },
          borderRadius: "16px",
          boxShadow: "lg",
          padding: "24px",
        }}
      >
        <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>
          <TokenPicture />
          <CardContent>
            <Typography level="h4">Criptomoeda</Typography>
            <Typography level="body-md">Liquidez</Typography>
            <Typography level="h4">$1,456,283.00</Typography>
            <Typography level="h4">Riscos identificados: 3</Typography>
          </CardContent>
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="md" fullWidth style={{ transition: '0.3s' }}>
            <Link href="/analyser" style={{ width: '100%', color: 'inherit', textDecoration: 'none' }}>
              Experimentar ferramenta
            </Link>
          </Button>
        </CardActions>
      </Card>
    </CssVarsProvider>
  );
};

export default AnalyserExample;
