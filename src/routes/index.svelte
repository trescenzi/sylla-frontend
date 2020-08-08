<script>
  import {generateName} from '../helpers/sylla-api.js';
  import { fade } from 'svelte/transition';
  import EnglishNamesForm from '../components/generate_english_names_form.svelte';
  import MarkovNamesForm from '../components/markov_name_form.svelte';
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
  <h2>Simple, Random, English Based Names:</h2>
  <EnglishNamesForm />
</section>

<section>
  <h2>Markov Chain Based Names:</h2>
  <MarkovNamesForm />
</section>
