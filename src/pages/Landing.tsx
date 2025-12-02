import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Code2, Database, Globe, Mail, Terminal, Users } from "lucide-react";

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
                BILAL
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Community", "Contact"].map((item) => (
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
                👋 Hello, I'm Bilal
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight text-black">
                SENIOR <br />
                <span className="text-primary bg-black px-2 text-white">DATA</span> <br />
                SCIENTIST
              </h1>
              <p className="text-xl md:text-2xl font-bold border-l-8 border-accent pl-6 py-2 bg-white neo-shadow">
                Senior ML Engineer & GenAI/Agentic AI Engineer building the future of intelligent systems and communities.
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
                  variant="outline"
                  className="neo-button bg-white text-black hover:bg-gray-100 rounded-none h-14 px-8 text-xl"
                >
                  View Projects
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
                    AI Enthusiast
                  </div>
                  <div className="bg-primary border-2 border-black px-3 py-1 inline-block font-bold text-sm text-white transform rotate-2 ml-2">
                    Community Builder
                  </div>
                </div>
                <p className="text-lg font-medium">
                  "Turning complex data into actionable intelligence and building communities for the AI revolution."
                </p>
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

        {/* Expertise Section */}
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black uppercase inline-block bg-white border-4 border-black px-8 py-4 neo-shadow">
              My Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Generative AI",
                icon: <Brain className="h-12 w-12" />,
                desc: "Building LLM-powered applications, RAG systems, and custom fine-tuned models.",
                color: "bg-primary",
                textColor: "text-white"
              },
              {
                title: "Agentic AI",
                icon: <Terminal className="h-12 w-12" />,
                desc: "Designing autonomous agents that can plan, reason, and execute complex tasks.",
                color: "bg-secondary",
                textColor: "text-black"
              },
              {
                title: "ML Engineering",
                icon: <Code2 className="h-12 w-12" />,
                desc: "End-to-end MLOps, model deployment, scaling, and performance optimization.",
                color: "bg-accent",
                textColor: "text-white"
              },
              {
                title: "Data Science",
                icon: <Database className="h-12 w-12" />,
                desc: "Advanced statistical analysis, predictive modeling, and data visualization.",
                color: "bg-white",
                textColor: "text-black"
              },
              {
                title: "Community",
                icon: <Users className="h-12 w-12" />,
                desc: "Fostering growth and collaboration among AI enthusiasts and developers.",
                color: "bg-black",
                textColor: "text-white"
              },
              {
                title: "Strategy",
                icon: <Globe className="h-12 w-12" />,
                desc: "Aligning AI initiatives with business goals for maximum impact and ROI.",
                color: "bg-yellow-400",
                textColor: "text-black"
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                className={`border-4 border-black p-8 neo-shadow flex flex-col h-full ${skill.color} ${skill.textColor}`}
              >
                <div className="mb-6 border-2 border-current p-3 w-fit rounded-none bg-white/20 backdrop-blur-sm">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-black uppercase mb-4">{skill.title}</h3>
                <p className="text-lg font-medium leading-relaxed opacity-90">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-24 bg-accent border-y-4 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border-4 border-black p-8 md:p-16 neo-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary border-l-4 border-b-4 border-black rounded-bl-full"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <h2 className="text-5xl font-black mb-6 uppercase">
                    Building <span className="text-primary underline decoration-4">Communities</span>
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
                    className="neo-button bg-black text-white hover:bg-gray-800 rounded-none h-14 px-8 text-xl w-full sm:w-auto"
                  >
                    Join the Movement
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary h-48 border-4 border-black neo-shadow-sm flex items-center justify-center">
                    <Users className="h-16 w-16 text-white" />
                  </div>
                  <div className="bg-secondary h-48 border-4 border-black neo-shadow-sm mt-8 flex items-center justify-center">
                    <Globe className="h-16 w-16 text-black" />
                  </div>
                  <div className="bg-yellow-400 h-48 border-4 border-black neo-shadow-sm -mt-8 flex items-center justify-center">
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
            <p className="text-2xl font-bold mb-12 max-w-2xl mx-auto">
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
                variant="outline"
                className="neo-button bg-black text-white hover:bg-gray-800 rounded-none h-16 px-10 text-2xl"
              >
                <Mail className="mr-3 h-6 w-6" /> Email Me
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
              BILAL
            </span>
            <p className="mt-4 text-gray-400 font-medium">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex space-x-8">
            {["Twitter", "LinkedIn", "GitHub", "Topmate"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-lg font-bold hover:text-primary transition-colors uppercase"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}