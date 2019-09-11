var waitingApp = new Vue({
  el: '#PatientWaitingApp',
  data: {
    patients: [
    	{
    		"patientGuid": "FIGHT-PUNCH-KICK-0123",
    		"firstName": "Chuck",
    		"lastName": "Norris",
    		"dob": "1940-03-10",
    		"sexAtBirth": "M"
    	},
    	{
    		"patientGuid": "BITE-CHEW-SWALLOW-2019",
    		"firstName": "Bear",
    		"lastName": "Grylls",
    		"dob": "1989-07-21",
    		"sexAtBirth": "M"
    	},
    	{
    		"patientGuid": "DROP-OUT-HS001",
    		"firstName": "Didi",
    		"lastName": "Conn",
    		"dob": "1951",
    		"sexAtBirth": "W"
    	}
    ]
  }
});
