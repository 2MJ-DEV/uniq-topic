import './style.css'

const mainHeader = document.querySelector('#header')
const menuBtn = document.querySelector('#menu-btn')

menuBtn.addEventListener('click', () => {
	mainHeader.dataset.state =
		mainHeader.dataset.state === 'active' ? 'closed' : 'active'
})

const html = document.documentElement
const toggleButton = document.getElementById('toggleButton')
const sunIcon = document.getElementById('sunIcon')
const moonIcon = document.getElementById('moonIcon')

// Vérifier si le mode sombre est déjà activé
const isDarkMode = localStorage.getItem('darkMode') === 'true'

// Gestion des icones pour le changement de mode
if (isDarkMode) {
	html.classList.add('dark')
	sunIcon.style.display = 'block'
	moonIcon.style.display = 'none'
} else {
	sunIcon.style.display = 'none'
	moonIcon.style.display = 'block'
}

// Ajouter un event au bouton qui les modes entre les 2 modes
toggleButton.addEventListener('click', () => {
	html.classList.toggle('dark')

	// Enregistrer le mode 
	localStorage.setItem('darkMode', html.classList.contains('dark'))

	// Afficher/masquer les icônes
	if (html.classList.contains('dark')) {
		sunIcon.style.display = 'block'
		moonIcon.style.display = 'none'
	} else {
		sunIcon.style.display = 'none'
		moonIcon.style.display = 'block'
	}
})



// Path pour la gestion d'ouverture et fermeture du dropdown
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const arrowIcon = document.getElementById("arrowIcon");

dropdownButton.addEventListener("click", (event) => {
	event.stopPropagation(); // Empêche la fermeture immédiate
	dropdownMenu.classList.toggle("opacity-0");
	dropdownMenu.classList.toggle("scale-95");
	dropdownMenu.classList.toggle("invisible");
	arrowIcon.classList.toggle("rotate-180");
});

// Fermer le menu en cliquant à l'extérieur
document.addEventListener("click", (event) => {
	if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
		dropdownMenu.classList.add("opacity-0", "scale-95", "invisible");
		arrowIcon.classList.remove("rotate-180");
	}
});
