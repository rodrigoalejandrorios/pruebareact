const number = {name:'Rodrigo', lastname:'Rios'}
const {name} = number
const spread = `Hola bienvenido ${name}`
const 

const persona = {
    nombre: "Pablo",
   decirNombre: function () {
      console.log(this.nombre);
      return () =>{
        console.log("arrow that " + this.nombre);
      };
    },
  };

  console.log(persona.decirNombre()())

  decir()