var waitingApp = new Vue({
  el: '#PatientWaitingApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients () {
      fetch(dummy.php)
      .then(response => response.json ())
      .then(json => {waitingApp.person = json.results[0]});
        // .then(json => {waitingApp.person = json.results[0]); (patients data)
    }
  },
  created: function () {
    this.fetchPatients();
  }
});
