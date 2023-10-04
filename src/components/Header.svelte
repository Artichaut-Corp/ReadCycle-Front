<script>
  export let userData;
</script>

<navbar> 
  <header class="navbar bg-primary mb-12 top-0">
    <div class="flex-none justify-start">
      <a class="btn btn-ghost normal-case text-x1" href="/">TBD</a>
      <img src="/logo.svg" alt="logo"/>
    </div>
    <div class="flex-1 justify-center">
      <form method="POST">
        <input type="search" placeholder="Chercher un livre, un auteur" class="input input-bordered input-secondary focus:w-96" />
      </form>
    </div>
    <div class="flex-none justify-end">
      <div class="flex justify-end flex-1 px-2">
        <div class="flex items-stretch">
          <div class="flex place-items-center">
            {#if userData.isValid}
              <a class="link" href="/profile">{userData.model.name}</a>
            {:else}
              <a  class="link" href="/auth/login">Connection</a>
            {/if}
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost rounded-btn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg> 
            </label>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul tabindex="0" class="menu dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-52 mt-4">
              {#if userData.isValid}
                <li><a class="link" href="/profile">Profile</a></li>
                <li><a href="/auth/logout" class="link">Déconnexion</a></li>
              {:else}
                <li><a class="link" href="/auth/login">Connection</a></li>
              {/if}
              <li><a class="link" href="/books">Livres</a></li>
              <li><a class="link" href="/authors">Auteurs</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</navbar>
