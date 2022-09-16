const checkDupeHealthRecord = "SELECT s FROM healthrecord s WHERE s.animal_id = $1"

const getHealthRecords = "SELECT * FROM healthrecord";
const getHealthRecordById = "SELECT * FROM healthrecord WHERE id = $1"
const addHealthRecord = "INSERT INTO healthrecord (animal_id, visit_id) VALUES ($1, $2)"
const updateHealthRecord = "UPDATE healthrecord SET firstname = $1 WHERE id = $2"
const removeHealthRecord = "DELETE FROM healthrecord WHERE id = $1"


module.exports = {
    getHealthRecords,
    getHealthRecordById,
    addHealthRecord,
    updateHealthRecord,
    removeHealthRecord,
    checkDupeHealthRecord
}