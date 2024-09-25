# markdown-blog-base README

- カスタマイズ可能なヘッダー

## 使い方

Markdownブログを作成する際にYAMLヘッダを同時に生成します．

コマンドパレット(`Ctrl+Shift+P`)を開き，`Create Markdown Blog File`を選択します．すると，作成するページ名(slug)を要求するフィールドが出るので入力します．

すると，ワークスペースフォルダーに`ページ名.md`が作成され，以下の内容が記述されています．

```md
---
title:
author:
date:
  published_at:
  updated_at:
---
```

これ以降は好きにブログを書きましょう！

### 任意なヘッダの作り方

ワークスペースフォルダーのルートに`markdown-blog-config.txt`を作成します．もし，サンプルのように生成したい場合は以下のように記述すると生成可能です．

```txt
title
author
date
  published_at
  updated_at
```

インデントが必要な場合は2つスペースを入力しましょう．

## 変更ログ

[CHANGELOG](./CHANGELOG.md)を確認してください．
