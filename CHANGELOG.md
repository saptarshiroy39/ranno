# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2026-06-17

### Added
- Added `sv()` helper command to save generated code strings directly to a file.
- Added package version `__version__` export to `__init__.py`.

### Changed
- Updated `ex()` execution logic to run code in the caller's global namespace (`sys._getframe(1).f_globals`) rather than internal module globals.
- Restructured code output: `gn()` is now silent by default, and `ex()` explicitly prints the generated code before running it.

## [0.3.3] - 2026-06-04

### Added
- Upgraded Python requirement to `>=3.8` in package configuration.

### Changed
- Restructured repository layout, separating the SDK & API (`lib`) and the documentation landing page (`web`).

## [0.3.2] - 2026-05-31

### Changed
- Updated the default generation model to `gemini-3.1-flash-lite`.

## [0.3.1] - 2026-05-30

### Added
- Added wildcard import support by exposing `__all__ = ["gn", "ex", "cf"]` in the package `__init__.py`.

## [0.3.0] - 2026-05-29

### Changed
- Updated `ex()` execution logic to run in `globals()` directly rather than a custom dictionary-based environment.
- Improved the `Shadow Copy Integrity` rollback flow: replaces the modified file with the backup on failure instead of just warning.

### Removed
- Removed heavy dependencies (`numpy`, `matplotlib`, `seaborn`) to keep the core library lightweight.
- Removed debug console prints of generated code from API response handling.

## [0.2.2] - 2026-05-28

### Changed
- Updated FastAPI API root response payload format to include versioning and status.
- Updated the package description in `pyproject.toml`.

## [0.2.1] - 2026-05-08

### Changed
- Refactored library files to hide internal module implementations from the public namespace (renamed modules with leading underscores: `_cf.py`, `_ex.py`, `_gn.py`).

## [0.2.0] - 2026-05-07

### Added
- Added custom configuration helper `cf()` to allow users to override Gemini API credentials and model selections per request.

## [0.1.3] - 2026-05-04

### Added
- Documented package installation via `uv` in the README.

## [0.1.2] - 2026-05-03

### Added
- Added `matplotlib` and `seaborn` dependencies to support visualization tasks in code execution.

## [0.1.1] - 2026-05-02

### Changed
- Minor package metadata updates.

## [0.1.0] - 2026-05-01

### Added
- Initial release of the `ranno` library.
- Core functions: `gn()` for code generation and `ex()` for direct execution.
- File type schema intelligence and auto-extraction using `magika`.
- Shadow copy backup rollback file protection.
