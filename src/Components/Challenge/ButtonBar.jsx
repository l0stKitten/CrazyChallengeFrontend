import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Message';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add" size="small">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit" size="small">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Follow
      </Fab>
      <Fab aria-label="like" size="small">
        <FavoriteIcon />
      </Fab>
    </Box>
  );
}
