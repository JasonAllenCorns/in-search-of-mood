import { Box } from "@mui/material";

export default function FilterableViewContainer (props) {
  const { children } = props;
  return (
    <>
      <Box
        component={"form"}
        autoComplete="false"
        autoCapitalize="false"
      >
        {children}
      </Box>
    </>
  )
}
