import React, { useContext } from "react";
import { CoursesContext } from "../context/CoursesContext";

const AddCourseForm = () => {
  // Courses Context is being used here to keep track of the input fields
  // and provide functionality to add a new course
  // It's currently being added to a course array because app requires a
  // server to save it not locally
  const coursesContext = useContext(CoursesContext);
  const {
    addCourse,
    updateCourseName,
    chooseDepartment,
    curCourseName,
    curChosenDepartment
  } = coursesContext;

  return (
    <div className="add-course-form">
      <h1>Add New Course</h1>
      <input
        className="name-input"
        name="courseName"
        type="text"
        placeholder="Course name"
        value={curCourseName}
        onChange={updateCourseName}
      />
      <br />
      <select
        className="select-dep"
        name="option"
        value={curChosenDepartment}
        onChange={chooseDepartment}
      >
        <option value="" disabled>
          Choose department
        </option>
        <option value="Academic Bridging Program">Academic Bridging Program</option>
        <option value="Actuarial Science">Actuarial Science</option>
        <option value="American Studies">American Studies</option>
        <option value="Anatomy">Anatomy</option>
        <option value="Anthropology">Anthropology</option>
        <option value="Archaeology">Archaeology</option>
        <option value="Architecture and Visual Studies">Architecture and Visual Studies</option>
        <option value="Art History">Art History</option>
        <option value="Astronomy and Astrophysics">Astronomy and Astrophysics</option>
        <option value="Biochemistry">Biochemistry</option>
        <option value="Biology">Biology</option>
        <option value="Canadian Institute for Theoretical Astrophysics">Canadian Institute for Theoretical Astrophysics</option>
        <option value="Cell and Systems Biology">Cell and Systems Biology</option>
        <option value="Centre for Medieval Studies">Centre for Medieval Studies</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Cinema Studies Institute">Cinema Studies Institute</option>
        <option value="Classics">Classics</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Contemporary Asian Studies, Dr. David Chu Program in">Contemporary Asian Studies</option>
        <option value="Criminology and Sociolegal Studies, Centre for">Criminology and Sociolegal Studies</option>
        <option value="Diaspora and Transnational Studies">Diaspora and Transnational Studies</option>
        <option value="Drama, Theatre and Performance Studies (Centre for)">Drama, Theatre and Performance Studies</option>
        <option value="Earth Sciences">Earth Sciences</option>
        <option value="East Asian Studies">East Asian Studies</option>
        <option value="Ecology and Evolutionary Biology">Ecology and Evolutionary Biology</option>
        <option value="Economics">Economics</option>
        <option value="English">English</option>
        <option value="Environment (School of the)">Environment (School of the)</option>
        <option value="Estonian">Estonian</option>
        <option value="Ethics (Centre for)">Ethics</option>
        <option value="European Studies">European Studies</option>
        <option value="Finnish">Finnish</option>
        <option value="First Year Foundations">First-Year Foundations</option>
        <option value="Forest Conservation and Forest Biomaterials Science">Forest Conservation and Forest Biomaterials Science</option>
        <option value="French">French</option>
        <option value="Geography and Planning">Geography and Planning</option>
        <option value="German">German</option>
        <option value="History">History</option>
        <option value="History and Philosophy of Science and Technology">History and Philosophy of Science and Technology</option>
        <option value="Human Biology">Human Biology</option>
        <option value="Hungarian">Hungarian</option>
        <option value="Immunology">Immunology</option>
        <option value="Impact Centre">Impact Centre</option>
        <option value="Indigenous Studies">Indigenous Studies</option>
        <option value="Industrial Relations and Human Resources (Centre for)">Industrial Relations and Human Resources (Centre for)</option>
        <option value="Innis College">Innis College</option>
        <option value="Italian">Italian</option>
        <option value="Centre for Jewish Studies">Centre for Jewish Studies</option>
        <option value="Laboratory Medicine and Pathobiology">Laboratory Medicine and Pathobiology</option>
        <option value="Latin American Studies">Latin American Studies</option>
        <option value="Life Sciences">Life Sciences</option>
        <option value="Linguistics">Linguistics</option>
        <option value="Materials Science">Materials Science</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Molecular Genetics and Microbiology">Molecular Genetics and Microbiology</option>
        <option value="Munk One">Munk One</option>
        <option value="Music">Music</option>
        <option value="Near and Middle Eastern Civilizations">Near and Middle Eastern Civilizations</option>
        <option value="New College">New College</option>
        <option value="Nutritional Sciences">Nutritional Sciences</option>
        <option value="Peace, Conflict and Justice">Peace, Conflict and Justice</option>
        <option value="Pharmaceutical Chemistry">Pharmaceutical Chemistry</option>
        <option value="Pharmacology and Toxicology">Pharmacology and Toxicology</option>
        <option value="Philosophy">Philosophy</option>
        <option value="Physics">Physics</option>
        <option value="Physiology">Physiology</option>
        <option value="Planetary Science">Planetary Science</option>
        <option value="Political Science">Political Science</option>
        <option value="Portuguese">Portuguese</option>
        <option value="Psychology">Psychology</option>
        <option value="Public Health Sciences">Public Health Sciences</option>
        <option value="Public Policy">Public Policy</option><option value="Religion">Religion</option>
        <option value="Rotman Commerce">Rotman Commerce</option>
        <option value="St. Michael&#039;s College">St. Michael&#039;s College</option>
        <option value="Sexual Diversity Studies, Mark S. Bonham Centre for">Sexual Diversity Studies</option>
        <option value="Slavic Languages and Literatures">Slavic Languages and Literatures</option>
        <option value="Sociology">Sociology</option>
        <option value="South Asian Studies">South Asian Studies</option>
        <option value="Spanish">Spanish</option>
        <option value="Statistical Sciences">Statistical Sciences</option>
        <option value="Trinity College">Trinity College</option>
        <option value="University College">University College</option>
        <option value="Victoria College">Victoria College</option>
        <option value="Women and Gender Studies">Women and Gender Studies</option>
        <option value="Woodsworth College">Woodsworth College</option>
        <option value="Yiddish Studies">Yiddish Studies</option>
      </select>
      <br />
      <button onClick={addCourse}>Add Course</button>
    </div>
  );
};

export default AddCourseForm;
