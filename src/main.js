// import './style.css'; // CSS loaded via link tag in HTML

const products = [
  // Beverages
  {
    id: 1,
    name: 'Artisan Cappuccino',
    category: 'Beverages',
    price: 249,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop', // Coffee Art
    description: 'Rich espresso with silky microfoam and cocoa dust.'
  },
  {
    id: 2,
    name: 'Iced Caramel Macchiato',
    category: 'Beverages',
    price: 299,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1000&auto=format&fit=crop', // Iced Coffee
    description: 'Chilled layers of vanilla, espresso, and caramel drizzle.'
  },

  // Artisan Pizzas
  {
    id: 9,
    name: 'Classic Margherita',
    category: 'Pizzas',
    price: 399,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop', // Pizza Margherita
    description: 'San Marzano tomato sauce, fresh buffalo mozzarella, and basil.'
  },
  {
    id: 10,
    name: 'Farmhouse Veggie',
    category: 'Pizzas',
    price: 449,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop', // Veggie Pizza
    description: 'Loaded with bell peppers, onions, mushrooms, and olives.'
  },
  {
    id: 11,
    name: 'Pepperoni Feast',
    category: 'Pizzas',
    price: 599,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1000&auto=format&fit=crop', // Pepperoni
    description: 'Generous slices of spicy pepperoni on a cheesy base.'
  },
  {
    id: 12,
    name: 'Smoked BBQ Chicken',
    category: 'Pizzas',
    price: 549,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop', // BBQ Pizza
    description: 'Tender chicken tossed in smoky BBQ sauce with red onions.'
  },

  // Premium Teas
  {
    id: 18,
    name: 'Masala Chai',
    category: 'Premium Teas',
    price: 149,
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=1000&auto=format&fit=crop',
    description: 'Traditional Indian spiced tea brewed with ginger and cardamom.'
  },
  {
    id: 19,
    name: 'Royal Earl Grey',
    category: 'Premium Teas',
    price: 199,
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1000&auto=format&fit=crop',
    description: 'Black tea infused with the distinct citrus aroma of bergamot oil.'
  },
  {
    id: 20,
    name: 'Jasmine Green Tea',
    category: 'Premium Teas',
    price: 199,
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=1000&auto=format&fit=crop',
    description: 'Delicate green tea leaves scented with fragrant jasmine blossoms.'
  },
  {
    id: 21,
    name: 'Honey Lemon Ginger',
    category: 'Premium Teas',
    price: 189,
    image: 'assets/honey_lemon_ginger.jpg',
    description: 'Soothing herbal blend with fresh lemon, ginger root, and organic honey.'
  },
  {
    id: 22,
    name: 'Iced Peach Tea',
    category: 'Premium Teas',
    price: 229,
    image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=1000&auto=format&fit=crop',
    description: 'Refreshing chilled tea infused with sweet peach nectar and mint.'
  },

  // Starters
  {
    id: 3,
    name: 'Avocado Sourdough Toast',
    category: 'Starters',
    price: 449,
    image: 'assets/avocado_toast.jpg',
    description: 'Toasted sourdough topped with smashed avocado, cherry tomatoes, and feta.'
  },
  {
    id: 4,
    name: 'Truffle Mushroom Bruschetta',
    category: 'Starters',
    price: 399,
    image: 'assets/mushroom_bruschetta.jpg',
    description: 'Crispy baguette slices with creamy truffle mushroom pate.'
  },

  // Gourmet Burgers
  {
    id: 5,
    name: 'Classic Cheeseburger',
    category: 'Gourmet Burgers',
    price: 549,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop', // Burger
    description: 'Juicy beef patty, melted cheddar, lettuce, and secret sauce on brioche.'
  },
  {
    id: 23,
    name: 'Crispy Chicken Zinger',
    category: 'Gourmet Burgers',
    price: 499,
    image: 'assets/crispy_chicken_zinger.jpg',
    description: 'Golden fried chicken breast with spicy mayo and crunchy lettuce.'
  },
  {
    id: 24,
    name: 'Spicy Paneer Supreme',
    category: 'Gourmet Burgers',
    price: 449,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop', // Burger equivalent
    description: 'Grilled paneer steak marinated in tandoori spices with mint chutney.'
  },
  {
    id: 25,
    name: 'Double Smashburger',
    category: 'Gourmet Burgers',
    price: 649,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop',
    description: 'Two smashed patties, gooey american cheese, pickles, and onions.'
  },
  {
    id: 26,
    name: 'Mushroom Swiss Melt',
    category: 'Gourmet Burgers',
    price: 599,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1000&auto=format&fit=crop', // Burger
    description: 'Sautéed mushrooms and melted Swiss cheese on a juicy patty.'
  },

  // Mains
  {
    id: 6,
    name: 'Creamy Pesto Pasta',
    category: 'Mains',
    price: 499,
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1000&auto=format&fit=crop', // Pesto Pasta
    description: 'Al dente penne tossed in house-made basil pesto and parmesan.'
  },

  // Cakes & Pastries
  {
    id: 13,
    name: 'Black Forest Slice',
    category: 'Cakes & Pastries',
    price: 199,
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1000&auto=format&fit=crop', // Black Forest cake equivalent
    description: 'Layers of chocolate sponge, whipped cream, and cherries.'
  },
  {
    id: 14,
    name: 'Red Velvet Jar',
    category: 'Cakes & Pastries',
    price: 249,
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=800&q=80',
    description: 'Velvety red sponge layered with rich cream cheese frosting.'
  },
  {
    id: 15,
    name: 'Italian Tiramisu',
    category: 'Cakes & Pastries',
    price: 299,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1000&auto=format&fit=crop', // Tiramisu
    description: 'Coffee-soaked ladyfingers with mascarpone cream and cocoa.'
  },
  {
    id: 16,
    name: 'Butter Croissant',
    category: 'Cakes & Pastries',
    price: 149,
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=800&q=80',
    description: 'Flaky, golden-brown pastry baked to perfection.'
  },
  {
    id: 17,
    name: 'Parisian Macarons',
    category: 'Cakes & Pastries',
    price: 499,
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=1000&auto=format&fit=crop', // Macarons
    description: 'Assorted almond meringue cookies with ganache filling.'
  },
  {
    id: 7,
    name: 'New York Cheesecake',
    category: 'Cakes & Pastries',
    price: 349,
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=1000&auto=format&fit=crop', // Cheesecake (Changed ID to be safe)
    description: 'Classic creamy cheesecake with a berry compote topping.'
  },
  {
    id: 8,
    name: 'Belgian Chocolate Waffle',
    category: 'Cakes & Pastries',
    price: 299,
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=1000&auto=format&fit=crop', // Waffle
    description: 'Golden waffle smothered in rich Belgian chocolate sauce.'
  }
];

