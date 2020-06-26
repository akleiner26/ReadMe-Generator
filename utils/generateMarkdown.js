function generateMarkdown(response) {
let html = 
response.title ? `# ${JSON.stringify(response.title)}\n\n`: "";

html += response.description ? `## About:\n${JSON.stringify(response.description)}\n\n` : "";

html += `## Index`
html += response.description ? `-[About](#About)\n` : "";
html += response.installation ? `-[Installation](#Installation)\n` : "";
html += response.license ? `-[Licenses](#Licenses)\n`: "";
html += response.usage ? `-[Usage](#Usage)\n`: "";
html += response.contributors ? `-[Contributors](#Contributors)\n`: "";
html += response.username ? `-[GitHub](#GitHub)\n\n`:""`\n\n`;

html += response.installation ? `## Installation:\n${JSON.stringify(response.installation)}\n\n` : "";

html += response.license ? `## Licenses:\n${JSON.stringify(response.license)}\n\n` : "";

html += response.usage ? `## Usage:\n${JSON.stringify(response.usage)}\n\n` : "";

html += response.contributors ? `## Contributors:\n${JSON.stringify(response.contributors)}\n\n` : "";

html += response.test ? `## Tests:\n${JSON.stringify(response.test)}\n\n` : "";

html += response.questions ? `## Questions:\n${JSON.stringify(response.questions)}\n\n` : "";

html += response.username ? `## GitHub Username:\n${JSON.stringify(response.username)}\n\n` : "";

html += response.repo ? `## GitHub Repo:\n${JSON.stringify(response.repo)}\n` : "";

return html;
}

module.exports = generateMarkdown;
