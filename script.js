// Fetch the JSON file
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('projects-container');

        data.projects.forEach(project => {
            // Create a card for each project
            const card = document.createElement('div');
            card.classList.add('project-card', "stars");

            // Add project name
            const title = document.createElement('h2');
            title.textContent = project.site_name;
            card.appendChild(title);

            // Add description
            if (project.description) {
                const description = document.createElement('p');
                description.textContent = project.description;
                card.appendChild(description);
            }

            let buttons_row = document.createElement('div');
            buttons_row.classList.add('buttons-row');


            // Add page link
            const pageLink = document.createElement('a');
            pageLink.href = project.page_link;
            pageLink.textContent = 'מעבר לדף';
            pageLink.target = '_blank';
            pageLink.className = 'button';
            buttons_row.appendChild(pageLink);

            // Add Git link if available
            if (project.git_link) {
                const gitLink = document.createElement('a');
                gitLink.href = project.git_link;
                gitLink.textContent = 'מעבר לגיט';
                gitLink.target = '_blank';
                gitLink.className = 'button';
                buttons_row.appendChild(gitLink);
            }

            card.appendChild(buttons_row);
            // Append card to container
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading projects:', error));
