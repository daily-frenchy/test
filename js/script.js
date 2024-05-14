// Chargement de la photo aléatoire
document.addEventListener('DOMContentLoaded', function() {
    var images = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg']; // Ajoutez vos propres images ici
    var imageAleatoire = images[Math.floor(Math.random() * images.length)];
    document.querySelector('.photoAleatoire').style.backgroundImage = 'url(assets/photos/' + imageAleatoire + ')';
});

//envoi du formulaire

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        // Validation des champs du formulaire
        var nom = document.getElementById('nom').value;
        var prenom = document.getElementById('prenom').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (!nom || !prenom || !email || !message) {
            alert('Veuillez remplir tous les champs.');
            event.preventDefault(); // Empêcher l'envoi du formulaire
        } else {
            // Vous pouvez ajouter ici d'autres validations si nécessaire
            form.submit(); // Envoi du formulaire si tout est valide
        }
    });
});


// Fonction pour charger le contenu HTML d'un fichier et l'ajouter à un élément du DOM
function chargerHTML(url, elementId) {
  fetch(url)
    .then(function(response) {
      return response.text();
    })
    .then(function(html) {
      document.getElementById(elementId).innerHTML = html;
    })
    .catch(function(err) {
      console.warn('Erreur lors du chargement du fichier HTML', err);
    });
}

// Appel de la fonction pour chaque fichier HTML que vous souhaitez charger
chargerHTML('chemin/vers/fichier1.html', 'elementId1');
chargerHTML('chemin/vers/fichier2.html', 'elementId2');
// ... et ainsi de suite pour les autres fichiers
