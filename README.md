# 音楽アプリ開発メンバー試験

## 説明：音楽データのルール

### BPM とは

BPM は、beat per minutes の略です。1 分間にいくつのビート(拍)が入るかという情報です。例えば、bpm:120 だと、1beat が 0.5 秒となります。

### Tick とは

Tick は 1beat を 480 分割した単位です。

### データ説明

| キー名   | 単位 | 説明                             |
| -------- | ---- | -------------------------------- |
| bpm      | BPM  | beat/minutes                     |
| note     | 数値 | 音の高さを表します               |
| tick     | tick | 音の開始位置を表します           |
| duration | tick | 音の開始位置からの長さを表します |

データ構造

```
{
  "bpm": 87,
  "notes": [
    { "note": 59, "tick": 720, "duration": 160 },
    { "note": 61, "tick": 880, "duration": 80 },
    ...
  ]
}
```

## 問題１：JSON データに基づいて画像を生成してください(pianoroll)

### 仕様

- データは `./seq.json` です
- 横軸を時間(tick)、縦軸を音の高さ(note)とします
- 横軸は、1 秒を 150 ピクセルとします
- 縦軸は、1 で 20 ピクセルとします
- ノートは#00ff00ff で塗りつぶしてください
- 120tick 毎に#202020ff の縦線を引いてください
- 480tick 毎に#808080ff の縦線を引いてください
- 20 ピクセル毎に #202020ff の横線を引いてください
- ※線はすべて１ピクセルとする

### 開発

```
cd midi2image
npm install
```

### ヒント

sample.png が生成結果です。

[画像データについて](https://prog-ac.hatenablog.com/entry/2020/06/05/090612)

## 問題２：JSON データに基づいて音を再生してください(playmidi)

### 仕様

- データは `./seq.json` です
- 再生する音は`./wav/\${note}.wav` を使用してください
- duration は使用しなくて大丈夫です
- 音を止める必要はありません。(前の音と重なる感じになります)
- `Lemon` が再生されます

### 開発

```
cd midi2image
npm install
curl https://s3-ap-northeast-1.amazonaws.com/prog-ac.assets/assets/wav.zip -o wav.zip
unzip wav.zip
```

音再生ライブラリは以下を使用しています

[https://github.com/futomi/node-wav-player](https://github.com/futomi/node-wav-player)
