import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography, formGroupClasses } from '@mui/material';
import Sidebar from './Sidebar';

function TempDrawer () {
  const [isOpen, setIsOpen] =useState(formGroupClasses);

  return (
 <>
  <Button size='large' edge='start' onClick={()=>setIsOpen(true)} style={{position:"absolute",bottom:"350px"}} >
    open
  </Button>
    <div style={{position:"absolute"}}>
          <Drawer
            anchor='left'
            open={isOpen}
            onClose={()=>setIsOpen(false)}
          >
           <Box p={2} width="250px" textAlign='center'>
              <Sidebar/>
           </Box>
          </Drawer>
    </div>
  </>  
  );
}

export default TempDrawer;