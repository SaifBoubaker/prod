import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createProduct } from "../redux/features/productSlice";

function AddProduct(props) {
  const initialstate = {
    title: "",
    description: "",
    price: "",
    category: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(initialstate);
  const { category, price, title, description } = formValue;

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(formValue));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Create Product
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            onChange={onInputChange}
            value={title}
            margin="normal"
            required
            fullWidth
            id="title"
            label="Product name"
            name="title"
          />
          <TextField
            onChange={onInputChange}
            value={description}
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description"
            id="description"
          />
          <TextField
            onChange={onInputChange}
            value={price}
            margin="normal"
            required
            fullWidth
            id="price"
            label="Price"
            name="price"
          />
          <TextField
            onChange={onInputChange}
            value={category}
            margin="normal"
            required
            fullWidth
            id="category"
            label="Category"
            name="category"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create
          </Button>
          <Grid container>
            <Grid item></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default AddProduct;
