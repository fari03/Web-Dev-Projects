 document.getElementById('addWorkExperience').addEventListener('click', function() {
    var workExperienceTextarea = document.getElementById('workExperience');
    var newWorkExperience = document.createElement('textarea');
    newWorkExperience.className = 'form-control';
    newWorkExperience.setAttribute('placeholder', 'Work Experience');
    newWorkExperience.setAttribute('required', 'true');
    workExperienceTextarea.parentNode.insertBefore(newWorkExperience, workExperienceTextarea.nextSibling);
  });

  // Generate resume on form submission
  document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var workExperience = document.getElementById('workExperience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var template = document.getElementById('template').value;
    var photo = document.getElementById('photo').value;
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;

    // Construct the resume HTML
    var resumeHTML = '<div class="row">' +
                        '<div class="col-md-6">' +
                          '<h3>' + firstName + ' ' + lastName + '</h3>' +
                          '<p>Email: ' + email + '</p>' +
                          '<p>Phone: ' + phone + '</p>' +
                          '<p>LinkedIn: ' + linkedin + '</p>' +
                          '<p>GitHub: ' + github + '</p>' +
                        '</div>' +
                        '<div class="col-md-6">' +
                          '<img src="' + photo + '" alt="Profile Photo" class="img-fluid">' +
                        '</div>' +
                      '</div>' +
                      '<h3>Work Experience</h3>' +
                      '<p>' + workExperience + '</p>' +
                      '<h3>Education</h3>' +
                      '<p>' + education + '</p>' +
                      '<h3>Skills</h3>' +                         '<p>' + skills + '</p>';

// Choose template based on user selection
if (template === 'template1') {
resumeHTML = '<div class="container">' +
                '<div class="row">' +
                  '<div class="col-md-12 text-center">' +
                    '<h1>Resume</h1>' +
                  '</div>' +
                '</div>' +
                '<div class="row mt-4">' +
                  '<div class="col-md-4">' +
                    resumeHTML +
                  '</div>' +
                '</div>' +
              '</div>';
} else if (template === 'template2') {
resumeHTML = '<div class="container">' +
                '<div class="row">' +
                  '<div class="col-md-12 text-center">' +
                    '<h1>Resume</h1>' +
                  '</div>' +
                '</div>' +
                '<div class="row mt-4">' +
                  '<div class="col-md-6">' +
                    resumeHTML +
                  '</div>' +
                '</div>' +
              '</div>';
} else {
resumeHTML = '<div class="container">' +
                '<div class="row">' +
                  '<div class="col-md-12 text-center">' +
                    '<h1>Resume</h1>' +
                  '</div>' +
                '</div>' +
                '<div class="row mt-4">' +
                  '<div class="col-md-8">' +
                    resumeHTML +
                  '</div>' +
                '</div>' +
              '</div>';
}

// Display the resume preview
var resumePreviewContainer = document.getElementById('previewContainer');
resumePreviewContainer.innerHTML = resumeHTML;
});
