# ABT TOOL (정적 배포용)

이 폴더는 `sale.html`과 Next.js 정적 자산(`_next/`)로 구성된 **정적 사이트**입니다.

## 로컬 실행

```bash
python3 -m http.server 4173
```

그 다음 브라우저에서 `http://localhost:4173/` 또는 `http://localhost:4173/sale.html`로 접속합니다.

## Cloudflare Pages 배포 (GitHub 연동)

- Cloudflare Dashboard → **Pages** → **Create a project** → **Connect to Git**
- 이 리포지토리를 선택
- Framework preset: **None**
- Build command: (비움)
- Build output directory: (비움) 또는 `/`

배포 후 루트(`/`) 접속 시 `index.html`이 `/sale.html`로 자동 이동합니다.

