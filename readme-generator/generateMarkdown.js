// Generates the markdown
const generateMarkdown = ({
  title,
  description,
  technologies,
  installation,
  usage,
  tests,
  acknowledgements,
  license,
  github,
  email,
}) => {
  // Define the renderLicenseBadge function directly inside generateMarkdown
  function renderLicenseBadge(license) {
    switch (license) {
      case "MIT":
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      case "GNU":
        return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      case "Apache":
        return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      case "BSD":
        return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
      case "Mozilla":
        return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
      case "Creative Commons":
        return "![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)";
      case "Unlicense":
        return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
      case "Eclipse":
        return "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)";
      default:
        return "";
    }
  }

  // Define the renderLicenseLink function directly inside generateMarkdown
  function renderLicenseLink(license) {
    switch (license) {
      case "MIT":
        return "https://opensource.org/licenses/MIT";
      case "GNU":
        return "https://www.gnu.org/licenses/gpl-3.0";
      case "Apache":
        return "https://opensource.org/licenses/Apache-2.0";
      case "BSD":
        return "https://opensource.org/licenses/BSD-3-Clause";
      case "Mozilla":
        return "https://www.mozilla.org/en-US/MPL/2.0/";
      case "Creative Commons":
        return "https://creativecommons.org/licenses/by/4.0/";
      case "Unlicense":
        return "http://unlicense.org/";
      case "Eclipse":
        return "https://www.eclipse.org/legal/epl-2.0/";
      default:
        return "";
    }
  }

  // Use renderLicenseBadge and renderLicenseLink directly within the template string
  return `# ${title}
${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents

* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Acknowledgements](#acknowledgements)
* [License](#license)
* [Questions](#questions)

## Technologies
${technologies}

## Installation
${installation}

## Usage
${usage}

## Tests
${tests}

## Acknowledgements
${acknowledgements}

## License
This project is licensed under the [${license} license](${renderLicenseLink(
    license
  )}).

## Questions
Feel free to reach out to me via [GitHub](https://github.com/${github}) or email at ${email} if you have any questions.
`;
};

module.exports = generateMarkdown;
