<script>
  export let names = '';
</script>

<style>
  .table {
    display: grid;
    column-gap: .5em;
    font-size: 1.25em;
    grid-template-columns: repeat( auto-fit, minmax(100px, max-content) );
    text-transform: capitalize;
  }
</style>

<div  class="table">
  {#each names as name}
    <div>{name}</div>
  {/each}
</div>
