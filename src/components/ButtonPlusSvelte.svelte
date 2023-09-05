<script>
    let count =0;
    function increment() {
        count+=1;
    }
</script>

<button on:click={increment} class="btn btn-primary">Ce bouton a été cliqué {count} fois</button>


