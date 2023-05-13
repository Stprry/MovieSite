migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wvedwb6c4p5ikhr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aciur9eg",
    "name": "username",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wvedwb6c4p5ikhr")

  // remove
  collection.schema.removeField("aciur9eg")

  return dao.saveCollection(collection)
})
