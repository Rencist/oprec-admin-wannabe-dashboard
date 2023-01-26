# Oprec Admin 2023 Dashboard

## Commit Message Convention

This website follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Format

`<type>(optional scope): <description>`
Contoh: `feat(pre-event): add speakers section`

### 1. Type

Type yang bisa digunakan adalah:

- feat → Jika ada penambahan/pengurangan fitur codingan. Contoh: `feat: add table on landing page`, `feat: remove table from landing page`
- fix → Jika ada bug fixing, diikuti dengan bugnya. Contoh: `fix: illustration overflows in mobile view`
- BREAKING CHANGE → Jika ada perubahan yang signifikan. Contoh: `BREAKING CHANGE: change login flow to not save token in localStorage`
- docs → Update documentation (README.md)
- style → Update style, tidak mengubah logic sama sekali (reorder import, fix whitespace, remove comment)
- chore → Jika menginstall, mengupdate dependecies
- refactor → Jika ada perubahan code, dengan end result yang sama, tetapi approach berbeda yang lebih baik.
- ci → Update github workflows, husky
- test → Update testing suite
- perf → Fix sesuatu yang bersifat improve performance (derived state, memo)
- vercel → Jika ada commit kosong untuk trigger vercel deployment. Contoh: `vercel: trigger deployment`

### 2. Description

Description harus bisa mendeskripsikan apa yang dikerjakan.

**Jika ada beberapa hal yang dikerjakan, maka lakukan commit secara bertahap.**

- Setelah titik dua, ada spasi. Contoh: `feat: add something`
- Jika type `fix` langsung sebut issuenya. Contoh: `fix: file size limiter not working`
- Gunakan kata imperative, dan present tense: "change" bukan "changed" atau "changes"
- Jangan gunakan huruf kapital di awal kalimat description
- Jangan tambahkan titik di akhir description
