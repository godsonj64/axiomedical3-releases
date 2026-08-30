# AXIO Medical — Releases

Official download channel for **AXIO Medical**, a desktop medical imaging
platform for **research and educational use**.

Grab the latest installers from the [Releases page](../../releases/latest).

## Downloads

| Platform | File | Notes |
| --- | --- | --- |
| Windows 10/11 (x64) | `AXIO Medical Setup <version>.exe` | Installer — choose your install location, creates Desktop and Start Menu shortcuts |
| Windows 10/11 (x64) | `AXIO Medical <version>.exe` | Portable — run directly, no installation |
| macOS 11+ (Universal) | `AXIO Medical-<version>-universal.dmg` | Drag to Applications |
| macOS 11+ (Universal) | `AXIO Medical-<version>-universal-mac.zip` | Zipped app bundle |

The macOS universal build runs natively on both Apple Silicon and Intel Macs.

## Installation notes

The builds are not signed with a paid code-signing certificate, so the operating
system will warn you on first launch.

**Windows** — SmartScreen may show "Windows protected your PC". Click
**More info**, then **Run anyway**.

**macOS** — if you see "cannot be opened because the developer cannot be
verified", right-click the app and choose **Open**, then confirm. Alternatively,
allow it under *System Settings → Privacy & Security*.

## Verifying a download

Each release lists SHA-256 checksums. Confirm your download matches before
installing:

```bash
# macOS / Linux
shasum -a 256 "AXIO Medical Setup 2.2.0.exe"
```

```powershell
# Windows PowerShell
Get-FileHash "AXIO Medical Setup 2.2.0.exe" -Algorithm SHA256
```

## Intended use

AXIO Medical is provided for **research and education only**. It is **not** a
certified medical device and must **not** be used for primary diagnosis or to
guide clinical decisions.

## Support

Found a problem with a build? Open an issue on this repository.

---

© 2026 AXIO Medical. Released under the MIT License.
