#!/bin/bash

codex --dangerously-bypass-approvals-and-sandbox "@.ralph/prd.json @.ralph/progress.txt \
1. Read the PRD and progress file. \
2. Find the next incomplete task and implement it. \
3. Check any feedback loops, such as types and tests. \
4. Only if all pass, update prd.json (set passes) and append to progress.txt. \
5. Commit your changes and push to the remote repository. \
ONLY DO ONE TASK AT A TIME."