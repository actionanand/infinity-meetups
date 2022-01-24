<script>
  import Header from './UI/Header.svelte';
  import MeetupGrid from './MeetUps/MeetupGrid.svelte';
  import EditMeetup from './MeetUps/EditMeetup.svelte';
  import Button from './UI/Button.svelte';

  export let appName;

  let editMode;

  let meetups = [
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn to code in 2 hours',
      description: 'In this meetup, we\'ll have some experts that teach you how to code!',
      imageUrl: 'https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg',
      address: '27th Nerd Road, 45321 New York',
      contactEmail: 'code@bootcamp.com',
      isFavorite: false
    },
    {
      id: 'm2',
      title: 'Swim Together',
      subtitle: 'Let\'s go for swimming',
      description: 'We\'ll simply swim some rounds',
      imageUrl: 'https://d1s9j44aio5gjs.cloudfront.net/2017/10/young_people_enjoying_swimming_-1320x743.jpg',
      address: '27th Nerd Road, 45321 New York',
      contactEmail: 'swim@letusswim.com',
      isFavorite: false
    }
  ];

  function addMeetup(event) {
    let {
      title, 
      subtitle, 
      desc:description, 
      address, 
      url:imageUrl, 
      email:contactEmail
    } = event.detail
    
    const newMeetup = {
      id: Math.random().toString(),
      title,
      subtitle,
      imageUrl,
      description,
      address,
      contactEmail
    };

    meetups = [newMeetup, ...meetups];
    editMode = null;
  }

  function toggleFavorite(event) {
    const id = event.detail;
    const updatedMeetup = {...meetups.find(meetUp => meetUp.id === id)};
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    const meetUpIndex = meetups.findIndex(meetUp => meetUp.id === id);
    const updatedMeetups = [...meetups];
    updatedMeetups[meetUpIndex] = updatedMeetup;
    meetups = updatedMeetups;
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
    <EditMeetup on:save-form-data={addMeetup} />
  {/if}
  <MeetupGrid {meetups} on:toggle-favorite="{toggleFavorite}" />
</main>