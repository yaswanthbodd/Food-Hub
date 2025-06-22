import {
    Box, Button, Container, FormControl, FormControlLabel,
    InputAdornment, MenuItem, Radio, RadioGroup,
    Snackbar,
    Stack, TextField, Typography
} from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useState } from "react";
import axios from 'axios'
import MuiAlert from '@mui/material/Alert';
import { motion } from "framer-motion";

//Framer Motion For React Component
const MotionBox = motion(Box)

export const AddItem = () => {
    const [image, setImage] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const [item, setItem] = useState({
        productName: '',
        productDescription: '',
        productCategory: '',
        productType: '',
        productPrice: '',
        productRating: '',
    });

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prev => ({
        ...prev,
        [name]: value
        }));
        //console.log(item)
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        setImage(file);
            //console.log("Image selected:", file.name);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log("Form Data:", item);
        //console.log("Image File:", image);
        const formData = new FormData();
        formData.append("imageFile",image);
        formData.append(
            "item", new Blob([JSON.stringify(item)], {type : 'application/json'})
        )
        //console.log("Form Data:", item);
        //console.log("Image File:", image);
        
        //Send Data To the Server
        axios.post("http://localhost:8080/api/item",formData,{
            headers : {
                "Content-Type" : "multipart/form-data"
            },
        })
        .then((response)=>{
            console.log("Item Added Successfully...", response.data);
            alert("Item Add Successfuly..");
            setItem({
                productName: '',
                productDescription: '',
                productCategory: '',
                productType: '',
                productPrice: '',
                productRating: '',
            });
            setImage(null);
            setOpenSnackbar(true); 
        })
        .catch((error)=>{
            console.error("Error adding Item: ", error);
            alert('Something Went Wrong')
        })
    };

    return (
        <MotionBox initial={{opacity : 0}} animate={{opacity : 1}} transition={{ delay : 1, duration : 1}}>
        <Container>
            <Stack>
            <Typography fontSize={30} marginTop={5} textAlign={'center'} fontWeight={700}>
                Add Items
            </Typography>

            <Box component="form" onSubmit={handleSubmit} textAlign={'center'} margin={5}>
                <Stack gap={3} width={'350px'} textAlign={'center'} mx="auto">

                <TextField
                    label='Product Name'
                    type="text"
                    name="productName"
                    value={item.productName}
                    onChange={handleChange}
                />
                
                <TextField
                    label='Product Description'
                    type="text"
                    name="productDescription"
                    value={item.productDescription}
                    onChange={handleChange}
                />

                <TextField
                    label='Select Product'
                    select
                    name="productCategory"
                    value={item.productCategory}
                    onChange={handleChange}
                >
                    {["Salad", "Rolls", "Deserts", "Sandwich", "Cake", "Pure Veg", "Pasta", "Noodles", "Others"]
                    .map((item, index) => (
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                    ))}
                </TextField>

                <FormControl>
                    <RadioGroup
                    name="productType"
                    value={item.productType}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="vegetarian" control={<Radio />} label="Vegetarian" />
                    <FormControlLabel value="non-vegetarian" control={<Radio />} label="Non-Vegetarian" />
                    </RadioGroup>
                </FormControl>

                <TextField
                    label='Product Price'
                    name="productPrice"
                    type="number"
                    value={item.productPrice}
                    onChange={handleChange}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <CurrencyRupeeIcon />
                        </InputAdornment>
                    )
                    }}
                    sx={{
                        // Remove arrows for Chrome, Safari, Edge
                        '& input::-webkit-outer-spin-button': { display: 'none' },
                        '& input::-webkit-inner-spin-button': { display: 'none' },
                        '& input[type=number]': { MozAppearance: 'textfield' }, // Firefox
                    }}
                />

                <TextField
                    label='Rating out of 5'
                    name="productRating"
                    type="number"
                    inputProps={{ min: 1, max: 5, step: 0.5 }}
                    value={item.productRating}
                    onChange={handleChange}
                    sx={{
                        // Remove arrows for Chrome, Safari, Edge
                        '& input::-webkit-outer-spin-button': { display: 'none' },
                        '& input::-webkit-inner-spin-button': { display: 'none' },
                        '& input[type=number]': { MozAppearance: 'textfield' }, // Firefox
                    }}
                />

                <Button variant="contained" component="label">
                    Upload Product Image
                    <input hidden accept="image/*" type="file" onChange={handleImageChange} />
                </Button>

                {image && (
                    <Box mt={2} textAlign="center">
                    <img
                        src={URL.createObjectURL(image)}
                        alt="Preview"
                        style={{ maxWidth: '100%', height: '100px', borderRadius: 8 }}
                    />
                    </Box>
                )}

                <Button type="submit" variant="contained">
                    Add
                </Button>
                </Stack>
            </Box>
            </Stack>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={2000}
                    onClose={() => setOpenSnackbar(false)}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    >
                    <MuiAlert onClose={() => setOpenSnackbar(false)} variant="filled" severity="success" sx={{ width: '100%' }}>
                        Uploaded Successfully
                    </MuiAlert>
                </Snackbar>
        </Container>
        </MotionBox>
    );
};
