import axios from 'axios';

export default {
  // Gets the events
  getEvents: function() {
    return axios.get('/api/events');
  },

  // Saves am event to the database
  saveEvent: function(newEvent) {
    return axios.post('/api/event', newEvent);
  }
};
