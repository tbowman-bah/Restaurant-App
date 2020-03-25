exports.seed = async function(knex) {
  // Deletes ALL existing entries related to a store
  try {
    return await knex.transaction(async trx => {
      // For foreign key constrants
      await knex("users").del();

      await knex("stores")
        .del()
        .then(function() {
          return knex("stores").insert([
            {
              location: "Legorreta",
              name: "FastFruit",
              description: "Junto al comedor de lego"
            },
            {
              location: "CIE",
              name: "FastFruit",
              description: "Escondido dentro del primer piso"
            },
            {
              location: "Disney",
              name: "FastFruit",
              description: "En frente de prepa"
            }
          ]);
        });

      await knex("users").insert([
        {
          username: "admin",
          password:
            "$2b$10$si/2T4or/Vj7o0fvCH0akOv/Yyppvdeyh8RX4ik7wO4xfBtyc3kXi",
          type: "admin",
          id_store: undefined
        }
      ]);
    });
  } catch (error) {
    console.log("ERROR");
    console.error(error);
  }
};
