<script>
  import Header from './UI/Header.svelte';
  import MeetupGrid from './MeetUps/MeetupGrid.svelte';

  export let appName;

  let title = '';
  let subtitle = '';
  let url = '';
  let address = '';
  let desc = '';
  let email = '';

  let meetups = [
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn to code in 2 hours',
      description: 'In this meetup, we\'ll have some experts that teach you how to code!',
      imageUrl: 'https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg',
      address: '27th Nerd Road, 45321 New York',
      contactEmail: 'code@bootcamp.com'
    },
    {
      id: 'm2',
      title: 'Swim Together',
      subtitle: 'Let\'s go for swimming',
      description: 'We\'ll simply swim some rounds',
      imageUrl: 'https://d1s9j44aio5gjs.cloudfront.net/2017/10/young_people_enjoying_swimming_-1320x743.jpg',
      address: '27th Nerd Road, 45321 New York',
      contactEmail: 'swim@letusswim.com'
    }
  ];

  function addMeetup() {
    const newMeetup = {
      id: Math.random().toString(),
      title,
      subtitle,
      imageUrl: url,
      description: desc,
      address,
      contactEmail: email
    };

    meetups = [newMeetup, ...meetups];
  }

</script>

<style>
  main {
    margin-top: 5rem;
  }

</style>

<Header {appName} />
<main>
  <form on:submit|preventDefault="{addMeetup}">
    <div class="form-control">
      <label for="title">Title</label>
      <input type="text" name="title" id="title" placeholder="Your title goes here" bind:value="{title}">
    </div>
    <div class="form-control">
      <label for="subtitle">Subtitle</label>
      <input type="text" name="subtitle" id="subtitle" placeholder="Your subtitle goes here" bind:value="{subtitle}">
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea name="description" id="description" rows="3" placeholder="Your description goes here"bind:value="{desc}"></textarea>
    </div>
    <div class="form-control">
      <label for="imageUrl">Image Url</label>
      <input type="url" name="imageUrl" id="imageUrl" placeholder="Please add image url" bind:value="{url}">
    </div>
    <div class="form-control">
      <label for="address">Address</label>
      <textarea name="address" id="address" rows="3" placeholder="Your address goes here" bind:value="{address}"></textarea>
    </div>
    <div class="form-control">
      <label for="contactEmail">E-mail</label>
      <input type="email" name="contactEmail" id="contactEmail" placeholder="Your e-mail Id goes here" bind:value="{email}">
    </div>
    <button type="submit">Save</button>
  </form>
  <MeetupGrid {meetups} />
</main>