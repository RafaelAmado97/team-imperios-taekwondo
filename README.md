# Team Impérios Taekwondo

Site institucional do Team Impérios Taekwondo, dojang Moo Duk Kwan em Varginha/MG.

## Desenvolvimento local

Requisitos: Node.js 20+ e npm.

```bash
npm install
npm run dev
```

```bash
npm run build   # build de produção
npm run lint    # análise estática
npm test        # testes
```

## Publicação no GitHub Pages

O workflow em `.github/workflows/deploy.yml` publica automaticamente a aplicação quando há push na branch `main`.

No repositório do GitHub, habilite **Settings → Pages → Source: GitHub Actions**.

## Organização do projeto

- `src/routes/index.tsx`: página institucional e SEO.
- `src/components/plans-section.tsx`: planos e horários.
- `src/lib/plans.ts`: fonte compartilhada dos preços e horários.
- `src/assets/`: fotos dos mestres e logo oficial.

As fotos e a logo pertencem ao Team Impérios Taekwondo e devem ser usadas apenas com autorização.
