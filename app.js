/**
 * HOMEWORK
 */
function sortedBrands(history) {
    var brandCount = new Map();
    var brandRecentIndex = new Map();
    history.forEach(function (product, index) {
        var brand = product.brand;
        brandCount.set(brand, (brandCount.get(brand) || 0) + 1);
        brandRecentIndex.set(brand, index);
    });
    var brands = Array.from(brandCount.keys());
    brands.sort(function (a, b) {
        if (brandCount.get(b) === brandCount.get(a)) {
            return (brandRecentIndex.get(a) || 0) - (brandRecentIndex.get(b) || 0);
        }
        return (brandCount.get(b) || 0) - (brandCount.get(a) || 0);
    });
    return brands;
}
var products = [
    { name: "Samsung Phone", price: 25, brand: "Samsung" },
    { name: "Apple Phone", price: 30, brand: "Apple" },
    { name: "Samsung Tablet", price: 45, brand: "Samsung" },
    { name: "Sony Headphones", price: 50, brand: "Sony" },
    { name: "Apple Watch", price: 60, brand: "Apple" },
];
console.log(sortedBrands(products));
