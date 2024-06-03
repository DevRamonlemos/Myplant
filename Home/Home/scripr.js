document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('homeLink');
    const aboutLink = document.getElementById('aboutLink');
    const contactLink = document.getElementById('contactLink');
    const mainContent = document.getElementById('mainContent');

    homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        mainContent.innerHTML = '<p>Conteúdo principal da página.</p>';
    });

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault();
        mainContent.innerHTML = '<p>Esta é a seção Sobre. Aqui você encontra informações sobre nós.</p>';
    });

    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        mainContent.innerHTML = '<p>Esta é a seção Contato. Entre em contato conosco por aqui.</p>';
    });
});
