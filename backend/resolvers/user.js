import GraphQLDate from 'graphql-date'
import User from '../models/user'
import bcrypt from 'bcryptjs'
import { promisify } from 'util'
import { knex } from '../config/database'
import yup from 'yup'
import _ from 'lodash'

const hashAsync = promisify(bcrypt.hash)

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Please enter an email address'),
  username: yup.string().required('Please enter an username'),
  password: yup
    .string()
    .required('Please enter a password')
    .min(5)
})

export default {
  Date: GraphQLDate,
  Query: {
    getUsers: async () => {
      return await User.query()
    },
    getUser: async (_, { id }) => {
      return await User.query().findById(id)
    }
  },
  Mutation: {
    register: async (_, { email, username, password }) => {
      try {
        const a = await schema.validate({ email, username, password })
        console.log('A', a)
        const x = await knex('users')
          .where('email', email)
          .select('id')
        if (x.length === 0) {
          const hashedPassword = await hashAsync(
            password,
            bcrypt.genSaltSync(10)
          )
          const user = await User.query().insert({
            email,
            username,
            password: hashedPassword
          })
          return {
            ok: true,
            user
          }
        } else {
          console.log('user already exists')
        }
      } catch (err) {
        console.log('Error', err)
        return {
          ok: false,
          errors: [err]
        }
      }
    }
  }
}
