// utils.js

export const readTxtFile = async (filePath) => {
    try {
      const response = await fetch(filePath);
      const text = await response.text();
      return text;
    } catch (error) {
      console.error('Error reading the TXT file:', error);
      return '';
    }
  };