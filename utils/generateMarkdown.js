// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ""
  }
  else {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ""
  }
  else {
    return `## License 
${license}`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ""
  }
  else {
    return `* [License](#license)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credit](#credit)
* [Contribute](#contribute)
* [Test](#test)
${renderLicenseLink(data.license)}
## Description 
${data.description}
## Installation 
${data.installation}
## Usage 
${data.usage}

[Watch walkhrough video here.](https://drive.google.com/file/d/1cTtftbQY670S8pycVx840Uy32Ov8JScQ/view)
## Credit
This project was created by github user https://github.com/${[data.contribution]}.
## Test 
${data.test}
${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}
## Contribute 
If you wish to contribute to this application please send a pull request. 
## Questions
If you have any questions please contact https://github.com/${[data.github]}.
`;
}

module.exports = generateMarkdown;
