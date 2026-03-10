export const menuData = {
  appetizers: {
    title: "Appetizers",
    description: "",
    items: [
      {
        num: 1,
        name: "Fresh Salad Rolls - Gỏi Cuốn",
        desc: "Rice paper rolled with vermicelli noodles, cilantro, basil, mint, red bell pepper, cucumber, carrots, lettuce served with peanut sauce (peanut sauce contains gluten) (fish sauce gluten free)",
        vegetarian: true,
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
        vegetarian: true,
        glutenFree: true,
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
        desc: "Crispy rolls with ground pork, mushrooms, shredded taro, onions, carrots served with sweet chilli sauce or fish sauce.",
        price: "5.95",
      },
      {
        num: 8,
        name: "Veggie Crispy Egg Rolls - Chả Giò Chay",
        desc: "Crispy rolls with tofu pork, mushrooms, shredded taro, onions, carrots served with sweet chilli sauce or fish sauce.",
        price: "5.95",
        vegetarian: true,
      },
      {
        num: 9,
        name: "Chicken Wings - Cánh Gà Chiên",
        desc: "Vietnamese style deep fried Chicken Wings marinated with a homemade sauce.",
        price: "11.95",
      },
      {
        num: 10,
        name: "Coconut Breaded Shrimp",
        desc: "Deep fried Coconut Breaded Shrimp and green onions.",
        price: "5.95",
      },
      {
        num: 11,
        name: "Pepper Salted Shrimp or Calamari",
        desc: "Crispy deep fried peppered salted shrimp and green onions.",
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
        desc: "Our French Fries are crispy and golden on the outside and fluffy on the isnde with zero grams of trans fat.",
        price: "4.95",
      },
      {
        num: 14,
        name: "Tempura Shrimp",
        desc: "Our Tempura battered shrimp are tasty and delicious, extra crunchy on the outside and tender on the inside with zero grams of trans fat.",
        price: "5.95",
      },
    ],
  },

  salads: {
    title: "Salads",
    description: "",
    items: [
      {
        num: 18,
        name: "Gỏi Bò - Beef Salad",
        desc: "Beef, lettuce ice berg, cilantro, basil, mint, red, yellow, orange bell pepper, cucumber, tomatoes, fried shallots, topped with roasted peanuts.",
        price: "13.95",
        glutenFree: true,
      },
      {
        num: 19,
        name: "Chicken Breast Salad",
        desc: "Finely shredded cabbage, chicken, cilantro, basil, carrot, fried shallots, topped with roasted peanuts.",
        price: "13.30",
        glutenFree: true,
      },
      {
        num: 20,
        name: "Garden Salad",
        desc: "Fresh lettue ice berg, red, yellow, orange bell pepper, tomatoes, cucumber, fresh advocado, boiled egg, seasoned crouton. Choice or chicken breast or Tofu or Pork or Beef. Choice of dressing: Ranch or Thousand Island or Italian olive garden or homemade sauce (homemade sauce contain gluten)",
        price: "13.50",
        vegetarian: true,
        glutenFree: true,
      },
      {
        num: 21,
        name: "Green Papaya Salad",
        desc: "Fine shredded green papaya, shrimp or tofu, or chicken, carrots, cilantro, basil, mint, tomatoes, red bell pepper , topped with fried shallots and roasted peanuts, served with sticky rice.",
        price: "13.95",
        vegetarian: true,
        glutenFree: true,
      },
    ],
  },

  pho: {
    title: "Phở - Beef Noodle Soups",
    description:
      "All Gluten Free. Served with rice noodles, fresh bean sprouts, basil leaves, onion, celery and a lime wedge, except for entrees with *. Add 2.00 for Large size, Add 4.00 for Supper Bowl Size, add 2.50 for extra vegetable or noodle, ad extra meat or meatball 4.00, add extra shrimp or Seafood 4.00",
    items: [
      { num: 27, name: "Phở Gân", desc: "Beef tendon", price: "15.50" },
      { num: 28, name: "Phở Tái", desc: "Beef round steak", price: "13.95" },
      {
        num: 29,
        name: "Phở Tái Gân",
        desc: "Beef round steak and beef tendon",
        price: "13.95",
      },
      {
        num: 30,
        name: "Phở Gia Special - Phở Đặc Biệt",
        desc: "Combination noodle soup, with beef round Steak, brisket, flank, tendon, shredded tripe, and beef meatballs.",
        price: "14.95",
      },
      {
        num: 31,
        name: "Phở Tái Nạm",
        desc: "Beef round steak and well done beef flank",
        price: "13.95",
      },
      {
        num: 32,
        name: "Phở Tái Sách",
        desc: "Beef round steak and beef tripe",
        price: "13.95",
      },
      {
        num: 33,
        name: "Phở Chín Nạm",
        desc: "Well-done beef brisket and beef flank",
        price: "13.95",
      },
      {
        num: 34,
        name: "Phở Gân Sách",
        desc: "Beef tendon and shredded tripe",
        price: "15.50",
      },
      {
        num: 35,
        name: "Phở Chín Bò Viên",
        desc: "Well-done brisket and meatballs",
        price: "13.95",
      },
      {
        num: 36,
        name: "Phở Hải Sản - Pho Seafood",
        desc: "Seafood noodle soup",
        price: "15.95",
      },
      {
        num: 37,
        name: "Phở Tái Chín",
        desc: "Beef round steak and well-done beef brisket",
        price: "13.95",
      },
      { num: 38, name: "Phở Bò Viên", desc: "Beef meatballs", price: "13.95" },
      {
        num: 39,
        name: "Phở Tái Bò Viên",
        desc: "Beef round steak and beef meatballs",
        price: "13.95",
      },
      {
        num: 40,
        name: "Phở Chín",
        desc: "Well-done beef brisket",
        price: "13.95",
      },
      {
        num: 41,
        name: "Phở Gà - Pho Chicken",
        desc: "Sliced chicken bread topped with fried shallots",
        price: "13.95",
      },
      {
        num: 42,
        name: "Phở Nạm Bò Viên",
        desc: "Well done beef flank and beef meatballs",
        price: "13.95",
      },
      {
        num: 43,
        name: "Phở Nạm Gân",
        desc: "Well done beef flank and beef tendon",
        price: "13.95",
      },
      {
        num: 44,
        name: "Phở Nạm",
        desc: "Well done beef flank",
        price: "13.95",
      },
      {
        num: 45,
        name: "Pho Veggie - Phở Chay",
        desc: "Vegatable broth with tofu, mushrooms, bell pepper, broccoli, zucchini, cabbage, carrot, celery, topped with fried shallots.",
        price: "13.95",
        vegetarian: true,
      },
      {
        num: 46,
        name: "Phở Tôm - Pho Shrimp",
        desc: "Shrimps, broccoli, zucchini, carrots and mushroom.",
        price: "15.95",
      },
      {
        num: 47,
        name: "Spicy Beef Noodle - Bún Bò Huế *",
        desc: "Round rice noodles, beef and meatball, cilantro, onion in a spicy lemongras beef broth. (Only one size)",
        price: "13.95",
      },
      {
        num: 48,
        name: "Chicken Glass Noodle Soup - Miến Gà *",
        desc: "Glass noodles, chicken breast, cilantro, onions, fried shallots with chicken broth. (Only one size)",
        price: "14.95",
      },
      {
        num: 49,
        name: "Bún Măng Gà - Chicken Bamboo Shoot Vermicelli *",
        desc: "Bamboo shoot, chicken, cilantro, onion, fried shallots with vermicelli rice noodle and chicken broth (Only one size)",
        price: "14.95",
      },
      {
        num: 50,
        name: "Tom Yum or Tom Kha Noodle Soup *",
        desc: "Spicy and sour lemongrass soup with rice noodle, galangal root, lime leaves, tomatoes, celery, shallots, and mushrooms. (Only one size) (Plesae mention with or without coconut milk)",
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "14.95" },
          { option: "Beef or Shrimp", price: "15.95" },
          { option: "Shrimp, Scallops, Mussel, Squid", price: "16.95" },
        ],
      },
      {
        num: 51,
        name: "Beef Stew *",
        desc: "Vietnamese flavor stewed beef with carrot, potato, serve with French bread or vermicelli noodle or rice",
        price: "14.95",
      },
    ],
  },

  eggNoodle: {
    title: "Egg Noodle Soups",
    description:
      "Served with egg noodles, fresh bean sprouts, basil leaves, onion, celery and a lime wedge, except for entrees with *. Add extra vegetable or noodle 2.50, Add extra meat or meatball 4.00, Add extra shrimp or Seafood 4.00",
    items: [
      {
        num: 56,
        name: "Udon Soup",
        desc: "Udon noodles with broccoli, carrot, mushroom, onions, cilantro and seaweed.",
        vegetarian: true,
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallop, Mussel, or Squid", price: "16.50" },
        ],
      },
      {
        num: 57,
        name: "Wonton Egg Noodles Soup - Mì Hoành Thánh",
        desc: "Egg noodles, shrimp, pork and pork wontons, baby bokchoy, cilantro, fried garlic and chives with pork broth.",
        price: "14.95",
      },
      {
        num: 58,
        name: "Wonton Soup (No Egg Noodles)",
        desc: "Pork and shrimp wontons, baby bokshoy, cilantro, fried garlic and chives with pork broth",
        price: "13.95",
      },
      {
        num: 59,
        name: "Special Egg Noodle Soup - Mì Đặc Biệt",
        desc: "Combination pork, shrimp and quail eggs, cilantro, onion, chives, celery, topped with fried shallots with pork broth.",
        price: "14.95",
      },
      {
        num: 60,
        name: "Seafood Rice Noodles or Egg Noodles Soup - Hủ Tiếu Hải Sản Đặc Biệt",
        desc: "Shrimps, scallops, sqiuid, mussel, and quail eggs, cilantro, onion, chives, celery, topped with fried shallots with pork broth.",
        price: "16.50",
        glutenFree: true,
      },
      {
        num: 61,
        name: "Tofu with Rice Noodle or Egg Noodles Soup",
        desc: "Tofu with rice noodles or egg noodles, cilantro, onion, chives, celery, topped with fried shallots with chicken or pork broth.",
        price: "13.95",
        vegetarian: true,
        glutenFree: true,
      },
      {
        num: 62,
        name: "Egg Noodle Chicken Breast Soup",
        desc: "Egg noodles, chicken breast, quail eggs, cilantro, onion, chives, celery, topped with fried shallots with chicken or pork broth.",
        price: "13.95",
      },
      {
        num: 63,
        name: "Ramen Noodle Soup",
        desc: "Ramen noodles, cilantro, onion, chives, celery, topped with fried shallots with chicken or pork broth.",
        vegetarian: true,
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallop, Mussel, Squid", price: "16.50" },
        ],
      },
      {
        num: 64,
        name: "Pasta Noodle",
        desc: "Italian pasta noodles, cilantro, onion, chives, celery, topped with fried shallots with chicken or pork broth.",
        vegetarian: true,
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
    description:
      "Bowl of Vermicelli rice noodles Served with Lettuce, bean sprouts, basil, mint, cilantro, cucumbers, fried fresh green onions, pickeled carrots and radish, fried shallots, roasted peanuts Add extra vegetable or noodle 2.50, Add extra meat or meatball 4.00, Add extra shrimp or Seafood 4.00",
    items: [
      {
        num: 70,
        name: "Grilled Pork",
        desc: "Bowl of vermicelli noodles with grilled marinated pork.",
        price: "13.95",
      },
      {
        num: 71,
        name: "Grilled Chicken",
        desc: "Bowl of vermicelli noodles with grilled marinated chicken.",
        price: "13.95",
      },
      {
        num: 72,
        name: "Grilled Shrimp",
        desc: "Bowl of vermicelli noodles with grilled marinated shrimp.",
        price: "14.95",
      },
      {
        num: 73,
        name: "Grilled Pork and Shrimp",
        desc: "Bowl of vermicelli noodles with grilled marinated pork and shrimp.",
        price: "14.95",
      },
      {
        num: 74,
        name: "Grilled Chicken and Shrimp",
        desc: "Bowl of vermicelli noodles with grilled marinated chicken and shrimp.",
        price: "14.95",
      },
      {
        num: 75,
        name: "Crispy Egg Rolls Noodles",
        desc: "Crispy egg rolls over vermicelli",
        price: "13.95",
      },
      {
        num: 76,
        name: "Crispy Vegetarian Egg Rolls",
        desc: "Bowl of vermicelli noodles with deep fried crispy vegetarian rolls.",
        price: "13.95",
        vegetarian: true,
      },
      {
        num: 77,
        name: "Grilled Pork or Chicken, Shrimp & Crispy Egg Roll Combo",
        desc: "Bowl of vermicelli noodles with choice of grilled marinated pork or chicken, shrimp and a deep fried crispy egg rolls.",
        price: "16.95",
      },
      {
        num: 78,
        name: "Garlic Tofu",
        desc: "Bowl of vermicelli noodles with stir fried tofu.",
        price: "13.95",
        vegetarian: true,
      },
      {
        num: 79,
        name: "Lemongrass Tofu",
        desc: "Bowl of vermicelli noodles with stir fried tofu.",
        price: "13.95",
        vegetarian: true,
      },
      {
        num: 80,
        name: "Lemongrass Chicken",
        desc: "Bowl of vermicelli noodles with stir fried with lemongrass chicken.",
        price: "13.95",
      },
      {
        num: 81,
        name: "Lemongrass Seafood",
        desc: "Bowl of vermicelli noodles with stir fried onions, shallots, lemongrass, Shrimp, scallop, mussel and squid.",
        price: "16.95",
      },
      {
        num: 82,
        name: "Lemongrass Beef",
        desc: "Bowl of vermicelli noodles with stir fried lemongrass beef.",
        price: "14.95",
      },
    ],
  },

  com: {
    title: "Cơm - Rice Entrees",
    description:
      "All Plates Served with steam white or brown rice or rice noodle and stir fried vegetables except for entrees with *. Add extra vegetable or noodle 2.50, Add extra meat or meatball 4.00, Add extra shrimp or Seafood 4.00",
    items: [
      {
        num: 89,
        name: "Special Rice Combo",
        desc: "Grilled marinated pork or chicken, shrimp, eggs with stir fried vegetables, topped with roated peanuts",
        price: "16.50",
      },
      {
        num: 90,
        name: "Fried Rice",
        desc: "Fried rice with chicken or pork, eggs, peas, corn, onions and carrots.",
        vegetarian: true,
        glutenFree: true,
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      {
        num: 91,
        name: "Pineapple Fried Rice *",
        desc: "Fried rice with egg, pineapple, onion and basil leaf.",
        vegetarian: true,
        glutenFree: true,
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      {
        num: 92,
        name: "Vegetables with Chicken or Tofu",
        desc: "Fresh Stir fried vegetables, tossed in a homemade sauce.",
        price: "13.95",
      },
      {
        num: 93,
        name: "Grilled Pork or Chicken",
        desc: "Grilled marinated pork or chicken with mized stir fried vegetables, topped with roasted peanuts.",
        price: "13.95",
      },
      {
        num: 94,
        name: "Grilled Pork or Chicken and Shrimp",
        desc: "Grilled marinated pork or chicken and shrimp with mized stir fried vegetables, topped with roasted peanuts.",
        price: "14.95",
      },
      {
        num: 95,
        name: "Teriyaki Chicken",
        desc: "Grilled marinated chicken and fresh steam mixed vegetables, topped with roasted sesame.",
        price: "13.95",
      },
      {
        num: 96,
        name: "Chicken Satay *",
        desc: "Stir fried marinated chicken in curry sauce with carrots and onions.",
        price: "13.95",
      },
      {
        num: 97,
        name: "Ginger Chicken or Tofu",
        desc: "Stir fried chicken or tofu with ginger sauce with mixed vegetables",
        price: "13.95",
        vegetarian: true,
      },
      {
        num: 98,
        name: "Lemongrass Chicken or Tofu",
        desc: "Marinated chicken or deep fried tofu stir fried with lemongrass and mixed vegetables",
        price: "13.95",
        vegetarian: true,
      },
      {
        num: 99,
        name: "Wok Broccoli Chicken or Tofu",
        desc: "Stir fried chicken or tofu broccoli in garlix sauce.",
        vegetarian: true,
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      {
        num: 100,
        name: "Orange Chicken",
        desc: "Deep fried marinated flour chicken topped with ornage homemade sauce.",
        price: "13.95",
      },
    ],
  },

  beef: {
    title: "Beef Entrees",
    description:
      "All Plates Served with steam white or brown rice or rice noodle and stir fried vegetables except for entrees with *. Add extra vegetable or noodle 2.50, Add extra meat or meatball 4.00, Add extra shrimp or Seafood 4.00",
    items: [
      {
        num: 108,
        name: "Beef Saute",
        desc: "Stir fried with mixed vegetables in homemade sauce.",
        price: "14.95",
      },
      {
        num: 109,
        name: "Chinese Broccoli *",
        desc: "Stir fried wit Chinese broccoli, garlic or ginger in special homemade sauce. (please mention with garlic or ginger)",
        vegetarian: true,
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      {
        num: 110,
        name: "Ginger Beef",
        desc: "Stir fried with mixed vegetable in ginger sauce",
        price: "14.95",
      },
      {
        num: 111,
        name: "Garlic Beef",
        desc: "Stir fried with mixed vegetable in garlic sauce",
        price: "14.95",
      },
      {
        num: 112,
        name: "Lemongrass Beef",
        desc: "Stir fried with lemongrass and mix vegetables in special homemade sauce.",
        price: "14.95",
      },
      {
        num: 113,
        name: "Green Bean *",
        desc: "Stir fried with gren bean, garlic in homemade sauce.",
        vegetarian: true,
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      {
        num: 114,
        name: "Luc Lac Beef *",
        desc: "Cubed beef tenderloins tossed with garlic, onions, bell peppers in special homemade sauce.",
        price: "14.95",
      },
      {
        num: 115,
        name: "Pineapple Beef *",
        desc: "Stir fried with pineapple, garlic in special homemade sauce.",
        price: "14.95",
      },
    ],
  },

  houseSpecialties: {
    title: "House Specialties",
    description:
      "All Plates Served with steam white or brown rice or rice noodle and stir fried vegetables except for entrees with *. Add extra vegetable or noodle 2.50, Add extra meat or meatball 4.00, Add extra shrimp or Seafood 4.00",
    items: [
      {
        num: 122,
        name: "Curry Chicken",
        desc: "Yellow, red, or green curry with potatoes and mixed vegetables",
        vegetarian: true,
        glutenFree: true,
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      {
        num: 123,
        name: "Vietnamese Crepes - Bánh Xèo",
        desc: "Vietnamese crispy crepe with shrimp and pork or chicken or tofu, bean sprouts, lettuce, mint, mung bean and a side of house fish sauce.",
        price: "15.50",
        vegetarian: true,
      },
      {
        num: 124,
        name: "New York Steak",
        desc: "Grilled steak marinated with garlic and ginger served with stir fried vegetables. (Steam vegetable options for without gluten)",
        price: "16.50",
      },
      {
        num: 125,
        name: "Pepper Salted Calamari *",
        desc: "Crispy deep fried pepper salted calimari with onions.",
        price: "14.50",
      },
      {
        num: 126,
        name: "Pepper Salted Shrimp *",
        desc: "Crispy deep fried pepper salted Shrimp with onions.",
        price: "14.50",
      },
      {
        num: 127,
        name: "Grilled Wild Caught Salmon",
        desc: "Grilled salmon with fresh stir fried mixed vegetables.",
        price: "15.50",
        glutenFree: true,
      },
      {
        num: 128,
        name: "Grilled Wild Caught Salmon in Banana Leaf",
        desc: "Grilled salmon wrap in banana leaf for tender and juicy entree with stir fried mixed vegetables.",
        price: "16.50",
        glutenFree: true,
      },
      {
        num: 129,
        name: "Eggplant *",
        desc: "Stir fried with Eggplant, red onion and garlic.",
        vegetarian: true,
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      {
        num: 130,
        name: "Sweet Potato Noodles",
        desc: "Japanese sweet potato noodles stir fried with mixed vegetables and toped with roasted sesame.",
        vegetarian: true,
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      {
        num: 131,
        name: "Yaki Udon *",
        desc: "Japanese Udon noodles stir fried with mixed vegetables and toped with roasted sesame.",
        vegetarian: true,
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      {
        num: 132,
        name: "Yaki Soba *",
        desc: "Japanese Soba noodles stir fried with mixed vegetables and toped with roasted sesame.",
        vegetarian: true,
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      {
        num: 133,
        name: "Pad Thai * ",
        desc: "(Make with or without peanut sauce) Thick rice noodles with eggs, bean sprouts, green onions, garlic, and ground peanuts.",
        vegetarian: true,
        glutenFree: true,
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      {
        num: 134,
        name: "Pad Kee Mao (Drunken Noodles) *",
        desc: "Wide rice noodles with egg and stir fried mixed vegetables.",
        vegetarian: true,
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
      {
        num: 135,
        name: "Chow Main Stir Fried or Crispy Noodles",
        desc: "Skinny egg noodles stir fried with fresh vegetables.",
        vegetarian: true,
        variants: [
          { option: "Chicken, Pork, or Tofu", price: "13.95" },
          { option: "Beef or Shrimp", price: "14.95" },
          { option: "Shrimp, Scallops, Mussels, Squid", price: "16.95" },
        ],
      },
    ],
  },

  drinks: {
    title: "Drinks - Nước Uống",
    description:
      "Smooothies, Thai Ice Tea and Boba Tea, Milk Tea contains dairy (Nondairy upon available)",
    items: [
      {
        num: 142,
        name: "Hot or Cold Organic Cafe Vietnam",
        desc: "Vietnamese Espresso Coffee with Condensed Milk",
        price: "4.95",
      },
      {
        num: 143,
        name: "Thai Ice Tea",
        desc: "",
        price: "4.50",
      },
      {
        num: 144,
        name: "Organic Real Fruit Smoothies",
        desc: "(Avocado, Mango, Blueberry, Strawberry, or Four berry blend)",
        price: "6.00",
      },
      {
        num: 145,
        name: "Smoothies, Boba Teas, Milk Teas",
        desc: "Available with tapioca Pearls or Crystal Boba",
        price: "4.95",
        noLetterPrefix: true,
        variants: [
          {
            option:
              "Jellies: Coconut, Rainbow, Peach, Mango, Honeydew, Strawberry",
          },
          { option: "Popping Tapioca:" },
          {
            option:
              "Green Apple, Blueberry, Peach, Strawberry, Mango, Lychee, Pomegranate, Cherry, Kiwi",
          },
          {
            option: "Flavors Selection for Smoothies and Boba Tea:",
          },
          {
            option:
              "Banana, Blue berry, Coffee, Coconut, Chocolate, Thai Tea, Mango, Pineapple, Strawberry, Lavendar, Rasberry, Passion, Vanilla, Cantaloupe, Green Apple, Taro, Almond, Green Tea, Peach, Lychee, Red Bean, Honeydew, Mocha, Kiwi, gren tea, Vanilla, Watermelon, Cherry, Papaya.",
          },
          { option: "Milk Teas" },
          {
            option:
              "Banana, Black Tea, Coconut, Honeydew, Lavendar, Mango, Green Tea, Peach, Rose, Strawberry, Taro, Thai Tea, Toffee, Vanilla, or Cherry.",
          },
          {
            option: "Additoinal Tapioca or Crystal or Rainbow Jellies",
            price: ".75",
          },
        ],
      },
      {
        num: 146,
        name: "Fresh Whole Coconut",
        desc: "",
        price: "5.95",
      },
      {
        num: 147,
        name: "Fresh Lemonade",
        desc: "",
        price: "3.50",
      },
      {
        num: 148,
        name: "Soft Drinks",
        desc: "Coke Coke Zero, Cherry Coke, Diet Coke, Sprite, Root Beer, Fanta Orange, Dr. Peper. Soda, Shirley Temple, Roy Rodgers.",
        price: "3.50",
      },
      {
        num: 149,
        name: "Ice Tea",
        desc: "",
        price: "2.00",
      },
      {
        num: 150,
        name: "Cappuccino",
        desc: "",
        price: "3.75",
      },
      {
        num: 151,
        name: "Hot Chocolate Cocoa or Milk Chocolate",
        desc: "",
        price: "3.00",
      },
      {
        num: 152,
        name: "Hot Tea",
        desc: "Green Tea, Oolong Tea, Jasmine, Orange Spice, Englush breakfast, Chai Spice black tea, Guava. Caffeine free: Lemon Ginger, peppermint, chamonille, Decaf green tea.",
        price: "1.00",
      },
      {
        num: 153,
        name: "Beer",
        desc: "Sai Gon Export, Tiger Tsingtao, Sapporo, Singha, White Claw Hard Seltzer, Hefeweizen, Mirror Pond, Black Butte Porter, Blue Moon, Ginger Beer, Stella Artois, Budweiser, Coors Light, Corona, IPA Ninkasi, IPA Fresh Squeezed, None Alcohol Beer",
        price: "4.50",
      },
      {
        num: 154,
        name: "Soju from Korea Original",
        desc: "Strawberry or Peach or Mango or Pineapple, or Lechee, or Yogurt",
        price: "6.95",
      },
      {
        num: 155,
        name: "Cold Sake (Coconut Lemongrass Nigori)",
        desc: "",
        price: "6.95",
      },
      {
        num: 156,
        name: "Cold Sake (Kurosawa Nigori - Fruity, Creamy Sweet)",
        desc: "",
        price: "6.95",
      },
      {
        num: 157,
        name: "Cold Sake (Sayuri Nigori - unfiltered)",
        desc: "",
        price: "6.95",
      },
      {
        num: 158,
        name: "Cold Sake (Superior Junnmai Gingo)",
        desc: "",
        price: "6.95",
      },
      {
        num: 159,
        name: "Warm Sake (serve in Bottle)",
        desc: "",
        price: "6.95",
      },
      {
        num: 160,
        name: "Cocktail General",
        desc: "",
        price: "6.00",
      },
      {
        num: 161,
        name: "Double Cocktail",
        desc: "",
        price: "10.00",
      },
      {
        num: 162,
        name: "Cocktail Special",
        desc: "",
        price: "8.50",
      },
      {
        num: 163,
        name: "Wine",
        desc: "Wine",
        price: "5.50",
        noLetterPrefix: true,
        variants: [
          {
            option: "Red Wine (Merlot or Cabernet)",
          },
          {
            option:
              "White Wine (Charonnay, Riesling, Sauvignon Blanc, Choya Plum Wine, Pinot Grigio",
          },
        ],
      },
    ],
  },

  desserts: {
    title: "Desserts",
    description: "",
    items: [
      {
        num: 164,
        name: "Organic Ice Cream",
        desc: "French Vanilla or Chocolate or Strawberry.",
        price: "2.95",
      },
      {
        num: 165,
        name: "Flan",
        desc: "",
        price: "4.95",
      },
      {
        num: 166,
        name: "Cheesecake or Tiramisu Sponge Cake",
        desc: "Strawberry or LEmon or New York Style",
        price: "3.95",
      },
      {
        num: 167,
        name: "Sweet Sticky Rice with Mango or Avocado",
        desc: "Deliciously sweet rice and mango",
        price: "5.95",
      },
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
