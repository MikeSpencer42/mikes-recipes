<template>
    <header class="app-header has-text-white has-background-primary">
        <!-- TODO: only show on detail, wire up to go back to list -->
        <button type="button" 
                class="icon-button" 
                aria-label="Menu"
                title="Menu">
            <i class="fas fa-arrow-left"></i>
        </button>

        <h1 class="is-size-5 is-marginless has-text-centered is-uppercase">
            Mike's Recipes
        </h1>
    </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.app-header {
    display: flex;
    align-items: center;
    padding: .75rem;

    h1 {
        flex: 1;
    }
}
</style>
