import { RecipeCatalog, recipes } from '@/lib/recipeData';
import { createContext } from 'react';

const RecentlyViewedRecipesContext = createContext<string[]>([]);
const RecipeCatalogContext = createContext<RecipeCatalog>(recipes)

export {RecentlyViewedRecipesContext, RecipeCatalogContext}
