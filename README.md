# Oshop

### Built with Angular and Firebase

#### Project link: [Oshop](https://oshop-7ad57.firebaseapp.com/)

## Project Structure

- admin
    - components
        - admin orders
        - admin products
        - products-form
    - services
        - admin-auth-guard.service
- core
    - components
        - bs-navbar
        - login
- shared
    - components
        - list-order-view
        - product-card
        - product-quantity
    - models
        - app-user
        - order
        - product
        - shopping-cart
        - shopping-cart-item
    - services
        - auth-guard.service
        - auth.service
        - category.service
        - order.service
        - product.service
        - shopping-cart.service
        - user.service
- shopping
    - components
        - check-out
        - my-orders
        - order-success
        - order-view
        - products
        - shipping-form
        - shopping-cart
        - shopping-cart-summary


- Components
    - admin-orders : uses OrderService's getAllOrders() function to fetch all orders, if there is none, displays no orders to show. Uses list-order-view component to display the data.

    - admin-products : uses angular-4-data-table to display the products 
    - products-form : creates new product
    - bs-navbar : navbar to with links to homepage, cart and login page.
    - login : Google sign-up method
    - list-order-view : displays customer name, date of purchase, and a link to order details
    - product-card : displays product image, title and price as well as a button with add to cart, uses ng-template to call product-quantity component if there is any update in quantity. 
    - product-quantity : contains a button with removeFromCart, addToCart a display message with the quantity of item in cart.
    - checkout : shows the shipping-form and shopping-cart-summary
    - my-order : shows all the orders made by the user
    - order-success : shows a message saying order successful, and provides link to my-order and home-page.
    - order-view : displays customer name, order date, ordered items, total purchase, shipping-address
    - products : product-filter component to filter out products by category, and then display the filtered products in product-card
    - product-filter : filters the product based on category, the category selected has the active class
    - shipping-form : takes in user information, name, address 1, address 2, and city and then places order.
    - shopping-cart: shows the number of items in cart, a button to clear the shopping cart, a table with item, image, quantity and total price. And a button to place order.
    - shopping-cart-summary: order summary of the number of items in shopping cart, item quantity and item title, total price

# huey-shop
