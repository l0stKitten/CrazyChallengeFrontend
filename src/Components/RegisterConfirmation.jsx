import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { readTxtFile } from '../js/utils';


export default function RegisterConfirmation({ termsAcepted, setTermsAcepted, termsnotAcepted}) {
	const [termsContent, setTermsContent] = useState('');

	const handleCheckboxChange = (event) => {
	  setTermsAcepted(event.target.checked);
	};

	useEffect(() => {
		const fetchTerms = async () => {
		  const filePath = '/txt/terms_and_conditions.txt'; // Update the file path
		  const content = await readTxtFile(filePath);
		  setTermsContent(content);
		};
	
		fetchTerms();
	}, []);
  
	return (
		<Grid container direction="column" spacing={2} alignItems="center" justifyContent="center">
			<Grid item xs={12} textAlign="center">
			<Typography variant="h3" mb={2} sx={{fontFamily: 'Poppins'}}>
				Términos y Condiciones 🐱‍👤
			</Typography>
			<br />
			{termsnotAcepted && (
				<Typography variant="caption" color="error" sx={{ mb: 2 }}>
				Debe aceptar los términos y condiciones
				</Typography>
			)}
			</Grid>
		
			<Grid item xs={6} >
				<Box p={2} border="1px solid #ccc" borderRadius={8} width="100%" sx={{ overflowY: 'auto', maxHeight: '400px' }}>
					<ReactMarkdown>{termsContent || 'Loading terms and conditions...'}</ReactMarkdown>
				</Box>
			</Grid>

		
			<Grid item xs={12} sx={{ mt: 1 }}>
			<FormGroup>
				<FormControlLabel
				control={<Checkbox checked={termsAcepted} onChange={handleCheckboxChange} />}
				label="Acepto términos y condiciones"
				/>
			</FormGroup>
			</Grid>
		</Grid>
	);
}