import React from 'react'
import Card from './Card.jsx'
import '../styles/Roadmap.css'

function Roadmaps() {
  return (
   <main className='roadmap-main'>
    <Card title="AI/ML Specialist" description="Building Intelligent and predictive models"/>
    <Card title="Data Scientist" description="Extracting insights and narratives from data"/>
    <Card title="Cloud Architect" description="Designing and implementing scalable cloud solutions"/>
    <Card title="Cybersecurity Specialist" description="Network Security, Cryptography, Threat Analysis"/>
    <Card title="DevOps Engineer" description="CI/CD, Infrastructure as Code, Automation"/>
    <Card title="Full Stack Developer" description="Building both frontend and backend applications"/>
   </main>
  )
}

export default Roadmaps