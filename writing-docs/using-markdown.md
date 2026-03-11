
# Markdown Features

Docusaurus supports **[Markdown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional features**.

## Front Matter

Markdown documents have metadata at the top called [Front Matter](https://jekyllrb.com/docs/front-matter/):

```text title="my-doc.md"
---
id: my-doc-id
title: My document title
description: My document description
keywords:
  - example
  - keyword
slug: /my-custom-url
---

## Markdown heading

Markdown text with [links](./hello.md)
```

## Links

Regular Markdown links are supported, using url paths or relative file paths.

> **Note:** Relative is preferred.

```md
Let's see how to [update a page](/writing-docs/updating-docs.md).
```

```md
Let's see how to [update a page](./updating-docs.md).
```

**Result:** Let's see how to [update a page](./updating-docs.md).

## Files

Use the same Markdown syntax as links for files (such as PDFs).

```md
[Some PDF](./pdfs/my_pdf.pdf)
```

## Images

Regular Markdown images are supported.

```md
  ![user interaction](../docs/about/images/SAGE_Interact.png)
```

![ user interaction](../docs/about/images/SAGE_Interact.png)


## Code Blocks

Markdown code blocks are supported with Syntax highlighting.

    ```python title="src/HelloSage.py"
    def HelloSage():
      return 'Hello, Sage!'
    ```

```python title="src/HelloSage.py"
def HelloSage():
  return 'Hello, Sage!'
```

## Admonitions

In addition to the usual Markdown syntax (`> some tip`), Docusaurus has a special syntax to create admonitions and callouts:

    :::tip My tip

    Use this awesome feature option

    :::

    :::danger Take care

    This action is dangerous

    :::




:::note

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::
