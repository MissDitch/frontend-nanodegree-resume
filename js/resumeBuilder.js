
var work = {
	"jobs": [
	{"employer": "Boxpress",
	"title": "Webdesigner",
	"location": "Leiden",
	"dates": "april 2016 - september 2016",
	"description": "designing websites, writing HTML en CSS, webshop backoffice assistance"
	},
	{"employer": "Digiforce",
	"title": "Coder",
	"location": "Leiden",
	"dates": "oktober 2015 - march 2016",
	"description": "designing websites, writing HTML en CSS"
	},
	{"employer": "Microweb Edu",
	"title": "Projectbegeleider / Dtp-er",
	"location": "Leiden",
	"dates": "may 2009 - april 2012",
	"description": "desktop publishing, digital products helpdesk"
	}
	]
};

var projects = {
	projects: [
		{"title": "Website Ski-fun-43",
		"dates": "juli 2015 - september 2015",
		"description": "designing and coding a website for a skiing travel site",
		"images": ["images/skiFun43.png"]
		}
	]
};

var bio = {
	"name": "Marian Sloot",
	"role": "Frontend Webdeveloper",
	"welcomeMessage": "Welcome, thanks for visiting!",
	"bioPic": "images/Marian-51-profiel.jpg",
	"contacts": {
		"mobile": "06-30269091",
		"email": "mjtsloot@icloud.com",
		"github": "MissDitch",
		"twitter": "@MarianSloot",
		"location": "Berkel en Rodenrijs"
	},

	"skills": ["HTML", "CSS", "JavaScript"]

};

var education = {
	"schools": [
		{"name": "Koninklijke Academie van Beeldende Kunsten",
		"city": "Den Haag",
		"degree dates": "1988",
		"url": "www.kabk.nl",
		"majors": ["Ontwerpen", "Typografie", "Tekenen", "Fotografie"]
		},
		{"name": "Universiteit van Amsterdam",
		"city": "Amsterdam",
		"degree dates": "none",
		"url": "www.uva.nl",
		"majors": ["none"]
		}
	],
	"onlineCourses": {
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": "october 2016",
		"url": "udacity.com"
	}
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedBioPic);

//var formattedContactInfo = HTMLcontactGeneric.replace("%data%", bio.contacts);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

//$("#topContacts").append(formattedContactInfo);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);



function displayWork() {
	//for(var i = 0; i < work.jobs.length; i++ ) {
	for (job in work.jobs) {  // oplossing in de cursus
//	for(jobs in work) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job]['employer']);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		//var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work);
		//var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
       	$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
       	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
       	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
       	$(".work-entry:last").append(formattedWorkDates);
       	$(".work-entry:last").append(formattedWorkDescription);
	}
//}
}
displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

$("#main").append(internationalizeButton);

function inName() {
	var name = bio.name;
	var names = name.split(" ");   //names.trim().split(" ");
	firstName = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	lastName = names[1].toUpperCase();
	var intName = firstName + " " + lastName;

	return intName;
}
inName();

korter:
function inName() {
	var name = bio.name;
	var names = name.split(" ");   //names.trim().split(" ");
	name[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	name[1] = names[1].toUpperCase();

	return name[0] + " " + name[1];
}