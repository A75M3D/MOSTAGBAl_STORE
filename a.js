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
