<template>
    <ul class="app-list">
        <!-- TODO: repeat over dataset -->
        <li>
            <a>
                <button type="button"
                        class="icon-button favorite has-text-warning"
                        aria-label="View Recipe"
                        title="View Recipe">
                    <i class="fas fa-star"></i>
                </button>
                <div class="primary">
                    <h2 class="title is-5">Apple Pie</h2>
                    <p class="subtitle is-6">Total Time: 2 hours</p>
                    <div class="tags">
                        <b-tag rounded>apples</b-tag>
                        <b-tag rounded>dessert</b-tag>
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
        <li>
            <a>
                <button type="button"
                        class="icon-button favorite has-text-warning"
                        aria-label="View Recipe"
                        title="View Recipe">
                    <i class="fas fa-star"></i>
                </button>
                <div class="primary">
                    <h2 class="title is-5">Apple Pie</h2>
                    <p class="subtitle is-6">Total Time: 2 hours</p>
                    <div class="tags">
                        <b-tag rounded>apples</b-tag>
                        <b-tag rounded>dessert</b-tag>
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
        <li>
            <a>
                <button type="button"
                        class="icon-button favorite has-text-warning"
                        aria-label="View Recipe"
                        title="View Recipe">
                    <i class="fas fa-star"></i>
                </button>
                <div class="primary">
                    <h2 class="title is-5">Apple Pie</h2>
                    <p class="subtitle is-6">Total Time: 2 hours</p>
                    <div class="tags">
                        <b-tag rounded>apples</b-tag>
                        <b-tag rounded>dessert</b-tag>
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
export default {
    name: 'AppList'
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
