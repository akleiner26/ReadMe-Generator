

const generateMarkdown = (response, data) => {
  let html =
    response.title ? `# ${response.title}\n\n` : "";

  html += response.description ? `## About:\n${response.description}\n\n` : "";

  html += `## Index\n`
  html += response.description ? `1) [About](#About)\n` : "";
  html += response.installation ? `1) [Installation](#Installation)\n` : "";
  html += response.license ? `1) [Licenses](#Licenses)\n` : "";
  html += response.usage ? `1) [Usage](#Usage)\n` : "";
  html += response.contributors ? `1) [Contributors](#Contributors)\n` : "";
  html += response.username ? `1) [GitHub](#GitHub)\n\n` : ""`\n\n`;

  html += response.installation ? `## Installation:\n${response.installation}\n\n` : "";

  html += response.license ? `## Licenses:\n` : "";
  response.license.forEach(license => {
    html += `![](https://img.shields.io/badge/License-${license}-green)\n\n`
  });
  html += `\n\n`;

  html += response.usage ? `## Usage:\n${response.usage}\n\n` : "";

  html += response.contributors ? `## Contributors:\n${response.contributors}\n\n` : "";

  html += response.test ? `## Tests:\n${response.test}\n\n` : "";

  html += response.questions ? `## Questions:\n${response.questions}\n\n` : "";
  
  if (response.username){
  html += `## GitHub Username:\n${response.username}\n\n`;
  html += `## GitHub Repo:\n${data.html_url}\n\n`;
  html += `## GitHub Photo:\n <img src="${data.avatar_url}" alt="Github Profile Image">\n\n`;
  }
  html += response.email ? `## GitHub Email:\n${response.email}\n\n` : "";

return html;
}

module.exports = generateMarkdown;
