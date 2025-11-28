// Quiz State
let currentQuestion = 1;
let answers = {};
let quizCompleted = false;

// Timer State
let headerTimer = 1200; // 20 minutes in seconds
let popupTimer = 300; // 5 minutes in seconds
let vagasCounter = 9;

// DOM Elements
const questions = document.querySelectorAll('.question');
const progressFill = document.getElementById('progressFill');
const resultSection = document.getElementById('result');
const scoreCircle = document.getElementById('scoreCircle');
const scoreText = document.getElementById('scoreText');
const resultMessage = document.getElementById('resultMessage');
const socialProof = document.getElementById('socialProof');
const exitPopup = document.getElementById('exitPopup');
const popupTimerDisplay = document.getElementById('popupTimer');
const headerTimerDisplay = document.getElementById('timerDisplay');
const vagasCounterDisplay = document.getElementById('vagasNumero');
const ctaButton = document.getElementById('ctaButton');

// Social Proof Messages
const socialProofMessages = [
    { name: 'Juliana (PR)', action: 'acabou de reduzir 3cm nas pernas', time: '18 seg' },
    { name: 'Mariana (SP)', action: 'reduziu 2cm em 15 dias', time: '2 min' },
    { name: 'Carla (RJ)', action: 'conseguiu usar botas pela 1ª vez', time: '5 min' },
    { name: 'Patricia (MG)', action: 'eliminou 4kg de líquido retido', time: '8 min' },
    { name: 'Renata (RS)', action: 'parou de sentir dor nas pernas', time: '12 min' }
];

// Initialize Quiz
function initQuiz() {
    setupEventListeners();
    startHeaderTimer();
    updateProgressBar();
    trackEvent('PageView');
    
    // Show social proof after delay
    setTimeout(() => {
        showSocialProof();
        setInterval(showSocialProof, 15000); // Show every 15 seconds
    }, 5000);
}

// Setup Event Listeners
function setupEventListeners() {
    // Option selection
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            selectOption(this);
        });
    });

    // Exit intent
    document.addEventListener('mouseleave', handleExitIntent);
    
    // Prevent accidental page leave
    window.addEventListener('beforeunload', function(e) {
        if (!quizCompleted && currentQuestion > 1) {
            e.preventDefault();
            e.returnValue = '';
        }
    });
}

// Handle Option Selection
function selectOption(selectedOption) {
    const question = selectedOption.closest('.question');
    const questionNumber = parseInt(question.dataset.question);
    const value = selectedOption.dataset.value;
    
    // Remove previous selection
    question.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selection to clicked option
    selectedOption.classList.add('selected');
    
    // Store answer
    answers[questionNumber] = value;
    
    // Track answer
    trackEvent('Lead', { question: questionNumber, answer: value });
    
    // Show social proof after question 2
    if (questionNumber === 2) {
        setTimeout(() => showSocialProof(), 1000);
    }
    
    // Auto advance to next question
    setTimeout(() => {
        nextQuestion();
    }, 1000);
}

// Navigate to Next Question
function nextQuestion() {
    if (currentQuestion < 5) {
        // Hide current question
        questions[currentQuestion - 1].classList.remove('active');
        
        // Show next question
        currentQuestion++;
        questions[currentQuestion - 1].classList.add('active');
        
        // Update progress
        updateProgressBar();
        
        // Smooth scroll to top
        window.scrollTo({
            top: document.querySelector('.quiz-section').offsetTop - 100,
            behavior: 'smooth'
        });
    } else {
        // Show results
        showResults();
    }
}

// Update Progress Bar
function updateProgressBar() {
    const progress = (currentQuestion - 1) / 5 * 100;
    progressFill.style.width = progress + '%';
}

