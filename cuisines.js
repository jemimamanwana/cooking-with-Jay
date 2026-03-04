document.addEventListener('DOMContentLoaded', function() {
    // Cuisine data with real food images
    const cuisines = [
        {
            id: 1,
            name: "Italian",
            image: "pizza2.jpg",
            region: "europe",
            description: "Italian cuisine is a celebration of simplicity and quality. With just a handful of fresh, seasonal ingredients, Italian cooks create dishes that are deeply flavorful — from hand-rolled pasta to wood-fired pizza and creamy risotto.",
            recipes: 32,
            rating: 4.8,
            popular: true,
            signatureDishes: ["Pasta Carbonara", "Margherita Pizza", "Risotto alla Milanese", "Tiramisu", "Osso Buco"],
            techniques: [
                { name: "Fresh Pasta Making", description: "The art of creating silky pasta from flour, eggs, and olive oil — rolled thin and cut to shape" },
                { name: "Risotto Stirring", description: "Constant stirring to coax starch from Arborio rice for an impossibly creamy texture" },
                { name: "Wood-Fired Cooking", description: "Neapolitan-style cooking in 900°F ovens that char pizza in 90 seconds" }
            ]
        },
        {
            id: 2,
            name: "Japanese",
            image: "sushi.jpeg",
            region: "asia",
            description: "Japanese cuisine is an art form where precision meets philosophy. Every dish balances the five flavors and five colors, honoring seasonality and the natural beauty of ingredients.",
            recipes: 28,
            rating: 4.7,
            popular: true,
            signatureDishes: ["Sushi & Sashimi", "Tonkotsu Ramen", "Tempura", "Wagyu Beef", "Miso Soup"],
            techniques: [
                { name: "Sushi Craftsmanship", description: "Years of training to perfect rice seasoning, fish slicing, and hand-forming nigiri" },
                { name: "Tempura Frying", description: "Ice-cold batter meets hot oil for an impossibly light, shatteringly crisp coating" },
                { name: "Dashi Making", description: "Extracting pure umami from kombu and bonito flakes — the soul of Japanese cooking" }
            ]
        },
        {
            id: 3,
            name: "Mexican",
            image: "chickenTacos.jpg",
            region: "americas",
            description: "Mexican cuisine is a UNESCO-recognized cultural treasure. Ancient Aztec and Mayan techniques merge with Spanish influences to create bold, complex flavors built on corn, chili, and chocolate.",
            recipes: 25,
            rating: 4.5,
            popular: true,
            signatureDishes: ["Tacos al Pastor", "Mole Poblano", "Chiles en Nogada", "Tamales", "Elote"],
            techniques: [
                { name: "Nixtamalization", description: "Ancient process of treating corn with lime water to create masa — the foundation of tortillas and tamales" },
                { name: "Mole Preparation", description: "A labor of love — toasting and grinding 20+ ingredients into a deeply complex sauce" },
                { name: "Tortilla Pressing", description: "Hand-pressing fresh masa into thin rounds and cooking on a hot comal" }
            ]
        },
        {
            id: 4,
            name: "Indian",
            image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop",
            region: "asia",
            description: "Indian cuisine is a symphony of spices. From fiery curries of the south to rich, creamy dishes of the north, the subcontinent's diverse regions offer a staggering range of flavors and traditions.",
            recipes: 36,
            rating: 4.6,
            popular: true,
            signatureDishes: ["Butter Chicken", "Hyderabadi Biryani", "Masala Dosa", "Rogan Josh", "Palak Paneer"],
            techniques: [
                { name: "Tandoor Cooking", description: "Intense clay oven heat that chars naan bread and infuses meats with smoky flavor" },
                { name: "Tempering (Tadka)", description: "Blooming whole spices in hot ghee to release essential oils and aroma" },
                { name: "Dum Cooking", description: "Sealing a pot with dough and slow-cooking over embers for hours of concentrated flavor" }
            ]
        },
        {
            id: 5,
            name: "French",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
            region: "europe",
            description: "French cuisine is the gold standard of the culinary world. Built on classical techniques perfected over centuries, it ranges from rustic country cooking to the heights of Michelin-starred gastronomy.",
            recipes: 30,
            rating: 4.7,
            popular: true,
            signatureDishes: ["Coq au Vin", "Bouillabaisse", "Ratatouille", "Croissants", "Crème Brûlée"],
            techniques: [
                { name: "Sous Vide", description: "Precision temperature cooking in vacuum-sealed bags for perfect doneness every time" },
                { name: "Flambé", description: "Igniting alcohol to caramelize sugars and add dramatic depth of flavor" },
                { name: "Pâtisserie", description: "The exacting art of French pastry — laminated doughs, choux, and delicate confections" }
            ]
        },
        {
            id: 6,
            name: "Thai",
            image: "padThai.jpg",
            region: "asia",
            description: "Thai cuisine is all about balance — every dish harmonizes spicy, sweet, sour, salty, and bitter. Fresh herbs, aromatic pastes, and bold flavors make Thai food unforgettable.",
            recipes: 22,
            rating: 4.4,
            popular: false,
            signatureDishes: ["Pad Thai", "Tom Yum Goong", "Green Curry", "Som Tum Papaya Salad", "Mango Sticky Rice"],
            techniques: [
                { name: "Curry Paste Grinding", description: "Pounding fresh herbs and spices in a granite mortar for intensely aromatic pastes" },
                { name: "Wok Stir-Frying", description: "Lightning-fast cooking over extreme heat for smoky wok hei flavor" },
                { name: "Flavor Balancing", description: "The Thai art of adjusting sweet, sour, salty, and spicy until a dish sings" }
            ]
        },
        {
            id: 7,
            name: "Greek",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
            region: "europe",
            description: "Greek cuisine is Mediterranean cooking at its finest — sun-drenched vegetables, briny olives, tangy feta, and golden olive oil. Simple ingredients elevated by time-honored traditions.",
            recipes: 18,
            rating: 4.3,
            popular: false,
            signatureDishes: ["Moussaka", "Souvlaki", "Spanakopita", "Tzatziki", "Baklava"],
            techniques: [
                { name: "Phyllo Handling", description: "Working with paper-thin dough layers brushed with butter for flaky pastries" },
                { name: "Charcoal Grilling", description: "Traditional souvlaki grilling over hot coals for smoky, juicy meat" },
                { name: "Olive Oil Mastery", description: "Knowing when to use delicate early-harvest vs. robust late-harvest oils" }
            ]
        },
        {
            id: 8,
            name: "Lebanese",
            image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop",
            region: "middle-east",
            description: "Lebanese cuisine is the jewel of Middle Eastern cooking. Generous mezze spreads, fragrant spice blends, and an emphasis on fresh vegetables and grains make it both healthy and deeply satisfying.",
            recipes: 20,
            rating: 4.2,
            popular: false,
            signatureDishes: ["Hummus", "Falafel", "Tabbouleh", "Shawarma", "Kibbeh"],
            techniques: [
                { name: "Mezze Preparation", description: "Creating an abundant spread of small, flavorful dishes for communal dining" },
                { name: "Spice Blending", description: "Crafting za'atar, baharat, and seven-spice mixes from freshly ground ingredients" },
                { name: "Flatbread Baking", description: "Stretching and baking traditional Lebanese bread in a saj oven" }
            ]
        },
        {
            id: 9,
            name: "Korean",
            image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=800&h=600&fit=crop",
            region: "asia",
            description: "Korean cuisine is bold, fermented, and fiery. From the national obsession with kimchi to sizzling Korean BBQ and comforting stews, it's a cuisine built on deep umami and community dining.",
            recipes: 24,
            rating: 4.5,
            popular: true,
            signatureDishes: ["Korean BBQ", "Bibimbap", "Kimchi Jjigae", "Japchae", "Tteokbokki"],
            techniques: [
                { name: "Fermentation", description: "The ancient art of making kimchi, doenjang, and gochujang — months of patient transformation" },
                { name: "Tableside Grilling", description: "Social dining around a grill, wrapping grilled meats in lettuce with ssamjang" },
                { name: "Banchan Making", description: "Preparing the array of small side dishes that accompany every Korean meal" }
            ]
        },
        {
            id: 10,
            name: "West African",
            image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&h=600&fit=crop",
            region: "africa",
            description: "West African cuisine is rich, hearty, and deeply flavorful. Built on starchy staples, slow-cooked stews, and bold spice combinations, it's one of the world's most underappreciated culinary traditions.",
            recipes: 16,
            rating: 4.4,
            popular: false,
            signatureDishes: ["Jollof Rice", "Egusi Soup", "Suya", "Fufu & Light Soup", "Chin Chin"],
            techniques: [
                { name: "One-Pot Cooking", description: "Building layers of flavor in a single pot — the foundation of West African stews" },
                { name: "Pepper Grinding", description: "Blending fresh chilies, tomatoes, and onions into the holy trinity of West African cooking" },
                { name: "Suya Spicing", description: "Coating skewered meat in ground peanut and spice mix before grilling over coals" }
            ]
        },
        {
            id: 11,
            name: "Spanish",
            image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&h=600&fit=crop",
            region: "europe",
            description: "Spanish cuisine celebrates the joy of eating together. From bustling tapas bars to saffron-scented paellas cooked over open flames, it's a cuisine built on passion, quality ingredients, and conviviality.",
            recipes: 20,
            rating: 4.5,
            popular: false,
            signatureDishes: ["Paella Valenciana", "Patatas Bravas", "Gazpacho", "Jamón Ibérico", "Churros con Chocolate"],
            techniques: [
                { name: "Paella Making", description: "Building the perfect socarrat — the prized crispy rice crust at the bottom of the pan" },
                { name: "Tapas Culture", description: "Creating small, shareable plates that encourage social dining and variety" },
                { name: "Jamón Carving", description: "The skilled art of hand-slicing cured ham paper-thin for maximum flavor" }
            ]
        },
        {
            id: 12,
            name: "Moroccan",
            image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800&h=600&fit=crop",
            region: "africa",
            description: "Moroccan cuisine is an intoxicating blend of Arab, Berber, and Mediterranean influences. Fragrant tagines, fluffy couscous, and the magical ras el hanout spice blend define this enchanting culinary tradition.",
            recipes: 14,
            rating: 4.3,
            popular: false,
            signatureDishes: ["Chicken Tagine", "Couscous Royale", "Harira Soup", "Pastilla", "Mint Tea"],
            techniques: [
                { name: "Tagine Cooking", description: "Slow-braising in a conical clay pot that traps steam and concentrates flavors" },
                { name: "Couscous Steaming", description: "Hand-rolling semolina and steaming it three times for impossibly light, fluffy grains" },
                { name: "Spice Toasting", description: "Dry-toasting and grinding whole spices for the complex ras el hanout blend" }
            ]
        }
    ];

    // DOM Elements
    const cuisinesGrid = document.getElementById('cuisines-grid');
    const loadingSpinner = document.getElementById('cuisines-loading');
    const noResults = document.getElementById('cuisines-no-results');
    const cuisineSearch = document.getElementById('cuisine-search');
    const regionFilter = document.getElementById('region-filter');
    const popularityFilter = document.getElementById('popularity-filter');
    const resetFiltersBtn = document.getElementById('reset-cuisine-filters');
    const resetFiltersBtnAlt = document.getElementById('reset-cuisine-filters-btn');
    const spotlightImage = document.getElementById('spotlight-image');
    const spotlightTitle = document.getElementById('spotlight-title');
    const spotlightRegion = document.getElementById('spotlight-region');
    const spotlightRecipes = document.getElementById('spotlight-recipes');
    const spotlightRating = document.getElementById('spotlight-rating');
    const spotlightDescription = document.getElementById('spotlight-description');
    const signatureDishes = document.getElementById('signature-dishes');
    const exploreTechniques = document.getElementById('explore-techniques');
    const techniquesModal = document.getElementById('techniques-modal');
    const techniquesCuisine = document.getElementById('techniques-cuisine');
    const techniquesGrid = document.getElementById('techniques-grid');
    const totalCuisines = document.getElementById('total-cuisines');
    const totalRecipes = document.getElementById('total-recipes');
    const totalCountries = document.getElementById('total-countries');

    // Initialize
    function init() {
        displayCuisines();
        setupSpotlight();
        updateStats();
        setupEventListeners();
    }

    // Display cuisines
    function displayCuisines() {
        cuisinesGrid.innerHTML = '';
        loadingSpinner.classList.add('active');

        setTimeout(() => {
            loadingSpinner.classList.remove('active');

            const searchTerm = cuisineSearch.value.toLowerCase();
            const regionValue = regionFilter.value;
            const popularityValue = popularityFilter.value;

            let filtered = [...cuisines];

            if (searchTerm) {
                filtered = filtered.filter(cuisine =>
                    cuisine.name.toLowerCase().includes(searchTerm) ||
                    cuisine.description.toLowerCase().includes(searchTerm) ||
                    cuisine.signatureDishes.some(d => d.toLowerCase().includes(searchTerm))
                );
            }

            if (regionValue !== 'all') {
                filtered = filtered.filter(cuisine => cuisine.region === regionValue);
            }

            switch(popularityValue) {
                case 'popular':
                    filtered.sort((a, b) => b.popular - a.popular || b.rating - a.rating);
                    break;
                case 'a-z':
                    filtered.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'z-a':
                    filtered.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'recipes':
                    filtered.sort((a, b) => b.recipes - a.recipes);
                    break;
            }

            if (filtered.length === 0) {
                noResults.classList.add('active');
                cuisinesGrid.style.display = 'none';
            } else {
                noResults.classList.remove('active');
                cuisinesGrid.style.display = 'grid';

                filtered.forEach((cuisine, index) => {
                    const cuisineCard = document.createElement('div');
                    cuisineCard.className = 'cuisine-card';
                    cuisineCard.style.animationDelay = `${index * 0.1}s`;
                    cuisineCard.innerHTML = `
                        <div class="cuisine-image" style="background-image: url('${cuisine.image}')">
                            <div class="cuisine-overlay"></div>
                            <h3>${cuisine.name}</h3>
                            <div class="cuisine-region-badge">${formatRegion(cuisine.region)}</div>
                        </div>
                        <div class="cuisine-info">
                            <div class="cuisine-meta">
                                <span><i class="fas fa-utensils"></i> ${cuisine.recipes} Recipes</span>
                                <span><i class="fas fa-star"></i> ${cuisine.rating}/5</span>
                            </div>
                            <p class="cuisine-description">${cuisine.description}</p>
                            <div class="cuisine-dishes">
                                ${cuisine.signatureDishes.slice(0, 3).map(d => `<span class="dish-tag">${d}</span>`).join('')}
                            </div>
                            <div class="cuisine-actions">
                                <a href="recipes.html?cuisine=${cuisine.name.toLowerCase()}" class="btn btn-cuisine btn-view-recipes">View Recipes</a>
                                <button class="btn btn-cuisine btn-learn-more" data-id="${cuisine.id}">Learn More</button>
                            </div>
                        </div>
                    `;
                    cuisinesGrid.appendChild(cuisineCard);
                });
            }
        }, 600);
    }

    function formatRegion(region) {
        if (region === 'middle-east') return 'Middle East';
        return region.charAt(0).toUpperCase() + region.slice(1);
    }

    // Setup cuisine spotlight
    function setupSpotlight() {
        const spotlightCuisine = cuisines.find(c => c.popular) || cuisines[0];
        updateSpotlight(spotlightCuisine);
    }

    function updateSpotlight(cuisine) {
        spotlightImage.style.backgroundImage = `url('${cuisine.image}')`;
        spotlightTitle.textContent = `${cuisine.name} Cuisine`;
        spotlightRegion.textContent = formatRegion(cuisine.region);
        spotlightRecipes.textContent = cuisine.recipes;
        spotlightRating.textContent = cuisine.rating;
        spotlightDescription.textContent = cuisine.description;

        signatureDishes.innerHTML = '';
        cuisine.signatureDishes.forEach(dish => {
            const dishElement = document.createElement('span');
            dishElement.className = 'signature-dish';
            dishElement.textContent = dish;
            signatureDishes.appendChild(dishElement);
        });

        exploreTechniques.dataset.id = cuisine.id;
        exploreTechniques.dataset.cuisine = cuisine.name;
    }

    // Show techniques modal
    function showTechniques(id) {
        const cuisine = cuisines.find(c => c.id === id);
        if (!cuisine) return;

        techniquesCuisine.textContent = `${cuisine.name} Cooking Techniques`;
        techniquesGrid.innerHTML = '';

        cuisine.techniques.forEach(tech => {
            const techCard = document.createElement('div');
            techCard.className = 'technique-card';
            techCard.innerHTML = `
                <div class="technique-icon"><i class="fas fa-mortar-pestle"></i></div>
                <h4>${tech.name}</h4>
                <p>${tech.description}</p>
            `;
            techniquesGrid.appendChild(techCard);
        });

        techniquesModal.classList.add('active');
    }

    // Update stats
    function updateStats() {
        totalCuisines.textContent = cuisines.length;
        const totalRecipesCount = cuisines.reduce((sum, cuisine) => sum + cuisine.recipes, 0);
        totalRecipes.textContent = totalRecipesCount;
        totalCountries.textContent = cuisines.length + 12;
    }

    // Setup event listeners
    function setupEventListeners() {
        cuisineSearch.addEventListener('input', displayCuisines);
        regionFilter.addEventListener('change', displayCuisines);
        popularityFilter.addEventListener('change', displayCuisines);

        resetFiltersBtn.addEventListener('click', resetFiltersFunc);
        if (resetFiltersBtnAlt) resetFiltersBtnAlt.addEventListener('click', resetFiltersFunc);

        // Learn more buttons
        cuisinesGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-learn-more') || e.target.closest('.btn-learn-more')) {
                const btn = e.target.classList.contains('btn-learn-more') ? e.target : e.target.closest('.btn-learn-more');
                const cuisineId = parseInt(btn.dataset.id);
                const cuisine = cuisines.find(c => c.id === cuisineId);

                if (cuisine) {
                    updateSpotlight(cuisine);
                    document.querySelector('.cuisine-spotlight').scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

        // Explore techniques button
        exploreTechniques.addEventListener('click', function() {
            const cuisineId = parseInt(this.dataset.id);
            showTechniques(cuisineId);
        });

        // Map marker click
        document.querySelectorAll('.map-marker').forEach(marker => {
            marker.addEventListener('click', function() {
                const cuisineName = this.dataset.cuisine;
                const cuisine = cuisines.find(c => c.name.toLowerCase() === cuisineName);

                if (cuisine) {
                    updateSpotlight(cuisine);
                    document.querySelector('.cuisine-spotlight').scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Close modal
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('active');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                techniquesModal.classList.remove('active');
            }
        });

        const modalClose = techniquesModal.querySelector('.modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                techniquesModal.classList.remove('active');
            });
        }
    }

    // Reset all filters
    function resetFiltersFunc() {
        cuisineSearch.value = '';
        regionFilter.value = 'all';
        popularityFilter.value = 'popular';
        displayCuisines();
    }

    // Initialize
    init();
});
