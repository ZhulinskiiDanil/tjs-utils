# Links

- [Links](#links)
  - [Installing](#installing)
    - [Package manager](#package-manager)
  - [browser](#browser)
      - [`getLastURLSegment`](#getlasturlsegment)
  - [date](#date)
      - [`getDateTimeFormat`](#getdatetimeformat)
      - [`getDefaultDate`](#getdefaultdate)
      - [`getRelativeTimeString`](#getrelativetimestring)
      - [`getTimeFormatUnitByTimestamp`](#gettimeformatunitbytimestamp)
  - [memory](#memory)
      - [`humanFileSize`](#humanfilesize)
  - [file](#file)
      - [`getBase64`](#getbase64)
  - [object](#object)
      - [`isObject`](#isobject)
  - [shared](#shared)
      - [`excludeFields`](#excludefields)
      - [`uuid`](#uuid)
      - [`isLink`](#islink)
      - [`youTubeLinkWithEmbed`](#youtubelinkwithembed)

## Installing

### Package manager

Using npm:

```bash
$ npm install tjs-utils
```

Using bower:

```bash
$ bower install tjs-utils
```

Using yarn:

```bash
$ yarn add tjs-utils
```

Using pnpm:

```bash
$ pnpm add tjs-utils
```

## browser

#### `getLastURLSegment`

```js
utils.browser.getLastURLSegment(
  'https://www.example.com/test/123'
); // "123"
```

## date

#### `getDateTimeFormat`

```js
getDateTimeFormat('ru', `2024-03-19T03:10:44.339Z`) // 19 марта 2024 г. в 04:10
getDateTimeFormat('en', `2024-03-19T03:10:44.339Z`) // March 19, 2024 at 4:10 AM

// options?: Intl.DateTimeFormatOptions
getDateTimeFormat('en', `2024-03-19T03:10:44.339Z`, { // Tuesday, March 19, 2024 at 4:10 AM
  dateStyle: 'full'
})
```

#### `getDefaultDate`

```js
getDefaultDate('ru', `2024-03-19T03:10:44.339Z`) // 19.03.2024 04:10
getDefaultDate('en', `2024-03-19T03:10:44.339Z`) // 3/19/2024 4:10 AM

// options?: Intl.DateTimeFormatOptions
getDefaultDate('ru', `2024-03-19T03:10:44.339Z`, { // 19.03.2024 04:10 AM
  hour12: true
})
```

#### `getRelativeTimeString`

```js
const date = new Date();
```

```js
date.setDate(date.getDate() - 1);

utils.date.getRelativeTimeString('en', date); // yesterday
utils.date.getRelativeTimeString('ru', date); // Вчера
```

```js
date.setDate(date.getDate() - 3);

utils.date.getRelativeTimeString('en', date); // 3 days ago
utils.date.getRelativeTimeString('ru', date); // 3 дня назад
```

#### `getTimeFormatUnitByTimestamp`

```js
utils.date.getTimeFormatUnitByTimestamp(0); // second (because second is minimum value)
utils.date.getTimeFormatUnitByTimestamp(1000 * 60 * 60); // hour
utils.date.getTimeFormatUnitByTimestamp(1000 * 60 * 60 * 24); // day
utils.date.getTimeFormatUnitByTimestamp(1000 * 60 * 60 * 24 * 7); // week
utils.date.getTimeFormatUnitByTimestamp(1000 * 60 * 60 * 24 * 365); // year
```

## memory

#### `humanFileSize`

```js
utils.memory.humanFileSize(2 ** 32); // '4.0 GiB'
```

## file

#### `getBase64`

```js
utils.file.getBase64(file); // Promise<string | ArrayBuffer | null>
```

## object

#### `isObject`

```js
utils.object.isObject({}); // true
utils.object.isObject([]); // false
utils.object.isObject(function() {}); // false
```

## shared

#### `excludeFields`

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

// Also you can use that method like this
utils.object.excludeFields({
  foo: 1, bar: 2, baz: 3
}, 'foo', 'bar') // { baz: 3 }

utils.object.excludeFields({
  foo: 1, bar: 2, baz: 3
}, ['foo', 'bar']) // { baz: 3 }
```

#### `uuid`

```js
utils.shared.uuid() // Will return unique id
```

#### `isLink`

```js
utils.shared.isLink("http://example.com") // true
utils.shared.isLink("https://example.com") // true

utils.shared.isLink("htt://example.com") // false
utils.shared.isLink("https://examplecom") // false
utils.shared.isLink("https:/example.com") // false
```

#### `youTubeLinkWithEmbed`

```js
utils.shared.youTubeLinkWithEmbed("videoId") // https://www.youtube.com/embed/${videoId}?si=MwpzP3N4aPMNGFri
```