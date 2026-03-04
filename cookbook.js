document.addEventListener('DOMContentLoaded', function() {
    // Saved recipes with real images
    const recipes = [
        {
            id: 1,
            title: "Classic Margherita Pizza",
            image: "pizza2.jpg",
            time: 45,
            difficulty: "medium",
            cuisine: "italian",
            ingredients: ["1 pizza dough ball", "1/2 cup San Marzano tomato sauce", "2 cups fresh mozzarella", "Fresh basil leaves", "2 tbsp extra virgin olive oil", "Pinch of sea salt"],
            instructions: ["Preheat oven to 475°F with a pizza stone inside", "Roll out dough into a 12-inch circle on a floured surface", "Spread tomato sauce evenly, leaving a 1-inch border", "Tear mozzarella and distribute across the pizza", "Bake for 10-12 minutes until crust is golden and cheese is bubbly", "Add fresh basil, drizzle with olive oil, and serve immediately"],
            rating: 4.5,
            reviews: 128
        },
        {
            id: 2,
            title: "Authentic Pad Thai",
            image: "padThai.jpg",
            time: 30,
            difficulty: "hard",
            cuisine: "thai",
            ingredients: ["8 oz flat rice noodles", "2 tbsp vegetable oil", "2 large eggs", "1 cup bean sprouts", "3 green onions, sliced", "1/4 cup crushed roasted peanuts", "2 tbsp fish sauce", "1 tbsp tamarind paste", "1 tbsp palm sugar", "1 lime, cut in wedges"],
            instructions: ["Soak rice noodles in warm water for 20 minutes until pliable", "Heat oil in a wok over high heat until smoking", "Add eggs and scramble until just set, push to side", "Add drained noodles and stir-fry for 2 minutes", "Pour in fish sauce, tamarind, and sugar — toss everything together", "Add bean sprouts and green onions, toss briefly", "Serve garnished with crushed peanuts and lime wedges"],
            rating: 4.6,
            reviews: 95
        },
        {
            id: 3,
            title: "Chicken Tacos al Pastor",
            image: "chickenTacos.jpg",
            time: 25,
            difficulty: "easy",
            cuisine: "mexican",
            ingredients: ["1 lb chicken thighs", "1 tbsp achiote paste", "8 corn tortillas", "1 cup diced pineapple", "1/2 cup diced white onion", "1/4 cup fresh cilantro", "Lime wedges", "Salsa verde"],
            instructions: ["Marinate chicken in achiote, chipotle, and pineapple juice for 2 hours", "Grill chicken over high heat until charred, about 6 minutes per side", "Let rest 5 minutes then dice into small pieces", "Grill pineapple rings until caramelized", "Warm tortillas on the grill until pliable", "Assemble tacos with chicken, pineapple, onion, and cilantro", "Serve with lime wedges and salsa verde"],
            rating: 4.8,
            reviews: 210
        },
        {
            id: 4,
            title: "Fresh Sushi Rolls",
            image: "sushi.jpeg",
            time: 60,
            difficulty: "hard",
            cuisine: "japanese",
            ingredients: ["2 cups sushi rice", "4 nori sheets", "1/2 lb sushi-grade salmon", "1 ripe avocado", "1 cucumber, julienned", "Rice vinegar seasoning", "Wasabi, pickled ginger", "Soy sauce for dipping"],
            instructions: ["Cook sushi rice and season with vinegar, sugar, and salt while warm", "Place nori sheet shiny-side down on a bamboo mat", "Spread an even layer of rice, leaving 1 inch at the top", "Lay salmon strips, avocado, and cucumber across the center", "Roll tightly using the bamboo mat, sealing with the bare nori edge", "Slice with a wet, sharp knife into 6-8 pieces", "Serve with soy sauce, wasabi, and pickled ginger"],
            rating: 4.3,
            reviews: 76
        },
        {
            id: 5,
            title: "Butter Chicken",
            image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&h=400&fit=crop",
            time: 50,
            difficulty: "medium",
            cuisine: "indian",
            ingredients: ["1.5 lbs chicken thighs", "1 cup yogurt", "2 tbsp garam masala", "1 tbsp Kashmiri chili powder", "4 tbsp butter", "1 cup tomato puree", "1/2 cup heavy cream", "1 tbsp kasuri methi", "Basmati rice"],
            instructions: ["Marinate chicken in yogurt, garam masala, chili, and ginger-garlic paste for 2 hours", "Grill or broil chicken until edges are charred", "Melt butter in a pan, sauté onions and spices until golden", "Add tomato puree and cook until oil separates", "Add grilled chicken and cream, simmer gently for 15 minutes", "Finish with crushed kasuri methi and a knob of butter", "Serve over fluffy basmati rice or with warm naan bread"],
            rating: 4.9,
            reviews: 312
        },
        {
            id: 6,
            title: "Spaghetti Carbonara",
            image: "spaggeti.webp",
            time: 25,
            difficulty: "medium",
            cuisine: "italian",
            ingredients: ["400g spaghetti", "200g guanciale, cubed", "4 egg yolks", "100g Pecorino Romano, grated", "50g Parmigiano Reggiano, grated", "Freshly cracked black pepper", "Sea salt for pasta water"],
            instructions: ["Cook spaghetti in generously salted water until just under al dente", "Crisp guanciale in a cold pan over medium heat until golden and rendered", "Whisk egg yolks with grated Pecorino and Parmigiano until smooth", "Remove pan from heat, add drained pasta to the guanciale", "Pour egg mixture over pasta and toss vigorously — the residual heat cooks the eggs", "Add splashes of pasta water as needed for a silky, creamy consistency", "Serve immediately with a generous crack of black pepper"],
            rating: 4.7,
            reviews: 234
        },
        {
            id: 7,
            title: "Chocolate Lava Cake",
            image: "cake3.jpg",
            time: 30,
            difficulty: "medium",
            cuisine: "french",
            ingredients: ["200g 70% dark chocolate", "120g unsalted butter", "3 large eggs + 3 yolks", "100g caster sugar", "50g all-purpose flour", "1 tsp vanilla extract", "Cocoa powder for dusting"],
            instructions: ["Preheat oven to 425°F — this high heat is essential", "Melt chocolate and butter together over a double boiler until smooth", "Whisk eggs, yolks, and sugar until thick and pale, about 3 minutes", "Fold the chocolate mixture into the egg mixture gently", "Sift in flour and fold until just combined — don't overmix", "Pour into buttered and cocoa-dusted ramekins, filling 3/4 full", "Bake for exactly 12 minutes — the center should jiggle when tapped"],
            rating: 4.9,
            reviews: 156
        },
        {
            id: 8,
            title: "Korean Bibimbap",
            image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600&h=400&fit=crop",
            time: 45,
            difficulty: "medium",
            cuisine: "korean",
            ingredients: ["2 cups short-grain rice", "200g beef sirloin, sliced", "1 cup spinach", "1 cup bean sprouts", "1 carrot, julienned", "1 zucchini, julienned", "4 shiitake mushrooms", "Gochujang paste", "Sesame oil", "4 eggs"],
            instructions: ["Cook rice and keep warm — or use a hot stone bowl for crispy bottom", "Marinate beef in soy sauce, sesame oil, garlic, and sugar for 30 minutes", "Blanch and season each vegetable separately with sesame oil and salt", "Stir-fry marinated beef until caramelized and set aside", "Arrange all toppings beautifully over rice in colorful sections", "Top with a sunny-side-up fried egg", "Serve with a generous dollop of gochujang — mix everything together before eating!"],
            rating: 4.7,
            reviews: 134
        },
        {
            id: 9,
            title: "Fluffy Pancakes",
            image: "pancakes2.jpg",
            time: 20,
            difficulty: "easy",
            cuisine: "american",
            ingredients: ["2 cups all-purpose flour", "2 cups buttermilk", "2 large eggs", "1 cup fresh blueberries", "3 tbsp melted butter", "2 tsp baking powder", "1 tsp vanilla extract", "Pure maple syrup", "Whipped cream"],
            instructions: ["Whisk flour, baking powder, sugar, and salt in a large bowl", "Make a well, add buttermilk, melted butter, eggs, and vanilla", "Mix until just combined — lumps are perfectly fine", "Gently fold in fresh blueberries", "Ladle batter onto a buttered griddle over medium heat", "Flip when bubbles form on the surface and edges look set", "Stack high, add a pat of butter, pour maple syrup, and top with whipped cream"],
            rating: 4.6,
            reviews: 156
        }
    ];

    // DOM Elements
    const recipeGrid = document.getElementById('recipe-grid');
    const emptyCookbook = document.getElementById('empty-cookbook');
    const recipeCount = document.getElementById('recipe-count');
    const cuisineCount = document.getElementById('cuisine-count');
    const totalTime = document.getElementById('total-time');
    const resultCount = document.getElementById('result-count');
    const cuisineFilter = document.getElementById('cuisine-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const timeFilter = document.getElementById('time-filter');
    const clearFilters = document.getElementById('clear-filters');
    const addCategoryBtn = document.querySelector('.add-category');
    const addCategoryModal = document.getElementById('add-category-modal');
    const modalCloseBtns = document.querySelectorAll('.modal-close');
    const recipeModal = document.getElementById('recipe-modal');
    const recentlyViewedGrid = document.getElementById('recently-viewed-grid');

    // Display recipes
    function displayRecipes(filteredRecipes = recipes) {
        recipeGrid.innerHTML = '';

        if (filteredRecipes.length === 0) {
            emptyCookbook.style.display = 'block';
            recipeGrid.style.display = 'none';
        } else {
            emptyCookbook.style.display = 'none';
            recipeGrid.style.display = 'grid';

            filteredRecipes.forEach((recipe, index) => {
                const recipeCard = document.createElement('div');
                recipeCard.className = 'recipe-card-cookbook';
                recipeCard.style.animationDelay = `${index * 0.08}s`;

                // Difficulty color
                let diffColor = '#4caf50';
                if (recipe.difficulty === 'medium') diffColor = '#ff9800';
                if (recipe.difficulty === 'hard') diffColor = '#e53935';

                recipeCard.innerHTML = `
                    <div class="recipe-image" style="background-image: url('${recipe.image}')">
                        <div class="recipe-tag">${recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1)}</div>
                        <div class="recipe-difficulty-badge" style="background: ${diffColor}">${recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}</div>
                    </div>
                    <div class="recipe-info">
                        <h3>${recipe.title}</h3>
                        <div class="recipe-meta">
                            <span><i class="fas fa-clock"></i> ${recipe.time} mins</span>
                            <span class="recipe-rating-small">
                                <i class="fas fa-star"></i> ${recipe.rating}
                                <span class="review-count">(${recipe.reviews})</span>
                            </span>
                        </div>
                        <div class="recipe-actions">
                            <button class="recipe-btn view-btn" data-id="${recipe.id}"><i class="fas fa-eye"></i> View</button>
                            <button class="recipe-btn remove-btn" data-id="${recipe.id}"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                `;
                recipeGrid.appendChild(recipeCard);
            });
        }

        // Update stats
        recipeCount.textContent = recipes.length;
        const uniqueCuisines = [...new Set(recipes.map(r => r.cuisine))];
        cuisineCount.textContent = uniqueCuisines.length;
        const hours = Math.round(recipes.reduce((sum, r) => sum + r.time, 0) / 60);
        totalTime.textContent = hours;
        resultCount.textContent = `Showing ${filteredRecipes.length} of ${recipes.length} recipes`;
    }

    // Filter recipes
    function filterRecipes() {
        const cuisineValue = cuisineFilter.value;
        const difficultyValue = difficultyFilter.value;
        const timeValue = timeFilter.value;

        const filtered = recipes.filter(recipe => {
            if (cuisineValue !== 'all' && recipe.cuisine !== cuisineValue) return false;
            if (difficultyValue !== 'all' && recipe.difficulty !== difficultyValue) return false;
            if (timeValue !== 'all' && recipe.time > parseInt(timeValue)) return false;
            return true;
        });

        displayRecipes(filtered);
    }

    // Show recipe modal
    function showRecipeModal(id) {
        const recipe = recipes.find(r => r.id === id);
        if (!recipe) return;

        document.getElementById('modal-recipe-image').style.backgroundImage = `url('${recipe.image}')`;
        document.getElementById('modal-recipe-title').textContent = recipe.title;
        document.getElementById('modal-recipe-time').textContent = `${recipe.time} mins`;
        document.getElementById('modal-recipe-difficulty').textContent = recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1);
        document.getElementById('modal-recipe-cuisine').textContent = recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1);
        document.getElementById('modal-recipe-rating').textContent = recipe.rating;
        document.getElementById('modal-recipe-reviews').textContent = recipe.reviews;

        const ingredientsList = document.getElementById('modal-recipe-ingredients');
        ingredientsList.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');

        const instructionsList = document.getElementById('modal-recipe-instructions');
        instructionsList.innerHTML = recipe.instructions.map(step => `<li>${step}</li>`).join('');

        // Remove button
        document.getElementById('modal-remove-btn').onclick = function() {
            const idx = recipes.findIndex(r => r.id === id);
            if (idx > -1) {
                recipes.splice(idx, 1);
                recipeModal.classList.remove('active');
                document.body.style.overflow = '';
                displayRecipes();
            }
        };

        recipeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Recently viewed
    function displayRecentlyViewed() {
        const recent = recipes.slice(0, 4);
        recentlyViewedGrid.innerHTML = '';
        recent.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recently-viewed-card';
            card.innerHTML = `
                <div class="rv-image" style="background-image: url('${recipe.image}')"></div>
                <div class="rv-info">
                    <h4>${recipe.title}</h4>
                    <span><i class="fas fa-clock"></i> ${recipe.time} mins</span>
                </div>
            `;
            card.addEventListener('click', () => showRecipeModal(recipe.id));
            recentlyViewedGrid.appendChild(card);
        });
    }

    // Event Listeners
    cuisineFilter.addEventListener('change', filterRecipes);
    difficultyFilter.addEventListener('change', filterRecipes);
    timeFilter.addEventListener('change', filterRecipes);

    clearFilters.addEventListener('click', function() {
        cuisineFilter.value = 'all';
        difficultyFilter.value = 'all';
        timeFilter.value = 'all';
        filterRecipes();
    });

    if (addCategoryBtn) {
        addCategoryBtn.addEventListener('click', function() {
            addCategoryModal.classList.add('active');
        });
    }

    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(m => {
                m.classList.remove('active');
            });
            document.body.style.overflow = '';
        }
    });

    recipeGrid.addEventListener('click', function(e) {
        const viewBtn = e.target.closest('.view-btn');
        if (viewBtn) {
            showRecipeModal(parseInt(viewBtn.dataset.id));
            return;
        }

        const removeBtn = e.target.closest('.remove-btn');
        if (removeBtn) {
            const recipeId = parseInt(removeBtn.dataset.id);
            const idx = recipes.findIndex(r => r.id === recipeId);
            if (idx > -1) {
                const card = removeBtn.closest('.recipe-card-cookbook');
                card.style.transform = 'scale(0.9)';
                card.style.opacity = '0';
                setTimeout(() => {
                    recipes.splice(idx, 1);
                    displayRecipes();
                    displayRecentlyViewed();
                }, 300);
            }
        }
    });

    // Image option selection
    document.querySelectorAll('.image-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.image-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Category form
    document.getElementById('category-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('category-name').value;
        alert(`Collection "${name}" created!`);
        addCategoryModal.classList.remove('active');
        this.reset();
    });

    // Initialize
    displayRecipes();
    displayRecentlyViewed();
});
