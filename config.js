/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		
		{
    			module: "MMM-WunderGround",
   			position: "top_right",
    			config: {
        			apikey: 'b601a5c013064140', 
        			pws: 'Velizy-Villacoublay', 
       				hourly: '1',
        			fctext: '1',
        			fcdaycount: "4",
        			fcdaystart: "0",
        			hourlyinterval: "1",
        			hourlycount: "2",
        			alerttime: 10000,
        			alerttruncatestring: "english:",
				roundTmpDecs: 1,
				UseCardinals: 0,
				layout: "horizontal",
				sysstat: 0,
				units: 'metric'
    				}		
		},

  		{
      			module: "MMM-MyCommute",
      			position: "top_left",
     			header: "Traffic", 
      			config: {
				apikey: "AIzaSyCg8jzvx3oDNbsuuRJQgPRSzWCBkBeVoEs",
				origin: "14 Rue Paul Dautier, Vélizy-Villacoublay",
				destinations: [
					{
					destination: "10 Rue Marcel Dassault, 78140 Vélizy-Villacoublay",
					label: "Dassault Systèmes",
					mode: "walking"
					},
					{
					destination: "Place Louis-Armand, 75571 Paris Cedex 12",
					label: "Gare de Lyon",
					mode: "traffic"
					}
				]		

				
      				}
   		},
		{
			module: "MMM-cryptocurrency",
			position: "top_right",
			config: {
				currency: ['ethereum', 'bitcoin'],
				conversion: 'EUR',
				showUSD: false,
				headers: ['change24h', 'change1h', 'change7d'],
				displayType: 'logoWithChanges',
				showGraphs: true
				}
		},

		{
			module: 'MMM-Instagram',
			position: 'middle_center',
			config: {
				access_token: '5706437995.46b3446.6933dc9356cc4a44b1df767df820d2a8',
				count: 5,  
				min_timestamp: 0,
				animationSpeed: 2500,
				updateInterval: 12500,
				instaMaxWidth: '20%', // Optional parameter, can be relative (percentage) or absolute (px)
				instaMaxHeight: '200px' // Optional parameter, can be absolute only (px)
				}
		},

			
	]

};



/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
