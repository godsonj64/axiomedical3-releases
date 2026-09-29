# AXIO Medical — Releases

Official download channel for **AXIO Medical**, an imaging informatics
workstation for **research and educational use**.

Grab the latest installers from the [Releases page](../../releases/latest).
Every installation runs as a **30-day trial**; continued use needs an
institutional licence.

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

## Licensing

- **30-day trial** — the full workstation for 30 days from first launch; no account needed.
- **Institutional licence** — a licence key for your institution, entered under
  *Help → Licence…*. Keys are checked on the workstation, so activation works offline.
- Licensing enquiries: **godson@axiomaticresearch.com**

AXIO Medical 2.7.2 and later are licensed software; the licence terms ship with the
app (`LICENSE.txt`), together with the notices for its third-party components.
Versions 2.7.1 and earlier were released under the MIT License.

## Intended use

AXIO Medical is provided for **research and education only**. It is **not** a
certified medical device and must **not** be used for primary diagnosis or to
guide clinical decisions.

## Support

Found a problem with a build? Open an issue on this repository.

---

© 2026 Axiomatic Research. AXIO Medical is licensed software (2.7.2 and later).
