# FEELDO VILLA LP Final（軽量版）

このZIPは **HTML/CSS/JSのみ** を含む軽量版です。画像は `assets/` フォルダにご自身で配置してください。

## フォルダ構成
```
FEELDO_VILLA_LP_Final/
├─ index.html
├─ styles.css
├─ script.js
└─ assets/        ← 空フォルダ（ここに画像を入れてください）
```

## 画像の入れ方（推奨ファイル名）
- ヒーロー: `assets/hero.jpg`
- 特集画像: `assets/living-1.jpg`（VILLAセクション）
- ギャラリー: `assets/exterior-1.jpg`, `assets/living-2.jpg`, `assets/dining-1.jpg`, `assets/bedroom-1.jpg`, `assets/bath-1.jpg`, `assets/garden-1.jpg`
- 位置図など: `assets/map.jpg`

※ファイル名は自由に変更可能ですが、`index.html` 内の参照パスを合わせてください。

## 画像サイズの目安
- ヒーロー: 2400×1600px 以上（横長）
- ギャラリー: 1600×1200px 程度（4:3 推奨）
- WEB用に長辺 2560px 以下、JPEG高画質（80〜90）推奨

## 使い方
1. `assets/` に画像を入れる
2. `index.html` をブラウザで開く（ローカルでOK）
3. 文言やスペックは `index.html` を編集してください

## 備考
- ナビはスマホ表示でハンバーガーメニューに変わります
- 画像は遅延読み込み（`loading="lazy"`、背景は簡易プリロード）
- 追加セクションは `.section` ブロックを複製して作成可能
