import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import { createTheme} from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const ContactList = ({ title, contacts, mtbool }) => {
    const [showAll, setShowAll] = useState(false);

    const visibleContacts = showAll ? contacts : contacts.slice(0, 5);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const themeSideMenu = createTheme({
		typography: {
			fontFamily: [
			  'Average Sans',
			].join(','),
		}
	})

    return (
        <Card sx={{ boxShadow:0, borderRadius: 3, mt: mtbool ? 2 : 0 }}>
            <ThemeProvider theme={themeSideMenu}>
                <CardHeader
                    title={title}
                />
            </ThemeProvider>
            
            <Divider variant="middle"/>
            <CardContent>
                <Grid 
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >
                    {visibleContacts.map((contact, index) => (
                        <Grid item xs={12} key={contact.id} >
                        <Grid container wrap="nowrap" alignItems="center">
                            <Grid item>
                            <Avatar alt={contact.name} src="/path-to-avatar-image.jpg" />
                            </Grid>
                            <Grid item marginLeft={2}>
                            <Typography variant="body2">{contact.name}</Typography>
                            </Grid>
                        </Grid>
                        </Grid>
                    ))}
                </Grid>
                {contacts.length > 5 && (
                    <Button onClick={toggleShowAll}>
                    {showAll ? 'Show Less' : 'View All'}
                    </Button>
                )}
            </CardContent>
        
        </Card>
    );
};

export default ContactList;