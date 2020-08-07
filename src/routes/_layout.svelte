<style>
	main {
    height: 100vh;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
    display: grid;
    justify-items: center;
    align-content: start;
    background-color: #F7EFE0;
	}

  header {
    font-family: 'MedievalSharp', cursive;
    background-color: #14415E;
    color: white;
    font-size: 4em;
    padding: 0.25em;
  }
</style>

<svelte:head>
	<title>Sylla Name Gen</title>
</svelte:head>

<header>
  Sylla
</header>

<main>
	<slot></slot>
</main>
