// Variables globales
let currentSection = 1;
const totalSections = 12;
let familiarRowCount = 1;

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    setupEventListeners();
    updateProgress();
    
    // Establecer fecha actual
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('fecha').value = today;
    
    // Cargar datos guardados si existen
    loadFormData();
});

// Configurar event listeners
function setupEventListeners() {
    // Navegación
    document.getElementById('prevBtn').addEventListener('click', previousSection);
    document.getElementById('nextBtn').addEventListener('click', nextSection);
    document.getElementById('generatePdfBtn').addEventListener('click', generatePDF);
    document.getElementById('clearFormBtn').addEventListener('click', clearForm);
    
    // Navegación por menú lateral
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionNumber = parseInt(this.dataset.section);
            goToSection(sectionNumber);
        });
    });
    
    // Toggle menú móvil
    document.getElementById('navToggle').addEventListener('click', function() {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.toggle('show');
    });
    
    // Cálculo automático de edad
    document.getElementById('fechaNacimiento').addEventListener('change', calculateAge);
    
    // Cálculo automático de IMC
    document.getElementById('peso').addEventListener('input', calculateIMC);
    document.getElementById('talla').addEventListener('input', calculateIMC);
    