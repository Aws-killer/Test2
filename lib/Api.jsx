
const BaseUrl = "https://fakestoreapi.com";
export const products = async () => {
    const Url = `${BaseUrl}/products`;

    let data = await fetch(Url);
    data = await data.json();
    return data;
};