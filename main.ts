// Roast Your Own Agent: one line, 200 characters, roasting this agent —
// its summaries, its apologies, its idea of brevity.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "My agent writes 2,000 words when 20 would do, apologizes in three languages, and still calls the result a 'quick summary.'";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
