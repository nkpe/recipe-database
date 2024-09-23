import { Box, Button, InputLabel, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';
import { FeatureRecipes } from '../components/home/FeatureRecipes';

const Home = () => {
    const [ingredientItem, setIngredientItem] = useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setIngredientItem(event.target.value);
    };

    return (
        <Box id="homepage-container" className="flexBoxColumn" style={{backgroundColor: 'pink'}}>
            <Typography variant="h3" component="h1">Welcome to Recipe Finder</Typography>
            <Box component="aside" className="flexBoxColumn">
                <FormControl sx={{ m: 1, minWidth: 500 }} size="medium">
                <InputLabel id="ingredient-search-select">Search by ingredient</InputLabel>
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
                    <Button type="submit" variant="contained">Search</Button>
                </FormControl>
            </Box>

            <Box component="section" sx={{ height: "50%", width: "50%" ,overflowY: "scroll" }}>
                <FeatureRecipes />
            </Box>
        </Box>
    )
};

export default Home;