const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const searchCocktailByName = async (name) => {
    const response = await fetch(`${API_BASE_URL}/search.php?s=${name}`);
    const data = await response.json();
    return data.drinks;
}

export const listCocktailsByFirstLetter = async (letter) => {
    const response = await fetch(`${API_BASE_URL}/search.php?f=${letter}`);
    const data = await response.json();
    return data.drinks;
}

export const searchIngredientByName = async (name) => {
    const response = await fetch(`${API_BASE_URL}/search.php?i=${name}`);
    const data = await response.json();
    return data.ingredients;
}

export const lookupCocktailById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
    const data = await response.json();
    return data.drinks[0];
}

export const lookupIngredientById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/lookup.php?iid=${id}`);
    const data = await response.json();
    return data.ingredients[0];
}

export const lookupRandomCocktail = async () => {
    const response = await fetch(`${API_BASE_URL}/random.php`);
    const data = await response.json();
    return data.drinks[0];
}

export const listPopularCocktails = async () => {
    const response = await fetch(`${API_BASE_URL}/popular.php`);
    const data = await response.json();
    return data.drinks;
}

export const listLatestCocktails = async () => {
    const response = await fetch(`${API_BASE_URL}/latest.php`);
    const data = await response.json();
    return data.drinks;
}

export const searchByIngredient = async (ingredient) => {
    const response = await fetch(`${API_BASE_URL}/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.drinks;
}

export const listAlcoholicCocktails = async () => {
    const response = await fetch(`${API_BASE_URL}/filter.php?a=Alcoholic`);
    const data = await response.json();
    return data.drinks;
}

export const listNonAlcoholicCocktails = async () => {
    const response = await fetch(`${API_BASE_URL}/filter.php?a=Non_Alcoholic`);
    const data = await response.json();
    return data.drinks;
}

export const filterByCategory = async (category) => {
    const response = await fetch(`${API_BASE_URL}/filter.php?c=${category}`);
    const data = await response.json();
    return data.drinks;
}

export const filterByGlass = async (glass) => {
    const response = await fetch(`${API_BASE_URL}/filter.php?g=${glass}`);
    const data = await response.json();
    return data.drinks;
}

export const listCategories = async () => {
    const response = await fetch(`${API_BASE_URL}/list.php?c=list`);
    const data = await response.json();
    return data.drinks;
}

export const listGlasses = async () => {
    const response = await fetch(`${API_BASE_URL}/list.php?g=list`);
    const data = await response.json();
    return data.drinks;
}

export const listIngredients = async () => {
    const response = await fetch(`${API_BASE_URL}/list.php?i=list`);
    const data = await response.json();
    return data.drinks;
}

export const listAlcoholicFilters = async () => {
    const response = await fetch(`${API_BASE_URL}/list.php?a=list`);
    const data = await response.json();
    return data.drinks;
}
