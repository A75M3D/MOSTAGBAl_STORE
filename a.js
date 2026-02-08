
        // ==================== قاعدة بيانات Hadia Plus ====================
        const HADIA_PLUS_DATABASE = {
            // فئات الهدايا
            categories: [
                {
                    id: 1,
                    name: "هدايا رجال الأعمال",
                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    description: "هدايا فاخرة تناسب رجال الأعمال والنخبة من الساعات والأقلام الفاخرة ومستلزمات المكاتب الراقية."
                },
                {
                    id: 2,
                    name: "هدايا نسائية فاخرة",
                    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    description: "تشكيلة مميزة من المجوهرات والعطور والحقائب الفاخرة المصممة بعناية للسيدات الراقيات."
                },
                {
                    id: 3,
                    name: "هدايا الزفاف",
                    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    description: "هدايا تذكارية فاخرة للأعراس، مصممة لتكون ذكرى جميلة تدوم طويلاً."
                },
                {
                    id: 4,
                    name: "هدايا المناسبات",
                    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    description: "هدايا مميزة لكل المناسبات الخاصة، مع خيارات تخصيص فريدة."
                },
                {
                    id: 5,
                    name: "هدايا الشركات",
                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    description: "حلول هدايا مبتكرة للشركات والمؤسسات مع خيارات تخصيص تحمل شعار المؤسسة."
                },
                {
                    id: 6,
                    name: "هدايا الأطفال",
                    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    description: "هدايا تعليمية وفاخرة للأطفال، تجمع بين المتعة والفائدة والجودة العالية."
                }
            ],
            
            // المنتجات الفاخرة
            products: [
                {
                    id: 101,
                    name: "ساعة رولكس كلاسيكية مطلية بالذهب",
                    category: "هدايا رجال الأعمال",
                    price: 28500,
                    original_price: 35000,
                    rating: 4.9,
                    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    description: "ساعة رولكس فاخرة مطلية بالذهب عيار 18 قيراط، مع شهادة أصلية وضمان عالمي.",
                    badge: "الأكثر مبيعاً"
                },
                {
                    id: 102,
                    name: "طقم مجوهرات ماسية من تيفاني",
                    category: "هدايا نسائية فاخرة",
                    price: 42000,
                    original_price: 50000,
                    rating: 4.8,
                    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    description: "طقم مجوهرات ماسية أنيق من تيفاني، يتضمن عقد وأقراط وخاتم مصمم بتقنية فائقة.",
                    badge: "حصري"
                },
                {
                    id: 103,
                    name: "قلم مونت بلانك ميسيستريوس بلاك",
                    category: "هدايا رجال الأعمال",
                    price: 12500,
                    original_price: 15000,
                    rating: 4.7,
                    image: "https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    description: "قلم حبر فاخر من مونت بلانك، تصميم كلاسيكي أنيق مع تفاصيل مطلية بالروديوم.",
                    badge: "جديد"
                },
                {
                    id: 104,
                    name: "عطر شانيل نمر 5 محدود الإصدار",
                    category: "هدايا نسائية فاخرة",
                    price: 8500,
                    original_price: 10000,
                    rating: 4.9,
                    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    description: "عطر شانيل نمر 5 إصدار محدود، برفقة علبة فاخرة مطلية بالذهب.",
                    badge: "محدود"
                },
                {
                    id: 105,
                    name: "صينية تقديم فضية من فيرساتشي",
                    category: "هدايا الزفاف",
                    price: 18000,
                    original_price: 22000,
                    rating: 4.6,
                    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    description: "صينية تقديم فضية عالية الجودة من فيرساتشي، مع تفاصيل منقوشة يدوياً.",
                    badge: "حصري"
                },
                {
                    id: 106,
                    name: "حقيبة هيرميس بيركين جلد تمساح",
                    category: "هدايا نسائية فاخرة",
                    price: 150000,
                    original_price: 180000,
                    rating: 5.0,
                    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    description: "حقيبة هيرميس بيركين فاخرة من جلد التمساح الطبيعي، بلون أسود كلاسيكي.",
                    badge: "نادر"
                },
                {
                    id: 107,
                    name: "طقم شاي فضي من ويدجوود",
                    category: "هدايا المناسبات",
                    price: 9500,
                    original_price: 12000,
                    rating: 4.5,
                    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    description: "طقم شاي فاخر من ويدجوود، مع تفاصيل ذهبية وتصميم كلاسيكي راقي.",
                    badge: "كلاسيكي"
                },
                {
                    id: 108,
                    name: "جهاز آيباد برو مع قلم آبل محفور",
                    category: "هدايا الشركات",
                    price: 6500,
                    original_price: 8000,
                    rating: 4.8,
                    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    description: "جهاز آيباد برو مع قلم آبل محفور عليه اسم الشركة أو الشعار.",
                    badge: "تخصيص"
                }
            ],
            
            // الحصول على التصنيفات الفريدة
            getUniqueCategories: function() {
                return [...new Set(this.products.map(product => product.category))];
            },
            
            // الحصول على المنتجات حسب التصنيف
            getProductsByCategory: function(category) {
                if (category === "الكل") return this.products;
                return this.products.filter(product => product.category === category);
            }
        };

        // ==================== حالة التطبيق ====================
        let cart = [];
        let currentCategory = "الكل";

        // ==================== عناصر DOM ====================
        const loadingScreen = document.getElementById('loadingScreen');
        const loadingProgress = document.getElementById('loadingProgress');
        const mainContent = document.querySelector('.main-content');
        const themeToggle = document.getElementById('themeToggle');
        const cartButton = document.getElementById('cartButton');
        const cartSidebar = document.getElementById('cartSidebar');
        const closeCart = document.getElementById('closeCart');
        const overlay = document.getElementById('overlay');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const cartCount = document.getElementById('cartCount');
        const continueShopping = document.getElementById('continueShopping');
        const whatsappOrder = document.getElementById('whatsappOrder');
        const exploreBtn = document.getElementById('exploreBtn');
        const productsFilter = document.getElementById('productsFilter');
        const productsGrid = document.getElementById('productsGrid');
        const categoriesGrid = document.getElementById('categoriesGrid');
        const emptyState = document.getElementById('emptyState');
        const toast = document.getElementById('toast');
        const deliveryCar = document.querySelector('.delivery-car');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        // ==================== إدارة التحميل ====================
        function startLoading() {
            // بدء تحميل شريط التقدم
            setTimeout(() => {
                loadingProgress.style.width = '100%';
            }, 100);

            // الانتقال إلى المحتوى الرئيسي بعد 3 ثواني
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.visibility = 'hidden';
                loadingScreen.style.transition = 'opacity 0.8s ease, visibility 0.8s ease';
                
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    mainContent.style.display = 'block';
                    initializeSite();
                }, 800);
            }, 3000);
        }

        // ==================== تهيئة الموقع ====================
        function initializeSite() {
            loadCategories();
            loadProducts();
            loadCartFromLocalStorage();
            setupEventListeners();
            
            // إضافة تأثيرات عند التمرير
            setupScrollAnimations();
        }

        function setupEventListeners() {
            // تبديل السمة
            themeToggle.addEventListener('click', toggleTheme);
            
            // إدارة السلة
            cartButton.addEventListener('click', openCart);
            closeCart.addEventListener('click', closeCartSidebar);
            overlay.addEventListener('click', closeCartSidebar);
            continueShopping.addEventListener('click', closeCartSidebar);
            
            // طلب الواتساب
            whatsappOrder.addEventListener('click', sendWhatsAppOrder);
            
            // زر الاستكشاف
            exploreBtn.addEventListener('click', () => {
                document.querySelector('.featured-section').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            });
            
            // القائمة المتنقلة
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'white';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            });
            
            // إغلاق القائمة عند النقر على رابط
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 992) {
                        navLinks.style.display = 'none';
                    }
                });
            });
        }

        // ==================== تحميل الفئات ====================
        function loadCategories() {
            categoriesGrid.innerHTML = '';
            
            HADIA_PLUS_DATABASE.categories.forEach(category => {
                const categoryCard = document.createElement('div');
                categoryCard.className = 'category-card';
                
                categoryCard.innerHTML = `
                    <img src="${category.image}" alt="${category.name}" class="category-image">
                    <div class="category-content">
                        <h3 class="category-title">${category.name}</h3>
                        <p class="category-description">${category.description}</p>
                        <a href="#" class="category-link" data-category="${category.name}">
                            استعرض المجموعة
                            <i class="fas fa-arrow-left"></i>
                        </a>
                    </div>
                `;
                
                categoriesGrid.appendChild(categoryCard);
                
                // إضافة مستمع حدث لزر استعرض المجموعة
                categoryCard.querySelector('.category-link').addEventListener('click', (e) => {
                    e.preventDefault();
                    const categoryName = e.currentTarget.getAttribute('data-category');
                    
                    // تحديث أزرار التصفية
                    document.querySelectorAll('.filter-btn').forEach(btn => {
                        btn.classList.remove('active');
                        if (btn.textContent === categoryName) {
                            btn.classList.add('active');
                            currentCategory = categoryName;
                            loadProducts();
                        }
                    });
                    
                    // التمرير إلى قسم المنتجات
                    document.querySelector('.featured-section').scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                });
            });
        }

        // ==================== تحميل المنتجات ====================
        function loadProducts() {
            // إعداد أزرار التصفية
            const categories = ["الكل", ...HADIA_PLUS_DATABASE.getUniqueCategories()];
            productsFilter.innerHTML = '';
            
            categories.forEach(category => {
                const filterBtn = document.createElement('button');
                filterBtn.className = `filter-btn ${category === currentCategory ? 'active' : ''}`;
                filterBtn.textContent = category;
                filterBtn.addEventListener('click', () => {
                    currentCategory = category;
                    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                    filterBtn.classList.add('active');
                    loadProducts();
                });
                productsFilter.appendChild(filterBtn);
            });
            
            // تحميل المنتجات
            const products = HADIA_PLUS_DATABASE.getProductsByCategory(currentCategory);
            productsGrid.innerHTML = '';
            
            if (products.length === 0) {
                emptyState.style.display = 'block';
            } else {
                emptyState.style.display = 'none';
                
                products.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.className = 'product-card';
                    
                    // إنشاء نجوم التقييم
                    const ratingStars = Array.from({length: 5}, (_, i) => 
                        i < Math.floor(product.rating) 
                            ? '<i class="fas fa-star"></i>' 
                            : '<i class="far fa-star"></i>'
                    ).join('');
                    
                    productCard.innerHTML = `
                        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                        <div class="product-content">
                            <span class="product-category">${product.category}</span>
                            <h3 class="product-title">${product.name}</h3>
                            <p class="product-description">${product.description}</p>
                            
                            <div class="product-meta">
                                <div class="product-price">
                                    <span class="current-price">${product.price.toLocaleString()} ر.س</span>
                                    ${product.original_price ? `<span class="original-price">${product.original_price.toLocaleString()} ر.س</span>` : ''}
                                </div>
                                <div class="product-rating">
                                    ${ratingStars}
                                    <span>(${product.rating})</span>
                                </div>
                            </div>
                            
                            <div class="product-actions">
                                <button class="add-to-cart" data-id="${product.id}">
                                    <i class="fas fa-shopping-bag"></i>
                                    أضف إلى السلة
                                </button>
                                <button class="action-btn">
                                    <i class="far fa-heart"></i>
                                </button>
                                <button class="action-btn">
                                    <i class="far fa-eye"></i>
                                </button>
                            </div>
                        </div>
                    `;
                    
                    productsGrid.appendChild(productCard);
                    
                    // إضافة مستمع حدث لإضافة إلى السلة
                    productCard.querySelector('.add-to-cart').addEventListener('click', (e) => {
                        const id = parseInt(e.currentTarget.getAttribute('data-id'));
                        const product = products.find(p => p.id === id);
                        if (product) {
                            addToCart(product, e.currentTarget);
                        }
                    });
                });
            }
        }

        // ==================== إدارة السلة ====================
        function addToCart(product, button) {
            const existingItem = cart.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            // تأثير بسيط على الزر
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
            
            updateCartUI();
            saveCartToLocalStorage();
            showToast('تم إضافة الهدية إلى السلة');
            
            // تأثير على زر السلة
            cartButton.style.transform = 'scale(1.1)';
            setTimeout(() => {
                cartButton.style.transform = 'scale(1)';
            }, 200);
        }

        function updateCartUI() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div style="text-align: center; padding: 60px 20px; color: #888;">
                        <i class="fas fa-shopping-bag" style="font-size: 60px; margin-bottom: 20px; opacity: 0.3;"></i>
                        <p style="font-size: 1.2rem;">سلة الهدايا فارغة</p>
                        <p style="margin-top: 10px;">ابدأ بإضافة هدايا فاخرة</p>
                    </div>
                `;
            } else {
                cart.forEach((item, index) => {
                    const cartItemElement = document.createElement('div');
                    cartItemElement.className = 'cart-item';
                    
                    cartItemElement.innerHTML = `
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">${item.price.toLocaleString()} ر.س</div>
                            <div class="cart-item-actions">
                                <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                                <span class="cart-item-quantity">${item.quantity}</span>
                                <button class="quantity-btn increase" data-id="${item.id}">+</button>
                                <button class="remove-item" data-id="${item.id}">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    `;
                    
                    cartItems.appendChild(cartItemElement);
                    
                    // إضافة تأثير ظهور تدريجي
                    setTimeout(() => {
                        cartItemElement.style.opacity = '1';
                    }, index * 100);
                    
                    // إضافة مستمعي الأحداث
                    cartItemElement.querySelector('.decrease').addEventListener('click', () => {
                        decreaseQuantity(item.id);
                    });
                    
                    cartItemElement.querySelector('.increase').addEventListener('click', () => {
                        increaseQuantity(item.id);
                    });
                    
                    cartItemElement.querySelector('.remove-item').addEventListener('click', () => {
                        removeFromCart(item.id);
                    });
                });
            }
            
            // تحديث المجموع
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = `${total.toLocaleString()} ر.س`;
        }

        function increaseQuantity(id) {
            const item = cart.find(item => item.id === id);
            if (item) {
                item.quantity += 1;
                updateCartUI();
                saveCartToLocalStorage();
            }
        }
        
        function decreaseQuantity(id) {
            const item = cart.find(item => item.id === id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    removeFromCart(id);
                    return;
                }
                updateCartUI();
                saveCartToLocalStorage();
            }
        }
        
        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            updateCartUI();
            saveCartToLocalStorage();
            showToast('تم إزالة الهدية من السلة');
        }

        function saveCartToLocalStorage() {
            localStorage.setItem('hadiaPlusCart', JSON.stringify(cart));
        }
        
        function loadCartFromLocalStorage() {
            const savedCart = localStorage.getItem('hadiaPlusCart');
            if (savedCart) {
                try {
                    cart = JSON.parse(savedCart);
                    updateCartUI();
                } catch (error) {
                    console.error('خطأ في تحميل سلة الهدايا:', error);
                    cart = [];
                }
            }
        }

        function openCart() {
            cartSidebar.classList.add('open');
            overlay.style.opacity = '1';
            overlay.style.visibility = 'visible';
            document.body.style.overflow = 'hidden';
        }

        function closeCartSidebar() {
            cartSidebar.classList.remove('open');
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
            document.body.style.overflow = 'auto';
        }

        // ==================== طلب الواتساب ====================
        function sendWhatsAppOrder() {
            if (cart.length === 0) {
                showToast('سلة الهدايا فارغة', true);
                return;
            }
            
            // أنيميشن سيارة التوصيل
            deliveryCar.classList.add('active');
            
            setTimeout(() => {
                deliveryCar.classList.add('delivering');
                
                setTimeout(() => {
                    // إعداد رسالة الواتساب
                    let message = 'مرحباً، أريد طلب الهدايا التالية من Hadia Plus:\n\n';
                    
                    cart.forEach((item, index) => {
                        message += `${index + 1}. ${item.name} (${item.quantity}) - ${item.price * item.quantity} ر.س\n`;
                    });
                    
                    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                    message += `\nالمجموع: ${total.toLocaleString()} ر.س`;
                    message += `\n\nأرجو التواصل لتأكيد الطلب والتفاصيل.`;
                    
                    const phoneNumber = '0924299798';
                    const encodedMessage = encodeURIComponent(message);
                    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                    
                    // إعادة تعيين موقع السيارة
                    setTimeout(() => {
                        deliveryCar.classList.remove('active', 'delivering');
                    }, 500);
                    
                    // فتح رابط الواتساب
                    window.open(url, '_blank');
                }, 1500);
            }, 1000);
        }

        // ==================== إدارة السمة ====================
        function toggleTheme() {
            const isDark = document.body.classList.toggle('dark-theme');
            const icon = themeToggle.querySelector('i');
            
            if (isDark) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                document.documentElement.style.setProperty('--cream', '#1a1a2e');
                document.documentElement.style.setProperty('--cream-light', '#16213e');
                document.documentElement.style.setProperty('--text-dark', '#ffffff');
                document.documentElement.style.setProperty('--text-light', '#b0b0b0');
                document.documentElement.style.setProperty('--charcoal', '#ffffff');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                document.documentElement.style.setProperty('--cream', '#FDF6E3');
                document.documentElement.style.setProperty('--cream-light', '#FFFEF9');
                document.documentElement.style.setProperty('--text-dark', '#2C1810');
                document.documentElement.style.setProperty('--text-light', '#5D4037');
                document.documentElement.style.setProperty('--charcoal', '#2C3E50');
            }
            
            localStorage.setItem('hadiaPlusTheme', isDark ? 'dark' : 'light');
        }

        // تحميل السمة المحفوظة
        const savedTheme = localStorage.getItem('hadiaPlusTheme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.querySelector('i').classList.remove('fa-moon');
            themeToggle.querySelector('i').classList.add('fa-sun');
            
            // تطبيق الألوان الداكنة
            document.documentElement.style.setProperty('--cream', '#1a1a2e');
            document.documentElement.style.setProperty('--cream-light', '#16213e');
            document.documentElement.style.setProperty('--text-dark', '#ffffff');
            document.documentElement.style.setProperty('--text-light', '#b0b0b0');
            document.documentElement.style.setProperty('--charcoal', '#ffffff');
        }

        // ==================== إشعارات ====================
        function showToast(message, isError = false) {
            toast.innerHTML = `
                <i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
                <span>${message}</span>
            `;
            
            toast.className = 'toast';
            if (isError) toast.classList.add('error');
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // ==================== تأثيرات التمرير ====================
        function setupScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // مراقبة العناصر لإضافة تأثيرات
            document.querySelectorAll('.category-card, .product-card, .feature-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        }

        // ==================== بدء التحميل ====================
        document.addEventListener('DOMContentLoaded', startLoading);
  
