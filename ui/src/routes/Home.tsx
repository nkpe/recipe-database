import { Box, Typography } from '@mui/material';

const Home = () => {
    return (
        <Box id="homepage-container" className="flexBoxColumn">
            <Typography variant="h3" component="h1">Welcome to Recipe Finder</Typography>
            <form className="flexBoxColumn">
            <Typography variant="h5" component="h1"><label htmlFor="ingredient-search">Search by ingredient</label></Typography>
                <select id="ingredient-search" name="ingredient-search">
                    <option value="chicken">Chicken</option>
                    <option value="pork">Pork</option>
                    <option value="cheese">Cheese</option>
                </select>
                <button typeof="submit">Search</button>
            </form>
        </Box>
    )
};

export default Home;