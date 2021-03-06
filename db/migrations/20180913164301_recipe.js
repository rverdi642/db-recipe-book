
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe', function(tbl) {
        tbl.increments();
        tbl
            .string('name', 128)
            .notNullable()
            .unique('recipe_name')
        tbl
            .integer('dish_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes')
      })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipe')
  };
