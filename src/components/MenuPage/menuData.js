import p1_img from "./Fimg/Scottish-Fish2-.jpg";
import p2_img from "./Fimg/Oven-Roasted-Chicken.jpg";
import p3_img from "./Fimg/Pan-fried-Chicken-.jpg";
import p4_img from "./Fimg/grilled-fillet-steak-.jpg";
import p5_img from "./Fimg/Shrimp-Sauce.jpg";
import p6_img from "./Fimg/Gambas-Lagosian-300x300.jpg";
import p7_img from "./Fimg/pork-chop-masala.jpg";
import p8_img from "./Fimg/Seafood-Platter2.jpg";
import p9_img from "./Fimg/Luscious-Tandoori-Lamb-2-scaled.jpg";
import p10_img from "./Fimg/T-bone-Steak .png";


export const menuData = {
  food: [
     {
      subcategory: "Main Course",
      items: [
        {
          name: "Scottish Fish",
          description: "Traditional melon seed soup with assorted meats and vegetables",
          price: "₦23,200",
          image: p1_img,
          category: "food"
        },
        {
          name: "Oven Roasted Chicken",
          description: "Fresh okra soup with fish and traditional spices",
          price: "₦29,700",
          image: p2_img,
          category: "food"
        },
        {
          name: "Pan Fried Chicken Breast",
          description: "African mango seed soup with assorted meats",
          price: "₦29,700",
          image: p3_img,
          category: "food"
        },
        {
          name: "Grilled Beef Fillet",
          description: "Traditional bitterleaf soup with stockfish and meats",
          price: "₦34,300.",
          image: p4_img,
          category: "food"
        },
        {
          name: "Shrimps Sauce",
          description: "Rich palm nut soup with fresh fish and spices",
          price: "₦35,100",
          image: p5_img,
          category: "food"
        },
        {
          name: "Gambassi Lasagna",
          description: "Mixed vegetables with assorted meats in rich broth",
          price: "₦37,200",
          image: p6_img,
          category: "food"
        },
         {
          name: "Pork Chop Masala",
          description: "Mixed vegetables with assorted meats in rich broth",
          price: "₦37,300",
          image: p7_img,
          category: "food"
        },
         {
          name: "SeaFood Platter",
          description: "Mixed vegetables with assorted meats in rich broth",
          price: "₦37,300",
          image: p8_img,
          category: "food"
        },
           {
          name: "Luscious Tandoori Lamb",
          description: "Mixed vegetables with assorted meats in rich broth",
          price: "₦37,300",
          image: p9_img,
          category: "food"
        },
            {
          name: "T-Bone Steak",
          description: "Mixed vegetables with assorted meats in rich broth",
          price: "₦47,000",
          image: p10_img,
          category: "food"
        },
      ]
    },
    {
      subcategory: "Local Soups",
      items: [
        {
          name: "Egusi Soup",
          description: "Traditional melon seed soup with assorted meats and vegetables",
          price: "₦15,500",
          image: "https://via.placeholder.com/150x150/8B4513/FFFFFF?text=Egusi",
          category: "food"
        },
        {
          name: "Okra Soup",
          description: "Fresh okra soup with fish and traditional spices",
          price: "₦13,800",
          image: "https://via.placeholder.com/150x150/228B22/FFFFFF?text=Okra",
          category: "food"
        },
        {
          name: "Ogbono Soup",
          description: "African mango seed soup with assorted meats",
          price: "₦14,200",
          image: "https://via.placeholder.com/150x150/FF6347/FFFFFF?text=Ogbono",
          category: "food"
        },
        {
          name: "Bitterleaf Soup",
          description: "Traditional bitterleaf soup with stockfish and meats",
          price: "₦16,800",
          image: "https://via.placeholder.com/150x150/8B0000/FFFFFF?text=Bitterleaf",
          category: "food"
        },
        {
          name: "Banga Soup",
          description: "Rich palm nut soup with fresh fish and spices",
          price: "₦17,500",
          image: "https://via.placeholder.com/150x150/FF8C00/FFFFFF?text=Palm+Nut",
          category: "food"
        },
        {
          name: "Vegetable Soup",
          description: "Mixed vegetables with assorted meats in rich broth",
          price: "₦12,900",
          image: "https://via.placeholder.com/150x150/32CD32/FFFFFF?text=Vegetable",
          category: "food"
        }
      ]
    },
    {
      subcategory: "Rice Dishes",
      items: [
        {
          name: "Jollof Rice",
          description: "Classic Nigerian jollof rice with chicken and plantain",
          price: "₦18,500",
          image: "https://via.placeholder.com/150x150/FFD700/FFFFFF?text=Jollof",
          category: "food"
        },
        {
          name: "Fried Rice",
          description: "Nigerian-style fried rice with mixed vegetables and chicken",
          price: "₦19,200",
          image: "https://via.placeholder.com/150x150/8B4513/FFFFFF?text=Fried+Rice",
          category: "food"
        },
        {
          name: "Coconut Rice",
          description: "Aromatic coconut rice with fish and plantain",
          price: "₦21,800",
          image: "https://via.placeholder.com/150x150/FF6347/FFFFFF?text=Coconut+Rice",
          category: "food"
        },
        {
          name: "White Rice & Stew",
          description: "Steamed white rice with rich tomato stew and beef",
          price: "₦16,500",
          image: "https://via.placeholder.com/150x150/228B22/FFFFFF?text=White+Rice",
          category: "food"
        },
        {
          name: "Ofada Rice",
          description: "Traditional ofada rice with ayamase sauce and assorted meats",
          price: "₦23,500",
          image: "https://via.placeholder.com/150x150/8B4513/FFFFFF?text=Ofada+Rice",
          category: "food"
        },
        {
          name: "Native Rice",
          description: "Traditional native rice with palm oil and smoked fish",
          price: "₦20,200",
          image: "https://via.placeholder.com/150x150/FF8C00/FFFFFF?text=Native+Rice",
          category: "food"
        }
      ]
    },
    {
      subcategory: "Swallows",
      items: [
        {
          name: "Pounded Yam",
          description: "Smooth pounded yam served with choice of soup",
          price: "₦2,500 (per serving)",
          image: "https://via.placeholder.com/150x150/FFF8DC/FFFFFF?text=Pounded+Yam",
          category: "food"
        },
        {
          name: "Garri (Eba)",
          description: "Well-prepared garri served with choice of soup",
          price: "₦1,800 (per serving)",
          image: "https://via.placeholder.com/150x150/FFFACD/FFFFFF?text=Garri",
          category: "food"
        },
        {
          name: "Semovita",
          description: "Smooth semovita served with choice of soup",
          price: "₦2,200 (per serving)",
          image: "https://via.placeholder.com/150x150/F5DEB3/FFFFFF?text=Semovita",
          category: "food"
        },
        {
          name: "Wheat Meal",
          description: "Nutritious wheat meal served with choice of soup",
          price: "₦2,300 (per serving)",
          image: "https://via.placeholder.com/150x150/F5DEB3/FFFFFF?text=Wheat",
          category: "food"
        },
        {
          name: "Fufu",
          description: "Traditional fufu served with choice of soup",
          price: "₦2,000 (per serving)",
          image: "https://via.placeholder.com/150x150/DEB887/FFFFFF?text=Fufu",
          category: "food"
        },
        {
          name: "Amala",
          description: "Smooth amala served with choice of soup",
          price: "₦2,100 (per serving)",
          image: "https://via.placeholder.com/150x150/FFE4B5/FFFFFF?text=Amala",
          category: "food"
        }
      ]
    },
    {
      subcategory: "Grills",
      items: [
        {
          name: "Beef Suya",
          description: "Spicy grilled beef with suya spice and onions",
          price: "₦8,500",
          image: "https://via.placeholder.com/150x150/8B4513/FFFFFF?text=Suya",
          category: "food"
        },
        {
          name: "Grilled Chicken",
          description: "Perfectly grilled chicken with special marinade",
          price: "₦11,200",
          image: "https://via.placeholder.com/150x150/CD853F/FFFFFF?text=Chicken",
          category: "food"
        },
        {
          name: "Grilled Fish",
          description: "Fresh grilled tilapia with special spices",
          price: "₦19,500",
          image: "https://via.placeholder.com/150x150/FF6347/FFFFFF?text=Fish",
          category: "food"
        },
        {
          name: "Pepper Chicken",
          description: "Spicy grilled chicken with pepper sauce",
          price: "₦12,800",
          image: "https://via.placeholder.com/150x150/D2691E/FFFFFF?text=Pepper+Chicken",
          category: "food"
        },
        {
          name: "Grilled Goat Meat",
          description: "Tender grilled goat meat with special seasoning",
          price: "₦15,500",
          image: "https://via.placeholder.com/150x150/8B4513/FFFFFF?text=Goat+Meat",
          category: "food"
        },
        {
          name: "Grilled Gizzard",
          description: "Spicy grilled gizzard with onions and peppers",
          price: "₦9,800",
          image: "https://via.placeholder.com/150x150/FF8C00/FFFFFF?text=Gizzard",
          category: "food"
        }
      ]
    },
    {
      subcategory: "Continental Meals",
      items: [
        {
          name: "Beef Steak",
          description: "Premium beef steak with vegetables and sauce",
          price: "₦28,500",
          image: "https://via.placeholder.com/150x150/FFD700/FFFFFF?text=Beef+Steak",
          category: "food"
        },
        {
          name: "Fish Fillet",
          description: "Crispy fish fillet with chips and salad",
          price: "₦24,800",
          image: "https://via.placeholder.com/150x150/87CEEB/FFFFFF?text=Fish+Fillet",
          category: "food"
        },
        {
          name: "Chicken Parmesan",
          description: "Breaded chicken with marinara sauce and cheese",
          price: "₦26,200",
          image: "https://via.placeholder.com/150x150/FF6347/FFFFFF?text=Chicken+Parmesan",
          category: "food"
        },
        {
          name: "Spaghetti Bolognese",
          description: "Classic spaghetti with rich meat sauce",
          price: "₦22,500",
          image: "https://via.placeholder.com/150x150/DEB887/FFFFFF?text=Pasta",
          category: "food"
        },
        {
          name: "Caesar Salad",
          description: "Fresh romaine lettuce with caesar dressing",
          price: "₦15,800",
          image: "https://via.placeholder.com/150x150/32CD32/FFFFFF?text=Caesar+Salad",
          category: "food"
        },
        {
          name: "Beef Burger",
          description: "Juicy beef burger with fries and salad",
          price: "₦19,500",
          image: "https://via.placeholder.com/150x150/FF8C00/FFFFFF?text=Burger",
          category: "food"
        }
      ]
    },
    {
      subcategory: "Snacks",
      items: [
        {
          name: "Sausage Roll",
          description: "Freshly baked sausage roll with flaky pastry",
          price: "₦2,200",
          image: "https://via.placeholder.com/150x150/FFD700/FFFFFF?text=Sausage+Roll",
          category: "food"
        },
        {
          name: "Meat Pie",
          description: "Classic meat pie with seasoned minced meat",
          price: "₦2,500",
          image: "https://via.placeholder.com/150x150/FF6347/FFFFFF?text=Meat+Pie",
          category: "food"
        },
        {
          name: "Fish Roll",
          description: "Crispy fish roll with spiced fish filling",
          price: "₦1,800",
          image: "https://via.placeholder.com/150x150/32CD32/FFFFFF?text=Fish+Roll",
          category: "food"
        },
        {
          name: "Chicken Pie",
          description: "Delicious chicken pie with creamy filling",
          price: "₦2,800",
          image: "https://via.placeholder.com/150x150/8B4513/FFFFFF?text=Chicken+Pie",
          category: "food"
        },
        {
          name: "Egg Roll",
          description: "Soft egg roll with whole egg inside",
          price: "₦1,500",
          image: "https://via.placeholder.com/150x150/FFE4B5/FFFFFF?text=Egg+Roll",
          category: "food"
        },
        {
          name: "Donut",
          description: "Fresh glazed donut with various toppings",
          price: "₦1,200",
          image: "https://via.placeholder.com/150x150/DEB887/FFFFFF?text=Donut",
          category: "food"
        }
      ]
    },
    {
      subcategory: "Breakfast",
      items: [
        {
          name: "English Breakfast",
          description: "Full English breakfast with eggs, bacon, beans, and toast",
          price: "₦12,500",
          image: "https://via.placeholder.com/150x150/FFD700/FFFFFF?text=English+Breakfast",
          category: "food"
        },
        {
          name: "Pancakes",
          description: "Fluffy pancakes with syrup and butter",
          price: "₦6,800",
          image: "https://via.placeholder.com/150x150/FFE4B5/FFFFFF?text=Pancakes",
          category: "food"
        },
        {
          name: "French Toast",
          description: "Golden French toast with honey and fruits",
          price: "₦7,500",
          image: "https://via.placeholder.com/150x150/FFE4E1/FFFFFF?text=French+Toast",
          category: "food"
        },
        {
          name: "Vegetable Omelette",
          description: "Three-egg omelette with mixed vegetables",
          price: "₦5,200",
          image: "https://via.placeholder.com/150x150/FFF8DC/FFFFFF?text=Omelette",
          category: "food"
        },
        {
          name: "Akara & Pap",
          description: "Traditional bean cakes with pap (ogi)",
          price: "₦3,800",
          image: "https://via.placeholder.com/150x150/32CD32/FFFFFF?text=Akara",
          category: "food"
        },
        {
          name: "Moi Moi & Bread",
          description: "Steamed bean pudding with fresh bread",
          price: "₦4,500",
          image: "https://via.placeholder.com/150x150/8B4513/FFFFFF?text=Moi+Moi",
          category: "food"
        }
      ]
    }
  ],









  
  drinks: [
    {
      subcategory: "Wine",
      items: [
        {
          name: "House Red Wine",
          description: "Premium red wine by glass or bottle",
          price: "₦8,500 (glass) / ₦32,000 (bottle)",
          image: "https://via.placeholder.com/150x150/8B0000/FFFFFF?text=Red+Wine",
          category: "drinks"
        },
        {
          name: "House White Wine",
          description: "Crisp white wine by glass or bottle",
          price: "₦7,800 (glass) / ₦29,000 (bottle)",
          image: "https://via.placeholder.com/150x150/FFFACD/FFFFFF?text=White+Wine",
          category: "drinks"
        },
        {
          name: "Champagne",
          description: "Premium champagne for special occasions",
          price: "₦45,000 (bottle)",
          image: "https://via.placeholder.com/150x150/FFD700/FFFFFF?text=Champagne",
          category: "drinks"
        },
        {
          name: "Rose Wine",
          description: "Delicate rose wine by glass or bottle",
          price: "₦9,200 (glass) / ₦35,000 (bottle)",
          image: "https://via.placeholder.com/150x150/FF69B4/FFFFFF?text=Rose+Wine",
          category: "drinks"
        },
        {
          name: "Sparkling Wine",
          description: "Bubbly sparkling wine for celebrations",
          price: "₦18,500 (bottle)",
          image: "https://via.placeholder.com/150x150/4B0082/FFFFFF?text=Sparkling",
          category: "drinks"
        },
        {
          name: "Port Wine",
          description: "Rich port wine perfect for dessert",
          price: "₦12,000 (glass)",
          image: "https://via.placeholder.com/150x150/8B4513/FFFFFF?text=Port",
          category: "drinks"
        }
      ]
    },
    {
      subcategory: "Soft Drinks",
      items: [
        {
          name: "Coca Cola",
          description: "Classic Coca Cola (33cl or 50cl)",
          price: "₦1,200 (33cl) / ₦1,500 (50cl)",
          image: "https://via.placeholder.com/150x150/FF0000/FFFFFF?text=Coca+Cola",
          category: "drinks"
        },
        {
          name: "Fanta",
          description: "Refreshing Fanta orange (33cl or 50cl)",
          price: "₦1,200 (33cl) / ₦1,500 (50cl)",
          image: "https://via.placeholder.com/150x150/FFA500/FFFFFF?text=Fanta",
          category: "drinks"
        },
        {
          name: "Sprite",
          description: "Crisp Sprite lemon-lime (33cl or 50cl)",
          price: "₦1,200 (33cl) / ₦1,500 (50cl)",
          image: "https://via.placeholder.com/150x150/32CD32/FFFFFF?text=Sprite",
          category: "drinks"
        },
        {
          name: "Pepsi",
          description: "Pepsi cola drink (33cl or 50cl)",
          price: "₦1,100 (33cl) / ₦1,400 (50cl)",
          image: "https://via.placeholder.com/150x150/FF1493/FFFFFF?text=Pepsi",
          category: "drinks"
        },
        {
          name: "7UP",
          description: "7UP lemon-lime drink (33cl or 50cl)",
          price: "₦1,100 (33cl) / ₦1,400 (50cl)",
          image: "https://via.placeholder.com/150x150/8B4513/FFFFFF?text=7UP",
          category: "drinks"
        },
        {
          name: "Mirinda",
          description: "Mirinda orange drink (33cl or 50cl)",
          price: "₦1,000 (33cl) / ₦1,300 (50cl)",
          image: "https://via.placeholder.com/150x150/FF4500/FFFFFF?text=Mirinda",
          category: "drinks"
        }
      ]
    },
    {
      subcategory: "Fruit Drinks",
      items: [
        {
          name: "Fresh Orange Juice",
          description: "Freshly squeezed orange juice",
          price: "₦3,500",
          image: "https://via.placeholder.com/150x150/FF6347/FFFFFF?text=Orange+Juice",
          category: "drinks"
        },
        {
          name: "Pineapple Juice",
          description: "Fresh pineapple juice",
          price: "₦3,200",
          image: "https://via.placeholder.com/150x150/32CD32/FFFFFF?text=Pineapple+Juice",
          category: "drinks"
        },
        {
          name: "Watermelon Juice",
          description: "Refreshing watermelon juice",
          price: "₦3,000",
          image: "https://via.placeholder.com/150x150/FF1493/FFFFFF?text=Watermelon",
          category: "drinks"
        },
        {
          name: "Mango Juice",
          description: "Sweet mango juice",
          price: "₦3,300",
          image: "https://via.placeholder.com/150x150/8B4513/FFFFFF?text=Mango",
          category: "drinks"
        },
        {
          name: "Strawberry Juice",
          description: "Fresh strawberry juice",
          price: "₦4,200",
          image: "https://via.placeholder.com/150x150/FF69B4/FFFFFF?text=Strawberry",
          category: "drinks"
        },
        {
          name: "Mixed Fruit Juice",
          description: "Blend of fresh fruits",
          price: "₦3,800",
          image: "https://via.placeholder.com/150x150/9370DB/FFFFFF?text=Mixed+Fruit",
          category: "drinks"
        }
      ]
    },
    {
      subcategory: "Smoothies",
      items: [
        {
          name: "Banana Smoothie",
          description: "Creamy banana smoothie with milk",
          price: "₦4,500",
          image: "https://via.placeholder.com/150x150/8B4513/FFFFFF?text=Banana+Smoothie",
          category: "drinks"
        },
        {
          name: "Strawberry Smoothie",
          description: "Fresh strawberry smoothie",
          price: "₦5,200",
          image: "https://via.placeholder.com/150x150/FF6347/FFFFFF?text=Strawberry+Smoothie",
          category: "drinks"
        },
        {
          name: "Mango Smoothie",
          description: "Tropical mango smoothie",
          price: "₦4,800",
          image: "https://via.placeholder.com/150x150/32CD32/FFFFFF?text=Mango+Smoothie",
          category: "drinks"
        },
        {
          name: "Mixed Berry Smoothie",
          description: "Blend of strawberries, blueberries, and raspberries",
          price: "₦6,500",
          image: "https://via.placeholder.com/150x150/FF69B4/FFFFFF?text=Mixed+Berry",
          category: "drinks"
        },
        {
          name: "Green Smoothie",
          description: "Healthy blend of spinach, apple, and banana",
          price: "₦5,800",
          image: "https://via.placeholder.com/150x150/228B22/FFFFFF?text=Green+Smoothie",
          category: "drinks"
        },
        {
          name: "Tropical Smoothie",
          description: "Blend of pineapple, mango, and coconut",
          price: "₦6,200",
          image: "https://via.placeholder.com/150x150/FF8C00/FFFFFF?text=Tropical",
          category: "drinks"
        }
      ]
    },
    {
      subcategory: "Alcoholic Beverages",
      items: [
        {
          name: "Premium Whiskey",
          description: "Johnnie Walker Black Label or similar",
          price: "₦8,500 (shot)",
          image: "https://via.placeholder.com/150x150/8B4513/FFFFFF?text=Whiskey",
          category: "drinks"
        },
        {
          name: "Premium Vodka",
          description: "Absolut or similar premium vodka",
          price: "₦7,800 (shot)",
          image: "https://via.placeholder.com/150x150/4B0082/FFFFFF?text=Vodka",
          category: "drinks"
        },
        {
          name: "Captain Morgan Rum",
          description: "Spiced rum with mixer",
          price: "₦6,500 (shot)",
          image: "https://via.placeholder.com/150x150/8B0000/FFFFFF?text=Rum",
          category: "drinks"
        },
        {
          name: "Gordon's Gin",
          description: "Classic gin with tonic",
          price: "₦7,200 (shot)",
          image: "https://via.placeholder.com/150x150/228B22/FFFFFF?text=Gin",
          category: "drinks"
        },
        {
          name: "Jose Cuervo Tequila",
          description: "Premium tequila shots",
          price: "₦8,200 (shot)",
          image: "https://via.placeholder.com/150x150/FFD700/FFFFFF?text=Tequila",
          category: "drinks"
        },
        {
          name: "Hennessy VSOP",
          description: "Premium cognac brandy",
          price: "₦12,000 (shot)",
          image: "https://via.placeholder.com/150x150/8B4513/FFFFFF?text=Brandy",
          category: "drinks"
        }
      ]
    },
    {
      subcategory: "Water",
      items: [
        {
          name: "Eva Water",
          description: "Premium bottled water (50cl or 75cl)",
          price: "₦500 (50cl) / ₦700 (75cl)",
          image: "https://via.placeholder.com/150x150/87CEEB/FFFFFF?text=Eva+Water",
          category: "drinks"
        },
        {
          name: "Aquafina Water",
          description: "Purified bottled water (50cl or 75cl)",
          price: "₦400 (50cl) / ₦600 (75cl)",
          image: "https://via.placeholder.com/150x150/4169E1/FFFFFF?text=Aquafina",
          category: "drinks"
        },
        {
          name: "Nestle Pure Life",
          description: "Purified water (50cl or 75cl)",
          price: "₦450 (50cl) / ₦650 (75cl)",
          image: "https://via.placeholder.com/150x150/00BFFF/FFFFFF?text=Nestle",
          category: "drinks"
        },
        {
          name: "Spring Water",
          description: "Natural spring water (1 liter bottle)",
          price: "₦1,200",
          image: "https://via.placeholder.com/150x150/1E90FF/FFFFFF?text=Spring+Water",
          category: "drinks"
        },
        {
          name: "Sparkling Water",
          description: "Premium sparkling water",
          price: "₦2,500",
          image: "https://via.placeholder.com/150x150/4682B4/FFFFFF?text=Sparkling",
          category: "drinks"
        },
        {
          name: "Flavored Water",
          description: "Water with natural fruit flavors",
          price: "₦1,800",
          image: "https://via.placeholder.com/150x150/87CEEB/FFFFFF?text=Flavored",
          category: "drinks"
        }
      ]
    }
  ]
};
