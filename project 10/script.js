const learnMoreLinks = document.querySelectorAll('.learn-more');

learnMoreLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const project = this.parentElement;
        const description = project.querySelector('.description');

        // Toggle the class to show/hide the description
        description.classList.toggle('show-description');

        // Change the link text based on the description visibility
        if (description.classList.contains('show-description')) {
            this.textContent = 'Show Less';
        } else {
            this.textContent = 'Learn More';
        }
    });
});
