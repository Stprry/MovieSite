migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wvedwb6c4p5ikhr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tnbxj1gk",
    "name": "rating",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": 5
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wvedwb6c4p5ikhr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tnbxj1gk",
    "name": "rating",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
