const checkDupeAnimal = "SELECT s FROM animal s WHERE s.name = $1 AND s.customer_id = $2"

const getAnimals = "SELECT * FROM animal";
const getAnimalById = "SELECT * FROM animal WHERE id = $1"
const addAnimal = "INSERT INTO animal (name, race, customer_id, specie, birthdate) VALUES ($1, $2, $3, $4, $5)"
const updateAnimal = "UPDATE animal SET firstname = $1 WHERE id = $2"
const removeAnimal = "DELETE FROM animal WHERE id = $1"


module.exports = {
    getAnimals,
    getAnimalById,
    addAnimal,
    updateAnimal,
    removeAnimal,
    checkDupeAnimal
}