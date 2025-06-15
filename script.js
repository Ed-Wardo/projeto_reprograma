// Dados estáticos incorporados diretamente no JavaScript
const staticData = {
  "courses": [
    {
      "id": 1,
      "title": "Introdução à Programação",
      "description": "Aprenda os conceitos básicos de programação e lógica.",
      "level": "Iniciante",
      "duration": "10 horas",
      "image": "Programação"
    },
    {
      "id": 2,
      "title": "HTML e CSS para Iniciantes",
      "description": "Crie suas primeiras páginas web com HTML e CSS.",
      "level": "Iniciante",
      "duration": "8 horas",
      "image": "HTML CSS"
    },
    {
      "id": 3,
      "title": "JavaScript Básico",
      "description": "Aprenda a linguagem de programação mais usada na web.",
      "level": "Intermediário",
      "duration": "12 horas",
      "image": "JavaScript"
    },
    {
      "id": 4,
      "title": "Introdução ao Git e GitHub",
      "description": "Aprenda a versionar seu código e colaborar em projetos.",
      "level": "Iniciante",
      "duration": "6 horas",
      "image": "Git"
    },
    {
      "id": 5,
      "title": "Banco de Dados SQL",
      "description": "Aprenda a criar e manipular bancos de dados relacionais.",
      "level": "Intermediário",
      "duration": "10 horas",
      "image": "SQL"
    },
    {
      "id": 6,
      "title": "Python para Iniciantes",
      "description": "Aprenda a programar com Python, uma linguagem versátil e poderosa.",
      "level": "Iniciante",
      "duration": "15 horas",
      "image": "Python"
    }
  ],
  "forumTopics": [
    {
      "id": 1,
      "title": "Como começar a aprender programação?",
      "author": "Maria Silva",
      "date": "2025-06-01",
      "replies": 12,
      "views": 145,
      "content": "Olá pessoal! Sou nova na área de tecnologia e gostaria de saber por onde começar a aprender programação. Quais linguagens são mais amigáveis para iniciantes?"
    },
    {
      "id": 2,
      "title": "Dúvida sobre HTML e CSS",
      "author": "João Santos",
      "date": "2025-06-03",
      "replies": 8,
      "views": 97,
      "content": "Estou tendo dificuldades para entender como funciona o posicionamento de elementos com CSS. Alguém poderia me ajudar?"
    },
    {
      "id": 3,
      "title": "Vagas para estágio em desenvolvimento web",
      "author": "Ana Oliveira",
      "date": "2025-06-04",
      "replies": 5,
      "views": 210,
      "content": "Pessoal, alguém sabe de empresas que estão contratando estagiários para desenvolvimento web? Estou procurando oportunidades."
    },
    {
      "id": 4,
      "title": "Dicas para entrevistas técnicas",
      "author": "Carlos Mendes",
      "date": "2025-06-05",
      "replies": 15,
      "views": 320,
      "content": "Tenho uma entrevista técnica para desenvolvedor júnior na próxima semana. Alguém tem dicas de como se preparar?"
    },
    {
      "id": 5,
      "title": "Recomendações de cursos de Python",
      "author": "Fernanda Lima",
      "date": "2025-06-06",
      "replies": 7,
      "views": 89,
      "content": "Estou querendo aprender Python. Alguém tem recomendações de bons cursos gratuitos ou de baixo custo?"
    }
  ],
  "jobs": [
    {
      "id": 1,
      "title": "Desenvolvedor Frontend Júnior",
      "company": "TechSolutions",
      "location": "São Paulo, SP",
      "salary": "R$ 3.500 - R$ 4.500",
      "type": "CLT",
      "level": "Júnior",
      "date": "2025-06-01",
      "description": "Buscamos um desenvolvedor frontend júnior para trabalhar com React, HTML, CSS e JavaScript."
    },
    {
      "id": 2,
      "title": "Estágio em Desenvolvimento Web",
      "company": "Inovação Digital",
      "location": "Remoto",
      "salary": "R$ 1.800",
      "type": "Estágio",
      "level": "Estágio",
      "date": "2025-06-03",
      "description": "Oportunidade para estudantes de tecnologia que desejam iniciar na área de desenvolvimento web."
    },
    {
      "id": 3,
      "title": "Desenvolvedor Backend Python",
      "company": "DataTech",
      "location": "Rio de Janeiro, RJ",
      "salary": "R$ 6.000 - R$ 8.000",
      "type": "CLT",
      "level": "Pleno",
      "date": "2025-06-04",
      "description": "Vaga para desenvolvedor backend com experiência em Python, Django e bancos de dados SQL."
    },
    {
      "id": 4,
      "title": "Analista de Dados",
      "company": "Analytics Co.",
      "location": "Belo Horizonte, MG",
      "salary": "R$ 5.000 - R$ 7.000",
      "type": "CLT",
      "level": "Júnior",
      "date": "2025-06-05",
      "description": "Buscamos profissional para análise de dados, com conhecimentos em SQL, Python e ferramentas de visualização."
    },
    {
      "id": 5,
      "title": "Desenvolvedor Full Stack",
      "company": "WebSystems",
      "location": "Remoto",
      "salary": "R$ 8.000 - R$ 12.000",
      "type": "PJ",
      "level": "Sênior",
      "date": "2025-06-06",
      "description": "Vaga para desenvolvedor full stack com experiência em React, Node.js e bancos de dados NoSQL."
    }
  ]
};

