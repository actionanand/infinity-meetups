<script>
  import meetups from './MeetUps/meetups-store.js';

  import Header from './UI/Header.svelte';
  import MeetupGrid from './MeetUps/MeetupGrid.svelte';
  import EditMeetup from './MeetUps/EditMeetup.svelte';
  import MeetupDetail from './MeetUps/MeetupDetail.svelte';
  import LoadingSpinner from './UI/LoadingSpinner.svelte';

  export let appName;

  let editMode;
  let page = 'overview';
  let pageData = {};
  let editedId = null;
  let isLoading = true;

  // let meetups;

  fetch('https://vue-http-exmp-default-rtdb.firebaseio.com/meetups.json').then(res => {
    if(!res.ok) {
      throw new Error('Error fetching meetup data');
    }
    return res.json();
  }).then(data => {
    const loadedMeetups = [];
    for (const key in data) {
      loadedMeetups.push({
        ...data[key],
        id: key
      });
    }
    isLoading = false;
    meetups.setMeetups(loadedMeetups);
  }).catch(err => {
    isLoading = false;
    console.log(err.message);
  });

  function onSaveMeetup() {
    editMode = null;
    editedId = null;
  }

  function cancelEdit() {
    editMode = null;
    editedId = null;
  }

  function showDetails(event) {
    page = 'details';
    pageData.id = event.detail;
  }

  function closeDetails() {
    page = 'overview';
    pageData = {};
  }

  function onEditMeetup(event) {
    editMode = 'edit';
    editedId = event.detail;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }

</style>

<Header {appName} />
<main>
  {#if page==='overview'}
    {#if editMode === 'edit'}
      <EditMeetup id={editedId} on:save-form-data={onSaveMeetup} on:cancel="{cancelEdit}" />
    {/if}
    
    {#if isLoading}
      <LoadingSpinner/>
    {:else}
      <MeetupGrid meetups={$meetups} on:show-details="{showDetails}" on:edit-meetup="{onEditMeetup}"
        on:add-meetup="{() => editMode = 'edit'}"/>
    {/if}
  {:else}
    <MeetupDetail id="{pageData.id}" on:close-details="{closeDetails}" />
  {/if}

</main>