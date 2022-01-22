<script>
  import Header from './UI/Header.svelte';
  import MeetupGrid from './MeetUps/MeetupGrid.svelte';
  import TextInput from './UI/TextInput.svelte';
  import Button from './UI/Button.svelte';

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

  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }

</style>

<Header {appName} />
<main>
  <form on:submit|preventDefault="{addMeetup}">
    <TextInput 
      id="title" 
      label="Title" 
      value="{title}" 
      type="text"
      on:input="{(event) => (title = event.target.value)}" 
      placeholder="Your title goes here"/>

    <TextInput 
      id="subtitle" 
      label="Subtitle" 
      value="{subtitle}" 
      type="text"
      on:input="{(event) => (subtitle = event.target.value)}" 
      placeholder="Your subtitle goes here"/>
    
    <TextInput 
      id="description" 
      label="Description" 
      value="{desc}" 
      row="3"
      controlType="textarea"
      on:input="{(event) => (desc = event.target.value)}" 
      placeholder="Please add some description"/>
    
    <TextInput 
      id="imageUrl" 
      label="imageUrl" 
      value="{url}" 
      type="url"
      on:input="{(event) => (url = event.target.value)}" 
      placeholder="Please add image url"/>
    
    <TextInput 
      id="address" 
      label="Address" 
      value="{address}" 
      row="3"
      controlType="textarea"
      on:input="{(event) => (address = event.target.value)}" 
      placeholder="Your address goes here"/>
    
    <TextInput 
      id="email" 
      label="email" 
      value="{email}" 
      type="email"
      on:input="{(event) => (email = event.target.value)}" 
      placeholder="Your e-mail Id goes here"/>
    
    <Button type="submit" caption="Save" />
  </form>
  <MeetupGrid {meetups} />
</main>