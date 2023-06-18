
import './App.css';
import { Input } from './components/Input';
import { Responses } from './components/Responses';
import { useState } from 'react';
import React from 'react';

function App() {

  const [result , setResult] = useState([])
  const [Applicant , setApplicant] = useState({
    name: '',
    experience: '',
    skills: '',
    education: '',
  })

  //Result Criteria
  const experienceCriteria = 2; 
  const skillsCriteria = ['SQL'];
  const educationCriteria = 'Bachelor';
 

  const [showResult , setShowResult] = useState(false);

  const handleBack = () => {
    setShowResult(false);
  }
  const handleEvaluate = () => {
    const updateApplicant = {
      ...Applicant,
      status: (
        parseInt(Applicant.experience , 10) >= experienceCriteria ||
        skillsCriteria.every(skill => Applicant.skills.includes(skill)) ||
        Applicant.education.includes(educationCriteria)
      ) ? "Passed" : "Failed"
    }

    //call back function
    setResult(prevResult => [...prevResult, updateApplicant]);
    setShowResult(true);
  }


  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-5xl mb-5 font-bold underline'>Applicant Internship</h1>
      {showResult ? (
        <div >
        <div className='mb-10'>
          <p className='font-bold'>ExperienceCriteria : <label className='font-thin'>{experienceCriteria}</label></p>
          <p className='font-bold'>SkillsCriteria : <label className='font-thin'>{skillsCriteria}</label></p>
          <p className='font-bold'>EducationCriteria : <label className='font-thin'>{educationCriteria}</label></p>
        </div>
        <Responses result={result}/>
        <button className='bg-cyan-500 text-white px-3 mt-5'
                onClick={handleBack}>
          Back to Input
        </button>
      </div>
      
      ) : (
        <div>
        <Input Applicant={Applicant} setApplicant={setApplicant}/>
        <button className='bg-cyan-500 text-white px-3'
                onClick={handleEvaluate}>
          Evaluate Applicant
        </button>
        {Applicant.name && Applicant.experience && Applicant.skills && Applicant.education && (
          <button className='bg-cyan-500 text-white px-3 ml-5' onClick={() => setShowResult(true)}>
            Go to Table
          </button>
        )}
        </div>
      )}
    </div>
  );
}

export default App;
