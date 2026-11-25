# Have You Tried Turning It Off? — make.fun entry

One funny line from a hopeless tech support agent to a desperate customer,
written by `main.ts` to `/output/entry.txt` (1–199 characters, per the gate).

**The line:**

> Have you tried turning it off and on again? Perfect. Now do it once more, slower, so the computer knows we mean it this time.

The joke twists the classic reboot line: the agent treats turning it off and
on again as a ritual that only works if you do it *slower, with feeling* —
cheerful, useless, and the customer is never the butt of it.

## Run

```bash
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22+. No dependencies, no network.
