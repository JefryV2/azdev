
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
  const handleDownloadPDF = () => {
    // Hide navbar and footer for printing
    const navbar = document.querySelector('header');
    const footer = document.querySelector('footer');
    const backButton = document.querySelector('.back-button-container');
    
    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (backButton) (backButton as HTMLElement).style.display = 'none';
    
    // Trigger print dialog
    window.print();
    
    // Restore navbar and footer after a delay
    setTimeout(() => {
      if (navbar) navbar.style.display = '';
      if (footer) footer.style.display = '';
      if (backButton) (backButton as HTMLElement).style.display = '';
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background antialiased">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex justify-between items-center mb-8 back-button-container">
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeftIcon size={18} /> Back to Home
            </Button>
          </Link>
          
          <Button className="gap-2" onClick={handleDownloadPDF}>
            <Download size={18} /> Download PDF
          </Button>
        </div>
        
        <div className="bg-card rounded-lg border shadow-sm p-6 md:p-8 max-w-4xl mx-auto resume-content">
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Aziz Dhouib</h1>
            <h2 className="text-xl text-muted-foreground mb-4">
              Data Scientist &amp; Full‑Stack Developer
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-1">📍 Tunisia</span>
              <span className="flex items-center gap-1">📧 azizdhouib2002@gmail.com</span>
              <span className="flex items-center gap-1">📞 +21624725227</span>
              <span className="flex items-center gap-1">
                🔗 GitHub:&nbsp;
                <a 
                  href="https://github.com/JefryV2" 
                  className="underline hover:text-primary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  github.com/JefryV2
                </a>
              </span>
            </div>
          </header>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">🔹 Summary</h3>
            <p className="text-muted-foreground">
              Data Scientist &amp; Full‑Stack Developer with expertise in AI‑driven applications, business intelligence, 
              and end‑to‑end product development. I build modern web and mobile experiences using React, TypeScript, 
              Supabase, and Python, and I design analytics systems that turn complex data into clear, actionable insights. 
              Comfortable owning the full lifecycle from data modeling and ETL to API design, UI/UX, and deployment.
            </p>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">🔹 Experience</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">Data Analyst & Business Intelligence Consultant</h4>
                  <span className="text-sm text-muted-foreground">2022 – Present</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Freelance & Independent Projects, Remote</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Designed interactive BI dashboards in Looker and Power BI to track customer engagement, product adoption, and business KPIs.</li>
                  <li>Developed SQL-based ETL pipelines to ingest and transform data from multiple sources, improving data integrity and reporting accuracy.</li>
                  <li>Conducted deep-dive analyses on clickstream data, user behaviors, and retention metrics using Amplitude and Python.</li>
                  <li>Led data governance initiatives, creating data dictionaries and standardizing KPI definitions across teams.</li>
                  <li>Worked closely with engineers and product managers to align customer data insights with strategic decision-making.</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">Boston Consulting Group – Data Science Job Simulation</h4>
                  <span className="text-sm text-muted-foreground">2022 – 2024</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Remote</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Built predictive models in Python to analyze business performance and improve forecasting accuracy.</li>
                  <li>Automated data pipelines using SQL and ETL processes, reducing data inconsistencies by 40%.</li>
                  <li>Conducted exploratory data analysis (EDA) to uncover trends, providing data-driven recommendations.</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">Accenture – Data Analytics & Visualization Job Simulation</h4>
                  <span className="text-sm text-muted-foreground">2022 – 2024</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Remote</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Cleaned and modeled large datasets in Python and R, ensuring data quality and consistency.</li>
                  <li>Developed interactive dashboards in Power BI and Tableau to support real-time business decision-making.</li>
                  <li>Collaborated with cross-functional teams to deliver insights on user engagement and customer retention.</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">KPM Group – Data Analytics Consulting Internship</h4>
                  <span className="text-sm text-muted-foreground">2022 – 2024</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Remote</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Processed and analyzed large-scale customer datasets using SQL and BI tools to track key performance indicators (KPIs).</li>
                  <li>Developed Tableau & Power BI reports to present insights on customer behavior, engagement trends, and churn analysis.</li>
                  <li>Implemented automated reporting pipelines, reducing manual reporting time by 30%.</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">🔹 Projects</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">1️⃣ FlyTrader – Connectome-Inspired RL Trading Research</h4>
                <p className="text-sm">
                  Reinforcement-learning stock trader that uses a simulated fruit-fly connectome as a spiking feature extractor,
                  with honest out-of-sample backtests, seed intervals, and a FastAPI + Three.js dashboard for live evaluation
                  and multi-asset portfolio allocation.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Tech Stack:</span> Python, PyTorch, Gymnasium, FastAPI, Three.js, FlyWire connectome, reinforcement learning.
                </p>
              </div>

              <div>
                <h4 className="font-medium">2️⃣ Trinity Life Optimizer – Personal Analytics App</h4>
                <p className="text-sm">
                  Mobile‑first life dashboard that unifies health, wealth, and relationships into interactive cards and analytics,
                  including stress modeling, correlations, and time‑series insights.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Tech Stack:</span> React, TypeScript, Vite, Tailwind CSS, Supabase, Recharts, shadcn/ui, Capacitor.
                </p>
              </div>

              <div>
                <h4 className="font-medium">3️⃣ Ruvopp – Personalized News & Insights App</h4>
                <p className="text-sm">
                  Cross‑platform mobile app that curates a personalized news feed with real‑time updates, engagement tracking,
                  and Supabase‑backed content preferences.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Tech Stack:</span> React Native, Expo, TypeScript, Supabase, REST APIs.
                </p>
              </div>

              <div>
                <h4 className="font-medium">4️⃣ Debate Guardian – AI &amp; Speech Recognition Tool</h4>
                <p className="text-sm">
                  Real‑time fact‑checking platform that listens to debates, detects claims, and evaluates them with AI, providing
                  credibility scores, fallacy detection, and visual analytics.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Tech Stack:</span> React, TypeScript, Google Cloud Speech‑to‑Text, Gemini API, Node.js, Chart.js, TensorFlow.js.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">5️⃣ Ethical Checker for Social Media Influencers &amp; Brands</h4>
                <p className="text-sm">
                  Platform that scores influencer/brand collaborations based on transparency, sentiment, and engagement to help
                  brands make ethical partnership decisions.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Tech Stack:</span> React, TypeScript, Supabase, OpenAI API, Tailwind CSS.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">6️⃣ Job Application Automation Tool</h4>
                <p className="text-sm">
                  Automation system that scrapes job postings, analyzes them with NLP, and matches them to candidate resumes to
                  prioritize the best‑fit opportunities.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Tech Stack:</span> Streamlit, Python, BeautifulSoup, OpenAI GPT, SQLite.
                </p>
              </div>

              <div>
                <h4 className="font-medium">7️⃣ Market Analysis &amp; Trading Assistant</h4>
                <p className="text-sm">
                  Interactive trading dashboard that tracks stock movements, user trading behavior, and AI‑driven entry/exit
                  recommendations with risk‑aware analytics.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Tech Stack:</span> Streamlit, Python, Pandas, Machine Learning, Yahoo Finance API, Power BI, Tableau.
                </p>
              </div>

              <div>
                <h4 className="font-medium">8️⃣ RewardMax – Credit Card Rewards Optimizer</h4>
                <p className="text-sm">
                  Web application that helps users maximize credit card rewards by tracking spending across cards, modeling category
                  bonuses, and recommending the best card to use at checkout. Includes interactive previews of recommendations,
                  quarterly bonus alerts, and challenge‑based gamification to nudge better habits.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Tech Stack:</span> Modern React &amp; TypeScript single‑page application, Tailwind‑style UI, deployed on Netlify.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">🔹 Technical Skills</h3>
            
            <div className="space-y-2 text-sm">
              <p>
                ✅ <span className="font-medium">Frontend:</span> React, React Native, TypeScript, Vite, Tailwind CSS, shadcn/ui, Streamlit, Responsive Design, UI/UX.
              </p>
              <p>
                ✅ <span className="font-medium">Backend &amp; Databases:</span> Node.js, Express, Supabase, PostgreSQL, SQLite, RESTful APIs, GraphQL, Firebase.
              </p>
              <p>
                ✅ <span className="font-medium">AI &amp; Data Science:</span> Python, Pandas, NumPy, Scikit‑learn, TensorFlow, NLP, OpenAI API, Gemini API, Machine Learning, Data Analysis.
              </p>
              <p>
                ✅ <span className="font-medium">Data Visualization &amp; BI:</span> Power BI, Tableau, Plotly, Seaborn, Chart.js, Recharts, Data Dashboards, Real‑time Analytics.
              </p>
              <p>
                ✅ <span className="font-medium">Cloud, DevOps &amp; Tooling:</span> Supabase, AWS, Azure, Docker, Git, GitHub Actions, CI/CD, ETL Pipelines, Automation.
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">🔹 Education</h3>
            <p className="text-sm">🎓 Bachelor of Science in Computer Science (University of the People, Remote – Present)</p>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">🔹 Certifications</h3>
            <p className="text-sm">🏆 IBM Data Analytics with Excel and R – Coursera</p>
            <p className="text-sm">🏆 IBM Data Analysis and Visualization Foundations – Coursera</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">🔹 Languages</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium">English</p>
                <p className="text-muted-foreground">Proficient</p>
              </div>
              <div>
                <p className="font-medium">French</p>
                <p className="text-muted-foreground">Proficient</p>
              </div>
              <div>
                <p className="font-medium">Arabic</p>
                <p className="text-muted-foreground">Native</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resume;
