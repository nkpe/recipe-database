import { useState } from 'react';

import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';

import { capFirstLetter } from '../../../helpers/formatting';

export const IngredientSelect = () => {

    const [ingredientItem, setIngredientItem] = useState("");

    const ingredientDropDown = ["chicken", "pork", "pasta"];

    const handleChange = (event: SelectChangeEvent) => {
        setIngredientItem(event.target.value);
    };

    return (
        <Box component="div">
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
                    style={{ backgroundColor: 'turquoise' }}>
                    {ingredientDropDown.map((item) => (
                        <MenuItem value={item}>{capFirstLetter(item)}</MenuItem>
                    ))}
                </Select>
                <Button type="submit" variant="contained">Search</Button>
            </FormControl>
        </Box>
    )
}