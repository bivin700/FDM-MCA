// material-ui
import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Rating } from '@mui/material';


// ============================|| COMPONENT - SHADOW ||============================ //


export default function ComponentShadow() {

const users = [
  {
    name: 'John Doe',
    address: 'New York',
    mobile: '9876543210',
    email: 'john@example.com',
    addChefCount: '30',
    Qualification: 'MSC hotel management',
    ratings: 5, // Excellent -> 5 stars
    managerId: 'B562'
  },
  {
    name: 'Jane Smith',
    address: 'London',
    mobile: '9988776655',
    email: 'jane@example.com',
    addChefCount: '25',
    Qualification: 'BSc Culinary Arts',
    ratings: 4, // Very Good -> 4 stars
    managerId: 'C314'
  },
  {
    name: 'Amit Kumar',
    address: 'Delhi',
    mobile: '9090909090',
    email: 'amit@example.com',
    addChefCount: '40',
    Qualification: 'Diploma in Hotel Management',
    ratings: 5, // Excellent -> 5 stars
    managerId: 'D421'
  },
  {
    name: 'Sara Lee',
    address: 'Sydney',
    mobile: '9000000001',
    email: 'sara@example.com',
    addChefCount: '20',
    Qualification: 'BHM (Bachelor of Hotel Management)',
    ratings: 3, // Good -> 3 stars
    managerId: 'E198'
  }
];

  
  
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
  
    const handleEditClick = (user) => {
      setSelectedUser(user);
      setOpenEdit(true);
    };
  
    const handleDeleteClick = (user) => {
      setSelectedUser(user);
      setOpenDelete(true);
    };
  
    return (
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 12 }}>
          <Stack sx={{ gap: 3 }}>
            {/* <MainCard title="Alignment"> */}
  
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Name</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Address</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Mobile No</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Email ID</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Added chef count</strong>
                    </TableCell>
                    <TableCell>
                      <strong>qualification</strong>
                    </TableCell>
                    <TableCell>
                      <strong>ratings</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Manager id</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Action</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
  
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.address}</TableCell>
                      <TableCell>{user.mobile}</TableCell>
                       <TableCell>{user.email}</TableCell>
                      <TableCell>{user.addChefCount}</TableCell>
                      <TableCell>{user.Qualification}</TableCell>
<TableCell>
  <Rating
    name="read-only"
    value={user.ratings} 
    size="small"
  />
</TableCell>

                      <TableCell>{user.managerId}</TableCell>
                     
                      <TableCell>
                        <IconButton color="primary" aria-label="edit" size="small" onClick={() => handleEditClick(user)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton color="error" aria-label="delete" size="small" onClick={() => handleDeleteClick(user)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
  
            {/* Edit Dialog */}
            <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
              <DialogTitle>Edit User</DialogTitle>
              <DialogContent>
                <Typography>Name: {selectedUser?.name}</Typography>
                <Typography>Email: {selectedUser?.email}</Typography>
                {/* Add form fields here to edit user details */}
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
                <Button variant="contained" color="primary">
                  Save
                </Button>
              </DialogActions>
            </Dialog>
  
            {/* Delete Dialog */}
            <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
              <DialogTitle>Delete User</DialogTitle>
              <DialogContent>
                <Typography>Are you sure you want to delete {selectedUser?.name}?</Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          </Stack>
        </Grid>
      </Grid>

      
    );

    
};