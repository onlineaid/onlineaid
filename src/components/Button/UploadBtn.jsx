import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const UploadBtn = ({ onFileChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileChange(file);
  };

  return (
    <>
      <VisuallyHiddenInput
        type="file"
        id="upload-file"
        onChange={handleFileChange}
        accept="image/*" // Specify the allowed file types
      />
      <label htmlFor="upload-file">
        <Button component="span" variant="contained" startIcon={<CloudUploadIcon />}>
          Upload file
        </Button>
      </label>
    </>
  );
};

export default UploadBtn;
