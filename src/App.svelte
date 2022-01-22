<script>
  import Header from './UI/Header.svelte';
  import MeetupGrid from './MeetUps/MeetupGrid.svelte';

  export let appName;

  const meetups = [
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
</script>

<style>
  main {
    margin-top: 5rem;
  }

</style>

<Header {appName} />
<main>
  <MeetupGrid {meetups} />
</main>