import { Model } from 'objection'

export default class Post extends Model {
  static get tableName() {
    return 'posts'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'content'],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1, maxLength: 255 },
        content: { type: 'string', minLength: 1, maxLength: 3000 },
        imageUrl: { type: 'string', minLength: 1, maxLength: 255 },
      }
    }
  }

  $beforeInsert() {
    this.createdAt = new Date().toISOString()
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString()
  }

  $beforeDelete() {
    this.deletedAt = new Date().toISOString()
  }
}
