<script>
  import meetups from './MeetUps/meetups-store.js';

  import Header from './UI/Header.svelte';
  import MeetupGrid from './MeetUps/MeetupGrid.svelte';
  import EditMeetup from './MeetUps/EditMeetup.svelte';
  import Button from './UI/Button.svelte';

  export let appName;

  let editMode;

  // let meetups;

  function addMeetup(event) {
    let {
      title, 
      subtitle, 
      desc:description, 
      address, 
      url:imageUrl, 
      email:contactEmail
    } = event.detail
    
    const meetupData = {
      title,
      subtitle,
      imageUrl,
      description,
      address,
      contactEmail
    };

    meetups.addMeetup(meetupData);
    editMode = null;
  }

  function toggleFavorite(event) {
    const id = event.detail;
    meetups.toggleFavorite(id);
  }

  function cancelEdit() {
    editMode = null;
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
  <div class="meetup-controls">
    <Button on:click="{() => editMode = 'add'}">New Meetup</Button>
  </div>
  {#if editMode === 'add'}
    <EditMeetup on:save-form-data={addMeetup} on:cancel="{cancelEdit}" />
  {/if}
  <MeetupGrid meetups={$meetups} on:toggle-favorite="{toggleFavorite}" />
</main>