document.addEventListener('DOMContentLoaded', () => {
    const formsValidacao = document.querySelectorAll('.needs-validation');

    const handleFormValidation = (form) => {
        form.addEventListener('submit', (e) => {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    };
    formsValidacao.forEach((form) => handleFormValidation(form));
});

