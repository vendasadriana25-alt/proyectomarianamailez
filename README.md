# Projeto Mailez 21 Dias - Landing Page de Quiz para Lipedema

Uma landing page completa e otimizada para conversão, desenvolvida especificamente para o Projeto Mailez 21 Dias, focado no tratamento de lipedema.

## 🎯 Objetivo

Criar uma experiência de quiz envolvente que identifique sintomas de lipedema e converta visitantes em leads qualificados para o programa de tratamento de 21 dias.

## ✨ Funcionalidades Implementadas

### 📋 Quiz Interativo
- **5 perguntas clínicas** sobre sintomas de lipedema
- **3 opções por pergunta** (a, b, c) com a opção 'c' sendo a mais urgente
- **Barra de progresso animada** mostrando progresso do quiz
- **Auto-scroll suave** entre perguntas
- **Animações de seleção** com efeitos visuais

### 🎬 Vídeo Integração
- **YouTube embed** com autoplay e mudo
- **Lazy loading** para otimização de performance
- **Layout responsivo** para todos os dispositivos

### 📊 Resultados Personalizados
- **Score animado** com círculo de progresso (conic-gradient)
- **Mensagens personalizadas** baseadas no número de respostas 'c'
- **Classificação de risco**: Alto, Moderado ou Baixo
- **Fotos antes/depois** com legendas descritivas

### 🔔 Prova Social Dinâmica
- **Notificações ao vivo** aparecendo após a 2ª pergunta
- **Mensagens variadas** com nomes, cidades e resultados
- **Animação de entrada** (slide-in da esquerda)
- **Timer automático** para ocultar notificações

### ⏰ Sistema de Urgência
- **Timer de 20 minutos** no cabeçalho
- **Contador de vagas** decrescente (9 até 3, depois "ÚLTIMA!")
- **CTA pulsante** com efeito de brilho
- **Texto dinâmico** mudando conforme urgência aumenta

### 🎯 Popup de Saída
- **Exit-intent detection** quando usuário tenta sair
- **Timer de 5 minutos** criando urgência adicional
- **Botão de ação** destacado
- **Animação suave** de entrada

### 📱 Design Responsivo
- **Mobile-first** com breakpoints otimizados
- **Fontes otimizadas**: Montserrat (títulos) e Open Sans (texto)
- **Cores da marca**: Rosa (#e91e63) e variações
- **Animações suaves** e transições elegantes

### 📈 Rastreamento e Analytics
- **Meta Pixel integrado** com eventos:
  - PageView
  - CompleteRegistration
  - Purchase
  - Lead
- **Parâmetros customizados** para cada evento
- **Conversão de valor** em reais

### 🗣️ Depoimentos Reais
- **3 depoimentos** com fotos, nomes, idades e cidades
- **Histórias de sucesso** em 21 dias
- **Layout em cards** com animação hover

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos, animações e responsividade
- **JavaScript Vanilla** - Funcionalidade interativa
- **YouTube Embed API** - Integração de vídeo
- **Meta Pixel** - Rastreamento de conversões

## 📁 Estrutura de Arquivos

```
Lipidema/
├── index.html          # Página principal com HTML completo
├── script.js           # JavaScript com toda funcionalidade
└── README.md           # Documentação do projeto
```

## 🎨 Personalização

### Cores
- Rosa principal: `#e91e63`
- Rosa escuro: `#c2185b`
- Vermelho urgência: `#ff1744`
- Fundo claro: `#f8f9fa`

### Fontes
- Títulos: `Montserrat` (pesos: 400, 600, 700, 800)
- Texto: `Open Sans` (pesos: 400, 600)

### Imagens
- Substitua as imagens placeholder com fotos reais de antes/depois
- Adicione fotos reais dos depoimentos
- Considere usar imagens otimizadas para web

## 📊 Eventos de Rastreamento

### PageView
- Disparado quando a página carrega
- **Pixel ID**: Substitua `YOUR_PIXEL_ID` no código

### Lead
- Disparado quando usuário responde quiz
- Parâmetros: número da pergunta e resposta

### CompleteRegistration
- Disparado quando quiz é completado
- Parâmetros: score final (0-5)

### Purchase
- Disparado quando CTA é clicado
- Parâmetros: valor (R$97,00), moeda (BRL)

## 🔧 Configuração

1. **Meta Pixel**: Substitua `YOUR_PIXEL_ID` no HTML pelo seu ID real
2. **Vídeo**: Substitua o ID do YouTube pelo vídeo real do projeto
3. **Imagens**: Substitua as imagens placeholder pelas imagens reais
4. **Depoimentos**: Atualize com depoimentos reais das alunas
5. **Links**: Adicione os links reais de vendas/conversão

## 🚀 Performance

- **CSS crítico inline** para renderização rápida
- **JavaScript minificado** (considere usar ferramenta de minificação)
- **Lazy loading** no vídeo do YouTube
- **Imagens otimizadas** recomendadas

## 📱 Responsividade

Testado e otimizado para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🎯 Melhores Práticas

- **Acessibilidade**: Contraste de cores adequado
- **SEO**: Meta tags otimizadas
- **Performance**: Código otimizado e limpo
- **UX**: Experiência fluida e intuitiva
- **Conversão**: Múltiplos pontos de conversão

## 🔄 Atualizações Futuras

- [ ] Integração com formulário de captura
- [ ] A/B testing de headlines
- [ ] Animações mais sofisticadas
- [ ] Integração com email marketing
- [ ] Versão em múltiplos idiomas

---

**Desenvolvido para o Projeto Mailez 21 Dias - Especialista em Lipedema**