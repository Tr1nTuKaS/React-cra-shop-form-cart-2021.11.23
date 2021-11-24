## cra-shop-cart-form

# Pages

{react-router-dom@^5}

1.Home page
2.Shop page
3.Cart page

# Shop page

1.fetch/axios items from
2.Ability to add item to cart

# Cart page

1.Checkout process 1.1 form step - does user have an account?(tiems kas darot greiciau) 1.2 form step1 - user details 1.3 form step2 - user detail and items 1.4 form step3 - user card details (number, name on card, csv, date) 1.4.1 button "Pay now" - in case of success payment(true) - empty cart

# TODO

1.propTypes
2.localStorage
3.Empty cart button
4.Progress bar component - shows steps progress
5.Show number of items in cart
6.(extra) - if item exists in cart do not duplicate 7.but increase quantity## Steps/ Uzd

# Steps/ Uzd

1.install router react-hot-toast styled-components
2.Create empty pages with headings
3.Navigation component
4.App.js define main routes
5.Shop page fetch/axios items
6.List items on page 6.1 List and items shoud be
7.react components with props
8.Create 'add to cart button' next to every item
9.Button press adds item to cart (context? )
10.Add user details form (formik)
11.Validate user form (formik)
12.Add Step2 - user details + cart items with total amount
13.Add Step3 - Total ammount + card Details form + Pay now