// Show Results
function showResults() {
    quizCompleted = true;
    
    // Hide questions
    questions.forEach(q => q.classList.remove('active'));
    
    // Calculate score
    const cAnswers = Object.values(answers).filter(answer => answer === 'c').length;
    const score = Math.round((cAnswers / 5) * 100);
    
    // Show result
    resultSection.style.display = 'block';
    scoreText.textContent = `${cAnswers}/5`;
    scoreCircle.style.setProperty('--score-deg', `${(cAnswers / 5) * 360}deg`);
    
    // Generate result message
    let message = '';
    if (cAnswers >= 4) {
        message = `
            <h3 style="color: #e91e63; margin-bottom: 20px;">🚨 ALTO RISCO DE LIPEDEMA!</h3>
            <p style="font-size: 1.1rem; margin-bottom: 20px;">
                Você apresenta <strong>${cAnswers} dos 5 principais sintomas</strong> de lipedema.
                É muito provável que você esteja sofrendo com essa condição.
            </p>
            <p style="margin-bottom: 20px;">
                Mas não se desespere! Existe solução! Centenas de mulheres já reduziram o inchaço, 
                eliminaram a dor e recuperaram sua autoestima com o Protocolo Mailez 21 Dias.
            </p>
        `;
    } else if (cAnswers >= 2) {
        message = `
            <h3 style="color: #ff9800; margin-bottom: 20px;">⚠️ RISCO MODERADO</h3>
            <p style="font-size: 1.1rem; margin-bottom: 20px;">
                Você apresenta <strong>${cAnswers} dos 5 sintomas</strong> de lipedema.
                É importante ficar atenta, pois a condição pode estar começando.
            </p>
            <p style="margin-bottom: 20px;">
                O Protocolo Mailez 21 Dias pode te ajudar a prevenir o avanço e 
                melhorar significativamente seus sintomas atuais.
            </p>
        `;
    } else {
        message = `
            <h3 style="color: #4caf50; margin-bottom: 20px;">✅ BAIXO RISCO</h3>
            <p style="font-size: 1.1rem; margin-bottom: 20px;">
                Você apresenta <strong>apenas ${cAnswers} sintoma(s)</strong> de lipedema.
                Isso é um ótimo sinal!
            </p>
            <p style="margin-bottom: 20px;">
                Mesmo assim, o Protocolo Mailez pode te ajudar a manter suas pernas 
                saudáveis e prevenir futuros problemas.
            </p>
        `;
    }
    
    resultMessage.innerHTML = message;
    
    // Start vagas counter
    startVagasCounter();
    
    // Smooth scroll to results
    setTimeout(() => {
        resultSection.scrollIntoView({ behavior: 'smooth' });
    }, 500);
    
    // Track completion
    trackEvent('CompleteRegistration', { score: cAnswers });
}

// Social Proof Functions
function showSocialProof() {
    const message = socialProofMessages[Math.floor(Math.random() * socialProofMessages.length)];
    socialProof.innerHTML = `
        <div style="font-weight: 600; color: #e91e63;">${message.name}</div>
        <div>${message.action}</div>
        <div style="font-size: 0.9rem; color: #666;">→ há ${message.time}</div>
    `;
    socialProof.style.display = 'block';
    
    setTimeout(() => {
        socialProof.style.display = 'none';
    }, 5000);
}

// Timer Functions
function startHeaderTimer() {
    const timer = setInterval(() => {
        headerTimer--;
        const minutes = Math.floor(headerTimer / 60);
        const seconds = headerTimer % 60;
        headerTimerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        if (headerTimer <= 0) {
            clearInterval(timer);
            headerTimerDisplay.textContent = 'EXPIRADO';
            // Add urgency to CTA
            if (ctaButton) {
                ctaButton.textContent = 'OFERTA EXPIRANDO! CORRA!';
                ctaButton.style.animation = 'pulse 1s infinite';
            }
        }
    }, 1000);
}

function startVagasCounter() {
    const vagasTimer = setInterval(() => {
        if (vagasCounter > 3) {
            vagasCounter--;
            vagasCounterDisplay.textContent = vagasCounter;
        } else if (vagasCounter === 3) {
            vagasCounter--;
            vagasCounterDisplay.textContent = 'ÚLTIMA!';
            document.getElementById('vagasCounter').style.background = '#d32f2f';
            
            // Update CTA button
            if (ctaButton) {
                ctaButton.textContent = 'ÚLTIMA VAGA! CORRA!';
                ctaButton.style.animation = 'pulse 0.5s infinite';
            }
            
            clearInterval(vagasTimer);
        }
    }, 8000); // Reduce every 8 seconds
}

// Exit Intent Functions
function handleExitIntent(e) {
    if (!quizCompleted && e.clientY <= 0) {
        showExitPopup();
    }
}

function showExitPopup() {
    exitPopup.style.display = 'flex';
    startPopupTimer();
    trackEvent('Lead');
}

function fecharPopup() {
    exitPopup.style.display = 'none';
}

function startPopupTimer() {
    const timer = setInterval(() => {
        popupTimer--;
        const minutes = Math.floor(popupTimer / 60);
        const seconds = popupTimer % 60;
        popupTimerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (popupTimer <= 0) {
            clearInterval(timer);
            fecharPopup();
        }
    }, 1000);
}

// Meta Pixel Tracking
function trackEvent(eventName, parameters = {}) {
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, parameters);
    }
}

function trackConversion(eventName) {
    trackEvent(eventName, { 
        value: 97.00, 
        currency: 'BRL',
        content_name: 'Projeto Mailez 21 Dias'
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initQuiz);

// Additional animations and effects
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    });

    // Observe elements for animation
    document.querySelectorAll('.testimonial, .question, .result').forEach(el => {
        observer.observe(el);
    });
});

// Add CSS for additional animations
const additionalStyles = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .testimonial:hover {
        transform: translateY(-5px);
        transition: transform 0.3s ease;
    }
    
    .option.selected {
        animation: selectedPulse 0.3s ease;
    }
    
    @keyframes selectedPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);