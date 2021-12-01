var form = document.getElementById("my-form");
  
  function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      form.reset();
    }).catch(error => {
      console.log(error);
    });
  }
  form.addEventListener("submit", handleSubmit)