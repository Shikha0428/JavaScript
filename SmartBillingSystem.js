// npm install prompt-sync
// Run the above command in the terminal before using prompt-sync.

// Import and initialize the prompt library
const prompt = require("prompt-sync")();


// Customer information
let customerName = prompt("Enter customer name: ");
let customerType = prompt("Enter customer type (Regular/Premium): ");
let purchaseAmount = Number(prompt("Enter total purchase amount: ₹"));


// Variables for discount and GST
let discount = 0;
let gst = 0;


// OPTION 1: Calculate Discount

if (customerType === "Premium") {

    if (purchaseAmount >= 5000) {
        discount = purchaseAmount * 0.20;
    } else {
        discount = purchaseAmount * 0.10;
    }

} else {

    if (purchaseAmount >= 5000) {
        discount = purchaseAmount * 0.10;
    } else {
        discount = purchaseAmount * 0.05;
    }
}


// OPTION 2: Add GST

gst = purchaseAmount * 0.18;


// OPTION 3: Final Bill

let finalBill = purchaseAmount - discount + gst;


// OPTION 4: Payment Method

let paymentMethod = Number(prompt(
    "Choose Payment Method (1: Cash, 2: UPI, 3: Card): "
));

switch (paymentMethod) {

    case 1:
        console.log("Payment Method: Cash");
        break;

    case 2:
        console.log("Payment Method: UPI");
        break;

    case 3:
        console.log("Payment Method: Card");
        break;

    default:
        console.log("Invalid Payment Method");
}


// Final Result

console.log("-----------------------------------");
console.log(`Customer: ${customerName}`);
console.log(`Customer Type: ${customerType}`);
console.log(`Purchase Amount: ₹${purchaseAmount}`);
console.log(`Discount: ₹${discount}`);
console.log(`GST: ₹${gst}`);
console.log(`Final Bill Amount: ₹${finalBill}`);
console.log("-----------------------------------");
console.log("Thank you for shopping with us!");
