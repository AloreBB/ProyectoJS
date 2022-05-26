const API = "https://api.github.com/users/";


const app = Vue.createApp({
    data() {
        return {
            message: 'Hola Vue!',
            busqueda: null,
            result: null,
            error: null
        }
    },
    //La palabra function ya no es necesaria ya que se usa methods
    methods: {
        async Buscar(){
            //depende del error 
            this.result = this.error = null
            try {
                const response = await fetch(API + this.busqueda)
                //Condicional si el estado OK del response es FALSE no encontró el usuario
                if(!response.ok) throw new Error("Usuario no encontrado")
                console.log(response)
                //Traemos la informacion en formato json
                const data = await response.json()
                console.log(data)
                this.result = data // cambiamos true por data
            } catch (error) {
                this.error = error
            // Tan pronto termine el proceso de busqueda, limpia haciendo vacia la busqueda en el input
            } finally{
                this.busqueda = null
            }
            
        }
    }
})