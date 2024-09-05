script.js;
//store patient data
let patients = [];

//add new patient
function addPatient() {
  // Get input values
  let patientName = document.getElementById("patientName").value;
  let age = document.getElementById("age").value;
  let doctorAssigned = document.getElementById("doctorAssigned").value;

  if (patientName === "" || age === "" || doctorAssigned === "") {
    alert("Please fill in all fields");
    return;
  }

  // Create a new patient object
  let patient = {
    name: patientName,
    age: age,
    doctor: doctorAssigned,
  };

  // Add the new patient to the list
  patients.push(patient);

  // Update the UI
  updatePatientList();

  // Clear input fields
  document.getElementById("patientName").value = "";
  document.getElementById("age").value = "";
}

// Function to update the patient list in the table
function updatePatientList() {
  let patientList = document.getElementById("patientList");

  // Clear the current table rows
  patientList.innerHTML = "";

  // Loop through patients and display each in the table
  patients.forEach((patient) => {
    let row = `
            <tr>
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.doctor}</td>
            </tr>
        `;
    patientList.innerHTML += row;
  });
}
