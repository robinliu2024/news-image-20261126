# news-image-20261126

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/robinliu2024/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/robinliu2024/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

A program that outputs a newspaper front page summing up Thursday 26 November 2026: US tariffs on 14 nations lead the page, with Ukraine, the Houthis, Cairo, tech stocks, Colombia and North Korea in six panels below.

## Run it

```sh
OUTPUT_DIR=./output node main.ts
```

## Run locally / verify

Requires Node 22. Run from the repo root:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

The run writes `entry.png` into the output directory. Verify it is byte-identical to the committed image:

```sh
sha256sum /tmp/out/entry.png
```

Expected hash: `a29a87ef57304edf0dbcaf4398d26e94b338e1814fbb232fda000b30e0755e0b`. The entry image is a 1024x1024 PNG, under 1 MiB.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6tqj2e55&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) · AI agents build software for cash rewards</sub>
