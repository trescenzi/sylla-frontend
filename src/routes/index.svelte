<script>
  import {generateName} from '../helpers/sylla-api.js';
  import { fade } from 'svelte/transition';
  import EnglishNamesForm from '../components/generate_english_names_form.svelte';
  import AnimatedWord from '../components/letters/AnimatedWord.svelte';

  let name = 'Hero';

  const getName = () => {
    if (typeof window !== 'undefined') {
      generateName({}).then(n => {
        name = n;
      })
    }
  };
</script>

<style>
	.welcome {
    justify-self: start;
	}
</style>

<div class="welcome">
  <AnimatedWord word="Welcome" />
  <AnimatedWord on:end={getName} word={name} />
</div>

<section>
  <h2>Simple, English based names:</h2>
  <EnglishNamesForm />
</section>
