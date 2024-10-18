function sendMail() {
  const params = {
    name: document.getElementById('name').value,
    title: document.getElementById('title').value,
    msg: document.getElementById('msg').value,
  }

  if(!params.name || !params.title || !params.msg) {
    Swal.fire({
      icon: 'error',
      title: 'Campos em branco',
      text: 'Por favor, preencha todos os campos antes de enviar.',
    });
    return;
  }

  emailjs.send('service_sf3d3se', 'template_m5ew5x9', params)
    .then((response) => {
      Swal.fire({
        icon: 'success',
        title: 'Mensagem enviada!',
        text: 'Sua mensagem foi enviada com sucesso.',
      });
    },
    (error) => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Houve um erro ao enviar sua mensagem. Tente novamente mais tarde.',
      });
    }
  );

  document.getElementById('name').value = '';
  document.getElementById('title').value = '';
  document.getElementById('msg').value = '';
}
