# LINEスタンプ作品集

星生学園 専門課程 情報デザイン学科の「生成AI」の授業で制作した作品を紹介する、GitHub Pages用の静的サイトです。サンプル1点と1期生（2026）4点を掲載しています。HTML・CSS・JavaScriptのみを使い、ビルド、バックエンド、データベース、有料サービスは不要です。

## ファイル

```text
index.html                    ページ構成・メタ情報
assets/css/style.css          デザイン・レスポンシブ設定
assets/js/works.js            全作品のデータ（編集するファイル）
assets/js/app.js              見出し・ナビゲーション・カードの自動表示
assets/images/school-logo.png 添付の学校ロゴ原本
assets/images/商品ID.png       各販売ページのメイン画像
.nojekyll                     GitHub Pagesの静的配信指定
```

すべてのサイト内パスは相対パスです。`https://アカウント名.github.io/リポジトリ名/`配下でも動作します。閲覧時にLINE STOREから情報を取得する処理はありません。

## ローカルで確認

簡易表示は`index.html`をブラウザで開くだけで確認できます（作品データはfetchやモジュールを使わず、通常のJavaScriptとして読み込みます）。より公開環境に近い確認には、このREADMEと同じフォルダーで次を実行します。

```sh
python -m http.server 8000
```

ブラウザで`http://localhost:8000/`を開きます。停止はターミナルでCtrl+C。Pythonがなければ、VS CodeのLive Serverなどの静的サーバーでも確認できます。

## GitHubへの登録とGitHub Pagesの公開

公開アカウントとリポジトリは未指定のため、まだ外部へのアップロード・公開はしていません。

1. GitHubにログインし、右上の「＋」→「New repository」を選びます。
2. リポジトリ名（例：`line-stamp-gallery`）を入力し、無料の公開用として「Public」を選んで「Create repository」を押します。これは例の名前で、好きな名前に変更できます。
3. リポジトリの「uploading an existing file」または「Add file」→「Upload files」を開きます。このフォルダーの**中身**（`index.html`、`assets`、`.nojekyll`、READMEなど）をアップロードし、「Commit changes」で保存します。フォルダー全体を1段深く入れず、リポジトリ直下に`index.html`がある状態にします。エクスプローラーの隠しファイル表示を有効にして`.nojekyll`も含めてください。
4. 「Settings」→「Pages」→「Build and deployment」の「Source」を「Deploy from a branch」にします。
5. 「Branch」を`main`、フォルダーを`/ (root)`にして「Save」を押します。
6. 公開処理の完了を待ちます。「Settings」→「Pages」に表示されるURL（`https://アカウント名.github.io/リポジトリ名/`）を開いて確認します。「Actions」で配信処理の成否を確認できます。
7. PC・スマホでロゴ、全5作品、コメント全文と販売リンクを確認します。更新時も変更ファイルを同じリポジトリにアップロードしてコミットすると反映されます。

独自ドメインの設定やCNAMEファイルは不要です。

### Gitを使う場合（任意）

サイトのフォルダーで実行します。URL中の`ACCOUNT`と`REPOSITORY`は作成した公開先に置き換えてください。

```sh
git init
git add .
git commit -m "Add LINE sticker gallery"
git branch -M main
git remote add origin https://github.com/ACCOUNT/REPOSITORY.git
git push -u origin main
```

その後、上記のPages設定を行います。

## 作品を追加する

`assets/js/works.js`の`window.STAMP_WORKS`配列にオブジェクトを追加します。各オブジェクトの間にはカンマが必要です。画像は`assets/images/`に保存してください。

| フィールド | 意味 |
| --- | --- |
| `id` | 作品固有のID。半角英数とハイフン推奨、重複不可 |
| `category` | サンプルは`"sample"`、学生作品は`"student"` |
| `cohort` | 期の番号。学生作品は数値、サンプルは`null` |
| `year` | 掲載する年。期とは独立して設定し、未決定なら`null` |
| `order` | 同じ区分・期の中の表示順。数値の小さい順 |
| `name` | 販売ページの商品名 |
| `creator` | 販売ページで公開されているクリエイター名 |
| `comment` | 学生作品は販売ページの説明文を全文そのまま記載。改行は`\n`。サンプルはユーザー指定の紹介文 |
| `thumbnail` | index.htmlからの相対画像パス。未取得なら空文字`""` |
| `storeUrl` | 対象商品のLINE STORE販売URL |

### 同じ期に追加する例

下記は構造説明用です。**商品名・販売者名・コメント・画像・URLは実際の販売ページを確認した値に置き換えてから**追加してください。`PRODUCT_ID`は実商品のIDです。

```js
{
  id: "new-work",
  category: "student",
  cohort: 1,
  year: 2026,
  order: 5,
  name: "販売ページの商品名",
  creator: "公開されている販売者名",
  comment: "販売ページの説明文全文",
  thumbnail: "assets/images/new-work.png",
  storeUrl: "https://store.line.me/stickershop/product/PRODUCT_ID/ja"
}
```

### 新しい期を追加する例

