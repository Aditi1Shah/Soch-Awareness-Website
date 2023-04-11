import React from "react";
import { Modal, Typography, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
const rotate = keyframes` from { transform: rotate(0deg); } to { transform: rotate(360deg); } `;
const AnimatedCloseIcon = styled(CloseIcon)`
  animation: ${rotate} 2s linear infinite;
`;
const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  max-width: 90%;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
`;
export default function WarnModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContent>
        {/* <Cross /> */}
        <IconButton onClick={handleClose}>
          {/* <CloseIcon /> */}
          <AnimatedCloseIcon />
        </IconButton>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {" "}
          User Already Registered{" "}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {" "}
          You are already registered. Kindly login.{" "}
        </Typography>
      </ModalContent>
    </Modal>
  );
}
