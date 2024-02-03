import { Box } from "@mui/material";
import { styled } from "@mui/material";

// Flex between css özelliğini component haline çevrilmiş hali
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
