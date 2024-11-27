function filterChallenges(category, element) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('active');
        button.classList.add('bg-green-700'); // Cambiado a verde  para canbair color de nevegacion
    });
    element.classList.add('active');
    element.classList.remove('bg-gray-800')
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


// Initialize with Local category
filterChallenges('Local', document.querySelector('button:nth-child(1)'));