<template>
    <header class="app-header has-text-white has-background-primary">
        <!-- menu icon -->
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
  name: 'AppHeader',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.app-header {
    display: flex;
    align-items: center;
    padding: .75rem;

    h1 {
        flex: 1;
    }
}

/* TODO: this should be global? Or maybe a component */
.icon-button {
    font-size: 1.25rem;
    padding: 0;
    margin: 0;
    background: transparent;
    border: 0;
}
</style>
