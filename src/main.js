function searchBar() {
    let srchBr = document.getElementById("sokBar").value;
    console.log(srchBr);
    if (srchBr == "service" || srchBr == "Service") {
        window.open("service.html");
        window.close();
    }
    else if (srchBr == "shoes" || srchBr == "Shoes") {
        window.open("shoes.html");
        window.close();
    }
    else if (srchBr == "Clothes" || srchBr == "clothes") {
        window.open("clothes.html");
        window.close();
    }
    else if (srchBr == "Gear" || srchBr == "gear" || srchBr == "equipment" || srchBr == "Equipment") {
        window.open("utstyr.html");
        window.close();
    }
}