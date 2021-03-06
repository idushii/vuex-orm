import Attr from '../types/Attr'
import Increment from '../types/Increment'
import HasOne from '../relations/HasOne'
import BelongsTo from '../relations/BelongsTo'
import HasMany from '../relations/HasMany'
import HasManyBy from '../relations/HasManyBy'
import HasManyThrough from '../relations/HasManyThrough'
import BelongsToMany from '../relations/BelongsToMany'
import MorphTo from '../relations/MorphTo'
import MorphOne from '../relations/MorphOne'
import MorphMany from '../relations/MorphMany'
import MorphToMany from '../relations/MorphToMany'
import MorphedByMany from '../relations/MorphedByMany'
import Type from './Type'
import Relation from './Relation'

export type Field = Fields | Attribute

export interface Fields {
  [key: string]: Field
}

export type Attribute = Type | Relation

export type Type = Type

export type Relation = Relation

export default class Contract {
  /**
   * Determine if the given value is the type of fields.
   */
  static isFields (attr: Field): attr is Fields {
    return !this.isAttribute(attr)
  }

  /**
   * Determine if the given value is the type of field.
   */
  static isAttribute (attr: Field): attr is Attribute {
    return attr instanceof Attr
           || attr instanceof Increment
           || this.isRelation(attr)
  }

  /**
   * Determine if the given value is the type of relations.
   */
  static isRelation (attr: Field): attr is Relation {
    return attr instanceof HasOne
           || attr instanceof BelongsTo
           || attr instanceof HasMany
           || attr instanceof HasManyBy
           || attr instanceof HasManyThrough
           || attr instanceof BelongsToMany
           || attr instanceof MorphTo
           || attr instanceof MorphOne
           || attr instanceof MorphMany
           || attr instanceof MorphToMany
           || attr instanceof MorphedByMany
  }

  /**
   * Determine if the given value is the type of morph relations.
   */
  static isMorphRelation (attr: Relation): attr is MorphOne | MorphMany {
    return attr instanceof MorphOne || attr instanceof MorphMany
  }
}
