function submitForm(e, form) {
  e.preventDefault();

  let payload = {
    name: form.name.value,
    math: form.math.value,
    phis: form.phis.value,
    prog: form.prog.value,
    phisical: form.phisical.value
  };
  //   console.log(payload);
  //   let data = new FormData();
  //   data.append("json", JSON.stringify(payload));
  console.log(payload);
  fetch("http://localhost:3000/studentBookProject/", {
    method: "POST",
    body: JSON.stringify(payload)
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      alert(data);
    })
    .catch(function(err) {
      //Failure
      alert(err);
    });
}
