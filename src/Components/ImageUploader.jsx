import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import axios from "axios";

const MAX_FILE_SIZE_MB = 5;
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/gif"];

const ImageFileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState(null);
    const [uploadProgress, setUploadProgress] = React.useState(0);
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        // File type validation
        if (!ALLOWED_FILE_TYPES.includes(file.type)) {
            setError("Invalid file type. Please upload a JPEG, PNG, or GIF image.");
            return;
        }

        // File size validation
        if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
            setError(
                `File size exceeds ${MAX_FILE_SIZE_MB} MB. Please choose a smaller file.`
            );
            return;
        }

        // Read the image file for preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);

        setSelectedFile(file);
        setError(null);
    };

    const handleFileUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            axios.post('/upload', formData, {
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(percentCompleted);
                }
            })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.error(error);
                    // handle error here
                });
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append("file", selectedFile);

            console.log("Uploading file...", formData);
        } else {
            console.error("No file selected");
        }
    };

    return (
        <Box p={3} border="1px dashed #ccc" borderRadius={8} textAlign="center">
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="image-file-input"
            />
            <label htmlFor="image-file-input">
                <Button variant="outlined" component="span">
                    Select Image
                </Button>
            </label>
            {selectedFile && (
                <div>
                    <Typography variant="subtitle1" mt={2}>
                        Selected Image: {selectedFile.name}
                    </Typography>
                    <img
                        src={imagePreview}
                        alt="Preview"
                        style={{ maxWidth: "100%", maxHeight: "200px", marginTop: "10px" }}
                    />
                    <br></br>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleUpload}
                        mt={2}
                    >
                        Upload
                    </Button>
                </div>
            )}
            {error && (
                <Typography variant="body2" color="error" mt={2}>
                    {error}
                </Typography>
            )}
        </Box>
    );
};

export default ImageFileUpload;
