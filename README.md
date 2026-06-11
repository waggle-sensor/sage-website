# Sage Website, Documentation, and Tutorials


## Writing Docs

* [The Format of a Tutorial/Doc](./writing-docs/doc-format.md)
* [Using Markdown](./writing-docs/using-markdown.md)


## Updating Docs

* [Editing a Page](./writing-docs/updating-docs.md)


## Local Development

Requires [node.js](https://nodejs.org) (v20.12.2+)

Install deps:

```console
npm install
```

Start the local dev environment:

```console
npm start
```

## Build

Generate static content into the `build` directory:

```console
npm run build
```

## GitHub Pages Deploy

GIT_USER=<GITHUB_USERNAME> npm run deploy

## Scripts

Generate a horizontal collage from multiple images:

```console
python scripts/make-collage.py output.jpg input1.jpg input2.jpg [input3.jpg ...]
```




