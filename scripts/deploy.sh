#!/usr/bin/env bash
set -euo pipefail

BRANCH="main"

info()  { printf "\033[1;34m→\033[0m %s\n" "$*"; }
ok()    { printf "\033[1;32m✓\033[0m %s\n" "$*"; }
warn()  { printf "\033[1;33m!\033[0m %s\n" "$*" >&2; }
fail()  { printf "\033[1;31m✗\033[0m %s\n" "$*" >&2; exit 1; }

current=$(git rev-parse --abbrev-ref HEAD)
[ "$current" = "$BRANCH" ] || fail "Not on $BRANCH (currently on $current). Switch first."

info "Fetching origin..."
git fetch origin "$BRANCH"

if ! git diff --quiet; then
  warn "You have unstaged changes:"
  git status --short
  fail "Commit or stash them before deploying."
fi

if ! git diff --cached --quiet; then
  warn "You have staged but uncommitted changes:"
  git status --short
  fail "Commit them before deploying."
fi

LOCAL=$(git rev-parse "$BRANCH")
REMOTE=$(git rev-parse "origin/$BRANCH")
BASE=$(git merge-base "$BRANCH" "origin/$BRANCH")

if [ "$LOCAL" = "$REMOTE" ]; then
  ok "Local $BRANCH matches origin/$BRANCH. Nothing to push."
elif [ "$LOCAL" = "$BASE" ]; then
  fail "Local $BRANCH is behind origin/$BRANCH. Pull before deploying."
elif [ "$REMOTE" = "$BASE" ]; then
  info "Local $BRANCH is ahead of origin/$BRANCH. Pushing..."
  git push origin "$BRANCH"
  ok "Pushed."
else
  fail "Local $BRANCH and origin/$BRANCH have diverged. Resolve before deploying."
fi

info "Building..."
npm run build

info "Publishing build/ to gh-pages branch..."
npx gh-pages -d build

ok "Deploy complete. https://alvaro347.github.io/afrstudio/"
