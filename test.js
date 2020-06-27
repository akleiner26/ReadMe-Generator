var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown");
var testResponse = {
    title: "Title of My Project",
    description: "This is my project, it is a project",
    installation: "This is what you need to know to install my project",
    username: "FakeUser123",
    repo: "FakeUserRepo@github.com",
    license: ["MIT", "Apache"],
    usage: "This is what you need to know to run the application",
    contributors: "Me, Myself, I",
    test: "This is how you can test my application",
    questions: "Who, What, When, Where, Why, How?"
}

fs.writeFile("newReadMe.md", generateMarkdown(testResponse), function (err) {
    if (err) {
        return console.log(err);
    }
})