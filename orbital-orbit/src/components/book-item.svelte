<script>
    import { writable } from "svelte/store";
    export let Title
    export let Author
    export let Genre
    export let Editor
    export let ISBN
    export let Summary
    let condition = writable(false);
</script>
   

<div class="card card-side bg-base-200 shadow-xl mx-5 my-5">
    <div class="card-body">
      <p class="card-title">Title : {Title}</p>
      <p class="card title">Author : {Author}</p>
      <p>Genre : {Genre}</p>
      <p>Editor : {Editor}</p>
      <p>ISBN : {ISBN}</p>
      {#if $condition }
        <p>Summary : {@html Summary}</p>
      
      <div class="card-actions justify-end">
        <button class="btn btn-primary" on:click={() =>  condition.set(false) }>Hide summary</button>
        
      </div>
      {:else}
      <div class="card-actions justify-end">
        <button class="btn btn-primary" on:click={() =>  condition.set(true) }>View summary</button>
        
      </div>
      {/if}
      
    </div>
  </div>
