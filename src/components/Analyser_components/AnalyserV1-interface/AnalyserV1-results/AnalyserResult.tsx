"use client";

import { ColorPaletteProp, CssVarsProvider, extendTheme } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import Card, { CardPropsColorOverrides } from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";
import { VerifyButtonVisibility } from "@/analyser-utils/utils/VerifyButtonVisibility";
import { useDispatch } from "react-redux";
import { showDeepResults } from "../../../../store/dataSlice";
import { PickColor } from "@/analyser-utils/utils/pickColor";
import { OverridableStringUnion } from "@mui/types";
import { VerifyToken, VerifyWarn } from "@/analyser-utils/utils/VerifyToken";
import TokenPicture from "../tokenPicture";

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
    bodyMd: {
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

const AnalyserResult = () => {
 const dispatch = useDispatch();
 const color = PickColor() as OverridableStringUnion<ColorPaletteProp, CardPropsColorOverrides>;
 
 return (
    <CssVarsProvider theme={theme}>
      <Card
        variant="neutral"
        color={color}
        invertedColors
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%" },
          borderRadius: "16px",
          boxShadow: "lg",
          padding: "24px",
        }}
        >
        <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>
          <TokenPicture />
          <CardContent>
            <Typography level="h3">{VerifyToken('name')}</Typography>
            <Typography level="body-md">Liquidez</Typography>
            <Typography level="h5"> {VerifyToken('liquidity')}</Typography>
            <Typography level="h4">{VerifyWarn()}</Typography>
          </CardContent>
        </CardContent>
        <CardActions>
          <Button variant="solid" size="md" disabled={VerifyButtonVisibility()}  fullWidth onClick={() => dispatch(showDeepResults())}>
            Ver Analise Detalhada
          </Button>
        </CardActions>
      </Card>
    </CssVarsProvider>
  );
};

export default AnalyserResult;
