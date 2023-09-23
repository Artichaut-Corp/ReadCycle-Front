<script>
    export let Id
    export let Title
    export let Author
    export let Genre
    export let Editor
    export let ISBN
    export let Summary
    export let Cover
</script>
   

<div class="card card-side bg-base-200 shadow-xl mx-5 my-5 min-w-fit max-w-xl">

    <a href="/books/{Id}">
      <figure ><img src={`https://backendpblivres.hop.sh/api/files/ct4mfehqanmpshs/${Id}/${Cover}`} alt="Movie"/></figure>
    </a>
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


      <div class="card-actions justify-end">
      </div>

        <button class="btn btn-primary" onclick={`sum_modal_${Id}.showModal()`}>Voir le sommaire</button>
    </div>
    <dialog id={`sum_modal_${Id}`} class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Sommaire</h3>
        <p>{@html Summary}</p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Fermer</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>


