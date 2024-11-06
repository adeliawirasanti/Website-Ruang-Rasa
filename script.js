// Mengambil semua tautan navigasi
const navLinks = document.querySelectorAll('nav a');

// Menambahkan event listener untuk mengubah kelas aktif
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Fungsi untuk tombol "Mulai Jelajahi"
function explore() {
    alert("Anda mulai menjelajahi!"); // Tampilkan pesan saat tombol ditekan
    // Di sini bisa ditambahkan navigasi ke halaman lain, misalnya:
    // window.location.href = 'halaman-eksplorasi.html';
}

// Fungsi untuk tombol "Join"
function join() {
    alert("Anda telah bergabung!"); // Tampilkan pesan saat tombol ditekan
    // Di sini bisa ditambahkan navigasi atau aksi lain, misalnya:
    // window.location.href = 'halaman-bergabung.html';
}

const articles = [
    "Mental Health Awareness",
    "Stress Management Techniques",
    "Understanding Anxiety",
    "Mindfulness Practices",
    "Building Resilience",
    "Coping with Depression",
    "Improving Self-Esteem",
];

function filterArticles() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("searchResults");
    results.innerHTML = ""; // Clear previous results
    if (input) {
        results.style.display = "block";
        const filtered = articles.filter(article => article.toLowerCase().includes(input));
        if (filtered.length > 0) {
            filtered.forEach(article => {
                const div = document.createElement("div");
                div.textContent = article;
                div.onclick = () => {
                    document.getElementById("searchInput").value = article;
                    results.style.display = "none";
                };
                results.appendChild(div);
            });
        } else {
            const noResults = document.createElement("div");
            noResults.textContent = "No articles found";
            results.appendChild(noResults);
        }
    } else {
        results.style.display = "none";
    }
}

// Hide results when clicking outside
document.addEventListener("click", (e) => {
    const searchContainer = document.querySelector(".search-container");
    const results = document.getElementById("searchResults");
    if (!searchContainer.contains(e.target)) {
        results.style.display = "none";
    }
});

function searchFunction() {
    const searchInput = document.getElementById("searchInput").value;
    alert("You searched for: " + searchInput);
}

function imageSearchFunction() {
    alert("Image search feature coming soon!");
}


// Anda dapat menambahkan JavaScript di sini jika diperlukan.
console.log("Emotional Support page loaded.");


// Function to toggle FAQ answers
function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}

// Function for FAQ search bar
function searchFAQ() {
    let input, filter, faqList, faqItems, question, i, txtValue;
    input = document.getElementById('faqSearch');
    filter = input.value.toUpperCase();
    faqList = document.getElementsByClassName("faq-list")[0];
    faqItems = faqList.getElementsByClassName('faq-item');

    for (i = 0; i < faqItems.length; i++) {
        question = faqItems[i].getElementsByClassName("faq-question")[0];
        txtValue = question.textContent || question.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            faqItems[i].style.display = "";
        } else {
            faqItems[i].style.display = "none";
        }
    }
}

// Function to post new question
function postQuestion() {
    const userQuestion = document.getElementById('userQuestion').value;
    if (userQuestion) {
        const questionSection = document.getElementById('question-section');
        const newQuestion = document.createElement('div');
        newQuestion.className = 'user-question';
        newQuestion.innerHTML = `<p class="question-text">${userQuestion}</p>`;
        questionSection.appendChild(newQuestion);
        document.getElementById('userQuestion').value = "";  // Clear textarea after posting
    }
}


// Login

function toggleForm(type) {
    const formTitle = document.getElementById("formTitle");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const ctaLogin = document.getElementById("ctaLogin");
  
    if (type === "login") {
      // Tampilkan form login, sembunyikan form signup
      loginForm.classList.remove("hidden");
      signupForm.classList.add("hidden");
  
      // Tampilkan CTA signup (hanya saat form login)
      if (ctaLogin) {
        ctaLogin.style.display = "block";
      }
  
      formTitle.innerText = "LOG IN";
      loginBtn.classList.add("active");
      signupBtn.classList.remove("active");
    } else if (type === "signup") {
      // Tampilkan form signup, sembunyikan form login
      signupForm.classList.remove("hidden");
      loginForm.classList.add("hidden");
  
      // Sembunyikan CTA signup pada form signup
      if (ctaLogin) {
        ctaLogin.style.display = "none";
      }
  
      formTitle.innerText = "SIGN UP";
      signupBtn.classList.add("active");
      loginBtn.classList.remove("active");
    }
  }
  
