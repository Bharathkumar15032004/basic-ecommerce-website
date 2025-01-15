var productContainer = document.getElementById("product");
var productList = productContainer.querySelectorAll("div");
var search = document.getElementById("search");

search.addEventListener("keyup", function (event) {
    var enterValue = event.target.value.toUpperCase();

    for (var count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector("p").textContent;

        if (productName.toUpperCase().indexOf(enterValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});
