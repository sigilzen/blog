#!/bin/sh
set -eu
cd "$(dirname "$0")"
export PATH="$PWD/.local-tools/bin:$PATH"
export npm_config_cache="${TMPDIR:-/tmp}/blog-npm-cache"
case "${1:-dev}" in
  build) npm run build ;;
  dev) npm run dev ;;
  *) echo 'Usage: sh blog-local.sh [dev|build]' >&2; exit 2 ;;
esac
