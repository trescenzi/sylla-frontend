<script>
  import {generateNames} from '../helpers/sylla-api.js';
  let numNames = 10;
  let numSyllables = 3;
  let names = [];

  function handleSubmit(event) {
    event.preventDefault();
    generateNames({
      numSyllables,
      numNames,
    }).then(ns => names = ns);
  }
</script>

<style>
  .table {
    font-family: 'MedievalSharp', cursive;
    display: grid;
    column-gap: .5em;
    font-size: 1.25em;
    grid-template-columns: repeat( auto-fit, minmax(100px, max-content) );
    text-transform: capitalize;
  }
</style>

<form on:submit={handleSubmit}>
  <label>
    Number of Syllables: <input type="number" name="numSyllables" bind:value={numSyllables} />
  </label>
  <label>
    Number of Names: <input type="number" name="numNames" bind:value={numNames} />
  </label>
  <button>Generate Names</button>
</form>
<div  class="table">
  {#each names as name}
    <div>{name}</div>
  {/each}
</div>
