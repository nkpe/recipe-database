const Home = () => {
    return (
        <main id="homepage">
            <h2>Welcome to Recipe Finder</h2>
            <form >
                <label htmlFor="ingredient-search">Search by ingredient</label>
                <select id="ingredient-search" name="ingredient-search">
                    <option value="chicken">Chicken</option>
                    <option value="pork">Pork</option>
                    <option value="cheese">Cheese</option>
                </select>                
                <button typeof="submit">Search</button>
            </form>
        </main>
    )
};

export default Home;