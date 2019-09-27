var xhr;
function traerPersonas() {
  $.ajax({
    url: "http://localhost:3000/traer/?collection=personas",
    beforeSend: function () {
      $("#divSpinner").show();
      $(".table").hide();
    },
    success: function (array) {
      crearTabla(array.data);
    },
    complete: function () {
      $(".table").show();
      $("#divSpinner").slideUp(800);
    }
  })

}

function guardarPersona(persona) {

  var body = { 'collection': 'personas', 'objeto': persona };

  $.ajax({
    type: 'POST',
    async: true,
    url: 'http://localhost:3000/agregar',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(body),
    beforeSend: function () {
      $("#bodyTabla").children().remove();
      traerPersonas();
    }
  })
}

function eliminarPersona(id) {

  var body = {
    "collection": "personas",
    "id": id
  }

  $.ajax({
    type: 'POST',
    async: true,
    url: 'http://localhost:3000/eliminar',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(body),


    success: function (array) {
      $("#bodyTabla").children().remove();
      traerPersonas();
    }
  })


}

function modificarPersona(persona) {
  var body = {
    "collection": "personas",
    "objeto": persona
  }

  $.ajax({
    type: 'POST',
    async: true,
    url: 'http://localhost:3000/modificar',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(body),

    success: function (array) {
      $("#bodyTabla").children().remove();
      traerPersonas();
    }
  })
}
