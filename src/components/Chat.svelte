<script lang="ts">
    const messages: string[] = [ "Salut ça va ?", "Ca va et toi ?"]

    export let isDeployed: boolean;
</script>

{#if isDeployed}
 <div class="fixed bottom-0 right-0">
    <ul>
   {#each messages as message}
        <li>{message}</li>
   {/each} 
    </ul>
</div>   
{/if}
