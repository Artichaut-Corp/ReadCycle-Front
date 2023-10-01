<script>
    const messages = [ "Salut ça va ?", "Ca va et toi ?"]
</script>

<div class="fixed bottom-0 right-0">
    <ul>
   {#each messages as message}
        <li>{message}</li>
   {/each} 
    </ul>
</div>