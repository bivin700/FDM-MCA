// material-ui
import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button
 } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// ==============================|| COMPONENTS - customer ||============================== //

export default function ComponentTypography() {
  const users = [
    { name: 'John Doe', address: 'New York', mobile: '9876543210', location: 'USA', email: 'john@example.com' },
    { name: 'Jane Smith', address: 'London', mobile: '9988776655', location: 'UK', email: 'jane@example.com' },
    { name: 'Amit Kumar', address: 'Delhi', mobile: '9090909090', location: 'India', email: 'amit@example.com' },
    { name: 'Sara Lee', address: 'Sydney', mobile: '9000000001', location: 'Australia', email: 'sara@example.com' }
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
                    <strong>Location</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Email ID</strong>
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
                    <TableCell>{user.location}</TableCell>
                    <TableCell>{user.email}</TableCell>
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
          <Button variant="contained" color="primary">Save</Button>
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
          <Button variant="contained" color="error">Delete</Button>
        </DialogActions>
      </Dialog>

        </Stack>
      </Grid>
    </Grid>
    
  );
}
