# 🚀 Guia de Deploy do Portfolio

## Opção 1: GitHub Pages (Automático via GitHub Actions)

### Passo a Passo:

1. **Crie um repositório no GitHub** (se ainda não tiver)
   - Vá para [github.com](https://github.com) e crie um novo repositório
   - Nome sugerido: `portfolio` ou `joao-pezzuol-portfolio`

2. **Faça commit e push do código:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```

3. **Ative o GitHub Pages:**
   - Vá para Settings > Pages no seu repositório
   - Em "Source", selecione "GitHub Actions"
   - O workflow já está configurado e vai fazer deploy automaticamente!

4. **Acesse seu site:**
   - URL será: `https://SEU_USUARIO.github.io/SEU_REPOSITORIO/`

---

## Opção 2: Deploy Manual com gh-pages

Se preferir fazer deploy manualmente:

```bash
npm run deploy
```

Isso vai:
1. Fazer o build do projeto
2. Criar/atualizar a branch `gh-pages`
3. Publicar no GitHub Pages

---

## Opção 3: Vercel (Mais Fácil e Rápido)

1. **Instale a CLI do Vercel:**
   ```bash
   npm install -g vercel
   ```

2. **Faça login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Siga as instruções** e seu site estará no ar em segundos!

---

## Opção 4: Netlify (Drag & Drop)

1. **Build local:**
   ```bash
   npm run build
   ```

2. **Acesse [netlify.com](https://netlify.com)**

3. **Arraste a pasta `dist`** para a área de deploy

4. **Pronto!** Seu site estará no ar

---

## 📝 Notas Importantes

- ✅ O build já está testado e funcionando
- ✅ A imagem está na pasta `public`
- ✅ Todos os caminhos estão configurados corretamente
- ✅ O projeto está pronto para produção

## 🔧 Troubleshooting

Se tiver problemas com rotas no GitHub Pages, adicione no `vite.config.js`:
```js
base: '/NOME_DO_REPOSITORIO/'
```

Mas para Vercel/Netlify, deixe como está (sem base ou base: '/').

