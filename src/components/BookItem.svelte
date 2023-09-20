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
      <h1 class="card-title link"><a href="/books/{Id}">Title: {Title}</a></h1>
      <p><span class="text-neutral-content text-lg font-bold">Author: </span>{Author}</p>
      <p><span class="text-neutral-content text-lg font-bold">Genre: </span>{Genre}</p>
      <p><span class="text-neutral-content text-lg font-bold">Editor: </span>{Editor}</p>
      <p><span class="text-neutral-content text-lg font-bold">ISBN: </span>{ISBN}</p>

      {#if $condition }
        <span class="text-neutral-content text-lg font-bold">Summary: </span>
        <div class="overflow-y-scroll h-52 border-solid border-base-100 outline-4 border-4 rounded-md">
          <p>{@html Summary}</p>
        </div>
        <div class="card-actions justify-end ">
          <button class="btn btn-primary" on:click={() =>  condition.set(false) }>Hide summary</button>
        </div>
      {:else}
      <div class="card-actions justify-end">
        <button class="btn btn-primary" on:click={() =>  condition.set(true) }>View summary</button>
      </div>
      {/if}
    </div>
  </div>