// Variáveis globais para armazenar os dados
let allCourses = [];
let allForumTopics = [];
let allJobs = [];

// Função para carregar dados estáticos
function loadData() {
    allCourses = staticData.courses;
    allForumTopics = staticData.forumTopics;
    allJobs = staticData.jobs;
    
    // Renderizar dados iniciais
    renderCourses(allCourses);
    renderForumTopics(allForumTopics);
    renderJobs(allJobs);
}

// Função para mostrar/esconder seções
function showSection(sectionId) {
    // Esconder todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar a seção selecionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Função para renderizar cursos
function renderCourses(courses) {
    const container = document.getElementById('courses-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <div class="course-image">${course.image}</div>
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span class="course-level">${course.level}</span>
                    <span class="course-duration">${course.duration}</span>
                </div>
                <button class="btn-primary" onclick="startCourse(${course.id})">Iniciar Curso</button>
            </div>
        `;
        container.appendChild(courseCard);
    });
}

// Função para renderizar tópicos do fórum
function renderForumTopics(topics) {
    const container = document.getElementById('forum-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    topics.forEach(topic => {
        const topicElement = document.createElement('div');
        topicElement.className = 'forum-topic';
        topicElement.innerHTML = `
            <h3>${topic.title}</h3>
            <p>${topic.content}</p>
            <div class="forum-meta">
                <span>👤 ${topic.author}</span>
                <span>📅 ${formatDate(topic.date)}</span>
                <span>💬 ${topic.replies} respostas</span>
                <span>👁️ ${topic.views} visualizações</span>
            </div>
        `;
        container.appendChild(topicElement);
    });
}

// Função para renderizar vagas
function renderJobs(jobs) {
    const container = document.getElementById('jobs-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <div class="job-header">
                <div class="job-info">
                    <h3>${job.title}</h3>
                    <div class="job-details">
                        <span>🏢 ${job.company}</span>
                        <span>📍 ${job.location}</span>
                        <span>💰 ${job.salary}</span>
                        <span>📅 Publicada em ${formatDate(job.date)}</span>
                    </div>
                </div>
                <button class="btn-primary" onclick="viewJob(${job.id})">Ver vaga</button>
            </div>
            <p class="job-description">${job.description}</p>
            <div class="job-tags">
                <span class="job-tag level">${job.level}</span>
                <span class="job-tag type">${job.type}</span>
            </div>
        `;
        container.appendChild(jobCard);
    });
}

// Função para filtrar cursos
function filterCourses() {
    const searchInput = document.getElementById('course-search');
    const levelSelect = document.getElementById('course-level');
    
    if (!searchInput || !levelSelect) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const levelFilter = levelSelect.value;
    
    let filteredCourses = allCourses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm) || 
                            course.description.toLowerCase().includes(searchTerm);
        const matchesLevel = !levelFilter || course.level === levelFilter;
        
        return matchesSearch && matchesLevel;
    });
    
    renderCourses(filteredCourses);
}

