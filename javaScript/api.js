const uri = "https://fakestoreapi.com/products"
export async function apiData(){
    const api = await fetch(uri);
    return await api.json() 
}
