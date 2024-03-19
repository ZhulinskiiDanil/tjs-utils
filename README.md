# Links

- [Links](#links)
- [Browser](#browser)
  - [`getLastURLSegment`](#getlasturlsegment)
- [Date](#date)
  - [`getRelativeDate`](#getrelativedate)
- [Memory](#memory)
  - [`humanFileSize`](#humanfilesize)
- [File](#file)
  - [`getBase64`](#getbase64)

# Browser

### `getLastURLSegment`

```js
utils.browser.getLastURLSegment(
  'https://www.example.com/test/123'
); // "123"
```

# Date

### `getRelativeDate`

```js
const date = new Date();
```

```js
date.setDate(date.getDate() - 1);

utils.date.getRelativeDate(date); // yesterday
utils.date.getRelativeDate(date, { locale: 'ru' }); // Вчера
```

```js
date.setDate(date.getDate() - 3);

utils.date.getRelativeDate(date); // 3 days ago
utils.date.getRelativeDate(date, 'hours'); // 12.12.1234 1:23
utils.date.getRelativeDate(date, null, { locale: 'ru' }); // 3 дня назад
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
