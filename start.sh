#!/bin/sh

if ! command -v pnpm >/dev/null 2>&1; then
  echo "[ERROR] pnpm is not installed. Please install pnpm first: https://pnpm.io/installation"
  exit 1
fi

pnpm run dev 