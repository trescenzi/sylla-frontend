<script>
  import {generateMarkovNames} from '../helpers/sylla-api.js';
  import NameTable from './name_table.svelte';
  let numNames = 10;
  let maxSyllablesPerName = 4;
  let minSyllablesPerName = 2;
  let names = [];
  let nameSeeds = undefined;

  function handleSubmit(event) {
    const input = {
      maxSyllablesPerName,
      minSyllablesPerName,
      numNames,
    };
    if (nameSeeds && nameSeeds.length > 1) {
      input.nameSeeds = nameSeeds;
    }
    event.preventDefault();
    generateMarkovNames(input).then(ns => names = ns);
  }
</script>


<form on:submit={handleSubmit}>
  <label>
    Min Syllables Per Name: <input type="number" name="minSyllablesPerName" bind:value={minSyllablesPerName} />
  </label>
  <label>
    Max Syllables Per Name: <input type="number" name="maxSyllablesPerName" bind:value={maxSyllablesPerName} />
  </label>
  <label>
    Number of Names: <input type="number" name="numNames" bind:value={numNames} />
  </label>
  <label>
    Seed Names(comma seperated): <textarea name="nameSeed" bind:value={nameSeeds} />
  </label>
  <button>Generate Names</button>
</form>
<NameTable names={names} />
