import { writable } from "svelte/store";

let meetupsData = [
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

const meetups = writable(meetupsData);

const customMeetupStore = {
  subscribe: meetups.subscribe,
  addMeetup: (meetupData) => {
    const newMeetup = {
      ...meetupData,
      id: Math.random().toString(),
      isFavorite: false
    };
    meetups.update((items) => {
      return [newMeetup, ...items];
    });
  },
  updateMeetup: (id, meetupData) => {
    meetups.update(items => {
      const indexOfItemToBeEdited = items.findIndex(i => i.id === id);
      const updatedMeetup = {...items[indexOfItemToBeEdited], ...meetupData};
      const updatedMeetups = [...items];
      updatedMeetups[indexOfItemToBeEdited] = updatedMeetup;
      return updatedMeetups;
    });
  },
  deleteMeetup: (id) => {
    meetups.update(items => {
      return items.filter(item => item.id !== id);
    });
  },
  toggleFavorite: (id) => {
    meetups.update((items) => {
      const updatedMeetup = {...items.find(meetUp => meetUp.id === id)};
      updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
      const meetUpIndex = items.findIndex(meetUp => meetUp.id === id);
      const updatedMeetups = [...items];
      updatedMeetups[meetUpIndex] = updatedMeetup;
      return updatedMeetups;
    });
  }
};

export default customMeetupStore;