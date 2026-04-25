# Job Hunter — GitHub Pages + Ollama

> Self-hosted AI job hunting dashboard. No API keys. No monthly costs.

**Live at:** `https://arijal1.github.io/job-hunter/`  
**AI powered by:** Ollama running on your Raspberry Pi 4

---

## Deploy in 3 steps

### 1. Fork & enable GitHub Pages
- Fork this repo on GitHub
- Go to **Settings → Pages → Source** → select **GitHub Actions**
- Push to `main` — it auto-builds and deploys

### 2. Set up Ollama on your Pi
```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Pull a model (llama3.2 recommended for Pi 4)
ollama pull llama3.2

# Allow external connections
sudo systemctl edit ollama --force
# Add these two lines under [Service]:
#   Environment="OLLAMA_HOST=0.0.0.0"
#   Environment="OLLAMA_ORIGINS=*"

sudo systemctl restart ollama
```

### 3. Expose Pi via Cloudflare Tunnel
Add to `~/.cloudflared/config.yml`:
```yaml
ingress:
  - hostname: ollama.anuprijal.com.np
    service: http://localhost:11434
  # your other services...
  - service: http_status:404
```
Then: `sudo systemctl restart cloudflared`

---

## Configure the app
1. Open the app → click **⚙ Settings** tab
2. Set Ollama URL to `https://ollama.anuprijal.com.np`
3. Choose model → Save

---

## Recommended models for Pi 4 (4GB RAM)

| Model | RAM | Speed | Quality |
|-------|-----|-------|---------|
| `llama3.2:1b` | ~1GB | Fast | Good |
| `llama3.2` | ~2GB | Medium | **Best balance** ✓ |
| `mistral` | ~4GB | Slow | High |

---

## Update the app
```bash
git pull
git push origin main  # GitHub Actions auto-redeploys
```
