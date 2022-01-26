<script>
  import meetups from './MeetUps/meetups-store.js';

  import Header from './UI/Header.svelte';
  import MeetupGrid from './MeetUps/MeetupGrid.svelte';
  import EditMeetup from './MeetUps/EditMeetup.svelte';
  import Button from './UI/Button.svelte';
  import MeetupDetail from './MeetUps/MeetupDetail.svelte';

  export let appName;

  let editMode;
  let page = 'overview';
  let pageData = {};

  // let meetups;

  function addMeetup() {
    editMode = null;
  }

  function cancelEdit() {
    editMode = null;
  }

  function showDetails(event) {
    page = 'details';
    pageData.id = event.detail;
  }

  function closeDetails() {
    page = 'overview';
    pageData = {};
  }

</script>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }

</style>

<Header {appName} />
<main>
  {#if page==='overview'}
    <div class="meetup-controls">
      <Button on:click="{() => editMode = 'add'}">New Meetup</Button>
    </div>
    {#if editMode === 'add'}
      <EditMeetup on:save-form-data={addMeetup} on:cancel="{cancelEdit}" />
    {/if}
    <MeetupGrid meetups={$meetups} on:show-details="{showDetails}" />
  {:else}
    <MeetupDetail id="{pageData.id}" on:close-details="{closeDetails}" />
  {/if}

</main>