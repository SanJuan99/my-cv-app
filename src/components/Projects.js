import React, { useState, useEffect } from 'react';

function Projects() {
  // State för att lagra listan med projekt
  const [projects, setProjects] = useState([]);

  // Använd useEffect för att hämta data från GitHub API när komponenten laddas
  useEffect(() => {
    fetch('https://api.github.com/users/sanJuan99/repos')
      .then(response => response.json())
      .then(data => {
        setProjects(data); // Uppdatera state med de hämtade projekten
      })
      .catch(error => console.error('Error fetching GitHub repos:', error));
  }, []);

  return (
    <div>
      <h1>Projekt</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            {/* Länk till GitHub-repository */}
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              Visa projekt
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;