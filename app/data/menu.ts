export const menuData = {
  appetizers: {
    title: "Appetizers",
    description: "Start your meal with our traditional Vietnamese appetizers",
    items: [
      {
        num: 1,
        name: "Fresh Salad Rolls - Gỏi Cuốn",
        desc: "Rice paper rolled with vermicelli noodles, cilantro, basil, mint, red bell pepper, cucumber, carrots, lettuce served with peanut sauce (peanut sauce contains gluten) (fish sauce gluten free)",
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "6.95" },
          { option: "Beef, Shrimp, or Avocado", price: "6.95" },
          { option: "Shrimp & Pork or Chicken", price: "8.50" },
          { option: "Shrimp, Pork & Chicken", price: "9.50" },
        ],
      },
      {
        num: 2,
        name: "Crab Puffs",
        desc: "Wonton Skin wrapped with imitation crab meat, cream cheese, served with Chili sauce.",
        price: "5.95",
      },
      {
        num: 3,
        name: "Pot Sticker (deep fried or steam)",
        desc: "Deep fried wonton skin wrapped with vegetables and pork meat",
        price: "12.95",
      },
      {
        num: 4,
        name: "Deep fried tofu",
        desc: "Deep fried tofu with soy sauce. (soy sauce contains gluten) (sweet chilli sauce contains no gluten)",
        price: "5.95",
      },
      {
        num: 5,
        name: "Chicken Satay",
        desc: "Marinated grilled Chicken in served with peanut sauce.",
        price: "7.50",
      },
      {
        num: 6,
        name: "Chicken Nuggets",
        desc: "Deep fried battered chicken.",
        price: "5.95",
      },
      {
        num: 7,
        name: "Crispy Egg Rolls - Chả Giò",
        desc: "Crispy fried egg rolls",
        price: "5.95",
      },
      {
        num: 8,
        name: "Veggie Crispy Egg Rolls - Chả Giò Chay",
        desc: "Crispy fried vegetable egg rolls",
        price: "5.95",
      },
      {
        num: 9,
        name: "Chicken Wings - Cánh Gà Chiên",
        desc: "Fried chicken wings",
        price: "11.95",
      },
      {
        num: 10,
        name: "Coconut Breaded Chicken",
        desc: "Coconut breaded fried chicken",
        price: "5.95",
      },
      {
        num: 11,
        name: "Pepper Salted Shrimp or Calamari",
        desc: "Crispy fried shrimp or calamari with pepper salt",
        price: "9.95",
      },
      {
        num: 12,
        name: "Battered Cod Fish Fillets",
        desc: "Deep fried battered cod fish fillets",
        price: "6.95",
      },
      {
        num: 13,
        name: "French Fries",
        desc: "Crispy fried potatoes",
        price: "4.95",
      },
      {
        num: 14,
        name: "Tempura Shrimp",
        desc: "Lightly battered fried shrimp",
        price: "5.95",
      },
    ],
  },

  salads: {
    title: "Salads",
    description: "Fresh Vietnamese salads with house-made dressing",
    items: [
      {
        num: 15,
        name: "Gỏi Bò - Beef Salad",
        desc: "Beef salad with lemongrass & onions",
        price: "13.95",
      },
      {
        num: 16,
        name: "Chicken Breast Salad",
        desc: "Grilled chicken breast salad",
        price: "13.30",
      },
      {
        num: 17,
        name: "Garden Salad",
        desc: "Vegetarian salad with tofu & fresh herbs",
        price: "13.50",
      },
      {
        num: 18,
        name: "Green Papaya Salad",
        desc: "Shrimp salad with herbs & pickled vegetables",
        price: "13.95",
      },
    ],
  },

  pho: {
    title: "Phở - Beef Noodle Soups",
    description:
      "Traditional Vietnamese noodle soup with 12-hour simmered broth",
    items: [
      { num: 19, name: "Phở Gân", desc: "Beef tendon", price: "15.50" },
      { num: 20, name: "Phở Tái", desc: "Beef round steak", price: "13.95" },
      {
        num: 21,
        name: "Phở Tái Gân",
        desc: "Beef round steak and beef tendon",
        price: "13.95",
      },
      {
        num: 22,
        name: "Phở Gia Special - Phở Đặc Biệt",
        desc: "Combination noodle soup",
        price: "14.95",
      },
      {
        num: 23,
        name: "Phở Tái Nạm",
        desc: "Beef round steak and flank",
        price: "13.95",
      },
      {
        num: 24,
        name: "Phở Tái Sách",
        desc: "Beef round steak and tripe",
        price: "13.95",
      },
      {
        num: 25,
        name: "Phở Chín Nạm",
        desc: "Well-done brisket and flank",
        price: "13.95",
      },
      { num: 26, name: "Phở Gân Sách", desc: "Beef tendon and tripe", price: "15.50" },
      {
        num: 27,
        name: "Phở Chín Bò Viên",
        desc: "Well-done brisket and meatballs",
        price: "13.95",
      },
      {
        num: 28,
        name: "Phở Hải Sản - Pho Seafood",
        desc: "Seafood noodle soup",
        price: "15.95",
      },
      {
        num: 29,
        name: "Phở Tái Chín",
        desc: "Beef round steak and well-done brisket",
        price: "13.95",
      },
      { num: 30, name: "Phở Bò Viên", desc: "Beef meatballs", price: "13.95" },
      {
        num: 31,
        name: "Phở Tái Bò Viên",
        desc: "Beef round steak and meatballs",
        price: "13.95",
      },
      { num: 32, name: "Phở Chín", desc: "Well-done brisket", price: "13.95" },
      {
        num: 33,
        name: "Phở Gà - Pho Chicken",
        desc: "Chicken noodle soup",
        price: "13.95",
      },
      { num: 34, name: "Phở Nạm Bò Viên", desc: "Flank and meatballs", price: "13.95" },
      { num: 35, name: "Phở Nạm Gân", desc: "Flank and tendon", price: "13.95" },
      { num: 36, name: "Phở Nạm", desc: "Flank", price: "13.95" },
      { num: 37, name: "Phở Chay - Pho Veggie", desc: "Vegetable pho", price: "13.95" },
      {
        num: 38,
        name: "Phở Tôm - Pho Shrimp",
        desc: "Shrimp noodle soup",
        price: "15.95",
      },
      {
        num: 39,
        name: "Bún Bò Huế - Spicy Beef Noodle",
        desc: "Spicy beef noodle soup",
        price: "13.95",
      },
      {
        num: 40,
        name: "Miến Gà - Chicken Glass Noodle Soup",
        desc: "Chicken glass noodle soup",
        price: "14.95",
      },
      {
        num: 41,
        name: "Bún Măng Gà - Chicken Bamboo Shoot Vermicelli",
        desc: "Chicken bamboo shoot vermicelli noodle soup",
        price: "14.95",
      },
      {
        num: 42,
        name: "Tom Yum or Tom Kha Noodle Soup",
        desc: "Thai-style noodle soup",
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "14.95" },
          { option: "Beef or Shrimp", price: "15.95" },
          { option: "Shrimp, Scallops, Mussel, Squid", price: "16.95" },
        ],
      },
      { num: 43, name: "Beef Stew", desc: "Vietnamese beef stew", price: "14.95" },
    ],
  },

  eggNoodle: {
    title: "Egg Noodle Soups",
    description: "Rich and savory egg noodle soup dishes",
    items: [
      {
        num: 44,
        name: "Udon Soup",
        desc: "Japanese-style udon noodle soup",
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallop, Mussel, or Squid", price: "16.50" },
        ],
      },
      {
        num: 45,
        name: "Wonton Egg Noodles Soup - Mì Hoành Thánh",
        desc: "Egg noodle soup with wontons",
        price: "14.95",
      },
      {
        num: 46,
        name: "Wonton Soup (No Egg Noodles)",
        desc: "Wonton soup without noodles",
        price: "13.95",
      },
      {
        num: 47,
        name: "Special Egg Noodle Soup - Mì Đặc Biệt",
        desc: "House special egg noodle soup",
        price: "14.95",
      },
      {
        num: 48,
        name: "Seafood Rice Noodles or Egg Noodles Soup - Hủ Tiếu Hải Sản Đặc Biệt",
        desc: "Seafood noodle soup",
        price: "16.50",
      },
      {
        num: 49,
        name: "Tofu with Rice Noodle or Egg Noodles Soup",
        desc: "Tofu noodle soup",
        price: "13.95",
      },
      {
        num: 50,
        name: "Egg Noodle Chicken Breast Soup",
        desc: "Egg noodle soup with chicken breast",
        price: "13.95",
      },
      {
        num: 51,
        name: "Ramen Noodle Soup",
        desc: "Japanese-style ramen noodle soup",
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallop, Mussel, Squid", price: "16.50" },
        ],
      },
      {
        num: 52,
        name: "Pasta Noodle Soup",
        desc: "Pasta noodle soup",
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallop, Mussel, Squid", price: "16.50" },
        ],
      },
    ],
  },

  bun: {
    title: "Bún - Vermicelli Noodles",
    description: "Rice vermicelli with fresh vegetables and fish sauce",
    items: [
      { num: 53, name: "Grilled Pork", desc: "Grilled pork over vermicelli", price: "13.95" },
      { num: 54, name: "Grilled Chicken", desc: "Grilled chicken over vermicelli", price: "13.95" },
      { num: 55, name: "Grilled Shrimp", desc: "Grilled shrimp over vermicelli", price: "14.95" },
      { num: 56, name: "Grilled Pork and Shrimp", desc: "Grilled pork and shrimp over vermicelli", price: "14.95" },
      { num: 57, name: "Grilled Chicken and Shrimp", desc: "Grilled chicken and shrimp over vermicelli", price: "14.95" },
      { num: 58, name: "Crispy Egg Rolls Noodles", desc: "Crispy egg rolls over vermicelli", price: "13.95" },
      { num: 59, name: "Crispy Vegetarian Egg Rolls", desc: "Crispy vegetarian egg rolls over vermicelli", price: "13.95" },
      { num: 60, name: "Grilled Pork or Chicken, Shrimp & Crispy Egg Roll Combo", desc: "Combination vermicelli bowl", price: "16.95" },
      { num: 61, name: "Garlic Tofu", desc: "Garlic tofu over vermicelli", price: "13.95" },
      { num: 62, name: "Lemongrass Tofu", desc: "Lemongrass tofu over vermicelli", price: "13.95" },
      { num: 63, name: "Lemongrass Chicken", desc: "Lemongrass chicken over vermicelli", price: "13.95" },
      { num: 64, name: "Lemongrass Seafood", desc: "Lemongrass seafood over vermicelli", price: "16.95" },
      { num: 65, name: "Lemongrass Beef", desc: "Lemongrass beef over vermicelli", price: "14.95" },
    ],
  },

  com: {
    title: "Cơm - Rice Entrees",
    description: "Served with steamed jasmine rice and vegetables",
    items: [
      { num: 66, name: "Special Rice Combo", desc: "House special rice combination", price: "16.50" },
      {
        num: 67,
        name: "Fried Rice",
        desc: "Vietnamese fried rice",
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      {
        num: 68,
        name: "Pineapple Fried Rice",
        desc: "Fried rice with pineapple",
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      { num: 69, name: "Vegetables with Chicken or Tofu", desc: "Stir-fried vegetables with chicken or tofu", price: "13.95" },
      { num: 70, name: "Grilled Pork or Chicken", desc: "Grilled pork or chicken with rice", price: "13.95" },
      { num: 71, name: "Grilled Pork or Chicken and Shrimp", desc: "Grilled pork or chicken and shrimp with rice", price: "14.95" },
      { num: 72, name: "Teriyaki Chicken", desc: "Teriyaki glazed chicken with rice", price: "13.95" },
      { num: 73, name: "Chicken Satay", desc: "Grilled chicken satay with peanut sauce", price: "13.95" },
      { num: 74, name: "Ginger Chicken or Tofu", desc: "Ginger chicken or tofu with rice", price: "13.95" },
      { num: 75, name: "Lemongrass Chicken or Tofu", desc: "Lemongrass chicken or tofu with rice", price: "13.95" },
      {
        num: 76,
        name: "Wok Broccoli Chicken or Tofu",
        desc: "Wok-fried broccoli with chicken or tofu",
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      { num: 77, name: "Orange Chicken", desc: "Crispy orange chicken with rice", price: "13.95" },
    ],
  },

  beef: {
    title: "Beef Entrees",
    description: "Premium beef dishes wok-fired to perfection",
    items: [
      { num: 78, name: "Beef Saute", desc: "Sauteed beef with vegetables", price: "14.95" },
      {
        num: 79,
        name: "Chinese Broccoli",
        desc: "Wok-fried Chinese broccoli",
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      { num: 80, name: "Ginger Beef", desc: "Beef stir-fried with ginger", price: "14.95" },
      { num: 81, name: "Garlic Beef", desc: "Beef stir-fried with garlic", price: "14.95" },
      { num: 82, name: "Lemongrass Beef", desc: "Beef stir-fried with lemongrass", price: "14.95" },
      {
        num: 83,
        name: "Green Bean",
        desc: "Wok-fried green beans",
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      { num: 84, name: "Luc Lac Beef", desc: "Shaking beef with garlic & pepper", price: "14.95" },
      { num: 85, name: "Pineapple Beef", desc: "Beef stir-fried with pineapple", price: "14.95" },
    ],
  },

  houseSpecialties: {
    title: "House Specialties",
    description: "Chef's signature dishes and family recipes",
    items: [
      {
        num: 86,
        name: "Hủ Tiếu Nam Vang",
        desc: "Clear pork broth with seafood noodles",
        price: "15.95",
      },
      {
        num: 87,
        name: "Cá Kho Tộ",
        desc: "Caramelized fish in clay pot",
        price: "16.95",
      },
      { num: 88, name: "Tôm Rang Muối", desc: "Salt & pepper shrimp", price: "17.95" },
      {
        num: 89,
        name: "Gà Xào Sả Ớt",
        desc: "Lemongrass chili chicken",
        price: "15.95",
      },
      {
        num: 90,
        name: "Sườn Nướng",
        desc: "Grilled pork ribs with lemongrass",
        price: "17.95",
      },
      { num: 91, name: "Cà Ri Gà", desc: "Vietnamese chicken curry", price: "15.95" },
    ],
  },

  drinks: {
    title: "Drinks",
    description: "Traditional Vietnamese beverages",
    items: [
      { num: 92, name: "Cà Phê Sữa Đá", desc: "Vietnamese iced coffee", price: "5.50" },
      { num: 93, name: "Cà Phê Đen Đá", desc: "Black iced coffee", price: "4.50" },
      { num: 94, name: "Trà Đá", desc: "Vietnamese iced tea", price: "2.50" },
      { num: 95, name: "Sinh Tố Bơ", desc: "Avocado smoothie", price: "6.50" },
      { num: 96, name: "Nước Mía", desc: "Fresh sugarcane juice", price: "5.50" },
      { num: 97, name: "Chanh Muối", desc: "Salted lemonade", price: "4.50" },
    ],
  },

  desserts: {
    title: "Desserts",
    description: "Sweet treats to finish your meal",
    items: [
      {
        num: 98,
        name: "Chè Ba Màu",
        desc: "Three-color dessert with beans & coconut",
        price: "5.95",
      },
      {
        num: 99,
        name: "Chè Chuối",
        desc: "Banana & tapioca in coconut milk",
        price: "5.95",
      },
      { num: 100, name: "Bánh Flan", desc: "Vietnamese caramel custard", price: "4.95" },
      { num: 101, name: "Kem Dừa", desc: "Coconut ice cream", price: "4.95" },
    ],
  },
};

export const filters = [
  { key: "all", label: "All" },
  { key: "appetizers", label: "Appetizers" },
  { key: "salads", label: "Salads" },
  { key: "pho", label: "Phở - Beef Noodle Soups" },
  { key: "eggNoodle", label: "Egg Noodle Soups" },
  { key: "bun", label: "Bún - Vermicelli Noodles" },
  { key: "com", label: "Cơm - Rice Entrees" },
  { key: "beef", label: "Beef Entrees" },
  { key: "houseSpecialties", label: "House Specialties" },
  { key: "drinks", label: "Drinks" },
  { key: "desserts", label: "Desserts" },
];
