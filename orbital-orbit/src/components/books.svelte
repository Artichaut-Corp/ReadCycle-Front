<script>
import BookItem from "./book-item.svelte";

export let resultat

</script>                     
    
<ul>
    {#each resultat.items as book}
        <BookItem Title={book.title} Author={book.author} Genre={book.genre_id} Editor={book.editor} ISBN={book.isbn} Summary={book.summary}/>
    {/each}
</ul>
