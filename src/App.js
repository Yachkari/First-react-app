
import './App.css';
import Header from './Header';

import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Employees from './Employees';
import { useState,useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';

function App() {


  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) ||'TeamB');


  function handleTeamSelectionChange(event){
      setTeam(event.target.value)
  }
  //bach manensaxi hadi mohima dyala gha bax nbdlo TeamName value f employee array
  //w dik natija li kankhrjo biha f ternary condition kan3tiwha ndik variable transform
  // li bdawr dyala katbdel dik employee teamname b mosa3ada dya usestate setEmployee
  // w bax nxofo dik shadow  box f cards kanxiw n star 131 w kan3mlo f classname wahd
  // ..ternary condition li katxof ida kan teamName dyal dik karta kisawi teamname dyal 
  // ..select kanzido wahd css dyal shadow box f dik card...saaaaafi
  function handleEmployeeCardClick(event){
      const transformedEmployees = employees.map((employee) =>employee.id===parseInt(event.currentTarget.id)?(employee.teamName===selectedTeam)?{...employee,teamName:''}:{...employee,teamName:selectedTeam}:employee);

      setEmployees(transformedEmployees);
  }

  



const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList'))||[
  {
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA",
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA",
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA",
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB",
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB",
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB",
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC",
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC",
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC",
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD",
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD",
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD",
  },
]);
useEffect(() =>{
  localStorage.setItem('employeeList',JSON.stringify(employees))
},[employees]);



useEffect(() =>{
  localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam))
},[selectedTeam]);





  return (
    
    <Router>
      <Nav/>

      <Header selectedTeam={selectedTeam}teamMemberCount={employees.filter((employee) =>employee.teamName===selectedTeam).length}/>

      <Routes>
        <Route path="/teamAllocation" element={<Employees employees={employees} selectedTeam={selectedTeam}handleEmployeeCardClick={handleEmployeeCardClick}
        handleTeamSelectionChange={handleTeamSelectionChange}/>}>
        </Route>
        <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employees={employees} selectedTeam={selectedTeam} setTeam={setTeam}/>}>

        </Route>
        <Route path='*' element={<NotFound/>}>

        </Route>
      </Routes>
      

      <Footer/>
    </Router>
    
    
  );
}


export default App;
