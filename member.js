function skillsMember() {
    // Get the element with id="skills"
    var element = document.getElementById("skills");
    // If the element with id="skills" exists, then...
    if (element) {
        // Set the innerHTML of the element with id="skills" to the following:
        element.innerHTML = `
            <h2>Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Python</li>
                <li>Java</li>
            </ul>
        `;
    }
}