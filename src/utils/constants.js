/* eslint-disable prettier/prettier */
export const getCategoriesList = (coffeeData) => {
    const categories = {'All': 1};
    coffeeData.map((coffee) => {
        if(categories[coffee?.name] === undefined){
            categories[coffee?.name] = 1;
        }
    });
    return Object.keys(categories);
};
