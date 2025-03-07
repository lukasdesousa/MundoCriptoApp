"use client";

import * as React from "react";
import { ColorPaletteProp, CssVarsProvider, extendTheme } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { VerifyScore } from "@/analyser-utils/utils/VerifyToken";
import { CardPropsColorOverrides } from "@mui/joy/Card";
import { OverridableStringUnion } from "@mui/types";
import { PickColor } from "@/analyser-utils/utils/pickColor";
import { ScoreSummary } from "@/analyser-utils/utils/deepSearch";
import PercentageIndex from "./PercentageIndex";
import { RisksDescriptions } from "@/analyser-utils/utils/risksDescription-variables";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import FadeIn from "./animations/FadeIn";


// 🎨 Criando um tema personalizado
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: "#007BFF",
          solidHoverBg: "#0056b3",
        },
        neutral: {
          softBg: "#F3F4F6",
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

export default function DetailsResult() {
  const color = PickColor() as OverridableStringUnion<ColorPaletteProp, CardPropsColorOverrides>;
  const isVisible = useSelector((state: RootState) => state.data.isVisible);

  return (
    <CssVarsProvider theme={theme} >
      <FadeIn isVisible={isVisible}>
        <Card
          variant="solid"
          color={color}
          invertedColors
          sx={{
            boxShadow: "lg",
            width: { xs: "100%", sm: '100%' },
            maxWidth: "100%",
            borderRadius: "16px",
            padding: "20px",
            overflow: "auto",
            resize: "horizontal",
            display: isVisible ? 'flex' : 'none',
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <Chip size="sm" variant="solid">
              Busca profunda
            </Chip>
            <Chip size="sm" variant="soft">
              Recomendações
            </Chip>
          </Box>
          <div>
            <Box sx={{ display: "block", justifyContent: "left", gap: '10px', alignItems: 'center' }}>
              <PercentageIndex />
            <Typography level="h2">
              {VerifyScore()}{" "}
              <Typography textColor="text.tertiary" sx={{ fontSize: "sm" }}>
                índice
              </Typography>
            </Typography>
            </Box>
          </div>
          <CardContent>
            <Typography level="title-lg">{ScoreSummary('tittle')}</Typography>
            <Typography level="body-md">
              {ScoreSummary('sub-tittle')}
            </Typography>
          </CardContent>
          <CardContent sx={{width: '100%'}}>
            {RisksDescriptions({/* any */})}
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </FadeIn>
    </CssVarsProvider>
  );
}
