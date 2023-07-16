
import { data } from "./Data";
import { useState } from "react";
export default function App() {
  const [studentData, setStudentData] = useState(data);
  function Scores({ scores }) {
    return scores.map((score) => (
      <div>
        <p> Date {score.date}</p>
        <p> Score {score.score} </p>
      </div>
    ));
  }

  function StudentRecord() {
    console.log(studentData);
    return studentData.map((student) => (
      <div key={student.name}>
        <h1>{student.name}</h1>
        <p>{student.bio}</p>
        <Scores scores={student.scores} />
      </div>
    ));
  }
  return (
    <div className="App">
      <StudentRecord />
    </div>
  );
}
