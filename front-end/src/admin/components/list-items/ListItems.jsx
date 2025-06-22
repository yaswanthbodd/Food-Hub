import {
  Box, Container, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Typography,
  IconButton, Snackbar, TablePagination
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

// Framer Motion for React
const MotionBox = motion(Box)

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    axios.get("http://localhost:8080/api/items")
      .then(response => setItems(response.data))
      .catch(err => console.error(err));
  }, []);

  // Delete handler
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/item/${id}`)
      .then(() => {
        setItems(prev => prev.filter(item => item.id !== id));
        setOpenSnackbar(true);
      })
      .catch(err => {
        console.error("Delete failed:", err);
      });
  };

  // Pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
  };

  // Slice items for current page
  const paginatedItems = items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <MotionBox initial={{opacity : 0}} animate={{opacity : 1}} transition={{delay : 0.7, duration : 0.7, ease:'easeIn'}} marginBottom={6}>
      <Container>
        <Typography marginTop={3} marginBottom={2} textAlign={'center'} fontWeight={800}>
          All Food Items List
        </Typography>
        <TableContainer component={Paper} elevation={5}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead className='bg-blue-600'>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Item Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>
                    <img
                      style={{ height: '70px' }}
                      src={`http://localhost:8080/api/item/${item.id}/image`}
                      alt={item.productName}
                    />
                  </TableCell>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>{item.productCategory}</TableCell>
                  <TableCell>{item.productType}</TableCell>
                  <TableCell>
                    <CurrencyRupeeIcon sx={{fontSize : '18px'}} />{item.productPrice}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* Table Pagination */}
          <TablePagination
            component="div"
            count={items.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </TableContainer>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert onClose={() => setOpenSnackbar(false)} variant="filled" severity="error" sx={{ width: '100%' }}>
          Deleted Successfully
        </MuiAlert>
      </Snackbar>
    </MotionBox>
  );
};

export default ListItems;
