<script>
  import  pb from '../pocketbase.ts'

  export let userData;
  // N'est meme pas exécutée
  const logout = async () => {
    pb.authStore.clear()
  }

</script>

<navbar> 
  <header class="navbar bg-primary mb-12">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-x1" href="/">TBD</a>
      <img src="logo.svg" alt="logo"/>
    </div>
    <div class="flex-none">
      <div class="flex justify-end flex-1 px-2">
        <div class="flex items-stretch">
          <div class="flex place-items-center">
            {#if userData.isValid}
              <a class="link" href="/profile">{userData.model.name}</a>
            {:else}
              <a  class="link" href="/login">Connection</a>
            {/if}
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost rounded-btn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg> 
            </label>
            <ul tabindex="0" class="menu dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-52 mt-4">
              {#if userData.isValid}
                <li><a class="link" href="/profile">Profile</a></li>
                <!-- Ici on ne peut malheuresement pas accéder au propriétés d'astro, et donc je pense créer un page à part entière-->
                <li><button onClick="" on:click={logout} class="link">Déconnexion</button></li>
              {:else}
                <li><a class="link" href="/login">Connection</a></li>
              {/if}
              <li><a class="link" href="/books">Livres</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</navbar>

<dialog id="logout" class="modal modal-bottom sm:modal-middle">
  <form method="dialog" class="modal-box">
    <h3 class="font-bold text-lg">Vous avez bien été déconnecté</h3>
    <div class="modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn">Fermer</button>
    </div>
  </form>
</dialog>

