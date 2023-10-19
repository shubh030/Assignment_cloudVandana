$(document).ready(function () {
    $("#surveyForm").submit(function (event) {
        event.preventDefault();
      
        if (validateForm()) {
            displayPopup();
        }
    });

    function validateForm() {
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const dob = $("#dob").val();
        const country = $("#country").val();
        const gender = $("input[name='gender']:checked").val();
        const profession = $("#profession").val();
        const email = $("#email").val();
        const mobile = $("#mobile").val();

        if (firstName === "" || lastName === "" || dob === "" || country === "" || gender === undefined || profession === "" || email === "" || mobile === "") {
            $(".error").text("Please fill out all required fields.");
            return false;
        } else {
            $(".error").text("");
            return true;
        }
    }


    function displayPopup() {
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const dob = $("#dob").val();
        const country = $("#country").val();
        const gender = $("input[name='gender']:checked").val();
        const profession = $("#profession").val();
        const email = $("#email").val();
        const mobile = $("#mobile").val();

        const popupContent = `
            <div class="modal fade" id="resultPopup" tabindex="-1" role="dialog" aria-labelledby="resultPopupLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="resultPopupLabel">Form Submission Result</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p><strong>First Name:</strong> ${firstName}</p>
                            <p><strong>Last Name:</strong> ${lastName}</p>
                            <p><strong>Date of Birth:</strong> ${dob}</p>
                            <p><strong>Country:</strong> ${country}</p>
                            <p><strong>Gender:</strong> ${gender}</p>
                            <p><strong>Profession:</strong> ${profession}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Mobile Number:</strong> ${mobile}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        $("body").append(popupContent);
        $("#resultPopup").modal("show");

  
        $("#surveyForm")[0].reset();
    }
});