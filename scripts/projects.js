document.addEventListener('DOMContentLoaded', () => {
    loadPortfolio()
});

function loadPortfolio() {
    fetch('data.json')
    .then(reply => {
        return reply.json()
    })
    .then(data => {
        let html = '';
        data.portfolio__projects.forEach(project => {
            // Creates the template
            html += `
                <div class="portfolio__project">
                    <picture class="portfolio__thumbnail">
                        <source type="image/avif" srcset="
                                                    assets/avif/${project.id.x1}.avif 640w,
                                                    assets/avif/${project.id.x2}.avif 1280w">
                        <source type="image/webp" srcset="
                                                    assets/webp/${project.id.x1}.webp 640w,
                                                    assets/webp/${project.id.x2}.webp 1280w">
                        <img src="assets/webp/${project.id.fallback}.webp" class="portfolio__thumbnail-image" alt="Project thumbnail" loading="lazy">
                    </picture>
                    <div class="portfolio__content">
                        <header class="portfolio__cotent-header">
                            <h3 class="portfolio__content-heading">${project.name}</h3>
                        </header>
                        <div class="portfolio__content-info">
                            <p class="portfolio__content-text">${project.desc}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        // Injects the HTML
        document.querySelector('#portfolio__projects').innerHTML = html;
    })
}