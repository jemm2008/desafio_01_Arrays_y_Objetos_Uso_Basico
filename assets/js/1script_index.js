document.write(`
<div class="container">
<div class="row">
<div class="col">`)
//
document.write(`<h1 class="mt-4">Estadisticas Centro Médico Ñuñoa.</h1>`)
//
let objeto = radiologia
document.write(`<h3 class="mt-4">Radiología:</h3>
<p class="mt-2"><span class="fw-bold">Primera Atención:</span> ${objeto[0].paciente} - ${objeto[0].prevision} <span class="fw-bold">|| Última Atención:</span> ${objeto[objeto.length - 1].paciente} - ${objeto[objeto.length - 1].prevision}.</p>`)
//
objeto = traumatologia
document.write(`<h3 class="mt-4">Traumatología:</h3>
<p class="mt-2"><span class="fw-bold">Primera Atención:</span> ${objeto[0].paciente} - ${objeto[0].prevision} <span class="fw-bold">|| Última Atención:</span> ${objeto[objeto.length - 1].paciente} - ${objeto[objeto.length - 1].prevision}.</p>`)
//
objeto = dental
document.write(`
<h3 class="mt-4">Dental:</h3>
<p class="mt-2"><span class="fw-bold">Primera Atención:</span> ${objeto[0].paciente} - ${objeto[0].prevision} <span class="fw-bold">|| Última Atención:</span> ${objeto[objeto.length - 1].paciente} - ${objeto[objeto.length - 1].prevision}.</p>`)
//
document.write(`
<button class="btn btn-dark mt-4 ms-5">    <a href="tabla01_radiologia.html" class="text-light text-decoration-none" target="_blank">Tabla 01</a></button>
<button class="btn btn-danger ms-2 mt-4">  <a href="tabla02_traumatologia.html" class="text-light text-decoration-none" target="_blank">Tabla 02</a></button>
<button class="btn btn-warning ms-2 mt-4"> <a href="tabla03_dental.html" class="text-light text-decoration-none" target="_blank">Tabla 03</a></button>
`)
//
document.write(`</div>
</div>
</div>`)