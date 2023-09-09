<script>
    export let userData;
</script>
{#if userData}
  <h1>Profile de {userData.username}</h1>
{:else}
  <h1>Il semblmerait que vous ne soyez pas connecté ! </h1>
  <a href='/login' class="link primary">Créez un compte ou connectez vous ici</a>
{/if}
