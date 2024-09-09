document.addEventListener('DOMContentLoaded', function () {
    const tipoResiduo = document.getElementById('tipoResiduo');
    const subtipoResiduo = document.getElementById('subtipoResiduo');
  
    const subcategorias = {
      Plastico: ['Botellas', 'Envases', 'Bolsas'],
      Papel: ['Periódicos', 'Cartón', 'Papel de oficina'],
      Vidrio: ['Botellas', 'Frascos', 'Cristalería'],
      Metales: ['Latas', 'Cables', 'Electrodomésticos pequeños'],
      Electronicos: ['Teléfonos móviles', 'Baterías', 'Componentes de computadoras']
    };
  
    tipoResiduo.addEventListener('change', function () {
      const tipoSeleccionado = this.value;
      subtipoResiduo.innerHTML = ''; // Limpiar el menú de subcategorías
  
      if (subcategorias[tipoSeleccionado]) {
        subtipoResiduo.disabled = false;
        subtipoResiduo.innerHTML = '<option value="" selected disabled>Seleccione una subcategoría</option>';
  
        subcategorias[tipoSeleccionado].forEach(function (subcategoria) {
          const option = document.createElement('option');
          option.value = subcategoria;
          option.textContent = subcategoria;
          subtipoResiduo.appendChild(option);
        });
      } else {
        subtipoResiduo.disabled = true;
      }
    });
  });
  