import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Componenets/Nav';
import Header from "./Componenets/Header";
import Main from './Routes/Main';
import Teams from "./Routes/Teams";
import NotFound from "./Routes/NotFound";
import Footer from './Componenets/Footer';
import { useEffect, useState } from 'react';

function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamA");

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || [
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA"
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB"
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC"
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC"
    }
  ]);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  useEffect(()=>{
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam])

  const handleChangeTeam = (e) => {
    setTeam(e.target.value);
  }

  const handleClickEmployee = (e) => {
    const newTeam = employees.map((employee)=> 
    employee.id === parseInt(e.currentTarget.id)
    ?(employee.teamName === selectedTeam)
      ?{...employee, teamName: ''}:
       {...employee, teamName: selectedTeam}:
      employee
    );

    setEmployees(newTeam);
  }

  return (
    <BrowserRouter>
      <Nav/>
      <Header
        selectedTeam={selectedTeam}
        memberCount={employees.filter((employee)=>selectedTeam === employee.teamName).length}
      />
      <Routes>
        <Route path='/employee-team-allocation' element={
          <Main
            employees={employees}
            selectedTeam={selectedTeam}
            handleChangeTeam={handleChangeTeam}
            handleClickEmployee={handleClickEmployee}
          />
        }/>
        <Route path='/teams' element={
          <Teams
            employees={employees}
            setTeam={setTeam}
          />
        }/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
