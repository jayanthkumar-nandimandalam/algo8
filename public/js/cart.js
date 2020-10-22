const cartdata = (id, price) => {
    console.log(id, price);
    sessionStorage.setItem("name", "");
    sessionStorage.setItem("price", "");

    sessionStorage.setItem("name", id);
    sessionStorage.setItem("price", price);


}