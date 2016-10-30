
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

var projects = {
	"projects": [
		{"title": "Website Ski-fun-43",
		"dates": "juli 2015 - september 2015",
		"description": "designing and coding a website for a skiing travel site",
		"images": ["images/skiFun43.png"]
		},
		{"title": "Website Proefschriftmaken",
		"dates": "augustus 2016 - september 2016",
		"description": "designing and coding a website for a thesis printing site",
		"images": ["images/ProefschriftmakenHomeKl.png", "images/ProefschriftmakenOpmaken.png" ]
		}
	],
	"display": function() {
			for(var i = 0; i < projects.projects.length; i++ ) {
				$("#projects").append(HTMLprojectStart);
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    		   	$(".project-entry:last").append(formattedProjectTitle);
   		    	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
  		     	$(".project-entry:last").append(formattedProjectDates);
   		    	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
   		    	$(".project-entry:last").append(formattedProjectDescription);
   		    	if(projects.projects[i].images.length > 0) {
   		    		//for (image in projects.projects[i].images) {   // course solution
   		    		for(var j = 0; j < projects.projects[i].images.length; j++) {
   		    			//var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
   		    			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
   		    			$(".project-entry:last").append(formattedProjectImage);
   		    		}
   		    	}

			}
	}
};

var education = {
	"schools": [
		{"name": "Koninklijke Academie van Beeldende Kunsten",
		"location": "Den Haag",
		"degree dates": "1988",
		"degree": "BA",
		"majors": ["Ontwerpen", "Typografie", "Tekenen", "Fotografie"]
		},
		{"name": "Universiteit van Amsterdam",
		"location": "Amsterdam",
		"degree dates": "1983",
		"degree": "not graduated",
		"majors": ["none"]
		}
	],
	"onlineCourses": [
		{"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": "october 2016",
		"url": "udacity.com"
		}
	],
	"display": function() {
		for(var i = 0; i < education.schools.length; i++ ) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name );
			$(".education-entry:last").append(formattedSchoolName);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location );
			$(".education-entry:last").append(formattedSchoolLocation);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[i]["degree dates"] );
			$(".education-entry:last").append(formattedSchoolDates);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree );
			$(".education-entry:last").append(formattedSchoolDegree);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors );
			$(".education-entry:last").append(formattedSchoolMajor);
		}
		$("#education").append(HTMLonlineClasses);
		for(var i = 0; i < education.onlineCourses.length; i++ ) {
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title );
			$(".education-entry:last").append(formattedOnlineTitle);
			var formattedOnlineSchool= HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school );
			$(".education-entry:last").append(formattedOnlineSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates );
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url );
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
};

/*


var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>'; */




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

projects.display();
education.display();



/*$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});
*/
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
/*
$(document).click(function(loc) {
  console.log(loc.pageX, loc.pageY);
});
*/
$("#mapDiv").append(googleMap);
//createMapMarker(placeData) ;