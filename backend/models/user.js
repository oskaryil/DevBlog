import { Model } from 'objection'
import bcrypt from 'bcryptjs'

export default class User extends Model {
  static get tableName() {
    return 'users'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['username', 'email', 'password'],

      properties: {
        id: { type: 'integer' },
        username: { type: 'string', minLength: 1, maxLength: 16 },
        email: { type: 'string', minLength: 1, maxLength: 62 },
        password: { type: 'string', minLength: 6, maxLength: 60 },
        firstname: { type: 'string', minLength: 1, maxLength: 50 }
      }
    }
  }
  // verifyPassword(password, callback) {
  //   bcrypt.compare(password, this.hash, callback);
  // }

  $beforeInsert() {
    this.created_at = new Date().toISOString()
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString()
  }

  $beforeDelete() {
    this.deleted_at = new Date().toISOString()
  }
}

// const UserSchema = new mongoose.Schema(
//   {
//     method: {
//       type: String,
//       enum: ['local', 'google', 'facebook'],
//       required: true
//     },
//     local: {
//       name: {
//         type: String,
//         required: true
//       },
//       username: {
//         type: String,
//         trim: true,
//         required: true,
//         unique: true
//       },
//       email: {
//         type: String,
//         required: true,
//         unique: true
//       },
//       password: {
//         type: String,
//         required: true
//       }
//     },
//     google: {
//       id: {
//         type: String
//       },
//       email: {
//         type: String,
//         lowercase: true
//       }
//     },
//     facebook: {
//       id: {
//         type: String
//       },
//       email: {
//         type: String,
//         lowercase: true
//       }
//     }
//   }, {password: String},
//   {
//     timestamps: true
//   }
// )

// UserSchema.pre('save', async function(next) {
//   try {
//     console.log('entered')
//     const user = this

//     if (user.method !== 'local') {
//       next()
//     }

//     const salt = await bcrypt.genSalt(10)
//     // Generate a password hash (salt + hash)
//     const passwordHash = await bcrypt.hash(user.local.password, salt)
//     // Re-assign hashed version over original, plain text password
//     user.local.password = passwordHash
//     console.log(passwordHash)
//     next()
//     console.log('exited')
//   } catch (err) {
//     next(err)
//   }
// })

// UserSchema.methods = {
//   async isValidPassword(newPassword) {
//     try {
//       const user = this
//       return await bcrypt.compare(newPassword, user.local.password)
//     } catch (err) {
//       throw new Error(err)
//     }
//   },

//   createToken() {
//     console.log('hello',constants)
//     return jwt.sign({ _id: this._id }, constants.JWT_SECRET)
//   },

//   toAuthJSON() {
//     // return {
//     //   token: this.createToken(),
//     //   ...this.toJSON(),
//     // }
//   },

//   // Not sending the password
//   toJSON() {
//     return {
//       _id: this._id,
//       username: this.local.username,
//       email: this.local.email,
//       name: this.local.name
//     }
//   }
// }

// module.exports = mongoose.model('User', UserSchema)
