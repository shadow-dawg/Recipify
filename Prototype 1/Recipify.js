const toggle = document.getElementById('themeToggle');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');

toggle.addEventListener('change', () => {
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    footer.classList.toggle('dark');
});

function toggleSelection(option) {
    const input = option.querySelector('input');
    if (input.type === 'checkbox') {
        option.classList.toggle('selected');
    } else {
        const groupName = input.name;
        const selectedOptions = document.querySelectorAll(`input[name="${groupName}"]`);
        selectedOptions.forEach(opt => {
            opt.parentElement.classList.remove('selected'); // Remove selected class from others
        });
        option.classList.add('selected'); // Add selected class to current option
    }
}
