import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Home = () => {
    return (
        <Grid container spacing={10} direction='column' id="homepage">
            <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                <Typography variant="h3" component="h1">Welcome to Recipe Finder</Typography>
            </Grid>
            <Grid display="flex" justifyContent="center" alignItems="center" size="grow" rowGap={3}>
                <form>
                    <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                        <label htmlFor="ingredient-search">Search by ingredient</label>
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                        <select id="ingredient-search" name="ingredient-search">
                            <option value="chicken">Chicken</option>
                            <option value="pork">Pork</option>
                            <option value="cheese">Cheese</option>
                        </select>
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                        <button typeof="submit">Search</button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
};

export default Home;