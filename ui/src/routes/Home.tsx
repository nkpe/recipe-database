import { Box, Button, InputLabel, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';
import { FeatureRecipes } from '../components/home/FeatureRecipes';
import { capFirstLetter } from '../helpers/formatting';

const Home = () => {
    const [ingredientItem, setIngredientItem] = useState("");

    const ingredientDropDown = ["chicken", "pork", "pasta"];

    const handleChange = (event: SelectChangeEvent) => {
        setIngredientItem(event.target.value);
    };

    return (
        <Box id="homepage-container" className="gridWrapper" style={{ backgroundColor: 'pink', paddingLeft: "25px", paddingRight: "25px"}}>
            <Typography style={{gridColumn: "1 / 3"}} variant="h3" component="h1">Welcome to Recipe Finder</Typography>
            <Box component="aside" style={{gridColumn:"1 / 3"}} >
                <FormControl sx={{ m: 1, width: "100%" }} size="medium">
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
                        {ingredientDropDown.map((item) => (
                            <MenuItem value={item}>{capFirstLetter(item)}</MenuItem>
                        ))}
                    </Select>
                    <Button type="submit" variant="contained">Search</Button>
                </FormControl>
            </Box>

            <Box component="section" sx={{ width: "100%", overflowY: "scroll" }} style={{gridColumn:"4 / 9"}}>
                <FeatureRecipes />
            </Box>
        </Box>
    )
};

export default Home;