<script>
    import { writable } from "svelte/store";
    export let Id
    export let Title
    export let Author
    export let Genre
    export let Editor
    export let ISBN
    export let Summary
    let condition = writable(false);
</script>
   

<div class="card card-side bg-base-200 shadow-xl mx-5 my-5 min-w-fit max-w-xl">
    <div class="card-body">
      <h1 class="card-title link"><a href="/books/{Id}">Titre: {Title}</a></h1>
      <p><span class="text-neutral-content text-lg font-bold">Auteur: </span><a href="/authors/{Author.id}" class="link">{Author.first_name}, {Author.last_name}</a></p>
      <p>
        <span class="text-neutral-content text-lg font-bold">Genres: </span>
        {#each Genre as genre, index}
          {#if index == Genre.length -1 }
            {genre.name}
          {:else}
            {genre.name + ", "}
          {/if}
        {/each}
      </p>
      <p><span class="text-neutral-content text-lg font-bold">Editeur: </span><a href="{Editor}" class="link">{Editor}</a></p>
      <p><span class="text-neutral-content text-lg font-bold">ISBN: </span>{ISBN}</p>

      {#if $condition }
        <span class="text-neutral-content text-lg font-bold">Sommaire: </span>
        <div class="overflow-y-scroll h-52 border-solid border-base-100 outline-4 border-4 rounded-md">
          <p>{@html Summary}</p>
        </div>
        <div class="card-actions justify-end ">
          <button class="btn btn-primary" on:click={() =>  condition.set(false) }>Cacher le sommaire</button>
        </div>
      {:else}
      <div class="card-actions justify-end">
        <button class="btn btn-primary" on:click={() =>  condition.set(true) }>Voir le sommaire</button>
      </div>
      {/if}
    </div>
  </div>
