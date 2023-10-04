<script lang="ts">
   export let userData: any;
</script>

{#if userData}
  <h1>Profile de {userData.username}</h1>
{:else}
  <h1>Il semblerait que vous ne soyez pas connecté ! </h1>
  <a href='/auth/login' class="link primary">Créez un compte ou connectez vous ici</a>
{/if}
