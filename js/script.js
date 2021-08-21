// Function for Updating the values
function priceUpdate(priceType, priceNumber) {
    const price = document.getElementById(priceType);
    price.innerText = priceNumber;
    updateTotalCost()
}
// Function for Updating the Final Total

function updateTotalCost(){
    //Updating the total
    const memoryCost = parseInt(document.getElementById("memoryTotal").innerText);
    const storageCost = parseInt(document.getElementById("storageTotal").innerText);
    const deliveryCost = parseInt(document.getElementById("deliveryTotal").innerText);
    
    let newTotal = 1299 + memoryCost  + storageCost + deliveryCost;

    const oldTotal = document.getElementById("total");
    oldTotal.innerText = newTotal;

    //Updating the Final Cost

    const oldFinalTotal = document.getElementById("totalFinal");
    oldFinalTotal.innerText = newTotal;
    
}

// Events clicking on Memory
document.getElementById("memoryTypeOne").addEventListener("click", function(){
    priceUpdate("memoryTotal", 0);
});
document.getElementById("memoryTypeTwo").addEventListener("click", function(){
    priceUpdate('memoryTotal', 180);
});

// Events clicking on Storage
document.getElementById("storageTypeOne").addEventListener("click", function(){
    priceUpdate("storageTotal", 0);

});
document.getElementById("storageTypeTwo").addEventListener("click", function(){
    priceUpdate("storageTotal", 100);

});
document.getElementById("storageTypeThree").addEventListener("click", function(){
    priceUpdate("storageTotal", 180);
});
 
// Events clicking on Delivery Option
document.getElementById("deliveryTypeOne").addEventListener("click", function(){
    priceUpdate("deliveryTotal", 0);

});
document.getElementById("deilveryTypeTwo").addEventListener("click", function(){
    priceUpdate("deliveryTotal", 20);
});


// PromoCode Function

document.getElementById("promoCode").addEventListener("click", function(){

    const oldFinalPrice = document.getElementById("totalFinal");

    const oldFinalPriceInt = parseInt(oldFinalPrice.innerText);
    
    const discountedPrice = oldFinalPriceInt - ((20/100)*oldFinalPriceInt);
    
    const check = document.getElementById("promoCodeText").value;
    console.log(check);
    if (check == "stevekaku") {
        oldFinalPrice.innerText=discountedPrice;
    }

    const refreshInput= document.getElementById("promoCodeText");
    refreshInput.value = "";
});