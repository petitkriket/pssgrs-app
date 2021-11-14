import createRepository from '@/repositories'

export default (ctx, inject) => {
  inject('api', createRepository(ctx.$axios))
}
