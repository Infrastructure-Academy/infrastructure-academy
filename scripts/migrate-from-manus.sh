#!/bin/bash
# Migration script: Export Manus apps into monorepo structure
# Run this from the monorepo root

echo "=== Infrastructure Academy — Manus Migration ==="
echo ""
echo "This script copies app source code from Manus project exports"
echo "into the Turborepo monorepo structure."
echo ""
echo "Prerequisites:"
echo "  1. Download ZIP of each Manus project"
echo "  2. Extract to /tmp/manus-exports/<app-name>/"
echo ""

EXPORT_DIR="/tmp/manus-exports"
APPS_DIR="./apps"

for app in memorial academy quest xchange news; do
  if [ -d "$EXPORT_DIR/$app" ]; then
    echo "→ Copying $app..."
    # Copy client (frontend)
    cp -r "$EXPORT_DIR/$app/client" "$APPS_DIR/$app/client" 2>/dev/null
    # Copy server (backend)
    cp -r "$EXPORT_DIR/$app/server" "$APPS_DIR/$app/server" 2>/dev/null
    # Copy shared
    cp -r "$EXPORT_DIR/$app/shared" "$APPS_DIR/$app/shared" 2>/dev/null
    # Copy drizzle schema
    cp -r "$EXPORT_DIR/$app/drizzle" "$APPS_DIR/$app/drizzle" 2>/dev/null
    # Copy vite config
    cp "$EXPORT_DIR/$app/vite.config.ts" "$APPS_DIR/$app/" 2>/dev/null
    cp "$EXPORT_DIR/$app/tsconfig.json" "$APPS_DIR/$app/" 2>/dev/null
    echo "  ✓ $app copied"
  else
    echo "  ✗ $app not found at $EXPORT_DIR/$app"
  fi
done

echo ""
echo "=== Next steps ==="
echo "1. Remove Manus-specific imports (server/_core/*)"
echo "2. Replace Manus OAuth with Clerk"
echo "3. Replace Manus S3 with Cloudflare R2"
echo "4. Update DATABASE_URL to PlanetScale"
echo "5. Run: pnpm install && pnpm build"
