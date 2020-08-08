<script>
	import A from './a.svelte';
	import B from './b.svelte';
	import C from './c.svelte';
	import D from './d.svelte';
	import E from './e.svelte';
	import F from './f.svelte';
	import G from './g.svelte';
	import H from './h.svelte';
	import I from './i.svelte';
	import J from './j.svelte';
	import K from './k.svelte';
	import L from './l.svelte';
	import M from './m.svelte';
	import N from './n.svelte';
	import O from './o.svelte';
	import P from './p.svelte';
	import Q from './q.svelte';
	import R from './r.svelte';
	import S from './s.svelte';
	import T from './t.svelte';
	import U from './u.svelte';
	import V from './v.svelte';
	import W from './w.svelte';
	import X from './x.svelte';
	import Y from './y.svelte';
	import Z from './z.svelte';
  import { createEventDispatcher, tick } from 'svelte';

	const dispatch = createEventDispatcher();

	const letters = {A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z};

  // source: https://stackoverflow.com/a/2117523
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
	
	export let word = '';
	let wordLetters = [];
  function kickOffAnimation(word) {
    wordLetters = word.toUpperCase().split('').reduce((acc, letter) => [
      ...acc,
      {
        visible: false,
        component: letters[letter],
        id: uuidv4(), 
      },
    ], []);

    animateLoop();
  }
	async function animateWord(word) {
    await tick();
    if (wordLetters.length) {
      wordLetters = [];
      setTimeout(() => kickOffAnimation(word), 1500);
    } else {
      kickOffAnimation(word);
    }
	}
	
	function animateLoop(i = 0) {
		if (i < wordLetters.length) {
			wordLetters[i] = {
				...wordLetters[i],
				visible: !wordLetters[i].visbile,
			}
			setTimeout(() => animateLoop(i+1), 250)
    } else if (i !== 0 && i === wordLetters.length) {
      setTimeout(() => dispatch('end'), 1500);
    }
	}

  $: animateWord(word);
</script>

<style>
	.word {
		height: 60px;
    display: block;
	}
</style>

<div class="word">
	{#each wordLetters as letter (letter.id)}
		{#if letter.visible}
      <svelte:component 
        width={40} 
        height={40} 
        this={letter.component}
      />
		{/if}
	{/each}
</div>
