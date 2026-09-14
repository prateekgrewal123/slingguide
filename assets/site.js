
const PRODUCTS = [
  {
    "id": "universal-tv-remote",
    "brand": "Generic",
    "name": "Universal TV Remote",
    "price": 19.99,
    "category": "TV Accessories",
    "desc": "Universal remote control designed for common television functions including power, volume, input and channel navigation.",
    "features": [
      "TV, streaming and common remote-control functions",
      "Universal layout",
      "Pre-programmed compatibility varies by TV model"
    ],
    "image": "assets/products/universal-tv-remote.svg"
  },
  {
    "id": "replacement-tv-remote",
    "brand": "Generic",
    "name": "Replacement TV Remote",
    "price": 17.99,
    "category": "TV Accessories",
    "desc": "Replacement-style remote for compatible televisions. Check the original remote model or TV compatibility before ordering.",
    "features": [
      "TV replacement remote",
      "Lightweight design",
      "Compatibility varies by TV model"
    ],
    "image": "assets/products/replacement-tv-remote.svg"
  },
  {
    "id": "learning-universal-remote",
    "brand": "Generic",
    "name": "Learning Universal Remote",
    "price": 24.99,
    "category": "Remotes",
    "desc": "Programmable universal remote with learning-style controls for consolidating everyday TV and media commands.",
    "features": [
      "TV and media controls",
      "Programmable buttons",
      "Setup instructions included"
    ],
    "image": "assets/products/learning-universal-remote.svg"
  },
  {
    "id": "high-speed-hdmi-cable",
    "brand": "Generic",
    "name": "High-Speed HDMI Cable",
    "price": 12.99,
    "category": "HDMI & Connectivity",
    "desc": "High-speed HDMI cable for connecting televisions, streaming equipment, media players and other compatible devices.",
    "features": [
      "HDMI connection",
      "High-speed signal support",
      "Multiple length options"
    ],
    "image": "assets/products/high-speed-hdmi-cable.svg"
  },
  {
    "id": "premium-hdmi-cable",
    "brand": "Generic",
    "name": "Premium HDMI Cable",
    "price": 16.99,
    "category": "HDMI & Connectivity",
    "desc": "Durable HDMI cable for home entertainment connections between a TV and compatible source device.",
    "features": [
      "HDMI connection",
      "Shielded construction",
      "Supports compatible HDMI features"
    ],
    "image": "assets/products/premium-hdmi-cable.svg"
  },
  {
    "id": "hdmi-adapter",
    "brand": "Generic",
    "name": "HDMI Adapter",
    "price": 11.99,
    "category": "HDMI & Connectivity",
    "desc": "Compact HDMI adapter for connecting compatible display and source equipment when the ports require an adapter.",
    "features": [
      "HDMI connectivity",
      "Compact form factor",
      "Check connector type before ordering"
    ],
    "image": "assets/products/hdmi-adapter.svg"
  },
  {
    "id": "hdmi-splitter",
    "brand": "Generic",
    "name": "HDMI Splitter",
    "price": 29.99,
    "category": "HDMI & Connectivity",
    "desc": "HDMI splitter for distributing one compatible HDMI source to multiple displays. Useful for supported home entertainment setups.",
    "features": [
      "HDMI distribution",
      "Multiple output ports",
      "Power requirements vary by model"
    ],
    "image": "assets/products/hdmi-splitter.svg"
  },
  {
    "id": "usb-power-cable",
    "brand": "Generic",
    "name": "USB Power Cable",
    "price": 9.99,
    "category": "Power & Charging",
    "desc": "USB power cable for compatible streaming, media and small electronic accessories. Verify connector type before purchase.",
    "features": [
      "USB power",
      "Flexible cable",
      "Connector type varies by listing"
    ],
    "image": "assets/products/usb-power-cable.svg"
  },
  {
    "id": "usb-wall-power-adapter",
    "brand": "Generic",
    "name": "USB Wall Power Adapter",
    "price": 14.99,
    "category": "Power & Charging",
    "desc": "Compact USB wall power adapter for compatible USB-powered television and streaming accessories.",
    "features": [
      "USB power",
      "Compact wall charger",
      "Output compatibility should be checked"
    ],
    "image": "assets/products/usb-wall-power-adapter.svg"
  },
  {
    "id": "ethernet-cable",
    "brand": "Generic",
    "name": "Ethernet Cable",
    "price": 10.99,
    "category": "Network Accessories",
    "desc": "Ethernet cable for wired network connections between a compatible TV, streaming device, router or switch.",
    "features": [
      "Wired network connection",
      "Flexible jacket",
      "Connector type: RJ45"
    ],
    "image": "assets/products/ethernet-cable.svg"
  },
  {
    "id": "usb-ethernet-adapter",
    "brand": "Generic",
    "name": "USB Ethernet Adapter",
    "price": 18.99,
    "category": "Network Accessories",
    "desc": "USB-to-Ethernet adapter for compatible devices that need a wired network connection. Confirm device port support first.",
    "features": [
      "Wired network connection",
      "USB interface",
      "Device compatibility required"
    ],
    "image": "assets/products/usb-ethernet-adapter.svg"
  },
  {
    "id": "wifi-range-extender",
    "brand": "Generic",
    "name": "Wi-Fi Range Extender",
    "price": 34.99,
    "category": "Network Accessories",
    "desc": "Wi-Fi range extender intended to improve wireless coverage in areas where a compatible TV or streaming setup has a weak signal.",
    "features": [
      "Wireless network",
      "Extended coverage",
      "Placement affects performance"
    ],
    "image": "assets/products/wifi-range-extender.svg"
  },
  {
    "id": "tv-wall-mount",
    "brand": "Generic",
    "name": "Universal TV Wall Mount",
    "price": 39.99,
    "category": "TV Accessories",
    "desc": "Universal-style wall mount for compatible flat-panel televisions. Confirm screen size, VESA pattern and weight limits before installation.",
    "features": [
      "TV mounting",
      "Adjustable mounting pattern",
      "Hardware requirements vary"
    ],
    "image": "assets/products/tv-wall-mount.svg"
  },
  {
    "id": "tv-cleaning-kit",
    "brand": "Generic",
    "name": "TV Screen Cleaning Kit",
    "price": 14.99,
    "category": "TV Accessories",
    "desc": "Screen-safe cleaning kit for maintaining compatible television displays and removing everyday dust and smudges.",
    "features": [
      "TV maintenance",
      "Screen-safe materials",
      "Follow display manufacturer care guidance"
    ],
    "image": "assets/products/tv-cleaning-kit.svg"
  },
  {
    "id": "remote-protective-cover",
    "brand": "Generic",
    "name": "Remote Control Protective Cover",
    "price": 8.99,
    "category": "Remotes",
    "desc": "Protective silicone-style cover for compatible television remotes. Select the correct size and button layout before ordering.",
    "features": [
      "Remote protection",
      "Flexible cover",
      "Fit varies by remote model"
    ],
    "image": "assets/products/remote-protective-cover.svg"
  }
];
const CART_KEY='hc-cart-v1', USER_KEY='hc-user-v1', ORDERS_KEY='hc-orders-v1';
const money=n=>'$'+Number(n).toFixed(2);
const getCart=()=>JSON.parse(localStorage.getItem(CART_KEY)||'[]');
const saveCart=c=>{localStorage.setItem(CART_KEY,JSON.stringify(c));updateCartBadges();};
const getUser=()=>JSON.parse(localStorage.getItem(USER_KEY)||'null');
const productById=id=>PRODUCTS.find(p=>p.id===id);
function updateCartBadges(){const count=getCart().reduce((s,i)=>s+i.qty,0);document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=count);}
function addToCart(id,qty=1){const p=productById(id);if(!p)return;const c=getCart();const item=c.find(x=>x.id===id);if(item)item.qty+=qty;else c.push({id,qty});saveCart(c);showToast(p.name+' added to cart.');}
function buyNow(id){addToCart(id);location.href='cart.html?checkout=1';}
function changeQty(id,delta){const c=getCart();const item=c.find(x=>x.id===id);if(!item)return;item.qty+=delta;if(item.qty<1)c.splice(c.indexOf(item),1);saveCart(c);renderCart();}
function removeFromCart(id){saveCart(getCart().filter(x=>x.id!==id));renderCart();}
function cartTotals(){return getCart().reduce((s,i)=>{const p=productById(i.id);return s+(p?p.price*i.qty:0)},0);}
function showToast(msg){let t=document.querySelector('.site-toast');if(!t){t=document.createElement('div');t.className='site-toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),1800)}
function productCard(p){return `<article class="product-card"><img loading="lazy" class="product-image" src="${p.image}" alt="${p.name}"><div class="product-body"><span class="product-brand">${p.category}</span><h3>${p.name}</h3><p class="product-desc">${p.desc}</p><div class="product-price">${money(p.price)}</div><div class="condition">Generic accessory • Cash on Delivery</div><div class="product-actions"><a class="button small outline" href="product.html?id=${p.id}">View Details</a><button class="button small dark" onclick="addToCart('${p.id}')">Add to Cart</button></div><button class="button small light" style="margin-top:8px;border:1px solid #dce1eb" onclick="buyNow('${p.id}')">Buy Now</button></div></article>`}
function renderShop(){const grid=document.querySelector('#product-grid');if(!grid)return;const q=(document.querySelector('#shop-search')?.value||'').toLowerCase().trim();const filtered=PRODUCTS.filter(p=>(p.name+' '+p.category+' '+p.desc).toLowerCase().includes(q));grid.innerHTML=filtered.map(productCard).join('');const count=document.querySelector('#shop-count');if(count)count.textContent=filtered.length+' products';}
function renderProduct(){const root=document.querySelector('#product-detail');if(!root)return;const id=new URLSearchParams(location.search).get('id');const p=productById(id)||PRODUCTS[0];document.title=p.name+' | HARSH CHAUHAN';root.innerHTML=`<div><img class="product-detail-image" src="${p.image}" alt="${p.name}"></div><div><span class="kicker">GENERIC TV ACCESSORY</span><h1>${p.name}</h1><p class="meta">${p.category}</p><div class="price">${money(p.price)}</div><div class="cod-note"><strong>Cash on Delivery available.</strong><br>No online payment is required. Place your order with your delivery address and confirm the order.</div><p class="muted">${p.desc}</p><h3>Product details</h3><ul class="feature-list">${p.features.map(f=>'<li>'+f+'</li>').join('')}</ul><div class="product-actions" style="max-width:430px;margin-top:24px"><button class="button dark" onclick="addToCart('${p.id}')">Add to Cart</button><button class="button light" onclick="buyNow('${p.id}')">Buy Now</button></div><div class="notice">Please verify connector type, device compatibility, dimensions or mounting requirements before ordering where applicable.</div></div>`;}
function renderCart(){const root=document.querySelector('#cart-content');if(!root)return;const c=getCart();if(!c.length){root.innerHTML='<div class="empty-state"><h2>Your cart is empty.</h2><p>Add a TV or streaming accessory from the shop to continue.</p><a class="button dark" href="shop.html">Browse Shop</a></div>';return}const rows=c.map(i=>{const p=productById(i.id);return `<div class="cart-row"><img loading="lazy" class="cart-thumb" src="${p.image}" alt="${p.name}"><div><h3>${p.name}</h3><p>${money(p.price)} each • COD</p></div><div class="qty"><button onclick="changeQty('${p.id}',-1)">−</button><strong>${i.qty}</strong><button onclick="changeQty('${p.id}',1)">+</button></div><div><strong>${money(p.price*i.qty)}</strong><br><button class="remove-link" onclick="removeFromCart('${p.id}')">Remove</button></div></div>`}).join('');const total=cartTotals();root.innerHTML=`<div class="cart-layout"><div class="cart-list">${rows}</div><aside class="summary-card"><h3>Order Summary</h3><div class="summary-line"><span>Items</span><span>${c.reduce((s,i)=>s+i.qty,0)}</span></div><div class="summary-line"><span>Subtotal</span><span>${money(total)}</span></div><div class="summary-line"><span>Payment</span><span>Cash on Delivery</span></div><div class="summary-total"><span>Total</span><span>${money(total)}</span></div><a class="button dark" style="display:block;text-align:center" href="checkout.html">Continue to Checkout</a><a class="button light" style="display:block;text-align:center;margin-top:8px" href="shop.html">Continue Shopping</a></aside></div>`;}
async function hashText(text){const data=new TextEncoder().encode(text);const hash=await crypto.subtle.digest('SHA-256',data);return [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,'0')).join('');}
function setupAccount(){const panel=document.querySelector('#account-panel');if(!panel)return;const user=getUser();panel.innerHTML=user?`<div class="account-status"><strong>Signed in as ${user.name}</strong><br>${user.email}</div><button class="button dark" onclick="localStorage.removeItem(USER_KEY);location.reload()">Sign Out</button>`:`<div class="account-tabs"><button class="tab-btn active" data-tab="signin">Sign In</button><button class="tab-btn" data-tab="signup">Create Account</button></div><div id="signin-box"><form id="signin-form"><div class="form-field"><label>Email</label><input id="signin-email" type="email" required></div><div class="form-field" style="margin-top:12px"><label>Password</label><input id="signin-password" type="password" required></div><button class="button dark" style="margin-top:16px" type="submit">Sign In</button><p class="notice">This account is stored locally in this browser. It is not a server account.</p></form></div><div id="signup-box" style="display:none"><form id="signup-form"><div class="form-field"><label>Name</label><input id="signup-name" required></div><div class="form-field" style="margin-top:12px"><label>Email</label><input id="signup-email" type="email" required></div><div class="form-field" style="margin-top:12px"><label>Password</label><input id="signup-password" type="password" minlength="6" required></div><button class="button dark" style="margin-top:16px" type="submit">Create Account</button></form></div>`;panel.querySelectorAll('.tab-btn').forEach(btn=>btn.onclick=()=>{panel.querySelectorAll('.tab-btn').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const sign=btn.dataset.tab==='signin';panel.querySelector('#signin-box').style.display=sign?'block':'none';panel.querySelector('#signup-box').style.display=sign?'none':'block'});const sf=panel.querySelector('#signin-form');if(sf)sf.onsubmit=async e=>{e.preventDefault();const saved=JSON.parse(localStorage.getItem('hc-local-account')||'null');const pass=await hashText(panel.querySelector('#signin-password').value);if(!saved||saved.email.toLowerCase()!==panel.querySelector('#signin-email').value.toLowerCase()||saved.password!==pass){showToast('Incorrect email or password.');return}localStorage.setItem(USER_KEY,JSON.stringify({name:saved.name,email:saved.email}));location.reload()};const cf=panel.querySelector('#signup-form');if(cf)cf.onsubmit=async e=>{e.preventDefault();const email=panel.querySelector('#signup-email').value.trim();const existing=JSON.parse(localStorage.getItem('hc-local-account')||'null');if(existing&&existing.email.toLowerCase()===email.toLowerCase()){showToast('An account with this email already exists.');return}const password=await hashText(panel.querySelector('#signup-password').value);localStorage.setItem('hc-local-account',JSON.stringify({name:panel.querySelector('#signup-name').value.trim(),email,password}));localStorage.setItem(USER_KEY,JSON.stringify({name:panel.querySelector('#signup-name').value.trim(),email}));location.reload()};}
function renderCheckout(){const root=document.querySelector('#checkout-root');if(!root)return;const c=getCart();if(!c.length){root.innerHTML='<div class="empty-state"><h2>No items to order.</h2><a class="button dark" href="shop.html">Browse Shop</a></div>';return}const total=cartTotals();const user=getUser();root.innerHTML=`<div class="checkout-layout"><div class="checkout-card"><span class="kicker">DELIVERY DETAILS</span><h2>Place your COD order</h2><p class="muted">Enter the delivery details below. No online payment is required.</p><form id="checkout-form"><div class="form-grid"><div class="form-field"><label>Full name *</label><input name="name" required value="${user?.name||''}"></div><div class="form-field"><label>Mobile number *</label><input name="mobile" required></div><div class="form-field full"><label>Email</label><input name="email" type="email" value="${user?.email||''}"></div><div class="form-field full"><label>Address *</label><textarea name="address" required></textarea></div><div class="form-field"><label>City *</label><input name="city" required></div><div class="form-field"><label>State *</label><input name="state" required></div><div class="form-field"><label>ZIP / Postal code *</label><input name="zip" required></div><div class="form-field"><label>Country *</label><input name="country" value="United States" required></div></div><div class="cod-note" style="margin-top:18px"><strong>Payment method: Cash on Delivery</strong><br>Pay when the order is delivered. An order confirmation will be generated after submission.</div><button class="button dark" type="submit">Confirm COD Order</button></form></div><aside class="summary-card"><h3>Your Order</h3>${c.map(i=>{const p=productById(i.id);return `<div class="summary-line"><span>${p.name} × ${i.qty}</span><span>${money(p.price*i.qty)}</span></div>`}).join('')}<div class="summary-total"><span>Total</span><span>${money(total)}</span></div></aside></div>`;document.querySelector('#checkout-form').onsubmit=e=>{e.preventDefault();const fd=new FormData(e.target);const order={id:'HC-'+Date.now().toString(36).toUpperCase(),date:new Date().toISOString(),customer:Object.fromEntries(fd.entries()),items:c,total};const orders=JSON.parse(localStorage.getItem(ORDERS_KEY)||'[]');orders.push(order);localStorage.setItem(ORDERS_KEY,JSON.stringify(orders));localStorage.removeItem(CART_KEY);location.href='order-confirmation.html?id='+encodeURIComponent(order.id)}}
function renderConfirmation(){const root=document.querySelector('#confirmation-root');if(!root)return;const id=new URLSearchParams(location.search).get('id');const orders=JSON.parse(localStorage.getItem(ORDERS_KEY)||'[]');const o=orders.find(x=>x.id===id)||orders[orders.length-1];if(!o){root.innerHTML='<div class="empty-state"><h2>Order not found</h2><a class="button dark" href="shop.html">Return to Shop</a></div>';return}root.innerHTML=`<div class="order-success"><div class="kicker">ORDER CONFIRMED</div><h1>Thank you, ${o.customer.name}.</h1><p>Your Cash on Delivery order has been recorded on this browser.</p><div class="order-id">${o.id}</div><div class="order-summary"><strong>Delivery</strong><p>${o.customer.address}<br>${o.customer.city}, ${o.customer.state} ${o.customer.zip}<br>${o.customer.country}<br>Mobile: ${o.customer.mobile}</p><strong>Items</strong>${o.items.map(i=>{const p=productById(i.id);return `<div class="summary-line"><span>${p.name} × ${i.qty}</span><span>${money(p.price*i.qty)}</span></div>`}).join('')}<div class="summary-total"><span>COD Total</span><span>${money(o.total)}</span></div></div><p class="notice">This order confirmation is stored in this browser. Keep the order ID for your records and contact support if you need assistance with the order.</p><a class="button dark" href="shop.html">Continue Shopping</a></div>`;}
function renderHomeProducts(){const root=document.querySelector('#home-products');if(!root)return;root.innerHTML=PRODUCTS.slice(0,6).map(productCard).join('')}
function updateHeaderLinks(){document.querySelectorAll('[data-cart-count]').forEach(()=>{});updateCartBadges();}

document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.nav')?.classList.toggle('open'));
document.addEventListener('DOMContentLoaded',()=>{updateHeaderLinks();renderShop();renderProduct();renderCart();setupAccount();renderCheckout();renderConfirmation();renderHomeProducts();const s=document.querySelector('#shop-search');s?.addEventListener('input',renderShop)});
