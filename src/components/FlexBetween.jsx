import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

/**
 * @description This is a customized Box component that is used in other components and in pages
 * @author [Hoang Le Chau](https://github.com/hoanglechau)
 */
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
