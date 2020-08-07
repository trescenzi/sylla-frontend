<script>
  import {generateName} from '../helpers/sylla-api.js';
  import { fade } from 'svelte/transition';
  import EnglishNamesForm from '../components/generate_english_names_form.svelte';

  let showName = true;
  let name = 'Hero';

  const fadeOut = () => setTimeout(() => {
    showName = false;
    getName();
  }, 2500);
  const getName = () => setTimeout(() => generateName({}).then(n => {
    showName = true;
    name = n;
    fadeOut();
  }), 2500);
  if (typeof window !== 'undefined') {
    fadeOut();
  }
</script>

<style>
	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
    text-transform: capitalize;
    justify-self: start;
	}
</style>

<h1>
  Welcome 
  {#if showName}
    <span in:fade out:fade="{{duration: 2500}}">{name}</span>
  {/if}
</h1>

<section>
  <h2>Simple, English based names:</h2>
  <EnglishNamesForm />
</section>
