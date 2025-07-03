document.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.github.com/users/KaleenaDybas/repos")
    .then(response => response.json())
    .then(repos => {
      console.log(repos);
      const container = document.getElementById("project-container");

      repos.forEach(repo => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("item");

        projectDiv.innerHTML = `
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p>${repo.description ? repo.description : "No description provided."}</p>
        `;

        container.appendChild(projectDiv);
      });
    })
    .catch(err => {
      console.error("Error loading GitHub projects:", err);
      document.getElementById("project-container").innerHTML = "<p>Failed to load GitHub projects.</p>";
    });
});
