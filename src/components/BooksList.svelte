<script>
import BookItem from "./BookItem.svelte";

export let resultat

</script>                     
    
<ul class="flex">
    {#each resultat.items as book}
        <li>
            <BookItem Id={book.id} Title={book.title} Author={book.expand.author_id} Genre={book.expand.genres_id} Editor={book.editor} ISBN={book.isbn} Summary={book.summary}/>
        </li>
    {/each}
</ul>
