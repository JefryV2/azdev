
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex justify-between items-center mb-8">
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeftIcon size={18} /> Back to Portfolio
            </Button>
          </Link>
          
          <Button className="gap-2">
            <Download size={18} /> Download PDF
          </Button>
        </div>
        
        <div className="bg-card rounded-lg border shadow-sm p-6 md:p-8 max-w-4xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Aziz Dhouib</h1>
            <h2 className="text-xl text-muted-foreground mb-4">Data Scientist | Business Intelligence Specialist</h2>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-1">📍 Tunisia</span>
              <span className="flex items-center gap-1">📧 azizdhouib2002@gmail.com</span>
              <span className="flex items-center gap-1">📞 +21624725227</span>
            </div>
          </header>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">🔹 Summary</h3>
            <p className="text-muted-foreground">
              Data Analyst with expertise in business intelligence (BI), data modeling, and customer analytics. 
              Strong background in SQL, Python, Looker, and Amplitude, with experience in ETL pipelines, dashboard development, 
              and KPI reporting. Adept at working cross-functionally with engineers, product teams, and stakeholders to deliver 
              actionable insights that improve customer engagement and user experience.
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
                <h4 className="font-medium">1️⃣ Debate Guardian (AI & Speech Recognition Tool)</h4>
                <p className="text-sm">A real-time fact-checking platform to promote honesty and accountability in debates using AI and speech recognition technology.</p>
                <p className="text-sm text-muted-foreground"><span className="font-medium">Tech Stack:</span> React, TypeScript, Google Cloud Speech-to-Text, Gemini API, Node.js, Chart.js, TensorFlow.js</p>
              </div>
              
              <div>
                <h4 className="font-medium">2️⃣ AI Business Analyzer (BI & Data Analytics Tool)</h4>
                <p className="text-sm">Built a business intelligence platform that analyzes customer trends, financial performance, and risk factors.</p>
                <p className="text-sm text-muted-foreground"><span className="font-medium">Tech Stack:</span> SQL, Looker, Python, PostgreSQL, Supabase, Power BI, Amplitude.</p>
              </div>
              
              <div>
                <h4 className="font-medium">3️⃣ Data Cleaning & Visualization Tool (ETL & Reporting)</h4>
                <p className="text-sm">Developed an automated ETL pipeline and real-time anomaly detection dashboard for high-accuracy reporting.</p>
                <p className="text-sm text-muted-foreground"><span className="font-medium">Tech Stack:</span> Python, SQL, Pandas, Seaborn, Power BI.</p>
              </div>
              
              <div>
                <h4 className="font-medium">4️⃣ Ethical Checker for Social Media Influencers & Brands (Customer & Market Analysis)</h4>
                <p className="text-sm">Created a BI tool to assess influencer credibility, analyzing engagement data and brand partnerships using AI models.</p>
                <p className="text-sm text-muted-foreground"><span className="font-medium">Tech Stack:</span> SQL, Python, React, Supabase, Looker.</p>
              </div>
              
              <div>
                <h4 className="font-medium">5️⃣ Market Analysis & Trading Assistant (Financial Analytics & User Insights)</h4>
                <p className="text-sm">Designed an interactive trading dashboard tracking customer trading behaviors, stock trends, and AI-driven predictions.</p>
                <p className="text-sm text-muted-foreground"><span className="font-medium">Tech Stack:</span> SQL, Python, Yahoo Finance API, Power BI, Tableau.</p>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">🔹 Technical Skills</h3>
            
            <div className="space-y-2">
              <p className="text-sm">✅ <span className="font-medium">Business Intelligence & Data Visualization:</span> Looker, Power BI, Tableau, Amplitude</p>
              <p className="text-sm">✅ <span className="font-medium">Programming & Data Pipelines:</span> SQL, Python, Pandas, NumPy, ETL, Supabase, PostgreSQL</p>
              <p className="text-sm">✅ <span className="font-medium">Customer & Product Analytics:</span> Clickstream Analysis, KPI Development, A/B Testing</p>
              <p className="text-sm">✅ <span className="font-medium">Cloud & Data Engineering:</span> AWS, GCP, Airflow, Dataflow, Event Tracking</p>
              <p className="text-sm">✅ <span className="font-medium">Data Governance & Reporting:</span> Data Modeling, Data Dictionaries, Anomaly Detection</p>
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
