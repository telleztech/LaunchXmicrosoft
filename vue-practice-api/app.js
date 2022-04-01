const app = Vue.createApp({
    data() {
        return {
            Titulo: "Mr",
            primerN: "Carlos",
            Apellido: "Rodriguez",
            Email: "next@global.com",
            genero: "Male",
            foto: "https://randomuser.me/api/portraits/men/22.jpg",
            pass: "Zapatito12",
            telefono: "5569872244",
            city: "Poza Rica",
            estado: "Veracruz",
            pais: "México"

        }
    },
    methods: {
        async ChangeUser() {

            const res = await fetch("https://randomuser.me/api/");
            const { results } = await res.json()

            console.log(results);

            this.Titulo = results[0].name.title
            this.primerN = results[0].name.first
            this.Apellido = results[0].name.last
            this.Email = results[0].email
            this.genero = results[0].gender
            this.foto = results[0].picture.large
            this.pass = results[0].login.password
            this.telefono = results[0].cell
            this.city = results[0].location.city
            this.estado = results[0].location.state
            this.pais = results[0].location.country
        }
    }
})

app.mount("#app");