import { Alert, Box, Snackbar } from "@mui/material";
import React from "react";

const SnackBarr = (props) => {
  const [stateopen, setOpenState] = React.useState(true);
  const {
    message,
    severity = "success",
    position = { vertical: "top", horizontal: "center" },
    autoHideDuration = 6000,
  } = props;

  const handleClose = () => {
    setOpenState(false);
  };
  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        open={stateopen}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        anchorOrigin={{
          vertical: position.vertical,
          horizontal: position.horizontal,
        }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SnackBarr;
