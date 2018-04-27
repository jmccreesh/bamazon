# BAMAZON  
*An interactive storefront that is run in console and utilizes Node.*

----------

## Overview of the Application

BAMAZON storefront is a program that allows our customer to place an order from the BAMAZON store. The customer can select a product to order and the amount of the product that they wish to order. Our program will verify that the item number that they select is a valid item and check to see if it is available. If the item is not available a "Sorry we are currently out of stock" message will be displayed in the console. If the item is in stock, a "Thank you for your order!" message will be displayed in the console along with the order total and the quantity and description of the item ordered. 


## Figure 1. The Store Inventory

- **This image depicts the store inventory before the order is entered** 

jmccreesh@JMC-HP-24GB MINGW64 /h/UPENN/homework/week12/bamazon (master)
$ node bamazonCustomer.1
You are connected!
================================================
===========  STORE  ITEMS  =====================
================================================
item_id  product_name                                       department_name    price    stock_quantity
-------  -------------------------------------------------  -----------------  -------  --------------
1        BOSE QuietComfort Wireless Headphones              Electronics        349.99   250
2        PlayStation Call of Duty Black OPS 4               Games              59.99    250
3        Ultimate Ears MEGABOOM Portable Bluetooth Speaker  Electronics        141.99   500
4        VIZIO 75" LED TV                                   Electronics        1399.99  100
5        VIZIO 65" LED TV                                   Electronics        899.99   250
6        Nikon D3400 DSLR Camera                            Electronics        599.99   100
7        DJI Spark Quadcopter Alpine White                  Toys               399.99   250
8        APPLE Watch series 2                               Electronics        579      250
9        Fitbit Aria 2 WiFi Smart Scale                     Health and Beauty  129.99   500
10       Belkin WeMo Light Switch                           Home               34.99    1500

? Please Enter the ID of the product you wish to purchase-

## Figure 2. The Order

- **This image depicts the order entry and corresponding results** 

? Please Enter the ID of the product you wish to purchase-  4
? Please Enter the Quantity of the Product that you want to order 6
Thank You for your order!
===================================
Your order Total is $ 8399.94
===================================
You successfully purchased 6 of the VIZIO 75" LED TV
==============================================================================
? Would you like to place a new order? No
===============================
Thank you for shopping Bamazon!
===============================
	
## Figure 3. The Inventory after the successful sale

- **This image depicts the inventory change from the successful order** 

================================================
===========  STORE  ITEMS  =====================
================================================
item_id  product_name                                       department_name    price    stock_quantity
-------  -------------------------------------------------  -----------------  -------  --------------
1        BOSE QuietComfort Wireless Headphones              Electronics        349.99   250
2        PlayStation Call of Duty Black OPS 4               Games              59.99    250
3        Ultimate Ears MEGABOOM Portable Bluetooth Speaker  Electronics        141.99   500
4        VIZIO 75" LED TV                                   Electronics        1399.99  94
5        VIZIO 65" LED TV                                   Electronics        899.99   250
6        Nikon D3400 DSLR Camera                            Electronics        599.99   100
7        DJI Spark Quadcopter Alpine White                  Toys               399.99   250
8        APPLE Watch series 2                               Electronics        579      250
9        Fitbit Aria 2 WiFi Smart Scale                     Health and Beauty  129.99   500
10       Belkin WeMo Light Switch                           Home               34.99    1500


## Figure 3. The Inventory after the unsuccessful sale

- **This image depicts a "Sorry we cannot fulfill this order amount with our current stock" messange and no inventory change from the unsuccessful order** 

? Please Enter the ID of the product you wish to purchase-  6
? Please Enter the Quantity of the Product that you want to order 125
Sorry we cannot fulfill this order amount with our current stock
? Would you like to place a new order? (Y/n) -
item_id  product_name                                       department_name    price    stock_quantity
-------  -------------------------------------------------  -----------------  -------  --------------
1        BOSE QuietComfort Wireless Headphones              Electronics        349.99   250
2        PlayStation Call of Duty Black OPS 4               Games              59.99    250
3        Ultimate Ears MEGABOOM Portable Bluetooth Speaker  Electronics        141.99   500
4        VIZIO 75" LED TV                                   Electronics        1399.99  94
5        VIZIO 65" LED TV                                   Electronics        899.99   250
6        Nikon D3400 DSLR Camera                            Electronics        599.99   100
7        DJI Spark Quadcopter Alpine White                  Toys               399.99   250
8        APPLE Watch series 2                               Electronics        579      250
9        Fitbit Aria 2 WiFi Smart Scale                     Health and Beauty  129.99   500
10       Belkin WeMo Light Switch                           Home               34.99    1500

? Please Enter the ID of the product you wish to purchase-







- **JavaScript**
- **Node.js**
- **MySql Database**
- **MySql NPM Package**
- **Inquirer NPM Package**
- **Console.table NPM Package**


----------
## Author

**Joe McCreesh**
