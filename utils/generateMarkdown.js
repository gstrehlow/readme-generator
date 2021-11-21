// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[![${license}](https://img.shields.io/badge/license-${license}-green)](https://img.shields.io/badge/license-${license}-green)`;
  }
  if (license === 'None') return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') return ``;
  if (license === 'GNU') return `[GNU](https://choosealicense.com/licenses/gpl-3.0/)`;
  if (license === 'MIT') return `[MIT](https://choosealicense.com/licenses/mit/)`;
}

function generateLink(link){
  if (!link) return ``;
  if (link){
  return ` 
  ${link}
   `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description

  ${data.description}
  ${(generateLink(data.link))}
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseLink(data.license)}

  ## Contributors

  ${data.contributors}

  ## Tests

  ${data.test}

  ## Questions

  Reach out to me through this email for any additional questions! ${data.email}
`;
}

module.exports = generateMarkdown;
