import Post from "../../models/Post.model.js"

export default {
    async getPosts() {
      return await Post.query(); 
    },
    async getPost(_, args) {
      return await Post.query.findById(1);
    }
}

// module.exports = {
//   Query: {
//     getPosts: () => { },
//   },
//   getPost: (_, { _id }) => Post.findById(_id),
//   getPosts: () => Post.findOne({}),
//   createPost: (_, args) => Post.create(args),
//   updatePost: (_, { _id, ...rest }) =>
//     Post.findByIdAndUpdate(_id, rest, { new: true }),
//   deletePost: async (_, { _id }) => {
//     try {
//       await Post.findByIdAndRemove(_id)
//       return {
//         message: "Delete success!"
//       }
//     } catch (err) {
//       throw err
//     }
//   }
// }
