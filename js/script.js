document.addEventListener('DOMContentLoaded', function() {
    // Formulário WhatsApp
    const whatsappForm = document.getElementById('whatsapp-form');
    
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const phoneInput = document.getElementById('whatsapp');
            const phoneNumber = phoneInput.value.trim();
            
            // Validação simples
            if (!phoneNumber) {
                alert('Por favor, digite seu número de WhatsApp');
                return;
            }
            
            // Limpar caracteres não numéricos
            const cleanedNumber = phoneNumber.replace(/\D/g, '');
            
            // Verificar se tem código de país (adicionar +244 se não tiver)
            const formattedNumber = cleanedNumber.startsWith('244') ? 
                `+${cleanedNumber}` : `+244${cleanedNumber}`;
            
            // Mensagem pré-formatada
            const message = encodeURIComponent('Olá! Aqui está o link para baixar o Petbook: [INSIRA_LINK_AQUI]');
            
            // Abrir WhatsApp
            window.open(`https://wa.me/${formattedNumber}?text=${message}`, '_blank');
            
            // Resetar formulário
            phoneInput.value = '';
            
            // Feedback para o usuário
            alert('Obrigado! Você será redirecionado para o WhatsApp para receber o link.');
        });
    }
    
    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});