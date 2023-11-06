import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import works from './works'
import skills from './skills'
import about from './about'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    works, skills, about
  ]),
})
