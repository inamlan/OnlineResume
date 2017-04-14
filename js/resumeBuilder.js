/*
This is empty on purpose! Your code to build the resume will go here.
 */

 /*--- bio ---*/
var bio = {
    "name": "Ibrahim Alnamlah",
    "role": "IT Auditor",
    "contacts": {
        "mobile": "+966560050162",
        "email": "inamlan@gmail.com",
        "twitter":"@inamlan",
        "github": "inamlan",
        "location": "Riyadh, Saudi Arabia"
    },
    "biopic": "images/me.png",
    "welcomeMessage": "I'm currently working as a IT Auditor in Alinma Bank",
    "skills": ["C, C++, Visual C++", "Java", "SQL, PL/SQL.", "HTML, CSS, JavaScript"],
    };

var work = {
    "jobs": [
      {
     			"employer": "Alinma Bank",
     			"title": "IT Auditor",
     			"location": "Riyadh, Saudi Arabia",
     			"dates": "Dec 2015 - Now",
     			"description": "My primary responsibilities is to Audit IT systems within the bank IT infrastructure." +
     			"Administration of Audit system used in Audit group (TeamMate system)."
     		},
     		{
     			"employer": "TATA Consultancy Services",
     			"title": "System Engineer",
     			"location": "Riyadh, Saudi Arabia",
     			"dates": "May 2013 - Dec 2015",
     			"description": "Gathering requirement for Oracle Middleware Applications."+
     				"Support for Oracle Web Center Portals and Oracle Web Center Contents."+
     				"Uploading and updating content to WebCentre Content."+
     				"provideing Support for Oracle HCM."
     		}
    ]
};

var education = {
  "schools":[
    {
      "name": "Imam Mohammed Ibn Saud University",
      "location": "Riyadh, Saudi Arabia",
      "degree": "Bachelors of Computer Science",
      "majors": ["Computer Science"],
			"dates": "2007 - 2013",
			"url": "https://imamu.edu.sa/Pages/default.aspx",
    }
  ],
  "onlineCourses": [
    {
      "school": "Udacity",
      "title": "FNED",
      "dates": "2017",
			"url": "https://www.udacity.com/"
		}
	]
};

var projects = {
    "projects": [{
            "title": "Online Recruitment System",
            "dates": "2013",
            "description": "My University graduation project is an Online Recruitment System.",
            "images": ["images/pro1.png"]
        },

    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").append(formattedName);
    $("#header").append(formattedRole);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);


    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    for (var i = 0; i < formattedContactInfo.length; i++) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    }



    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }

};

bio.display();

work.display = function () {
    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (var i = 0; i < work.jobs.length; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }
}

work.display();

projects.display = function() {
    if (projects.projects.length > 0) {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].link);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);


            for (var img = 0; img < projects.projects[i].images.length; img++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};

projects.display();

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var j = 0; j < education.onlineCourses.length; j++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title).replace("#", education.onlineCourses[j].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url).replace("#", education.onlineCourses[j].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
};

education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