同じ形式で`cohort: 2`または`cohort: 3`を指定します。**期から年を計算しません。**次の例は年未決定のため`null`です。決定後に学校で確認した年を数値で入れてください。年未決定なら「2期生」、年を設定すると「2期生（設定年）」になります。同じ期に異なる年がある場合は見出しにすべての年を表示します。

```js
{
  id: "second-cohort-work",
  category: "student",
  cohort: 2,
  year: null,
  order: 1,
  name: "販売ページの商品名",
  creator: "公開されている販売者名",
  comment: "販売ページの説明文全文",
  thumbnail: "assets/images/second-cohort-work.png",
  storeUrl: "https://store.line.me/stickershop/product/PRODUCT_ID/ja"
}
```

期の見出しとヘッダーナビゲーションは自動で増えます。サンプルが先頭、その後は1期生、2期生、3期生の数値順です。作品のない期は表示されません。HTMLや表示処理の編集は不要です。

## 色・ロゴ・画像について

背景はトップのオレンジ＋ミントの淡いグラデーション、白い本文部分、青みのあるグレー（`--gallery-surface`）の学生作品パネルに分けています。サムネイルは作品ごとのブルー・ミント・ピンク・イエロー・ラベンダーの背景で区別し、画像自体の色や透明部分は変更していません。

- 学校の専門課程の正式なオレンジのカラーコードは確認できなかったため、指定の仮色`#F58220`をCSS変数`--school-orange`に使用しています。確認先：[学校の専門課程公式サイト](https://hossho.ed.jp/senmonkatei/)。正式なブランドガイドの指定を得たら変更してください。
- LINEを連想する緑は`--line-green: #06C755`です。ロゴは作成していません。
- 本文は濃いグレー、緑ボタンは白文字です。トップのオレンジはテーマカラーと同じ鮮やかな色です。色はCSS先頭の変数で変更できます。
- Google FontsのWebフォントを使用しています。見出しは「M PLUS Rounded 1c」、本文は「Noto Sans JP」です。`display=swap`で読み込み中も文字を表示し、通信できない場合は日本語のシステム書体に切り替わります。フォントの配信にGoogle Fontsへの通信を使用します。
- トップの`hero-allstars.png`は、ユーザーの追加指定に基づきサンプルと学生作品4点のメイン画像を参考に画像生成ツールで制作した装飾用イラストです。星乃ぽぽん、双子のオコジョ2匹、サモモエド、柴犬、フクロウの全6キャラクターを配置しています。新たな学生の販売作品としては扱いません。作品カードのサムネイルは引き続き販売ページの原画像です。生成内容は`HERO-ILLUSTRATION.md`に記録しています。

公開手順の参考：[GitHub公式・GitHub Pagesサイトの作成](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)。
- 学校ロゴは添付の「シンボルマーク_単体_1111x888.png」をバイト単位でそのままコピーしたものです。色、形、比率を変更していません。faviconも同じ元画像を参照します。
- サムネイルは2026年10月3日に各販売ページの`og:image`（`LINEStorePC/main.png`）を取得。PNGの透明部分と縦横比を保ち、`object-fit: contain`で表示しています。参考画像の人物・仮作品は使っていません。
- `thumbnail`が空、または画像が読めない場合は「画像準備中」を表示します。作品画像は生成しません。
- 学生作品4点のコメントは改行を含めて販売ページと照合済みです。サンプルのコメントはユーザー指定の「星乃ぽぽんの日常使いスタンプです！授業用サンプル作品。」を使用しています。クリエイター名に本名の推測は含めていません。

## 出典と更新

| 区分 | 商品名 | 販売ページ |
| --- | --- | --- |
| サンプル | 佐賀星生学園 星乃ぽぽん | https://store.line.me/stickershop/product/33783324/ja |
| 1期生① | 双子のオコジョ | https://store.line.me/stickershop/product/33937588/ja |
| 1期生② | サモモエド | https://store.line.me/stickershop/product/33864207/ja |
| 1期生③ | 社畜柴犬の日常 | https://store.line.me/stickershop/product/33937202/ja |
| 1期生④ | よふかしフクロウ | https://store.line.me/stickershop/product/33862899/ja |

画像の取得元は各ページのメイン画像です。関連商品や広告を使っていません。更新時に販売ページの商品名・販売者名・説明文・メイン画像を再確認し、`works.js`と画像ファイルを更新してください。原作者の文章の転載了承がある前提で掲載しています。

## 操作性

トップのイラストは軽く登場し、吹き出しと星が数回だけ動いた後に静止します。マウス操作時はカードが少し浮き上がります。`prefers-reduced-motion: reduce`ではアニメーション・浮き上がり・滑らかなスクロールを無効にしています。

フッターは学校名・学科名と`© 2026 Saga Hossho Gakuen`を表示します。授業の説明は作品一覧の導入文に掲載しています。

PCは学生作品4列、タブレットは2列、600px以下のスマホは1列。サンプルも同じカード部品です。説明文・コメントは省略しません。フォーカスの可視化、スキップリンク、意味のある見出し、画像alt、44px以上の主要リンク操作領域、動きを減らす設定に対応しています。外部リンクはすべて`target="_blank" rel="noopener noreferrer"`です。
