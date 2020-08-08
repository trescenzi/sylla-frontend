<script>
  import {generateMarkovNames} from '../helpers/sylla-api.js';
  import NameTable from './name_table.svelte';
  let numNames = 10;
  let maxSyllablesPerName = 4;
  let minSyllablesPerName = 2;
  let names = [];

  function handleSubmit(event) {
    event.preventDefault();
    generateMarkovNames({
      maxSyllablesPerName,
      minSyllablesPerName,
      numNames,
    }).then(ns => names = ns);
  }
</script>


<form on:submit={handleSubmit}>
  <label>
    Min Syllables Per Name: <input type="number" name="numSyllables" bind:value={minSyllablesPerName} />
  </label>
  <label>
    Max Syllables Per Name: <input type="number" name="numSyllables" bind:value={maxSyllablesPerName} />
  </label>
  <label>
    Number of Names: <input type="number" name="numNames" bind:value={numNames} />
  </label>
  <button>Generate Names</button>
</form>
<NameTable names={names} />