let cart = [];

// DOM Elements
const productGrid = document.getElementById('product-grid');
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartCountSpan = document.getElementById('cart-count');
const cartTotalPriceSpan = document.getElementById('cart-total-price');

// Initialize
function init() {
  handleLoadingScreen();
  injectModal(); // Inject modal on startup
  renderProducts();
  setupEventListeners();
}

function handleLoadingScreen() {
  const loader = document.getElementById('loading-screen');
  if (loader) {
    // Wait a bit to show the welcome message even if load is fast
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 2500); // 2.5 seconds display time
  }
}


function injectModal() {
  const modalHTML = `
    <div id="order-success-modal" class="order-success-modal">
      <div class="success-icon">✓</div>
      <h2 class="success-title">Order Placed!</h2>
      <p class="success-message">Your gourmet selection is on its way.</p>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function renderProducts() {
  productGrid.innerHTML = products.map(product => `
    <div class="product-card">
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image">
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        <p style="font-size: 0.9rem; color: #aaa; margin-bottom: 1rem; flex-grow: 1;">${product.description}</p>
        <div class="product-price"><span class="price-tag">₹${product.price}</span></div>
        <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
      </div>
    </div>
  `).join('');
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  // Clone product to avoid reference issues if modified later
  cart.push({ ...product });
  updateCartUI();
  toggleCart(true);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  cartCountSpan.textContent = cart.length;

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotalPriceSpan.textContent = `₹${total}`;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty.</div>';
    return;
  }

  cartItemsContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <div class="cart-item-price">₹${item.price}</div>
        <button class="cart-item-remove" data-index="${index}">Remove</button>
      </div>
    </div>
  `).join('');
}

function toggleCart(show) {
  if (show) {
    cartSidebar.classList.add('open');
    overlay.classList.add('open');
  } else {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('open');
  }
}

function showOrderSuccess() {
  const modal = document.getElementById('order-success-modal');
  modal.classList.add('active');
  overlay.classList.add('open');

  // Confetti effect (optional, simplified here with just modal)

  setTimeout(() => {
    modal.classList.remove('active');
    overlay.classList.remove('open');
  }, 3000);
}

function setupEventListeners() {
  // Open/Close Cart
  cartBtn.addEventListener('click', () => toggleCart(true));
  closeCartBtn.addEventListener('click', () => toggleCart(false));
  overlay.addEventListener('click', () => toggleCart(false));

  // Add to Cart Delegation
  productGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
      const id = parseInt(e.target.getAttribute('data-id'));
      addToCart(id);
    }
  });

  // Remove from Cart Delegation
  cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-item-remove')) {
      const index = parseInt(e.target.getAttribute('data-index'));
      removeFromCart(index);
    }
  });

  // Checkout Button
  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your cart is empty! Add some delicious items first.');
        return;
      }

      // Process checkout
      cart = []; // Clear cart
      updateCartUI();
      toggleCart(false); // Close sidebar

      // Show animation
      setTimeout(() => {
        showOrderSuccess();
      }, 300); // Slight delay for sidebar to close
    });
  }
}

init();
