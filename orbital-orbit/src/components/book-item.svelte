<script>
    import { writable } from "svelte/store";
    
    let condition = writable(false);
</script>
   

<div class="card card-side bg-base-200 shadow-xl">
    <div class="card-body">
      <p class="card-title">Title:</p>
      <p class="card title">Author:</p>
      <p>Genre:</p>
      <p>Editor:</p>
      <p>ISBN:</p>
      {#if $condition }
        <p>sommaire</p>
      
      <div class="card-actions justify-end">
        <button class="btn btn-primary" on:click={() =>  condition.set(false) }>Hide</button>
        
      </div>
      {:else}
      <div class="card-actions justify-end">
        <button class="btn btn-primary" on:click={() =>  condition.set(true) }>View summary</button>
        
      </div>
      {/if}
      
    </div>
  </div>
