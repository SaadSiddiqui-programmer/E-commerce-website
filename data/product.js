                                    // Catergory Products



// Get Products


let getProducts = async ()=>{
    try {
        let results = await fetch('./data/products.json')
        let data = await results.json();
        console.log(data.products)
    } catch (err) {
        console.log(err)
    }
};

getProducts();