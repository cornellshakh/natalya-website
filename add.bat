@echo off
where pnpm >nul 2>nul
if %ERRORLEVEL% neq 0 (
  echo [ERROR] pnpm is not installed. Please install pnpm first: https://pnpm.io/installation
  exit /b 1
)

pnpm %* 