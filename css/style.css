:root {
    /* Cores */
    --primary: #3E1F0D;
    --primary-light: #5D3B23;
    --secondary: #F68B1F;
    --secondary-light: #FFA347;
    --whatsapp: #25D366;
    --dark: #1B1B1B;
    --light: #FFFFFF;
    --light-bg: #F5F1ED;
    --accent: #FFE5B4;
    
    /* Tipografia */
    --font-main: 'Poppins', sans-serif;
    --font-alt: 'Inter', sans-serif;
}

/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-main);
    color: var(--dark);
    background-color: var(--light);
    line-height: 1.6;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
header {
    padding: 20px 0;
    position: sticky;
    top: 0;
    background-color: var(--light);
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 100;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo img {
    height: 40px;
}

nav a {
    margin-left: 20px;
    text-decoration: none;
    color: var(--primary);
    font-weight: 500;
    transition: color 0.3s;
}

nav a:hover {
    color: var(--secondary);
}

/* Botões */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    background-color: var(--secondary);
    color: white;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn:hover {
    background-color: var(--secondary-light);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.btn-whatsapp {
    background-color: var(--whatsapp);
}

.btn-whatsapp:hover {
    background-color: #128C7E;
}

/* Hero Section */
.hero {
    padding: 80px 0;
    background: linear-gradient(to right, var(--light) 50%, var(--light-bg) 50%);
}

.hero .container {
    display: flex;
    align-items: center;
    gap: 40px;
}

.hero-content {
    flex: 1;
}
/*
.hero-image {
    flex: 1;
    position: relative;
}

.hero-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
  */

.hero-image {
    flex: 1;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 400px; /* Altura mínima para garantir visibilidade */
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Mantém a proporção sem cortar a imagem */
    object-position: center;
}

/* Para telas maiores, você pode usar cover se preferir */
@media (min-width: 992px) {
    .hero-image img {
        object-fit: cover;
    }
}

.image-tag {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 20px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.9rem;
    background-color: var(--secondary);
    color: white;
}

/* Tipografia */
h1, h2, h3 {
    font-family: var(--font-alt);
    font-weight: 600;
    line-height: 1.3;
}

h1 {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 20px;
}

h2 {
    font-size: 2rem;
    color: var(--primary);
    margin-bottom: 2rem;
    position: relative;
    text-align: center;
}

h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--secondary);
    margin: 15px auto 0;
}

h3 {
    font-size: 1.5rem;
    color: var(--primary);
    margin-bottom: 10px;
}

p {
    color: var(--dark);
    margin-bottom: 1rem;
}

/* Formulário */
.cta-form {
    margin-top: 30px;
}

.input-group {
    display: flex;
    max-width: 500px;
}

.input-group input {
    flex: 1;
    padding: 12px 20px;
    border: 2px solid var(--light-bg);
    border-radius: 50px 0 0 50px;
    font-size: 1rem;
    outline: none;
}

.input-group input:focus {
    border-color: var(--secondary);
}

.input-group button {
    border-radius: 0 50px 50px 0;
    padding: 12px 20px;
    white-space: nowrap;
}

.form-note {
    font-size: 0.9rem;
    text-align: center;
    margin-top: 10px;
    color: var(--primary-light);
}

/* Features */
.features {
    padding: 80px 0;
    background-color: var(--light-bg);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.feature-card {
    background: var(--light);
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    border: 1px solid rgba(62, 31, 13, 0.1);
    transition: all 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(62, 31, 13, 0.1);
    border-color: var(--secondary);
}

.feature-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    background-color: var(--accent);
}

/* Testimonials */
.testimonials {
    padding: 80px 0;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.testimonial-card {
    background: var(--light);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    border-left: 4px solid var(--secondary);
}

.testimonial-card img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
}

.testimonial-card span {
    display: block;
    margin-top: 15px;
    font-weight: 600;
    color: var(--secondary);
}

/* CTA Section */
.cta-section {
    padding: 80px 0;
    background: linear-gradient(to right, var(--primary) 50%, var(--primary-light) 50%);
    color: white;
    text-align: center;
}

.cta-section h2 {
    color: white;
}

.cta-section .input-group {
    margin: 30px auto 0;
}

/* Footer */
footer {
    padding: 40px 0;
    background-color: var(--primary);
    color: white;
}

footer .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer-links a {
    color: white;
    text-decoration: none;
    opacity: 0.8;
    transition: all 0.3s;
}

.footer-links a:hover {
    opacity: 1;
    color: var(--secondary);
}

.footer-copy {
    align-self: flex-end;
    text-align: right;
}

.footer-copy p {
    color: white;
}

/* Responsividade */
@media (max-width: 768px) {
    .hero .container {
        flex-direction: column;
    }
    
    .hero-content {
        text-align: center;
        margin-bottom: 40px;
    }
    
    .input-group {
        flex-direction: column;
    }
    
    .input-group input {
        border-radius: 50px;
        margin-bottom: 10px;
    }
    
    .input-group button {
        border-radius: 50px;
        width: 100%;
    }
    
    header .container {
        flex-direction: column;
    }
    
    nav {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    nav a {
        margin: 5px 10px;
    }
}