migrate((db) => {
  const collection = new Collection({
    "id": "wvedwb6c4p5ikhr",
    "created": "2023-05-13 12:13:38.862Z",
    "updated": "2023-05-13 12:13:38.862Z",
    "name": "movies",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zxhvpzoa",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "ivu41pkh",
        "name": "watchDate",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wvedwb6c4p5ikhr");

  return dao.deleteCollection(collection);
})
