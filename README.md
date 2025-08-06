🛒 FrikieStore - Online Shop Store with React + FakeStore API

LIVE demo: [https://frikie-store-react-api.vercel.app]

FrikieStore is an e-commerce web app built using React, which consumes a public API via Axios. It allows users to browse products, add them to a cart, simulate a checkout process, and choose from various payment methods. The app is fully responsive and optimized for all device sizes.

Technologies used:
-React
-Vite
-Axios
-HTML/CSS

link of the public API: [https://fakestoreapi.com/products]

Main Feactures

Product API Integration
- Fetches product data from the FakeStore API using Axios.
- Dynamically displays products on the homepage.
- Each product card includes image, name, category, price, rating, and an "Add to cart" button.
  
Functional Shopping Cart
- Products can be added to the cart.
- If the same product is added multiple times, the **quantity increases automatically**.
- Products can be removed from the cart.
- Total item count is displayed on the cart icon.
- Floating cart component with scroll support for many items.

Simulated Checkout Process
- Redirects to an order summary screen.
- User can choose between **"Pick up in store"** or **"Home delivery"**.
- If delivery is selected, a valid address is required (with input validation).
- Checkout validates all steps before showing payment methods.

Realistic Payment Method Selection
Tabbed interface for choosing between:

- Credit Card (with form and input validation).
- Yape / Plin (displays QR code).
- Bank Transfer (simple validated form: name, operation number, etc.)

Success Confirmation Screen
- Stylized confirmation screen (`/success`) upon completing the simulated payment.
- Friendly confirmation message with a button to return to the homepage.



