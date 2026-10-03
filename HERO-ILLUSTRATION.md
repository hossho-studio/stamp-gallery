# トップ用イラストの生成記録

## 現在のオールスター版

- 使用ツール：組み込みの画像生成ツール（image_gen）。
- 参考画像：見本と学生作品4点、計5商品のメイン画像（`33783324.png`、`33937588.png`、`33864207.png`、`33937202.png`、`33862899.png`）。
- 保存先：`assets/images/hero-allstars.png`。
- 星乃ぽぽん、双子のオコジョ2匹、サモモエド、柴犬、フクロウの全6キャラクターをまとめた、透明背景の装飾用イラストです。
- 作品カードでは販売ページの原画像を使用しています。

### オールスター版の生成プロンプト

```text
Use case: illustration-story. Create a premium cheerful kawaii ensemble illustration for the right side of a Japanese LINE sticker portfolio hero. Use ALL FIVE attached images as distinct character identity references. The ensemble MUST include all six individual characters: 1 reference 星乃ぽぽん, the chibi girl with long brown hair, tan animal ears, dark navy school blazer and red/navy ribbon; 2 reference 双子のオコジョ, BOTH small white ermine twins, one with pink bow and pink flower, the other with blue bow and blue snowflake; 3 reference サモモエド, fluffy white samoyed with peach pink accents and a peach fruit; 4 reference 社畜柴犬, tan and white Shiba wearing grey business suit and purple tie, expressive slightly tired face; 5 reference よふかしフクロウ, round lavender purple sleepy owl with yellow beak. Preserve each recognizable distinct colors, outfit and species; do not turn everyone into generic cats. All six gather in a joyful cozy compact group, girl behind waving at upper center, animals in front and on either side, tiny owl at upper side; characters look like friends posing for a group picture, overlapping naturally but every face and key outfit recognizable. Clean warm dark outlines, polished soft illustrated shading, fluffy detail, tasteful kawaii editorial style suitable for student design school. Make a cohesive organic approximately square ensemble, full silhouettes with safe margins, clean genuinely transparent background, no solid canvas. Small sparse orange and green four-point sparkles around group. No text, no captions, no Japanese lettering, no speech bubble text, no logos, no watermark, no website UI. Do not reproduce original text in references. This is newly generated decorative hero artwork, not product thumbnails. Prioritize accurate identity and charm over adding props.
```

## 以前の星乃ぽぽん単体版（未使用）

- 使用ツール：組み込みの画像生成ツール（image_gen）。
- 参考画像：見本「佐賀星生学園 星乃ぽぽん」のメイン画像（`assets/images/33783324.png`）。
- 保存先：`assets/images/hero-popon.png`。
- 透明背景のPNG。見本を参考にした新しい装飾用イラストであり、学生作品の販売サムネイルや公式キャラクターの新規設定としては扱いません。
- 元の学校ロゴと作品カード画像は変更していません。

## 実際に使用したプロンプト

```text
Use case: illustration-story. Create a polished cute website hero illustration derived from the attached reference LINE sticker character 星乃ぽぽん. Reference image is character identity reference, not an image to reproduce verbatim. Retain long dark brown hair, large warm brown eyes, tan animal ears, dark navy school blazer and red/navy bow tie. A single cheerful chibi character, smiling brightly with closed happy eyes, tilting head slightly, waving one hand, holding a small orange speech bubble prop with the other hand. Upper body / waist-up, complete silhouette and both hands visible. Clean crisp dark warm outlines, soft warm highlights and peach blush, pop kawaii editorial illustration with mature polished finish matching a Japanese orange-and-green student portfolio website. A few small orange and green four-point sparkles near character, sparse. Transparent background, no white canvas or backdrop. Square asset, character fills most of canvas with generous small safe margin. No text, no letters, no watermark, no school logo, no LINE logo. Do not introduce additional people or mascots. Intended as newly generated decorative hero artwork, not a product thumbnail.
```

## 承認済み修正版（2026-10-03）

ユーザー承認済みの修正版 v4 を反映。オコジョの体型・配置、各キャラクターの手や尾、ぽぽんの髪と制服、装飾数を調整し、左手を制服の胸元に添える自然なポーズへ修正しました。作品カードの原画像は変更していません。


## ノイズ低減（2026-10-03）

image_genで承認済み画像の塗りのざらつきを低減。構図とポーズ、透過背景を維持。

