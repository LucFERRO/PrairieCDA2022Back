const checkDupeVisit = "SELECT s FROM visit s WHERE s.animal_id = $1"

const getVisits = "SELECT * FROM visit";
const getVisitById = "SELECT * FROM visit WHERE id = $1"
const addVisit = "INSERT INTO visit (vaccine, animal_id, date) VALUES ($1, $2, $3)"
const updateVisit = "UPDATE visit SET firstname = $1 WHERE id = $2"
const removeVisit = "DELETE FROM visit WHERE id = $1"

const getVisitsOfGivenAnimal = "SELECT * FROM visit WHERE animal_id = $1"

module.exports = {
    getVisits,
    getVisitById,
    addVisit,
    updateVisit,
    removeVisit,
    checkDupeVisit,
    getVisitsOfGivenAnimal
}