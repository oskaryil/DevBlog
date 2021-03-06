exports.up = function(knex) {
  return knex.schema
    .createTable('users', function(table) {
      table.increments('id').primary()
      table
        .text('username')
        .notNullable()
        .unique()
      table.text('name')
      table
      .text('email')
      .notNullable()
      .unique()
    table.string('password').notNullable()
      table.text('profileImage').unique()
      table.text('websiteUrl').unique()
      table.text('bio')
      table.text('location')
      table.text('education')
      table.text('employerName')
      table.text('emplyerTitle')
      table.text('twitterUsername').unique()
      table.text('githubUsername').unique()
      table.timestamps(true, true)
    })
    .createTable('posts', function(table) {
      table.increments('id').primary()
      table
        .string('title')
        .notNullable()
        .defaultTo('')
      table
        .text('content')
        .notNullable()
        .defaultTo('')
      table.string('imageUrl').defaultTo('')
      table
        .integer('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
      table.timestamp('createdAt').defaultTo(knex.fn.now())
    })
}

exports.down = function(knex) {
  return knex.schema.dropTable('posts').dropTable('users')
}
