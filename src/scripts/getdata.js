const loadData = async (url) => {
    console.log("Start loading the JSON file");
    const response = await fetch(url);
    const data = await response.json();
    console.log("Finished loading the JSON");
    console.log(data);
    return data;
};

const init = async () => {
    const products = await loadData(`https://fakestoreapi.com/products`);
    parseProductData(products);
};

init();