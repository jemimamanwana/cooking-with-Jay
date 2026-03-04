document.addEventListener('DOMContentLoaded', function() {
    // Recipe data with real food images
    const recipes = [
        {
            id: 1,
            title: "Classic Margherita Pizza",
            image: "pizza2.jpg",
            time: 45,
            difficulty: "medium",
            cuisine: "italian",
            category: "main-courses",
            dietary: "vegetarian",
            description: "The classic Neapolitan pizza topped with tomato sauce, fresh mozzarella, and basil leaves. Simple yet incredibly flavorful.",
            ingredients: ["Pizza dough", "San Marzano tomato sauce", "Fresh mozzarella", "Fresh basil leaves", "Extra virgin olive oil", "Sea salt"],
            instructions: [
                "Preheat oven to 475°F (245°C) with a pizza stone inside",
                "Roll out the dough on a floured surface into a 12-inch circle",
                "Spread tomato sauce evenly, leaving a 1-inch border",
                "Tear mozzarella and distribute across the pizza",
                "Bake for 10-12 minutes until crust is golden and cheese is bubbly",
                "Add fresh basil leaves and drizzle with olive oil before serving"
            ],
            rating: 4.5,
            reviews: 128,
            saved: false
        },
        {
            id: 2,
            title: "Spicy Thai Green Curry",
            image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop",
            time: 40,
            difficulty: "medium",
            cuisine: "thai",
            category: "main-courses",
            dietary: "gluten-free",
            description: "Aromatic Thai green curry with coconut milk, fresh vegetables, and tender chicken. A perfect balance of spicy, sweet, and savory flavors.",
            ingredients: ["Green curry paste", "Coconut milk", "Chicken breast", "Thai eggplant", "Bamboo shoots", "Thai basil", "Fish sauce", "Palm sugar"],
            instructions: [
                "Heat oil in a wok and fry curry paste until fragrant",
                "Add coconut cream and stir until oil separates",
                "Add sliced chicken and cook until no longer pink",
                "Pour in remaining coconut milk and bring to a simmer",
                "Add vegetables and simmer until tender",
                "Season with fish sauce and sugar, garnish with Thai basil"
            ],
            rating: 4.6,
            reviews: 95,
            saved: false
        },
        {
            id: 3,
            title: "Avocado Toast with Poached Eggs",
            image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop",
            time: 15,
            difficulty: "easy",
            cuisine: "american",
            category: "appetizers",
            dietary: "vegetarian",
            description: "Creamy avocado on toasted sourdough topped with perfectly poached eggs, microgreens, and a sprinkle of everything bagel seasoning.",
            ingredients: ["Sourdough bread", "Ripe avocados", "Fresh eggs", "Lemon juice", "Red pepper flakes", "Everything bagel seasoning", "Microgreens"],
            instructions: [
                "Toast thick slices of sourdough until golden",
                "Mash avocado with lemon juice, salt, and pepper",
                "Bring water to a gentle simmer and poach eggs for 3-4 minutes",
                "Spread avocado generously on toast",
                "Top with poached eggs",
                "Season with everything bagel seasoning, chili flakes, and microgreens"
            ],
            rating: 4.7,
            reviews: 210,
            saved: false
        },
        {
            id: 4,
            title: "Beef Bourguignon",
            image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&h=400&fit=crop",
            time: 180,
            difficulty: "hard",
            cuisine: "french",
            category: "main-courses",
            dietary: "keto",
            description: "Classic French beef stew slow-cooked in Burgundy red wine with mushrooms, pearl onions, and lardons. The ultimate comfort food for cold evenings.",
            ingredients: ["Beef chuck roast", "Burgundy red wine", "Beef stock", "Cremini mushrooms", "Carrots", "Pearl onions", "Thick-cut bacon", "Fresh thyme"],
            instructions: [
                "Cut beef into 2-inch cubes and pat dry, brown in batches",
                "Cook bacon until crispy, sauté vegetables in the rendered fat",
                "Deglaze with red wine, scraping up browned bits",
                "Add beef stock, tomato paste, and herb bouquet",
                "Transfer to oven and braise at 325°F for 2-3 hours",
                "Serve over buttered egg noodles or with crusty bread"
            ],
            rating: 4.8,
            reviews: 76,
            saved: false
        },
        {
            id: 5,
            title: "Mango Sticky Rice",
            image: "https://images.unsplash.com/photo-1621293954908-907159247fc8?w=600&h=400&fit=crop",
            time: 60,
            difficulty: "medium",
            cuisine: "thai",
            category: "desserts",
            dietary: "vegan",
            description: "Sweet Thai dessert featuring glutinous rice soaked in rich coconut cream, served with slices of perfectly ripe mango and toasted sesame seeds.",
            ingredients: ["Glutinous sticky rice", "Ripe Ataulfo mangoes", "Coconut milk", "Palm sugar", "Sea salt", "Toasted sesame seeds", "Pandan leaf"],
            instructions: [
                "Soak sticky rice in water for at least 4 hours or overnight",
                "Steam rice in a bamboo steamer for 20-25 minutes until translucent",
                "Heat coconut milk with sugar, salt, and pandan leaf",
                "Pour warm coconut sauce over hot rice and let absorb for 15 minutes",
                "Peel and slice mangoes into beautiful fans",
                "Serve rice mounded with mango, drizzle with extra coconut cream and sesame seeds"
            ],
            rating: 4.6,
            reviews: 142,
            saved: false
        },
        {
            id: 6,
            title: "Classic Greek Salad",
            image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
            time: 15,
            difficulty: "easy",
            cuisine: "greek",
            category: "salads",
            dietary: "vegetarian",
            description: "A vibrant horiatiki salad with juicy tomatoes, crisp cucumber, red onion, Kalamata olives, and a generous slab of creamy feta cheese.",
            ingredients: ["Vine-ripened tomatoes", "English cucumber", "Red onion", "Green bell pepper", "Kalamata olives", "Greek feta cheese", "Extra virgin olive oil", "Dried oregano"],
            instructions: [
                "Cut tomatoes into wedges and cucumber into half-moons",
                "Thinly slice red onion and cut pepper into rings",
                "Combine all vegetables in a large bowl",
                "Add whole Kalamata olives",
                "Place a thick slab of feta on top",
                "Drizzle generously with olive oil and sprinkle with oregano"
            ],
            rating: 4.4,
            reviews: 88,
            saved: false
        },
        {
            id: 7,
            title: "Chocolate Lava Cake",
            image: "cake3.jpg",
            time: 30,
            difficulty: "medium",
            cuisine: "french",
            category: "desserts",
            dietary: "vegetarian",
            description: "Decadent individual chocolate cakes with a molten center that flows like lava when you break through the crust. Served warm with vanilla bean ice cream.",
            ingredients: ["70% dark chocolate", "Unsalted butter", "Large eggs", "Caster sugar", "All-purpose flour", "Pure vanilla extract", "Cocoa powder"],
            instructions: [
                "Melt chocolate and butter together over a double boiler",
                "Whisk eggs, yolks, and sugar until thick and pale",
                "Fold chocolate mixture into eggs gently",
                "Sift in flour and fold until just combined",
                "Pour into buttered and cocoa-dusted ramekins",
                "Bake at 425°F for exactly 12 minutes — center should jiggle"
            ],
            rating: 4.9,
            reviews: 156,
            saved: false
        },
        {
            id: 8,
            title: "Tonkotsu Ramen",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop",
            time: 60,
            difficulty: "hard",
            cuisine: "japanese",
            category: "soups",
            dietary: "none",
            description: "Rich and creamy pork bone broth ramen with tender chashu pork belly, a perfectly jammy soft-boiled egg, and springy noodles.",
            ingredients: ["Fresh ramen noodles", "Pork belly", "Pork bones", "Miso paste", "Soy sauce", "Nori sheets", "Soft-boiled egg", "Green onions", "Sesame seeds"],
            instructions: [
                "Simmer pork bones for 12+ hours for rich, milky broth",
                "Braise pork belly in soy sauce, mirin, and sake until meltingly tender",
                "Cook ramen noodles until al dente, about 90 seconds",
                "Ladle hot broth into bowls over noodles",
                "Arrange sliced chashu, halved jammy egg, and nori",
                "Garnish with sliced green onions and sesame seeds"
            ],
            rating: 4.7,
            reviews: 112,
            saved: false
        },
        {
            id: 9,
            title: "Chicken Tacos al Pastor",
            image: "chickenTacos.jpg",
            time: 35,
            difficulty: "easy",
            cuisine: "mexican",
            category: "main-courses",
            dietary: "none",
            description: "Smoky, sweet, and tangy tacos inspired by al pastor with juicy marinated chicken, grilled pineapple, fresh cilantro, and a squeeze of lime.",
            ingredients: ["Chicken thighs", "Corn tortillas", "Fresh pineapple", "Chipotle peppers in adobo", "Cilantro", "White onion", "Limes", "Achiote paste"],
            instructions: [
                "Blend achiote paste, chipotles, pineapple juice, and spices into a marinade",
                "Marinate chicken thighs for at least 2 hours",
                "Grill chicken and pineapple rings over high heat until charred",
                "Warm corn tortillas on the grill until pliable",
                "Dice chicken and pineapple, pile onto tortillas",
                "Top with diced onion, cilantro, and a squeeze of fresh lime"
            ],
            rating: 4.8,
            reviews: 187,
            saved: false
        },
        {
            id: 10,
            title: "Fluffy Japanese Pancakes",
            image: "pancakes.jpg",
            time: 25,
            difficulty: "medium",
            cuisine: "japanese",
            category: "desserts",
            dietary: "vegetarian",
            description: "Impossibly fluffy and jiggly soufflé pancakes that are light as clouds. Served with butter, maple syrup, and fresh berries.",
            ingredients: ["Egg yolks", "Egg whites", "Cake flour", "Whole milk", "Vanilla extract", "Sugar", "Cream of tartar", "Butter", "Fresh berries"],
            instructions: [
                "Separate eggs — whisk yolks with milk, vanilla, and sifted flour",
                "Beat egg whites with cream of tartar until stiff peaks form",
                "Gently fold meringue into batter in 3 additions — keep it airy!",
                "Pipe batter into tall ring molds on a low-heat griddle",
                "Cover and cook 6-7 minutes per side on very low heat",
                "Remove molds, stack pancakes, top with butter, syrup, and berries"
            ],
            rating: 4.5,
            reviews: 93,
            saved: false
        },
        {
            id: 11,
            title: "Spaghetti Carbonara",
            image: "spaggeti.webp",
            time: 25,
            difficulty: "medium",
            cuisine: "italian",
            category: "main-courses",
            dietary: "none",
            description: "The authentic Roman classic — silky pasta coated in a rich sauce of eggs, Pecorino Romano, guanciale, and black pepper. No cream allowed.",
            ingredients: ["Spaghetti", "Guanciale", "Egg yolks", "Pecorino Romano", "Parmigiano Reggiano", "Black pepper", "Sea salt"],
            instructions: [
                "Cook spaghetti in well-salted water until just under al dente",
                "Crisp cubed guanciale in a cold pan over medium heat until golden",
                "Whisk egg yolks with finely grated Pecorino and Parmigiano",
                "Remove pan from heat, add drained pasta to guanciale",
                "Pour egg mixture over pasta and toss vigorously — residual heat cooks the eggs",
                "Add pasta water as needed for silky consistency, finish with fresh cracked pepper"
            ],
            rating: 4.7,
            reviews: 234,
            saved: false
        },
        {
            id: 12,
            title: "Butter Chicken",
            image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&h=400&fit=crop",
            time: 50,
            difficulty: "medium",
            cuisine: "indian",
            category: "main-courses",
            dietary: "gluten-free",
            description: "Tender tandoori-spiced chicken simmered in a luscious, velvety tomato-butter sauce with warm spices. Served with fluffy basmati rice or warm naan.",
            ingredients: ["Chicken thighs", "Yogurt", "Garam masala", "Kashmiri chili powder", "Butter", "Tomato puree", "Heavy cream", "Kasuri methi", "Basmati rice"],
            instructions: [
                "Marinate chicken in yogurt, garam masala, chili powder, and ginger-garlic paste",
                "Grill or broil marinated chicken until charred edges form",
                "Melt butter, sauté onions and spices until deeply golden",
                "Add tomato puree and simmer until oil separates",
                "Add grilled chicken pieces and cream, simmer gently for 15 minutes",
                "Finish with kasuri methi and a knob of butter, serve with rice or naan"
            ],
            rating: 4.9,
            reviews: 312,
            saved: false
        },
        {
            id: 13,
            title: "Fresh Sushi Rolls",
            image: "sushi.jpeg",
            time: 60,
            difficulty: "hard",
            cuisine: "japanese",
            category: "main-courses",
            dietary: "none",
            description: "Beautiful hand-rolled maki sushi with sushi-grade fish, perfectly seasoned rice, and crisp vegetables. A rewarding culinary art to master.",
            ingredients: ["Sushi rice", "Rice vinegar", "Nori sheets", "Sushi-grade salmon", "Sushi-grade tuna", "Cucumber", "Avocado", "Soy sauce", "Wasabi", "Pickled ginger"],
            instructions: [
                "Rinse rice until water runs clear, cook and season with vinegar, sugar, and salt",
                "Place nori shiny-side down on a bamboo mat",
                "Spread an even layer of rice, leaving 1 inch at the top",
                "Lay fish and vegetable fillings in a line across the center",
                "Roll tightly using the bamboo mat, sealing with the bare nori strip",
                "Slice with a wet, sharp knife into 6-8 pieces and serve with soy sauce and wasabi"
            ],
            rating: 4.3,
            reviews: 76,
            saved: false
        },
        {
            id: 14,
            title: "Authentic Pad Thai",
            image: "padThai.jpg",
            time: 30,
            difficulty: "hard",
            cuisine: "thai",
            category: "main-courses",
            dietary: "none",
            description: "Street-style Pad Thai with chewy rice noodles, plump shrimp, scrambled egg, crunchy peanuts, and the perfect sweet-sour-salty tamarind sauce.",
            ingredients: ["Flat rice noodles", "Large shrimp", "Eggs", "Firm tofu", "Tamarind paste", "Fish sauce", "Palm sugar", "Bean sprouts", "Roasted peanuts", "Lime wedges"],
            instructions: [
                "Soak rice noodles in warm water until pliable but still firm",
                "Make the sauce: whisk tamarind paste, fish sauce, and palm sugar",
                "Stir-fry shrimp and tofu in a screaming hot wok until golden",
                "Push to the side, scramble eggs in the center",
                "Add drained noodles and sauce, toss everything together",
                "Fold in bean sprouts, plate with crushed peanuts, cilantro, and lime"
            ],
            rating: 4.6,
            reviews: 167,
            saved: false
        },
        {
            id: 15,
            title: "Tiramisu",
            image: "cake2.jpeg",
            time: 40,
            difficulty: "medium",
            cuisine: "italian",
            category: "desserts",
            dietary: "vegetarian",
            description: "The iconic Italian no-bake dessert with espresso-soaked ladyfingers layered with a cloud-like mascarpone cream, dusted with cocoa powder.",
            ingredients: ["Mascarpone cheese", "Egg yolks", "Sugar", "Ladyfinger biscuits", "Espresso coffee", "Marsala wine", "Cocoa powder", "Dark chocolate shavings"],
            instructions: [
                "Brew strong espresso and mix with Marsala wine, let cool",
                "Beat egg yolks and sugar until pale, thick ribbons form",
                "Fold in mascarpone until smooth and creamy",
                "Briefly dip ladyfingers in espresso mixture — don't soak!",
                "Layer dipped ladyfingers and mascarpone cream in a dish, repeat",
                "Refrigerate overnight, dust generously with cocoa powder before serving"
            ],
            rating: 4.8,
            reviews: 198,
            saved: false
        },
        {
            id: 16,
            title: "Shakshuka",
            image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=600&h=400&fit=crop",
            time: 25,
            difficulty: "easy",
            cuisine: "middle-eastern",
            category: "appetizers",
            dietary: "vegetarian",
            description: "Eggs gently poached in a spiced, smoky tomato and pepper sauce. Scooped up with warm crusty bread, it's the ultimate brunch or dinner.",
            ingredients: ["Eggs", "Canned tomatoes", "Red bell peppers", "Onion", "Garlic", "Cumin", "Smoked paprika", "Cayenne pepper", "Feta cheese", "Fresh cilantro", "Crusty bread"],
            instructions: [
                "Sauté diced onion and peppers in olive oil until softened",
                "Add garlic, cumin, paprika, and cayenne — cook until fragrant",
                "Pour in crushed tomatoes and simmer until thickened, about 10 minutes",
                "Create wells in the sauce and crack eggs into each one",
                "Cover and cook until whites are set but yolks are still runny",
                "Crumble feta on top, scatter cilantro, and serve straight from the pan with bread"
            ],
            rating: 4.5,
            reviews: 143,
            saved: false
        },
        {
            id: 17,
            title: "Jollof Rice",
            image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&h=400&fit=crop",
            time: 55,
            difficulty: "medium",
            cuisine: "african",
            category: "main-courses",
            dietary: "none",
            description: "West Africa's most celebrated dish — smoky, fragrant rice cooked in a rich tomato-pepper base. Every grain is infused with deep, complex flavor.",
            ingredients: ["Long-grain rice", "Tomato paste", "Fresh tomatoes", "Red bell peppers", "Scotch bonnet pepper", "Onions", "Chicken stock", "Thyme", "Bay leaves", "Curry powder"],
            instructions: [
                "Blend tomatoes, red peppers, and scotch bonnet into a smooth paste",
                "Fry onions in oil until deeply golden, add tomato paste and fry until darkened",
                "Pour in blended pepper mix and cook until oil floats on top",
                "Add chicken stock, thyme, curry powder, and bay leaves",
                "Wash and add rice, stir once, then cover tightly",
                "Cook on very low heat for 30 minutes — don't peek! The steam is key"
            ],
            rating: 4.7,
            reviews: 89,
            saved: false
        },
        {
            id: 18,
            title: "Blueberry Pancake Stack",
            image: "pancakes2.jpg",
            time: 20,
            difficulty: "easy",
            cuisine: "american",
            category: "appetizers",
            dietary: "vegetarian",
            description: "Tall stack of golden, fluffy buttermilk pancakes bursting with juicy blueberries, drizzled with real maple syrup and topped with whipped cream.",
            ingredients: ["All-purpose flour", "Buttermilk", "Eggs", "Fresh blueberries", "Butter", "Baking powder", "Vanilla extract", "Maple syrup", "Whipped cream"],
            instructions: [
                "Whisk flour, baking powder, sugar, and salt in a bowl",
                "Make a well, add buttermilk, melted butter, eggs, and vanilla",
                "Mix until just combined — lumps are your friend!",
                "Fold in fresh blueberries gently",
                "Ladle onto a buttered griddle, flip when bubbles form on the surface",
                "Stack high, add a pat of butter, pour warm maple syrup, and top with whipped cream"
            ],
            rating: 4.6,
            reviews: 156,
            saved: false
        },
        {
            id: 19,
            title: "Korean Bibimbap",
            image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600&h=400&fit=crop",
            time: 45,
            difficulty: "medium",
            cuisine: "korean",
            category: "main-courses",
            dietary: "none",
            description: "A colorful Korean rice bowl topped with an array of seasoned vegetables, marinated beef, a fried egg, and fiery gochujang sauce.",
            ingredients: ["Short-grain rice", "Beef sirloin", "Spinach", "Bean sprouts", "Carrots", "Zucchini", "Shiitake mushrooms", "Gochujang", "Sesame oil", "Egg", "Kimchi"],
            instructions: [
                "Cook rice and keep warm — or use a stone bowl for crispy bottom",
                "Marinate sliced beef in soy sauce, sesame oil, garlic, and sugar",
                "Blanch and season each vegetable separately with sesame oil and salt",
                "Stir-fry beef until caramelized",
                "Arrange all toppings beautifully over rice in sections",
                "Top with a sunny-side-up egg and a generous dollop of gochujang — mix everything together before eating!"
            ],
            rating: 4.7,
            reviews: 134,
            saved: false
        },
        {
            id: 20,
            title: "Cappuccino & Espresso",
            image: "coffe.jpg",
            time: 10,
            difficulty: "easy",
            cuisine: "italian",
            category: "beverages",
            dietary: "vegetarian",
            description: "Master the art of Italian coffee — from a rich, bold espresso to a velvety cappuccino with perfectly steamed milk foam and a dusting of cocoa.",
            ingredients: ["Freshly roasted espresso beans", "Whole milk", "Cocoa powder", "Sugar (optional)", "Filtered water"],
            instructions: [
                "Grind beans to a fine espresso consistency just before brewing",
                "Tamp the grounds firmly and evenly into the portafilter",
                "Pull a 25-30 second shot — look for a rich, golden crema",
                "Steam milk to 150°F, creating a smooth, silky microfoam",
                "Pour steamed milk into espresso with a gentle wrist motion",
                "Dust the foam with cocoa powder and serve immediately"
            ],
            rating: 4.4,
            reviews: 67,
            saved: false
        }
    ];

    // DOM Elements
    const recipeGrid = document.getElementById('recipe-grid');
    const loadingSpinner = document.getElementById('loading-spinner');
    const noResults = document.getElementById('no-results');
    const resetFiltersBtn = document.getElementById('reset-filters-btn');
    const pagination = document.getElementById('pagination');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageNumbers = document.getElementById('page-numbers');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const timeFilter = document.getElementById('time-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const dietaryFilter = document.getElementById('dietary-filter');
    const resetFilters = document.getElementById('reset-filters');
    const quickViewModal = document.getElementById('quick-view-modal');
    const totalRecipes = document.getElementById('total-recipes');
    const totalCuisines = document.getElementById('total-cuisines');
    const rotdImage = document.getElementById('rotd-image');
    const rotdTitle = document.getElementById('rotd-title');
    const rotdTime = document.getElementById('rotd-time');
    const rotdDifficulty = document.getElementById('rotd-difficulty');
    const rotdCuisine = document.getElementById('rotd-cuisine');
    const rotdDescription = document.getElementById('rotd-description');

    // Pagination variables
    let currentPage = 1;
    const recipesPerPage = 9;
    let filteredRecipes = [...recipes];

    // Initialize
    function init() {
        displayRecipes();
        setupEventListeners();
        updateRecipeStats();
        setupRecipeOfTheDay();
    }

    // Display recipes
    function displayRecipes() {
        recipeGrid.innerHTML = '';
        loadingSpinner.classList.add('active');

        setTimeout(() => {
            loadingSpinner.classList.remove('active');

            const startIndex = (currentPage - 1) * recipesPerPage;
            const endIndex = startIndex + recipesPerPage;
            const paginatedRecipes = filteredRecipes.slice(startIndex, endIndex);

            if (paginatedRecipes.length === 0) {
                noResults.classList.add('active');
                recipeGrid.style.display = 'none';
                pagination.style.display = 'none';
            } else {
                noResults.classList.remove('active');
                recipeGrid.style.display = 'grid';
                pagination.style.display = 'flex';

                paginatedRecipes.forEach((recipe, index) => {
                    const recipeCard = document.createElement('div');
                    recipeCard.className = 'recipe-card';
                    recipeCard.style.animationDelay = `${index * 0.08}s`;
                    recipeCard.innerHTML = `
                        <div class="recipe-image" style="background-image: url('${recipe.image}')">
                            <div class="recipe-tag">${recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1)}</div>
                            <button class="save-recipe ${recipe.saved ? 'saved' : ''}" data-id="${recipe.id}">
                                <i class="${recipe.saved ? 'fas' : 'far'} fa-bookmark"></i>
                            </button>
                        </div>
                        <div class="recipe-info">
                            <h3>${recipe.title}</h3>
                            <div class="recipe-meta">
                                <span><i class="fas fa-clock"></i> ${recipe.time} mins</span>
                                <span><i class="fas fa-utensils"></i> ${recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}</span>
                            </div>
                            <div class="recipe-rating">
                                ${generateRatingStars(recipe.rating)}
                                <span>(${recipe.reviews})</span>
                            </div>
                            <p class="recipe-description">${recipe.description}</p>
                            <div class="recipe-actions">
                                <button class="btn btn-recipe btn-view" data-id="${recipe.id}">View Recipe</button>
                                <button class="btn btn-recipe btn-quick-view" data-id="${recipe.id}">Quick View</button>
                            </div>
                        </div>
                    `;
                    recipeGrid.appendChild(recipeCard);
                });
            }

            updatePagination();
        }, 600);
    }

    // Generate rating stars
    function generateRatingStars(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }

        return stars;
    }

    // Update pagination
    function updatePagination() {
        pageNumbers.innerHTML = '';
        const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;

        for (let i = 1; i <= totalPages; i++) {
            addPageNumber(i);
        }
    }

    function addPageNumber(page) {
        const pageElement = document.createElement('span');
        pageElement.className = `page-number ${page === currentPage ? 'active' : ''}`;
        pageElement.textContent = page;
        pageElement.addEventListener('click', () => {
            currentPage = page;
            displayRecipes();
            window.scrollTo({ top: document.querySelector('.recipe-grid-section').offsetTop - 100, behavior: 'smooth' });
        });
        pageNumbers.appendChild(pageElement);
    }

    // Filter recipes
    function filterRecipes() {
        const searchTerm = searchInput.value.toLowerCase();
        const categoryValue = categoryFilter.value;
        const timeValue = timeFilter.value;
        const difficultyValue = difficultyFilter.value;
        const dietaryValue = dietaryFilter.value;

        filteredRecipes = recipes.filter(recipe => {
            if (searchTerm && !recipe.title.toLowerCase().includes(searchTerm) &&
                !recipe.description.toLowerCase().includes(searchTerm) &&
                !recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))) {
                return false;
            }
            if (categoryValue !== 'all' && recipe.category !== categoryValue) return false;
            if (timeValue !== 'all' && recipe.time > parseInt(timeValue)) return false;
            if (difficultyValue !== 'all' && recipe.difficulty !== difficultyValue) return false;
            if (dietaryValue !== 'all' && recipe.dietary !== dietaryValue) return false;
            return true;
        });

        currentPage = 1;
        displayRecipes();
    }

    // Show quick view modal
    function showQuickView(id) {
        const recipe = recipes.find(r => r.id === id);
        if (!recipe) return;

        document.getElementById('quick-view-image').style.backgroundImage = `url('${recipe.image}')`;
        document.getElementById('quick-view-title').textContent = recipe.title;
        document.getElementById('quick-view-time').textContent = `${recipe.time} mins`;
        document.getElementById('quick-view-difficulty').textContent = recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1);
        document.getElementById('quick-view-cuisine').textContent = recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1);
        document.getElementById('quick-view-description').innerHTML = `
            <p>${recipe.description}</p>
            <h4 style="margin-top: 16px; margin-bottom: 8px;">Ingredients</h4>
            <ul style="padding-left: 20px;">${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
        `;

        const saveBtn = document.getElementById('quick-view-save');
        saveBtn.innerHTML = `<i class="${recipe.saved ? 'fas' : 'far'} fa-bookmark"></i> ${recipe.saved ? 'Saved' : 'Save'}`;
        saveBtn.dataset.id = recipe.id;

        quickViewModal.classList.add('active');
    }

    // Show full recipe detail modal
    function showRecipeDetail(id) {
        const recipe = recipes.find(r => r.id === id);
        if (!recipe) return;

        const modal = document.getElementById('recipe-detail-modal');
        document.getElementById('recipe-detail-hero').style.backgroundImage = `url('${recipe.image}')`;
        document.getElementById('recipe-detail-title').textContent = recipe.title;
        document.getElementById('recipe-detail-tag').textContent = recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1);
        document.getElementById('recipe-detail-time').textContent = `${recipe.time} mins`;
        document.getElementById('recipe-detail-difficulty').textContent = recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1);
        document.getElementById('recipe-detail-rating').textContent = recipe.rating;
        document.getElementById('recipe-detail-reviews').textContent = recipe.reviews;
        document.getElementById('recipe-detail-description').textContent = recipe.description;

        const ingredientsList = document.getElementById('recipe-detail-ingredients');
        ingredientsList.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');

        const instructionsList = document.getElementById('recipe-detail-instructions');
        instructionsList.innerHTML = recipe.instructions.map(step => `<li>${step}</li>`).join('');

        const saveBtn = document.getElementById('recipe-detail-save');
        saveBtn.innerHTML = `<i class="${recipe.saved ? 'fas' : 'far'} fa-bookmark"></i> ${recipe.saved ? 'Saved to Cookbook' : 'Save to Cookbook'}`;
        saveBtn.dataset.id = recipe.id;
        saveBtn.onclick = function() {
            toggleSavedRecipe(parseInt(this.dataset.id));
            const r = recipes.find(rec => rec.id === parseInt(this.dataset.id));
            this.innerHTML = `<i class="${r.saved ? 'fas' : 'far'} fa-bookmark"></i> ${r.saved ? 'Saved to Cookbook' : 'Save to Cookbook'}`;
        };

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Close handlers
        const closeBtn = document.getElementById('recipe-detail-close');
        closeBtn.onclick = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };
    }

    // Toggle saved recipe
    function toggleSavedRecipe(id) {
        const recipe = recipes.find(r => r.id === id);
        if (recipe) {
            recipe.saved = !recipe.saved;
            return true;
        }
        return false;
    }

    // Update recipe stats
    function updateRecipeStats() {
        totalRecipes.textContent = recipes.length;
        const uniqueCuisines = [...new Set(recipes.map(recipe => recipe.cuisine))];
        totalCuisines.textContent = uniqueCuisines.length;
    }

    // Setup recipe of the day
    function setupRecipeOfTheDay() {
        // Pick based on day of year so it's consistent for the day
        const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
        const recipe = recipes[dayOfYear % recipes.length];

        rotdImage.style.backgroundImage = `url('${recipe.image}')`;
        rotdTitle.textContent = recipe.title;
        rotdTime.textContent = `${recipe.time} mins`;
        rotdDifficulty.textContent = recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1);
        rotdCuisine.textContent = recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1);
        rotdDescription.textContent = recipe.description;

        const saveBtn = document.querySelector('.rotd-actions .save-recipe');
        if (saveBtn) {
            saveBtn.innerHTML = `<i class="${recipe.saved ? 'fas' : 'far'} fa-bookmark"></i> ${recipe.saved ? 'Saved' : 'Save'}`;
            saveBtn.dataset.id = recipe.id;
        }
    }

    // Setup event listeners
    function setupEventListeners() {
        searchInput.addEventListener('input', filterRecipes);
        categoryFilter.addEventListener('change', filterRecipes);
        timeFilter.addEventListener('change', filterRecipes);
        difficultyFilter.addEventListener('change', filterRecipes);
        dietaryFilter.addEventListener('change', filterRecipes);

        resetFilters.addEventListener('click', resetAllFilters);
        if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetAllFilters);

        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayRecipes();
            }
        });

        nextPageBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                displayRecipes();
            }
        });

        recipeGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-view') || e.target.closest('.btn-view')) {
                const btn = e.target.classList.contains('btn-view') ? e.target : e.target.closest('.btn-view');
                const recipeId = parseInt(btn.dataset.id);
                showRecipeDetail(recipeId);
            }

            if (e.target.classList.contains('btn-quick-view') || e.target.closest('.btn-quick-view')) {
                const btn = e.target.classList.contains('btn-quick-view') ? e.target : e.target.closest('.btn-quick-view');
                const recipeId = parseInt(btn.dataset.id);
                showQuickView(recipeId);
            }

            if (e.target.classList.contains('save-recipe') || e.target.closest('.save-recipe')) {
                const btn = e.target.classList.contains('save-recipe') ? e.target : e.target.closest('.save-recipe');
                const recipeId = parseInt(btn.dataset.id);
                const wasSaved = toggleSavedRecipe(recipeId);

                if (wasSaved) {
                    const icon = btn.querySelector('i');
                    if (recipes.find(r => r.id === recipeId).saved) {
                        btn.classList.add('saved');
                        icon.classList.remove('far');
                        icon.classList.add('fas');
                    } else {
                        btn.classList.remove('saved');
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                    }
                }
            }
        });

        document.getElementById('quick-view-save').addEventListener('click', function() {
            const recipeId = parseInt(this.dataset.id);
            const wasSaved = toggleSavedRecipe(recipeId);

            if (wasSaved) {
                const recipe = recipes.find(r => r.id === recipeId);
                this.innerHTML = `<i class="${recipe.saved ? 'fas' : 'far'} fa-bookmark"></i> ${recipe.saved ? 'Saved' : 'Save'}`;

                const gridSaveBtn = document.querySelector(`.recipe-card .save-recipe[data-id="${recipeId}"]`);
                if (gridSaveBtn) {
                    const icon = gridSaveBtn.querySelector('i');
                    if (recipe.saved) {
                        gridSaveBtn.classList.add('saved');
                        icon.classList.remove('far');
                        icon.classList.add('fas');
                    } else {
                        gridSaveBtn.classList.remove('saved');
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                    }
                }
            }
        });

        const rotdSaveBtn = document.querySelector('.rotd-actions .save-recipe');
        if (rotdSaveBtn) {
            rotdSaveBtn.addEventListener('click', function() {
                const recipeId = parseInt(this.dataset.id);
                const wasSaved = toggleSavedRecipe(recipeId);

                if (wasSaved) {
                    const recipe = recipes.find(r => r.id === recipeId);
                    this.innerHTML = `<i class="${recipe.saved ? 'fas' : 'far'} fa-bookmark"></i> ${recipe.saved ? 'Saved' : 'Save'}`;
                }
            });
        }

        // Close modals
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                quickViewModal.classList.remove('active');
                const detailModal = document.getElementById('recipe-detail-modal');
                if (detailModal) {
                    detailModal.classList.remove('active');
                }
                document.body.style.overflow = '';
            }
        });

        // Close button in modal
        const modalClose = quickViewModal.querySelector('.modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                quickViewModal.classList.remove('active');
            });
        }
    }

    // Reset all filters
    function resetAllFilters() {
        searchInput.value = '';
        categoryFilter.value = 'all';
        timeFilter.value = 'all';
        difficultyFilter.value = 'all';
        dietaryFilter.value = 'all';
        filterRecipes();
    }

    // Initialize the page
    init();
});
