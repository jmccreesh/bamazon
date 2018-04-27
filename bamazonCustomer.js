var mysql = require("mysql");
var inquirer = require("inquirer");
var prompt = require('prompt');
require("console.table");
require('format-currency');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: "Liberty3",
	database: "bamazon"
});
//Establish Connection
connection.connect(function (err) {
	if (err) {
		console.log('Error connecting to Db');
	}
	console.log('You are connected!');
	console.log('================================================');
	console.log('===========  STORE  ITEMS  =====================');
	console.log('================================================');
	loadProducts();
});
//FUNCTIONS
//=================================================================================
//Displays all items currently in database
function loadProducts() {
	connection.query("SELECT * FROM products", function (err, res) {
		if (err) throw err;
		console.table(res);
		promptForId(res);

	});
}
//prompt user for product id
function promptForId(inventory) {
	inquirer.prompt([{
		type: "input",
		name: "id",
		message: "Please Enter the ID of the product you wish to purchase- ",
	}]).then(function (res) {
		// console.log(res);
		var CustomerPickID = parseInt(res.id);
		for (var i = 0; i < inventory.length; i++) {
			if (inventory[i].item_id === CustomerPickID) {
				promptForQty(inventory[i]);
			}
		}
	});
}

function promptForQty(product) {
	inquirer.prompt([{
		type: "input",
		name: "howMany",
		message: "Please Enter the Quantity of the Product that you want to order",
	}]).then(function (res) {
		// console.log(res);
		var CustomerQuantity = parseInt(res.howMany);
		if (CustomerQuantity > product.stock_quantity) {
			console.log("Sorry we cannot fulfill this order amount with our current stock");
			loadProducts();
			newOrder();
			console.log('-');
		} else {
			amountOwed = CustomerQuantity * product.price;
			console.log('Thank You for your order!');
			console.log('===================================');
			console.log('Your order Total is $ ' + amountOwed);
			console.log('===================================');


			connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", [CustomerQuantity, product.item_id],
				function (err, res) {
					console.log("You successfully purchased " + CustomerQuantity + " of the " + product.product_name);
					console.log('==============================================================================');
					newOrder();
				}
			);
		}
	});
}

function newOrder() {
	inquirer.prompt([{
		type: "confirm",
		name: "choice",
		message: "Would you like to place a new order?"
	}]).then(function (answer) {
		if (answer.choice) {
			loadProducts();
		} else {
			console.log('===============================');
			console.log("Thank you for shopping Bamazon!");
			console.log('===============================');
			connection.end();
		}
	})
}