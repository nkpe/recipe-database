import { Box, Typography } from '@mui/material';

import { FeatureRecipes } from '../components/Home/FeaturedRecipes';
import { IngredientSelect } from '../components/home/filters/IngredientSelect';

const Home = () => {
    return (
        <Box id="homepage-container" className="gridWrapper" style={{ paddingLeft: "25px", paddingRight: "25px"}}>
            <Typography align="center" style={{gridColumn: "span 8"}} variant="h2" component="h1">Welcome to Recipe Finder</Typography>
            <Box component="aside" style={{ gridColumn: "1 / 3" }}>
                <IngredientSelect />
            </Box>

            <Box component="section"  style={{gridColumn:"4 / 9"}}>
                <FeatureRecipes />
            </Box>
        </Box>
    )
};

export default Home;