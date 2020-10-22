window.onload = () => {
    let name = sessionStorage.getItem("name");
    let price = sessionStorage.getItem("price");

    document.getElementById("pName").value = name;
    document.getElementById("pPrice").value = price;

}