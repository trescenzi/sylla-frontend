<script>
  import {generateNames} from '../helpers/sylla-api.js';
  import NameTable from './name_table.svelte';
  let numNames = 10;
  let numSyllablesPerName = 3;
  let nameSeeds = undefined;
  let names = [];

  function handleSubmit(event) {
    const input = {
      numSyllablesPerName,
      numNames,
    };
    if (nameSeeds && nameSeeds.length > 1) {
      input.nameSeeds = nameSeeds;
    }
    event.preventDefault();
    generateNames(input).then(ns => names = ns);
  }
</script>


<form on:submit={handleSubmit}>
  <label>
    Number of Syllables: <input type="number" name="numSyllables" bind:value={numSyllablesPerName} />
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
