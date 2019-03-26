import api from '../api'
import  { normalize, schema } from 'normalizr'

const media = new schema.Entity('media', {}, {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({...value, category: parent.id})
})

const category = new schema.Entity('categories', {
  playlist: new schema.Array(media)
})

const related =  new schema.Entity('related', {}, {
  idAttribute: 'id',
})

const categories = { categories: new schema.Array(category), related}

const normalizedData = normalize(api, categories);

export default normalizedData
