# markdown-blog-base README

- Customizable header

[Japanese](./README-jp.md)

## Usage

When you create a Markdown blog, a YAML header is generated at the same time.

Open the command palette (`Ctrl+Shift+P`) and select `Create Markdown Blog File`. A field will appear asking for the name of the page (slug) to be created.

A ``page name.md`` will be created in the workspace folder, containing the following information.

```md
--- ``md_name.md
title:
author: .
date:: date_at: published_at: published_at: published_at: published_at
  published_at:
  updated_at:
--- ````author: author: date: published_at: updated_at: ...
````

After this, you can write your blog as you like!

### How to create an optional header

Create `markdown-blog-config.txt` in the root of your workspace folder. If you want to generate it as shown in the sample, you can do so by writing the following.

```txt
title
author
date
  published_at
  updated_at
````

If indentation is required, enter two spaces.

## CHANGELOG

Check [CHANGELOG](. /CHANGELOG.md).

Translated with DeepL.com (free version)
