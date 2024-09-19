import { Box, InputLabel, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';

const Home = () => {
    const [ingredientItem, setIngredientItem] = useState("")
    const handleChange = (event: SelectChangeEvent) => {
        setIngredientItem(event.target.value);
    }
    return (
        <Box id="homepage-container" className="flexBoxColumn" style={{backgroundColor: 'pink'}}>
            <Typography variant="h3" component="h1">Welcome to Recipe Finder</Typography>
            <Box id="homepage-container" className="flexBoxColumn">
                <FormControl sx={{ m: 1, minWidth: 500 }} size="medium">
                <InputLabel 
                    id="ingredient-search-select"
                >
                    Search by ingredient</InputLabel>
                    <Select 
                        id="ingredient-search" 
                        labelId="ingredient-search-select" 
                        name="ingredient-search"
                        label="Ingredients"
                        value={ingredientItem}
                        onChange={handleChange}
                        variant="standard"
                        style={{backgroundColor: 'turquoise'}}>
                        <MenuItem value="chicken">Chicken</MenuItem>
                        <MenuItem value="pork">Pork</MenuItem>
                        <MenuItem value="cheese">Cheese</MenuItem>
                    </Select>
                    <button typeof="submit">Search</button>
                </FormControl>
            </Box>
        </Box>
    )
};

export default Home;