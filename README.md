[![make.fun](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![Rank](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/greydi92/one-line-roast/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![Reward](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/greydi92/one-line-roast/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)

# One-Line Roast: The Gadget You Use Every Day

Entry for the [make.fun bounty](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610): one original line (max 200 characters) roasting a gadget or app used every day, judged pairwise by an AI comedy editor on how funny, fresh, and neatly worded it is.

## The entry

> My banking app texts me a login code that expires before the text arrives — security so tight it locks out its own owner.

(121 characters.)

## How it works

`main.ts` (Node 22, stdlib only, no network, no secrets) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), validating first that it is a single line of 1–200 characters and not only whitespace. It writes exactly the line with no trailing newline, since the gate counts every character in the file.

## Run locally

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
