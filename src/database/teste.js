const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // inserir dados na tabela
    // await saveOrphanage(db, {
    //     lat: "-27.222633",
    //     lng: "-49.6655874",
    //     name: "Lar de amor",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "9898989898",
    //     images: [
    //         "https://images.unsplash.com/photo-1601564267675-0377e2501d4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            
    //         "https://images.unsplash.com/photo-1556258707-995cd393dd8b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horários de visitas Das 18h até as 8h",
    //     open_on_weekends: "1"
    // })
    
    // consultar dados da tabela
    // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    // console.log(selectedOrphanages)

    // consultar somente 1 orfanato, pelo id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    // console.log(orphanage)

    // deletar dado da tabela
    // await db.run("DELETE FROM orphanages WHERE id='4'")
})