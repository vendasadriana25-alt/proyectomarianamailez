# 📸 Guia Completo para Substituir as Imagens

## 📁 **Passo 1: Organizar suas Imagens**

### Criar pasta de imagens:
1. Crie uma pasta chamada `imagens` na mesma pasta onde estão seus arquivos
2. Ou use a pasta existente se já tiver uma
3. Coloque todas as suas fotos nessa pasta

### Nomenclatura sugerida:
```
imagens/
├── antes-depois-1.jpg
├── antes-depois-2.jpg
├── antes-depois-3.jpg
├── depoimento-juliana.jpg
├── depoimento-mariana.jpg
├── depoimento-carla.jpg
```

---

## 🔄 **Passo 2: Localizar onde estão as imagens no código**

### 📸 **Galeria de Antes e Depois** (linhas ~95-120)
```html
<img src="https://via.placeholder.com/300x400/667eea/ffffff?text=ANTES+DEPOIS+1" alt="Resultado 1 - Mariana S." class="before-after-img">
```

### 👥 **Depoimentos** (linhas ~300-350)
```html
<img src="https://via.placeholder.com/60x60/667eea/ffffff?text=JS" alt="Juliana Silva" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
```

---

## ✏️ **Passo 3: Fazer as Substituições**

### **Método 1 - Editor de Texto Simples:**

1. **Abra o arquivo `vendas.html`** em um editor (Bloco de Notas, VS Code, etc.)
2. **Pressione Ctrl+H** (substituir)
3. **Substitua os placeholders pelos seus caminhos**

### **Exemplos de substituições:**

#### 📸 **Antes e Depois:**
**DE:**
```html
<img src="https://via.placeholder.com/300x400/667eea/ffffff?text=ANTES+DEPOIS+1" alt="Resultado 1 - Mariana S." class="before-after-img">
```

**PARA:**
```html
<img src="imagens/antes-depois-1.jpg" alt="Resultado 1 - Mariana S." class="before-after-img">
```

#### 👥 **Depoimentos:**
**DE:**
```html
<img src="https://via.placeholder.com/60x60/667eea/ffffff?text=JS" alt="Juliana Silva" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
```

**PARA:**
```html
<img src="imagens/depoimento-juliana.jpg" alt="Juliana Silva" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
```

---

## 📋 **Passo 4: Tabela Completa das Substituições**

| Local | Imagem Atual | Substitua Por | Exemplo |
|-------|--------------|---------------|---------|
| Antes/Depois 1 | `https://via.placeholder.com/300x400/667eea/ffffff?text=ANTES+DEPOIS+1` | Sua imagem 1 | `imagens/antes-depois-1.jpg` |
| Antes/Depois 2 | `https://via.placeholder.com/300x400/764ba2/ffffff?text=ANTES+DEPOIS+2` | Sua imagem 2 | `imagens/antes-depois-2.jpg` |
| Antes/Depois 3 | `https://via.placeholder.com/300x400/f093fb/ffffff?text=ANTES+DEPOIS+3` | Sua imagem 3 | `imagens/antes-depois-3.jpg` |
| Depoimento Juliana | `https://via.placeholder.com/60x60/667eea/ffffff?text=JS` | Foto da Juliana | `imagens/depoimento-juliana.jpg` |
| Depoimento Mariana | `https://via.placeholder.com/60x60/764ba2/ffffff?text=MR` | Foto da Mariana | `imagens/depoimento-mariana.jpg` |
| Depoimento Carla | `https://via.placeholder.com/60x60/f093fb/ffffff?text=CS` | Foto da Carla | `imagens/depoimento-carla.jpg` |

---

## ⚠️ **Dicas Importantes:**

### **Formatos de Imagem:**
- ✅ **JPG** - Melhor para fotos reais
- ✅ **PNG** - Para imagens com transparência
- ✅ **WebP** - Formato moderno e leve

### **Tamanhos Recomendados:**
- **Antes/Depois:** 300x400 pixels (ou proporcional)
- **Depoimentos:** 60x60 pixels (serão redondas)

### **Otimização:**
- 📱 **Comprima as imagens** para carregar mais rápido
- 🖼️ **Use ferramentas online** como TinyPNG ou Squoosh
- 📁 **Mantenha o tamanho** de cada imagem abaixo de 500KB

---

## 🎯 **Passo 5: Testar**

1. **Salve o arquivo** `vendas.html`
2. **Atualize a página** no navegador (F5)
3. **Verifique se as imagens** apareceram corretamente
4. **Teste em celular** para ver se está responsivo

---

## 🆘 **Se der erro:**

### **Imagem não aparece:**
- Verifique se o **nome do arquivo está correto**
- Confirme se a **pasta está no local certo**
- Teste o **caminho completo** (ex: `src="imagens/sua-foto.jpg"`)

### **Imagem distorcida:**
- Verifique se **mantém a proporção**
- Use **imagens quadradas** para os depoimentos

---

## 🚀 **Precisa de Ajuda?**

Se tiver dificuldades:
1. **Me mostre o nome** das suas imagens
2. **Me diga onde** você colocou as fotos
3. **Eu posso fazer as substituições** para você!

**Exemplo prático:**
Se você tem uma foto chamada `minha-foto-antes-depois.jpg` na pasta `imagens/`, eu substituo o placeholder por:
```html
<img src="imagens/minha-foto-antes-depois.jpg" alt="Resultado 1 - Mariana S." class="before-after-img">
```