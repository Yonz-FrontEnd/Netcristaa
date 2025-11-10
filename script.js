// Script básico de login Google e painel admin localStorage

function handleCredentialResponse(response) {
  console.log('Token JWT Google recebido:', response.credential);
}

window.onload = function() {
  if (window.google) {
    google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID',
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(document.body, { theme: 'outline', size: 'large' });
  }

  const form = document.getElementById('videoForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const titulo = document.getElementById('titulo').value;
      const link = document.getElementById('link').value;
      const imagem = document.getElementById('imagem').value;
      const categoria = document.getElementById('categoria').value;

      const novoVideo = { titulo, link, imagem, categoria };
      let videos = JSON.parse(localStorage.getItem('videos')) || [];
      videos.push(novoVideo);
      localStorage.setItem('videos', JSON.stringify(videos));
      alert('Vídeo adicionado com sucesso!');
      form.reset();
    });
  }
};
