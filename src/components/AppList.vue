<template>
    <ul class="app-list" 
        v-if="recipes.length">
        <!-- TODO: repeat over dataset -->
        <li v-for="recipe in recipes" 
            v-bind:key="recipe.id">
            <a>
                <button type="button"
                        class="icon-button favorite"
                        v-bind:class="{'has-text-warning': recipe.favorite}"
                        aria-label="View Recipe"
                        title="View Recipe">
                    <i class="fas fa-star"></i>
                </button>
                <div class="primary">
                    <h2 class="title is-5">{{ recipe.name }}</h2>
                    <!-- TODO: consider computed property -->
                    <p class="subtitle is-6">Total Time: {{ recipe.time.prep + recipe.time.cook }} mins</p>
                    <div class="tags">
                        <b-tag rounded 
                               v-for="tag in recipe.tags"
                               v-bind:key="tag">
                           {{ tag }}
                       </b-tag>
                    </div>
                </div>
                <div class="secondary">
                    <button type="button"
                            class="icon-button"
                            aria-label="View Recipe"
                            title="View Recipe">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button type="button"
                            class="icon-button"
                            aria-label="Edit Recipe"
                            title="Edit Recipe">
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                </div>
            </a>
        </li>
    </ul>
</template>

<script>
// TODO: is this the proper syntax?
export default {
    name: 'AppList',
    data: function() {
        return {
            recipes: [
                {
                    id: 0,
                    name: 'Autumn Carrot and Sweet Potato Soup',
                    url: 'https://www.onceuponachef.com/recipes/autumn-carrot-and-sweet-potato-soup.html',
                    servings: 8,
                    time: {
                        prep: 0,
                        cook: 45,
                    },
                    ingredients: [
                        '4 tablespoons unsalted butter',
                        '2 medium yellow onions, chopped',
                        '1 tablespoon curry powder, plus a bit more for serving',
                        '1 pound carrots, peeled and chopped into 1-inch pieces',
                        '1-1/2 pounds sweet potatoes (about 2 small), peeled and chopped into 1-inch pieces',
                        '8 cups chicken broth, best quality such as Swanson',
                        '1-3/4 teaspoons salt',
                        '1 tart yet sweet apple (such as Honeycrisp or Fuji), peeled and chopped',
                        '2 tablespoons honey',
                        'Freshly ground black pepper',
                    ],
                    instructions: [
                        'In a large pot, melt the butter over medium heat. Add the onions and cook, stirring frequently, until soft and translucent, about 10 minutes. Do not brown. Add the curry powder and cook a minute more.',
                        'Add the carrots, sweet potatoes, chicken broth and salt and bring to a boil. Cover and simmer over low heat until vegetables are very tender, about 25 minutes. Stir in the apples and honey. Using a stick blender, puree the soup until smooth and creamy. (Alternatively, cool the soup slightly, then puree in a blender in batches. Be sure to leave the hole in the lid open, and cover with a kitchen towel, to allow the steam to escape.) Season to taste with salt, pepper and more honey if necessary. Ladle soup into bowls and sprinkle with more curry powder if desired. (Note: As the soup sits, it will thicken up so you may need to add a bit of water to thin it out.)',
                        '<b>Freezer-Friendly Instructions</b>: The soup can be frozen for up to 3 months. Defrost the soup in the refrigerator for 12 hours and then reheat it on the stovetop over medium heat until hot.'
                    ],
                    tags: [
                        'soup',
                        'sweet potatoes',
                        'carrots'
                    ],
                    rating: null,
                    favorite: null,
                    image: null
                },
                {
                    id: 1,
                    name: 'Butternut Squash Soup',
                    url: 'https://www.allrecipes.com/recipe/77981/butternut-squash-soup-ii/',
                    servings: 4,
                    time: {
                        prep: 25,
                        cook: 45,
                    },
                    ingredients: [
                        '2 tablespoons butter',
                        '1 small onion, chopped',
                        '1 stalk celery, chopped',
                        '1 medium carrot, chopped',
                        '2 medium potatoes, cubed',
                        '1 medium butternut squash - peeled, seeded, and cubed',
                        '1 (32 fluid ounce) container chicken stock',
                        'salt and freshly ground black pepper to taste',
                    ],
                    instructions: [
                        'Melt the butter in a large pot, and cook the onion, celery, carrot, potatoes, and squash 5 minutes, or until lightly browned. Pour in enough of the chicken stock to cover vegetables. Bring to a boil. Reduce heat to low, cover pot, and simmer 40 minutes, or until all vegetables are tender.',
                        'Transfer the soup to a blender, and blend until smooth. Return to pot, and mix in any remaining stock to attain desired consistency. Season with salt and pepper.'
                    ],
                    tags: [
                        'soup',
                        'butternut squash'
                    ],
                    rating: 4,
                    favorite: true,
                    image: null
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    // TODO: move styles to separate stylesheet to get access to Bulma SCSS variables
    .app-list {
        li:not(:last-child) {
            border-bottom: 1px solid #ddd; // $border
        }

        a {
            display: flex;
            padding: .75rem;

            &:hover, &:focus {
                background: #eee;
            }

            .favorite {
                margin-right: .75rem;
            }

            .primary {
                flex: 1;

                .subtitle {
                    margin-bottom: .25rem;
                }
            }

            .secondary .icon-button {
                margin-left: .75rem;
            }
        }
    }
</style>