// Função para filtrar tópicos do fórum
function filterForumTopics() {
    const searchInput = document.getElementById('forum-search');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    
    let filteredTopics = allForumTopics.filter(topic => {
        return topic.title.toLowerCase().includes(searchTerm) || 
               topic.content.toLowerCase().includes(searchTerm) ||
               topic.author.toLowerCase().includes(searchTerm);
    });
    
    renderForumTopics(filteredTopics);
}

// Função para ordenar tópicos do fórum
function sortForumTopics() {
    const sortSelect = document.getElementById('forum-sort');
    if (!sortSelect) return;
    
    const sortBy = sortSelect.value;
    let sortedTopics = [...allForumTopics];
    
    switch (sortBy) {
        case 'recent':
            sortedTopics.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'popular':
            sortedTopics.sort((a, b) => b.views - a.views);
            break;
        case 'replies':
            sortedTopics.sort((a, b) => b.replies - a.replies);
            break;
    }
    
    renderForumTopics(sortedTopics);
}

// Função para filtrar vagas
function filterJobs() {
    const searchInput = document.getElementById('job-search');
    const levelSelect = document.getElementById('job-level');
    const locationSelect = document.getElementById('job-location');
    
    if (!searchInput || !levelSelect || !locationSelect) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const levelFilter = levelSelect.value;
    const locationFilter = locationSelect.value;
    
    let filteredJobs = allJobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm) || 
                            job.company.toLowerCase().includes(searchTerm) ||
                            job.description.toLowerCase().includes(searchTerm);
        const matchesLevel = !levelFilter || job.level === levelFilter;
        const matchesLocation = !locationFilter || 
                              (locationFilter === 'Remoto' && job.location.includes('Remoto')) ||
                              (locationFilter === 'São Paulo' && job.location.includes('São Paulo')) ||
                              (locationFilter === 'Rio de Janeiro' && job.location.includes('Rio de Janeiro')) ||
                              (locationFilter === 'Outros' && !job.location.includes('Remoto') && 
                               !job.location.includes('São Paulo') && !job.location.includes('Rio de Janeiro'));
        
        return matchesSearch && matchesLevel && matchesLocation;
    });
    
    renderJobs(filteredJobs);
}

// Função para formatar data
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

// Função para iniciar curso (placeholder)
function startCourse(courseId) {
    alert(`Iniciando curso ${courseId}. Esta funcionalidade será implementada em breve!`);
}

// Função para visualizar vaga (placeholder)
function viewJob(jobId) {
    const job = allJobs.find(j => j.id === jobId);
    if (job) {
        alert(`Vaga: ${job.title}\nEmpresa: ${job.company}\nDescrição: ${job.description}`);
    }
}

// Função para simular criação de novo tópico
function createNewTopic() {
    const title = prompt('Digite o título do tópico:');
    const content = prompt('Digite o conteúdo do tópico:');
    
    if (title && content) {
        const newTopic = {
            id: allForumTopics.length + 1,
            title: title,
            author: 'Usuário Anônimo',
            date: new Date().toISOString().split('T')[0],
            replies: 0,
            views: 1,
            content: content
        };
        
        allForumTopics.unshift(newTopic);
        renderForumTopics(allForumTopics);
        alert('Tópico criado com sucesso!');
    }
}

// Inicializar a aplicação quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    
    // Adicionar event listeners para os filtros quando os elementos existirem
    const courseSearch = document.getElementById('course-search');
    const courseLevel = document.getElementById('course-level');
    const forumSearch = document.getElementById('forum-search');
    const forumSort = document.getElementById('forum-sort');
    const jobSearch = document.getElementById('job-search');
    const jobLevel = document.getElementById('job-level');
    const jobLocation = document.getElementById('job-location');
    
    if (courseSearch) courseSearch.addEventListener('input', filterCourses);
    if (courseLevel) courseLevel.addEventListener('change', filterCourses);
    if (forumSearch) forumSearch.addEventListener('input', filterForumTopics);
    if (forumSort) forumSort.addEventListener('change', sortForumTopics);
    if (jobSearch) jobSearch.addEventListener('input', filterJobs);
    if (jobLevel) jobLevel.addEventListener('change', filterJobs);
    if (jobLocation) jobLocation.addEventListener('change', filterJobs);
});

