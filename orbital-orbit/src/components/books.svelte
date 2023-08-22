<script>

import BookItem from "./book-item.svelte";


    const books = [
        {
            "title": "Livre Test",
            "author": "FHPLOUF"
        },
        {
            "title": "Livre Test 2",
            "author": "kfpfk"
        }
       
    ]
</script>
<ul>
    {#each books as book}
        <BookItem>Titre: {book.title} Auteur: {book.author}</BookItem>
    {/each}
</ul>
