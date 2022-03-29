import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const WrapperBox = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: "2px 2px 7px 1px #95a5a6",
    textAlign: "center"
}))

export default WrapperBox