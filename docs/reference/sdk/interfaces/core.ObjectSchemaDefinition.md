---
nav: "ObjectSchemaDefinition"
note: "This file is autogenerated from TypeScript definitions. Make edits to the comments in the TypeScript file and then run `make docs` to regenerate this file."
search:
  boost: 0.1
---
# Interface: ObjectSchemaDefinition<K, L\>

[core](../modules/core.md).ObjectSchemaDefinition

A schema definition for an object value (a value with key-value pairs).

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `L` | extends `string` |

## Hierarchy

- `BaseSchema`

- [`PropertyWithOptions`](core.PropertyWithOptions.md)<{}\>

  ↳ **`ObjectSchemaDefinition`**

## Properties

### attribution

• `Optional` **attribution**: [`AttributionNode`](../types/core.AttributionNode.md)[]

Attribution text, images, and/or links that should be rendered along with this value.

See [makeAttributionNode](../functions/core.makeAttributionNode.md).

___

### codaType

• `Optional` **codaType**: [`Person`](../enums/core.ValueHintType.md#person) \| [`Reference`](../enums/core.ValueHintType.md#reference) \| [`SelectList`](../enums/core.ValueHintType.md#selectlist)

A hint for how Coda should interpret and render this object value.

For example, an object can represent a person (user) in a Coda doc, with properties for the
email address of the person and their name. Using `ValueHintType.Person` tells Coda to
render such a value as an @-reference to that person, rather than a basic object chip.

___

### description

• `Optional` **description**: `string`

A explanation of this object schema property shown to the user in the UI.

If your pack has an object schema with many properties, it may be useful to
explain the purpose or contents of any property that is not self-evident.

#### Inherited from

BaseSchema.description

___

### displayProperty

• `Optional` **displayProperty**: `K`

The name of a property within [properties](core.ObjectSchemaDefinition.md#properties) that be used to label this object in the
UI.
Object values can contain many properties and the Coda UI will display them as a "chip"
with only the value of the "displayProperty" property used as the chip's display label.
The other properties can be seen when hovering over the chip.

___

### featured

• `Optional` **featured**: `L`[]

**`Deprecated`**

Use [featuredProperties](core.ObjectSchemaDefinition.md#featuredproperties)

___

### featuredProperties

• `Optional` **featuredProperties**: `L`[]

A list of property names from within [properties](core.ObjectSchemaDefinition.md#properties) for the "featured" properties
of this object, used in sync tables. When a sync table is first added to a document,
columns are created for each of the featured properties. The user can easily add additional
columns for any other properties, as desired. All featured properties need to be top-level.
If you can't or don't want to change the received data format, consider changing the
received object after fetching and before returning and assigning it to the schema.

This distinction exists for cases where a sync table may include dozens of properties,
which would create a very wide table that is difficult to use. Featuring properties
allows a sync table to be created with the most useful columns created by default,
and the user can add additional columns as they find them useful.

Non-featured properties can always be referenced in formulas regardless of whether column
projections have been created for them.

___

### id

• `Optional` **id**: `K`

**`Deprecated`**

Use [idProperty](core.ObjectSchemaDefinition.md#idproperty)

___

### idProperty

• `Optional` **idProperty**: `K`

The name of a property within [properties](core.ObjectSchemaDefinition.md#properties) that represents a unique id for this
object. Sync table schemas must specify an id property, which uniquely identify each synced row.

___

### identity

• `Optional` **identity**: [`IdentityDefinition`](core.IdentityDefinition.md)

An identity for this schema, if this schema is important enough to be named and referenced.
See [IdentityDefinition](core.IdentityDefinition.md).

___

### imageProperty

• `Optional` **imageProperty**: [`PropertyIdentifier`](../types/core.PropertyIdentifier.md)<`K`\>

The name of a property within [properties](core.ObjectSchemaDefinition.md#properties) that can be used as a rich image preview of
the object.

Must be a [String](../enums/core.ValueType.md#string) property with the
[ImageAttachment](../enums/core.ValueHintType.md#imageattachment) or [ImageReference](../enums/core.ValueHintType.md#imagereference) hints

___

### includeUnknownProperties

• `Optional` **includeUnknownProperties**: `boolean`

Specifies that object instances with this schema can contain additional properties not defined
in the schema, and that the packs infrastructure should retain these unknown properties
rather than stripping them.

Properties not declared in the schema will not work properly in Coda: they cannot be
used natively in the formula language and will not have correct types in Coda. But, in certain
scenarios they can be useful.

___

### linkProperty

• `Optional` **linkProperty**: [`PropertyIdentifier`](../types/core.PropertyIdentifier.md)<`K`\>

The name of a property within [properties](core.ObjectSchemaDefinition.md#properties) that will
navigate users to more details about this object

Must be a [String](../enums/core.ValueType.md#string) property with a [Url](../enums/core.ValueHintType.md#url)
[codaType](core.ObjectSchemaDefinition.md#codatype).

___

### options

• `Optional` **options**: [`PropertySchemaOptions`](../types/core.PropertySchemaOptions.md)<{}\>

A list of values or a formula that returns a list of values to suggest when someone
edits this property.

**`Example`**

```
properties: {
  color: {
     type: coda.ValueType.String,
     codaType: coda.ValueHintType.SelectList,
     mutable: true,
     options: ['red', 'green', 'blue'],
  },
  user: {
     type: coda.ValueType.String,
     codaType: coda.ValueHintType.SelectList,
     mutable: true,
     options: async function (context) {
       let url = coda.withQueryParams("https://example.com/userSearch", { name: context.search });
       let response = await context.fetcher.fetch({ method: "GET", url: url });
       let results = response.body.users;
       return results.map(user => {display: user.name, value: user.id})
     },
  },
}
```

#### Inherited from

[PropertyWithOptions](core.PropertyWithOptions.md).[options](core.PropertyWithOptions.md#options)

___

### primary

• `Optional` **primary**: `K`

**`Deprecated`**

Use [displayProperty](core.ObjectSchemaDefinition.md#displayproperty)

___

### properties

• **properties**: [`ObjectSchemaProperties`](../types/core.ObjectSchemaProperties.md)<`K` \| `L`\>

Definition of the key-value pairs in this object.

___

### snippetProperty

• `Optional` **snippetProperty**: [`PropertyIdentifier`](../types/core.PropertyIdentifier.md)<`K`\>

The name of a property within [properties](core.ObjectSchemaDefinition.md#properties) that be used as a textual summary
of the object.

Must be a [String](../enums/core.ValueType.md#string) property or [Array](../enums/core.ValueType.md#array) of [String](../enums/core.ValueType.md#string)s.

___

### subtitleProperties

• `Optional` **subtitleProperties**: [`PropertyIdentifier`](../types/core.PropertyIdentifier.md)<`K`\>[]

A list of property names from within [properties](core.ObjectSchemaDefinition.md#properties) for the properties of the object
to be shown in the subtitle of a rich card preview for formulas that return this object.
Defaults to the value of [featuredProperties](core.ObjectSchemaDefinition.md#featuredproperties) if not specified.

___

### titleProperty

• `Optional` **titleProperty**: [`PropertyIdentifier`](../types/core.PropertyIdentifier.md)<`K`\>

The name of a property within [properties](core.ObjectSchemaDefinition.md#properties) that will be used as a title of a rich card preview
for formulas that return this object.
Defaults to the value of [displayProperty](core.ObjectSchemaDefinition.md#displayproperty) if not specified

Must be a [String](../enums/core.ValueType.md#string) property

___

### type

• **type**: [`Object`](../enums/core.ValueType.md#object)

Identifies this schema as an object schema.
