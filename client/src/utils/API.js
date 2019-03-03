import axios from 'axios';

export default {
  // Gets the trashman with the given id
  getEvents: function(eventInfo) {
    console.log('eventInfo: ', eventInfo);
    return axios.get('/api/events' + eventInfo);
  },

  // Saves a trashman to the database
  saveEvent: function(newEvent) {
    console.log('trying to save event!');
    console.log('newEvent', newEvent);
    return axios.post('/api/event', newEvent);
  }
};
