// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/delete.ts";
import * as $1 from "./routes/api/get.ts";
import * as $2 from "./routes/api/isdone.ts";
import * as $3 from "./routes/api/post.ts";
import * as $4 from "./routes/index.tsx";
import * as $$0 from "./islands/Box.tsx";
import * as $$1 from "./islands/Item.tsx";

const manifest = {
  routes: {
    "./routes/api/delete.ts": $0,
    "./routes/api/get.ts": $1,
    "./routes/api/isdone.ts": $2,
    "./routes/api/post.ts": $3,
    "./routes/index.tsx": $4,
  },
  islands: {
    "./islands/Box.tsx": $$0,
    "./islands/Item.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
