# Links

- [Links](#links)
- [Browser](#browser)
    - [`getLastURLSegment`](#getlasturlsegment)
- [Date](#date)
    - [`getPastDate`](#getpastdate)
- [Memory](#memory)
  - [`humanFileSize`](#humanfilesize)
- [File](#file)
  - [`getBase64`](#getbase64)
- [Object](#object)
  - [`isObject`](#isobject)
- [Shared](#shared)
  - [`excludeFields`](#excludefields)
  - [`uuid`](#uuid)
  - [`isLink`](#islink)
  - [`youTubeLinkWithEmbed`](#youtubelinkwithembed)

# Browser

### `getLastURLSegment`

```js
utils.browser.getLastURLSegment(
  'https://www.example.com/test/123'
); // "123"
```

# Date

### `getPastDate`

```js
const date = new Date();
```

```js
date.setDate(date.getDate() - 1);

utils.date.getPastDate(date); // yesterday
utils.date.getPastDate(date, { locale: 'ru' }); // Вчера
```

```js
date.setDate(date.getDate() - 3);

utils.date.getPastDate(date); // 3 days ago
utils.date.getPastDate(date, 'hours'); // 12.12.1234 1:23
utils.date.getPastDate(date, null, { locale: 'ru' }); // 3 дня назад
```

# Memory

## `humanFileSize`

```js
utils.memory.humanFileSize(2 ** 32); // '4.0 GiB'
```

# File

## `getBase64`

```js
utils.file.getBase64(file); // Promise<string | ArrayBuffer | null>
```

# Object

## `isObject`

```js
utils.object.isObject({}); // true
utils.object.isObject([]); // false
utils.object.isObject(function() {}); // false
```

# Shared

## `excludeFields`

```js
// { baz: [{ bar: true, baz: [] }, { bar: true, baz: [] }] }
utils.object.excludeFields({
  foo: true,
  baz: [
    {
      foo: true,
      bar: false,
      baz: []
    },
    {
      foo: true,
      bar: false,
      baz: []
    },
  ]
}, 'foo')

// Alose you can use that method like this
utils.object.excludeFields({
  foo: 1, bar: 2, baz: 3
}, 'foo', 'bar') // { baz: 3 }

utils.object.excludeFields({
  foo: 1, bar: 2, baz: 3
}, ['foo', 'bar']) // { baz: 3 }
```

## `uuid`

```js
utils.shared.uuid() // Will return unique id
```

## `isLink`

```js
utils.shared.isLink("http://example.com") // true
utils.shared.isLink("https://example.com") // true

utils.shared.isLink("htt://example.com") // false
utils.shared.isLink("https://examplecom") // false
utils.shared.isLink("https:/example.com") // false
```

## `youTubeLinkWithEmbed`

```js
utils.shared.youTubeLinkWithEmbed("videoId") // https://www.youtube.com/embed/${videoId}?si=MwpzP3N4aPMNGFri
```