# Skill: Connect Figma MCP to VS Code (Copilot)

## What it does
Allows GitHub Copilot (and other MCP-compatible agents) to read from and write to Figma files directly — no copy-paste, no screenshots. The agent can inspect layers, get design context, generate code from designs, and modify Figma files programmatically.

---

## Reference Figma file

This project uses **[On Da Radę](https://www.figma.com/design/iyrRYxHYeNx3n3MpEVyHWT/ondarade?t=fTMczYqmtmxyIjPr-0)** as the design source.

Once your MCP connection is set up, you can:
- Ask Copilot to inspect the design: `Can you analyze the main frame?`
- Generate code from it: `Implement the main frame as an Astro component`
- Make edits: `Add a section to the pink rectangle`

---

Open (or create) the VS Code global MCP config file:

```
~/Library/Application Support/Code/User/mcp.json
```

Add the Figma MCP entry:

```json
{
  "servers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp",
      "type": "http",
      "headers": {
        "Authorization": "Bearer YOUR_FIGMA_TOKEN"
      }
    }
  }
}
```

---

## Step 2 — Get a Figma Personal Access Token

1. Go to [figma.com/settings](https://www.figma.com/settings)
2. Scroll to **Personal access tokens**
3. Click **Generate new token**
4. Give it a name (e.g. `vscode-mcp`)
5. Copy the token and paste it in place of `YOUR_FIGMA_TOKEN` in `mcp.json`

> ⚠️ The token is shown only once. Save it somewhere safe.

---

## Step 3 — Reload VS Code

After saving `mcp.json`, reload the window:

```
Cmd+Shift+P → Developer: Reload Window
```

VS Code will start the MCP server. You can verify it's running by checking for log files at:

```
~/Library/Application Support/Code/logs/<date>/window*/mcpServer.mcp.config.usrlocal.figma.log
```

---

## Step 4 — Verify the connection

Ask Copilot to run `whoami`. A successful response looks like:

```json
{
  "handle": "Your Name",
  "email": "you@example.com",
  "plans": [...]
}
```

---

## Step 5 — Access a Figma file

Provide Copilot with a Figma file URL, e.g.:

```
https://www.figma.com/design/FILE_KEY/FileName?node-id=0-1
```

The agent will extract `FILE_KEY` and `node-id` automatically.

> ⚠️ **Permission requirement**: The authenticated user must have access to the file AND the file must belong to a team plan (not personal Drafts). Move files to a team project if you get permission errors.

---

## Rate limits (as of June 2026)

| Plan         | Seat       | Limit              |
|--------------|------------|--------------------|
| Starter      | Full / Dev | **6 calls / month** |
| Professional | Full / Dev | 200 calls / day    |
| Organization | Full / Dev | 200 calls / day    |
| Enterprise   | Full / Dev | 600 calls / day    |

### Tips to stay within the limit
- Keep a call counter file (e.g. `figma-mcp-calls.txt`) and update it manually before each call
- Batch operations into a single `use_figma` call instead of making multiple small calls
- Use `get_metadata` only when you don't already know the node structure
- Avoid `get_design_context` on the same node twice — cache the result in your notes

---

## What the agent can do once connected

| Action | Tool used |
|---|---|
| Verify auth & see plans | `whoami` |
| List pages in a file | `get_metadata` (no nodeId) |
| Inspect layer tree | `get_metadata` (with nodeId) |
| Get code + screenshot | `get_design_context` |
| Write/edit Figma layers | `use_figma` (Plugin API JS) |
| Create a new file | `create_new_file` |
| Generate diagram (FigJam) | `generate_diagram` |
| Capture webpage → Figma | `generate_figma_design` |

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `whoami` fails | Token missing or wrong in `mcp.json` — regenerate |
| File not accessible | File is in personal Drafts → move to a team project |
| Hit rate limit | Upgrade plan or wait until next month (Starter) |
| MCP tools not available in Copilot | Reload VS Code window after editing `mcp.json` |
| Logs are empty | Check the correct window log folder for today's date |

---

## Quick reference: URL parsing

Given:
```
https://www.figma.com/design/Rv4l77XwA7cW7k8LOZdDBK/Untitled?node-id=0-1
```

- **fileKey** → `Rv4l77XwA7cW7k8LOZdDBK`
- **nodeId** → `0:1` (replace `-` with `:`)
