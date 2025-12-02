import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Code2, Database, Globe, Mail, Terminal, Users, Briefcase, GraduationCap, Cpu, Cloud, Layers, FileText, MessageSquare, ShieldCheck, Search, GitPullRequest } from "lucide-react";

export default function Landing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans selection:bg-pink-500 selection:text-white">
      {/* Navigation */}
      <nav className="border-b-4 border-black bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-black tracking-tighter uppercase border-2 border-black p-1 bg-primary text-white neo-shadow-sm transform -rotate-2">
                BILAL AAMER
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Experience", "Projects", "Skills", "Community", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-bold text-black hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
            <div>
              <Button 
                asChild
                className="neo-button bg-black text-white hover:bg-gray-800 rounded-none h-12 px-6 text-lg"
              >
                <a href="https://topmate.io/bilal" target="_blank" rel="noopener noreferrer">
                  Book a Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="about" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-block bg-secondary border-4 border-black px-4 py-2 text-xl font-bold neo-shadow-sm rotate-1">
                👋 Hello, I'm Bilal Aamer
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight text-black">
                GENAI & <br />
                <span className="text-primary bg-black px-2 text-white">AGENTIC AI</span> <br />
                ARCHITECT
              </h1>
              <p className="text-xl md:text-2xl font-bold border-l-8 border-accent pl-6 py-2 bg-white neo-shadow">
                Building the next generation of autonomous agents. I help enterprises leverage GenAI and Agentic workflows to automate complex decision-making and scale intelligence.
              </p>
              <p className="text-lg font-medium text-gray-700">
                Specializing in LLM fine-tuning, RAG pipelines, and multi-agent systems that turn unstructured data into business value.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  asChild
                  className="neo-button bg-primary text-white hover:bg-pink-600 rounded-none h-14 px-8 text-xl"
                >
                  <a href="https://topmate.io/bilal" target="_blank" rel="noopener noreferrer">
                    Let's Talk <ArrowRight className="ml-2 h-6 w-6" />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="neo-button bg-white text-black hover:bg-gray-100 rounded-none h-14 px-8 text-xl"
                >
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 border-4 border-black"></div>
              <div className="relative bg-white border-4 border-black p-8 neo-shadow flex flex-col items-center justify-center min-h-[400px] text-center space-y-6">
                <div className="w-48 h-48 bg-black rounded-full border-4 border-white outline outline-4 outline-black overflow-hidden mb-4">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bilal&backgroundColor=ff0080" 
                    alt="Bilal Avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <div className="bg-secondary border-2 border-black px-3 py-1 inline-block font-bold text-sm transform -rotate-2">
                    Agentic AI Specialist
                  </div>
                  <div className="bg-primary border-2 border-black px-3 py-1 inline-block font-bold text-sm text-white transform rotate-2 ml-2">
                    Community Builder
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                   {[
                     { name: "HackerRank 5★", url: "https://www.hackerrank.com/profile/bilalahmedaamer" },
                     { name: "CodeChef 3★", url: "" },
                     { name: "LeetCode", url: "https://leetcode.com/u/bilalaamer/" }
                   ].map((profile, i) => (
                     profile.url ? (
                       <a key={i} href={profile.url} target="_blank" rel="noopener noreferrer" className="text-xs font-black border border-black px-2 py-1 bg-gray-100 uppercase hover:bg-primary hover:text-white transition-colors">{profile.name}</a>
                     ) : (
                       <span key={i} className="text-xs font-black border border-black px-2 py-1 bg-gray-100 uppercase">{profile.name}</span>
                     )
                   ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Marquee */}
        <div className="bg-black py-6 border-y-4 border-black overflow-hidden">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center space-x-12">
                <span className="text-4xl font-black text-white">MACHINE LEARNING</span>
                <span className="text-4xl font-black text-secondary">GEN AI</span>
                <span className="text-4xl font-black text-white">DATA SCIENCE</span>
                <span className="text-4xl font-black text-primary">AGENTIC AI</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-yellow-50 border-b-4 border-black">
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black uppercase inline-block bg-white border-4 border-black px-8 py-4 neo-shadow transform -rotate-1">
              Work Experience
            </h2>
          </div>
          
          <div className="space-y-12">
            {[
              {
                role: "Senior ML Engineer - Consultant",
                company: "Fractal Analytics",
                period: "Jan 2025 – Apr 2025",
                type: "Remote",
                desc: [
                  "Built GenAI PoC for Fortune 500 clients, delivering document automation and NLP pipelines reducing manual effort by 60%.",
                  "Engineered Computer Use agentic systems for operational automation, translating 8+ complex business workflows into AI-driven execution pipelines, enabling autonomous decision-making for RPA use cases."
                ],
                color: "bg-primary"
              },
              {
                role: "Senior ML Engineer - Contractor",
                company: "BNY Mellon",
                period: "Jun 2024 – Oct 2024",
                type: "Remote",
                desc: [
                  "Designed and implemented multi-agent GenAI orchestration system for event-stream decision automation.",
                  "Developed intelligent data ingestion pipeline for unstructured documents (client communications, regulatory filings), enabling context-aware LLM recommendations deployed across 12 business units with 89% user adoption.",
                  "Collaborated with VP-level AI leadership on scalable microservices architecture integrating vector databases, and predictive analytics, data volume scaling."
                ],
                color: "bg-secondary"
              },
              {
                role: "Founding Engineer - Contractor",
                company: "Anarchy AI (YC W23)",
                period: "Nov 2023 – Feb 2024",
                type: "Remote",
                desc: [
                  "Integrated LoRA/QLoRA fine-tuning and vLLM inference engine into LLM-VM Python package, reducing model latency by 40% and enabling 15+ enterprise integrations.",
                  "Authored comprehensive technical documentation (setup to production deployment) for LLM-VM, driving adoption across developer community and reducing onboarding time by 50%.",
                  "Partnered with community manager and founder on developer advocacy, growing active community contributors from 0 to 120+ and establishing LLM-VM as industry-standard devtool for LLM optimization."
                ],
                color: "bg-accent"
              },
              {
                role: "ML Research Engineer",
                company: "IIT Hyderabad",
                period: "Sept 2022 – Jan 2023",
                type: "Hyderabad, TS",
                desc: [
                  "Curated, augmented, and meticulously cleaned large-scale sensor and imagery datasets, implementing rigorous quality assurance protocols ensuring data integrity for downstream ML tasks.",
                  "Designed and implemented state-of-the-art vision-based model architecture achieving 85% initial accuracy on UAV-mounted inference tasks for predictive infrastructure inspection workflows.",
                  "Conducted systematic hyperparameter tuning and architectural optimization via comprehensive experimentation, achieving 92% accuracy milestone exceeding industry benchmarks (7% improvement)."
                ],
                color: "bg-pink-300"
              },
              {
                role: "ML Researcher",
                company: "JHUB",
                period: "Aug 2022 – Dec 2022",
                type: "Hyderabad, TS",
                desc: [
                  "Collaborated with domain experts to engineer pioneering feature representations capturing intricate molecular interactions, directly improving model efficacy and interpretability.",
                  "Orchestrated comprehensive hyperparameter optimization and model architecture experimentation, achieving 3% accuracy enhancement to 93% while maintaining generalization performance.",
                  "Implemented advanced data augmentation strategies reducing overfitting by 15% while building model resilience against data scarcity, critical for limited dataset domains."
                ],
                color: "bg-yellow-300"
              }
            ].map((job, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-1 bg-black transform -translate-x-1/2"></div>
                <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-5/12"></div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-black border-4 border-white rounded-full transform -translate-x-[18px] md:-translate-x-1/2 z-10"></div>
                  <div className={`w-full md:w-5/12 bg-white border-4 border-black p-6 neo-shadow ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-transform`}>
                    <div className={`inline-block px-3 py-1 text-white font-bold text-sm mb-2 border-2 border-black ${job.color}`}>
                      {job.period}
                    </div>
                    <h3 className="text-2xl font-black uppercase">{job.role}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold text-gray-700">{job.company}</span>
                      <span className="text-sm font-bold bg-gray-200 px-2 py-1 border border-black">{job.type}</span>
                    </div>
                    <ul className="list-disc list-outside ml-5 space-y-2">
                      {job.desc.map((point, i) => (
                        <li key={i} className="text-base font-medium leading-snug">{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black uppercase inline-block bg-white border-4 border-black px-8 py-4 neo-shadow transform rotate-1">
              Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "TreeCounting: Vision on a Drone",
                tags: ["Computer Vision", "MCNN", "IoT", "AWS"],
                desc: "Deployed vision models on UAVs for real-time object detection and tracking, simulating building sensor analytics for anomaly detection. Built full ML pipeline on AWS from data ingestion to batch inference endpoint.",
                icon: <Cpu className="h-12 w-12" />,
                color: "bg-green-300"
              },
              {
                title: "AutoPaLM: Autonomous Agent",
                tags: ["LLM Agents", "Prompt Engineering", "Python"],
                desc: "Developed autonomous agent workflows integrating reinforcement learning and LLM reasoning for decision automation. Applied deep Q-networks (DQN) for iterative optimization of agent performance.",
                icon: <Brain className="h-12 w-12" />,
                color: "bg-blue-300"
              },
              {
                title: "NESGPT: Environmental AI Scoring",
                tags: ["Vision LLMs", "GPT-4V", "DINO", "Hugging Face"],
                desc: "Architected innovative ESG assessment system leveraging multimodal vision-language models for geospatial analysis. Implemented DINO + GPT-4V pipeline for automated annotation of satellite/map imagery, extracting environmental metrics at scale.",
                icon: <Globe className="h-12 w-12" />,
                color: "bg-green-400"
              },
              {
                title: "WiE: LLM-Powered Web3 Chat",
                tags: ["LLMs", "Fine-tuning", "Flutter", "Python"],
                desc: "Built Web3 chat application integrating fine-tuned LLMs for context-aware conversational AI. Optimized LLM performance through strategic fine-tuning, achieving 40% improvement in response quality and 35% increase in session duration.",
                icon: <MessageSquare className="h-12 w-12" />,
                color: "bg-purple-300"
              },
              {
                title: "BKYC: Decentralized KYC",
                tags: ["Blockchain", "Solidity", "Smart Contracts", "TensorFlow"],
                desc: "Conceived decentralized identity verification system integrating ML-based document verification with blockchain smart contracts. Engineered smart contracts managing secure user data lifecycle and automated document validation.",
                icon: <ShieldCheck className="h-12 w-12" />,
                color: "bg-orange-300"
              },
              {
                title: "Locus 2.0: LLM Query Engine",
                tags: ["LangChain", "GPT 3.5-Turbo", "Docker", "NextJS"],
                desc: "Developed full-stack conversational AI application leveraging GPT 3.5-turbo for context-aware query resolution with RAG. Architected backend infrastructure for LLM inference and streamlined deployment through Dockerization.",
                icon: <Search className="h-12 w-12" />,
                color: "bg-blue-400"
              }
            ].map((project, index) => (
              <div key={index} className={`bg-white border-4 border-black p-8 neo-shadow flex flex-col h-full relative overflow-hidden group`}>
                <div className={`absolute top-0 right-0 w-24 h-24 ${project.color} border-l-4 border-b-4 border-black rounded-bl-full z-0 transition-transform group-hover:scale-150`}></div>
                <div className="relative z-10">
                  <div className="mb-6 border-2 border-black p-3 w-fit bg-white">
                    {project.icon}
                  </div>
                  <h3 className="text-3xl font-black uppercase mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-black text-white px-3 py-1 font-bold text-sm border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-lg font-medium leading-relaxed border-t-4 border-black pt-4">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Open Source Contributions Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-b-4 border-black">
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black uppercase inline-block bg-black text-white border-4 border-black px-8 py-4 neo-shadow-sm transform -rotate-1">
              Open Source Impact
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                project: "Anarchy AI (YC W23) LLM-VM",
                desc: "Distributed ML library implementing multi-node training protocols",
                prs: "Multiple PRs"
              },
              {
                project: "Ivy Deep Learning Framework",
                desc: "Enhanced numerical operations and library compatibility",
                prs: "PRs #21449, #21867"
              },
              {
                project: "Lightning AI PyTorch Lightning",
                desc: "PyTorch wrapper simplifying complex model training",
                prs: "PR #7"
              },
              {
                project: "MindsDB Explainable AI",
                desc: "Enhanced model interpretation and visualization modules",
                prs: "PR #3061"
              },
              {
                project: "UnionML Ensemble Learning",
                desc: "Implemented optimization strategies",
                prs: "PR #180"
              }
            ].map((item, index) => (
              <div key={index} className="border-4 border-black p-6 hover:bg-gray-50 transition-colors flex items-start gap-4">
                <div className="bg-black text-white p-3 border-2 border-black">
                  <GitPullRequest className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase mb-1">{item.project}</h3>
                  <p className="text-base font-medium mb-2">{item.desc}</p>
                  <span className="inline-block bg-secondary border-2 border-black px-2 py-1 text-xs font-bold uppercase">
                    {item.prs}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-black text-white border-y-4 border-black">
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black uppercase inline-block bg-primary text-white border-4 border-white px-8 py-4 neo-shadow-sm transform -rotate-1">
              Technical Arsenal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: "Languages", items: ["Python", "R", "SQL", "C/C++", "Java", "JavaScript", "HTML/CSS", "Dart", "LaTeX"], icon: <Code2 /> },
              { category: "ML/DL Frameworks", items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Ivy"], icon: <Brain /> },
              { category: "Specializations", items: ["Time Series Analysis", "Predictive Analytics", "Anomaly Detection", "Agentic AI", "Prompt Engineering", "LLM Fine-tuning", "IoT Data Analytics"], icon: <Cpu /> },
              { category: "Libraries", items: ["Pandas", "NumPy", "Matplotlib", "Plotly", "Seaborn", "PySpark"], icon: <Layers /> },
              { category: "Data", items: ["Kafka (Streaming)", "MongoDB", "SQL Databases"], icon: <Database /> },
              { category: "Cloud/Tools", items: ["AWS", "GCP", "Docker", "Git", "Jupyter", "Unix/Linux"], icon: <Cloud /> },
            ].map((skill, index) => (
              <div key={index} className="border-4 border-white p-6 hover:bg-white hover:text-black transition-colors duration-300 group">
                <div className="flex items-center gap-3 mb-4 border-b-4 border-white group-hover:border-black pb-2">
                  {skill.icon}
                  <h3 className="text-xl font-black uppercase">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="text-sm font-bold border-2 border-white group-hover:border-black px-2 py-1">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
           <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black uppercase inline-block bg-white border-4 border-black px-8 py-4 neo-shadow transform rotate-1">
              Education
            </h2>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Masters Tile */}
              <div className="bg-white border-4 border-black p-8 neo-shadow flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary border-l-4 border-b-4 border-black rounded-bl-full z-0"></div>
                <div className="relative z-10">
                  <div className="bg-secondary p-4 border-4 border-black rounded-full w-fit mb-4">
                    <GraduationCap className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-2">Master of Technology</h3>
                  <h4 className="text-xl font-bold">Jawaharlal Nehru Technological University</h4>
                  <p className="text-lg font-medium text-primary mt-1">Computer Science</p>
                  <div className="mt-6">
                    <p className="text-sm font-black uppercase mb-2 text-gray-500">Advanced Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {["Artificial Intelligence", "Machine Learning", "Neural Networks", "Deep Learning", "Speech Processing", "NLP"].map((course, i) => (
                        <span key={i} className="text-xs font-bold border border-black px-2 py-1 bg-gray-50">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bachelors Tile */}
              <div className="bg-white border-4 border-black p-8 neo-shadow flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary border-l-4 border-b-4 border-black rounded-bl-full z-0"></div>
                <div className="relative z-10">
                  <div className="bg-primary p-4 border-4 border-black rounded-full w-fit mb-4 text-white">
                    <GraduationCap className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-2">Bachelor of Technology</h3>
                  <h4 className="text-xl font-bold">Jawaharlal Nehru Technological University</h4>
                  <p className="text-lg font-medium text-primary mt-1">Computer Science and Engineering</p>
                  <div className="mt-6">
                    <p className="text-sm font-black uppercase mb-2 text-gray-500">Core Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {["Data Structures (DSA)", "DBMS", "Operating Systems", "OOPS", "Data Mining", "Computer Networks"].map((course, i) => (
                        <span key={i} className="text-xs font-bold border border-black px-2 py-1 bg-gray-50">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-24 bg-[#FF6F00] border-y-4 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border-4 border-black p-8 md:p-16 neo-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD54F] border-l-4 border-b-4 border-black rounded-bl-full"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <h2 className="text-5xl font-black mb-6 uppercase">
                    Building <span className="text-[#FF6F00] underline decoration-4">Communities</span>
                  </h2>
                  <p className="text-xl font-medium mb-8 leading-relaxed">
                    I'm passionate about connecting AI enthusiasts. Whether it's organizing hackathons, speaking at conferences, or mentoring the next generation of data scientists, I believe in the power of community.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Mentoring aspiring Data Scientists",
                      "Organizing AI Tech Talks",
                      "Open Source Contributions",
                      "Knowledge Sharing Workshops"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-lg font-bold">
                        <div className="w-4 h-4 bg-black mr-4"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild
                    className="neo-button bg-black text-white hover:bg-gray-800 rounded-none h-14 px-8 text-xl w-full sm:w-auto"
                  >
                    <a href="https://www.commudle.com/communities/tfug-hyderabad" target="_blank" rel="noopener noreferrer">
                      Join the Movement
                    </a>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#FF6F00] h-48 border-4 border-black neo-shadow-sm flex items-center justify-center">
                    <Users className="h-16 w-16 text-white" />
                  </div>
                  <div className="bg-[#FFD54F] h-48 border-4 border-black neo-shadow-sm mt-8 flex items-center justify-center">
                    <Globe className="h-16 w-16 text-black" />
                  </div>
                  <div className="bg-[#FFA000] h-48 border-4 border-black neo-shadow-sm -mt-8 flex items-center justify-center">
                    <Terminal className="h-16 w-16 text-black" />
                  </div>
                  <div className="bg-black h-48 border-4 border-black neo-shadow-sm flex items-center justify-center">
                    <Brain className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="bg-secondary border-4 border-black p-12 md:p-20 neo-shadow relative"
          >
            <div className="absolute -top-6 -left-6 bg-primary text-white px-6 py-2 border-4 border-black font-black text-xl rotate-[-5deg] neo-shadow-sm">
              AVAILABLE FOR HIRE
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase leading-tight">
              Ready to <br/>Level Up?
            </h2>
            <p className="text-2xl font-bold mb-8 max-w-2xl mx-auto">
              Whether you need a custom GenAI solution, expert consultation, or just want to chat about the future of AI.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                asChild
                className="neo-button bg-white text-black hover:bg-gray-100 rounded-none h-16 px-10 text-2xl"
              >
                <a href="https://topmate.io/bilal" target="_blank" rel="noopener noreferrer">
                  Book a Call Now
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="neo-button bg-black text-white hover:bg-gray-800 rounded-none h-16 px-10 text-2xl"
              >
                <a href="mailto:bilalahmedaamer@gmail.com">
                  <Mail className="mr-3 h-6 w-6" /> Email Me
                </a>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-3xl font-black tracking-tighter uppercase border-2 border-white p-1">
              BILAL AAMER
            </span>
            <p className="mt-4 text-gray-400 font-medium">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "LinkedIn", url: "https://www.linkedin.com/in/bilalaamer/" },
              { name: "GitHub", url: "https://github.com/bilal-aamer/" },
              { name: "Twitter", url: "https://x.com/TheBilalAamer" },
              { name: "Kaggle", url: "https://www.kaggle.com/bilalaamer02" },
              { name: "Google Scholar", url: "https://scholar.google.com/citations?user=9GxtCbkAAAAJ" }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold hover:text-primary transition-colors uppercase border-b-2 border-transparent hover:border-primary"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}