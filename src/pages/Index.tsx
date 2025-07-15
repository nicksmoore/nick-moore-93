
import { useState, useEffect } from 'react';
import { useUser, UserButton } from '@clerk/clerk-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Calendar,
  Play,
  User,
  Briefcase,
  Code,
  FileText,
  MessageSquare,
  MessageCircle,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  Headphones,
  Mic,
  Award,
  GraduationCap,
  Zap,
  Building,
  Globe,
  DollarSign,
  Users,
  Heart,
  Video,
  ChevronDown,
  Copy,
  Repeat,
  Upload,
  Camera,
  Smile,
  VolumeX,
  Volume2,
  RotateCcw
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import VirtualCoverLetter from '@/components/VirtualCoverLetter';


const Index = () => {
  const { user } = useUser();
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  
  // Virtual Cover Letter State
  const [showCoverLetter, setShowCoverLetter] = useState(false);
  

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const userProfile = {
    name: "Nick Moore",
    tagline: "Vibe-Coding Wizard | SRE & Network Automation Specialist",
    email: "nick.moore@pm.me",
    linkedInUrl: "#",
    githubUrl: "#",
    portfolioUrl: "#",
    calendlyUrl: "https://calendly.com/nickmoore444/office-hours",
    meetingPlatforms: [
      { 
        name: "Google Meet", 
        logo: "", 
        url: "#",
        dialIn: "+1 417-567-3110",
        pin: "618613967",
        moreNumbers: "#"
      }
    ],
    podumeUrl: "#",
    location: "Remote",
    
    workPreferences: [
      { type: "Remote", rank: 1, icon: "🏠" },
      { type: "Hybrid", rank: 2, icon: "🔄" },
      { type: "Onsite", rank: 3, icon: "🏢" }
    ],
    about: (
      <>
        I'm a vibe-coding wizard crafting scalable, soulful applications and resilient network infrastructures that resonate. With modern tech stacks powering real-time backends, Windsurf delivering seamless UI flows, and Cursor AI ensuring code precision, I build solutions that hum with energy. I harness Anthropic Claude Code for insights, weave intelligence with LangChain, and automate workflows with N8N, Zapier, and Pipedream. Over 7 years in SRE and network automation, using Terraform, Ansible, and GitHub Actions, I've driven high-performance systems for global clients. Explore my vibe-coded creations at github.com/holynakamoto. Ready to check my{" "}
        <span className="text-primary underline">vibe</span>
        ?
      </>
    ),
    coreCompetencies: [
      "SRE & Network Automation: Architecting cloud infrastructures (Azure, GCP, AWS) with Terraform, Ansible, and GitHub Actions.",
      "Full-Stack Development: Crafting user-centric apps with modern backends, Windsurf, React, and Node.js.",
      "AI-Driven Coding: Enhancing solutions with Cursor AI, Anthropic Claude Code, and LangChain.",
      "Workflow Automation: Streamlining processes with N8N, Zapier, and Pipedream.",
      "Infrastructure as Code (IaC): Automating firewalls, load balancers, and Kubernetes for resiliency."
    ],
    softSkills: [
      "Agile Leadership & Strategic Vision",
      "Cross-Functional Collaboration & Stakeholder Management", 
      "Design Thinking & User-Centric Innovation",
      "Data-Driven Decision Making & Analytics",
      "Growth Mindset & Continuous Learning",
      "Emotional Intelligence & Cultural Competency",
      "Change Management & Digital Transformation",
      "Creative Problem-Solving & Systems Thinking",
      "Executive Communication & Thought Leadership",
      "Team Building & Talent Development",
      "Customer Experience Optimization",
      "Product Management & Go-to-Market Strategy"
    ],
    workExperience: {
      title: "SRE & Network Automation Consultant",
      company: "Various Clients",
      period: "June 2018 – Present (7 years)",
      location: "Remote",
      achievements: [
        "Designed and automated cloud network infrastructures (Azure, GCP, AWS) using Terraform and Ansible, reducing deployment times by 25% and configuration errors by 20%.",
        "Developed automation frameworks for firewalls, load balancers, and routers with GitHub Actions CI/CD pipelines, cutting incident resolution time by 20%.",
        "Implemented KVM-based virtualization with libvirt and SDN with OpenFlow, achieving 99.9% uptime for multi-cloud environments.",
        "Engineered Kubernetes clusters with Helm and managed network modules in GitHub, enabling seamless provisioning for global teams.",
        "Built scalable web applications with modern backend solutions and Windsurf for intuitive UIs, boosting user engagement by 25%.",
        "Integrated LangChain for AI-driven features and automated workflows with N8N, Zapier, and Pipedream, saving 10+ hours weekly.",
        "Optimized cross-region latency by 20% via automated load balancer configurations and scaled infrastructure to support 10x customer growth.",
        "Collaborated with cross-functional teams to deliver soulful, impactful solutions for startups and enterprises."
      ],
      keyClients: [
        { name: "Talkdesk", logo: "" },
        { name: "Pinterest", logo: "" },
        { name: "City National Bank", logo: "" },
        { name: "Allscripts", logo: "" },
        { name: "Gemini", logo: "" },
        { name: "Edgecast Networks", logo: "" }
      ]
    },
    projects: [
      {
        title: "Podumé",
        subtitle: "AI-Powered Resume-to-Podcast Platform",
        description: "Developed a web app using modern backend solutions and Windsurf to transform resumes into engaging podcast episodes, leveraging LangChain for AI-driven narrative generation.",
        achievements: [
          "Automated audio processing and publishing with N8N and Pipedream, reducing production time by 80%.",
          "Optimized code with Cursor AI and Anthropic Claude Code, achieving 30% faster load times."
        ],
        techStack: ["React", "Windsurf", "LangChain", "N8N", "Pipedream"]
      },
      {
        title: "Personalized Interactive Birthday Cards",
        subtitle: "Interactive Web App",
        description: "Designed a dynamic web app using Windsurf and modern backend solutions to create customized, animated birthday cards with interactive elements like clickable graphics.",
        achievements: [
          "Automated card generation and delivery with Pipedream, enhancing user experience and reducing manual effort by 60%."
        ],
        techStack: ["Windsurf", "React", "Pipedream"],
        liveUrl: "#"
      },
      {
        title: "Dynamic Tenant Network Provisioning Service",
        subtitle: "Cloud Networking Solution",
        description: "Built a scalable multi-tenant network provisioning service using Rust and VXLAN with a REST API, enabling efficient tenant isolation and network management.",
        achievements: [
          "Automated deployments with Terraform and GitHub Actions, improving provisioning speed by 25% and ensuring 99.9% uptime."
        ],
        techStack: ["Rust", "VXLAN", "Terraform", "GitHub Actions"],
        liveUrl: "#"
      },
      {
        title: "Market Minx Signals",
        subtitle: "Real-Time Trading Signal Platform",
        description: "Developed a web app using modern backend solutions and Windsurf to deliver curated trading setups for stocks, forex, and indices, focusing on technical breakouts and momentum plays.",
        achievements: [
          "Leveraged LangChain and real-time data APIs to provide clear entry points, stop-loss levels, and profit targets, enhancing intraday trading strategies across NASDAQ, NYSE, and forex markets.",
          "Automated signal generation and delivery with Pipedream, improving trader response time by 40%."
        ],
        techStack: ["React", "Windsurf", "LangChain", "Pipedream"],
        liveUrl: "#"
      }
    ],
    education: {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Washington",
      year: "Graduated May 2002"
    },
    certifications: [
      { name: "Advanced LangChain for AI Integration (2023)", logo: "" },
      { name: "Zapier Automation Expert (2022)", logo: "" },
      { name: "AWS Certified Solutions Architect (2021)", logo: "" },
      { name: "Google Cloud Professional DevOps Engineer (2020)", logo: "" },
      { name: "Certified Kubernetes Administrator (CKA)", logo: "" },
      { name: "HashiCorp Terraform Associate", logo: "" },
      { name: "Cisco CCIE Enterprise Infrastructure", logo: "" },
      { name: "Juniper Networks JNCIA", logo: "" }
    ],
    technicalSkills: {
      "Programming Languages": {
        "Web Development": [
          { name: "JavaScript", logo: "" },
          { name: "TypeScript", logo: "" }
        ],
        "General-Purpose": [
          { name: "Python", logo: "" },
          { name: "Java", logo: "" }
        ],
        "Systems Programming": [
          { name: "Rust", logo: "" },
          { name: "Golang", logo: "" }
        ],
        "Data Science": [
          { name: "R", logo: "" },
          { name: "Julia", logo: "" }
        ],
        "Scripting": [
          { name: "Bash", logo: "" },
          { name: "Perl", logo: "" }
        ],
        "Database": [
          { name: "SQL", logo: "" },
          { name: "GraphQL", logo: "" }
        ]
      },
      "AI/ML": {
        "Frameworks": [
          { name: "TensorFlow", logo: "" },
          { name: "PyTorch", logo: "" }
        ],
        "Models": [
          { name: "BERT", logo: "" },
          { name: "GPT", logo: "" }
        ],
        "Data Engineering": [
          { name: "Spark", logo: "" },
          { name: "SQL", logo: "" }
        ],
        "NLP": [
          { name: "Transformers", logo: "" },
          { name: "spaCy", logo: "" }
        ],
        "Deployment": [
          { name: "Docker", logo: "" },
          { name: "Kubernetes", logo: "" }
        ],
        "Domain-Specific": [
          { name: "XGBoost", logo: "" },
          { name: "OpenCV", logo: "" }
        ],
        "Ethics": [
          { name: "Fairlearn", logo: "" },
          { name: "ModelAnalysis", logo: "" }
        ]
      },
      "SRE/Networking": [
        { name: "Terraform", logo: "" },
        { name: "Ansible", logo: "" },
        { name: "Kubernetes", logo: "" },
        { name: "Docker", logo: "" },
        { name: "GitHub Actions", logo: "" }
      ],
      "Full-Stack": [
        { name: "React", logo: "" },
        { name: "Node.js", logo: "" },
        { name: "LangChain", logo: "" }
      ],
      "Vibe Coding": [
        { name: "Cursor", logo: "" },
        { name: "Windsurf", logo: "" },
        { name: "Lovable", logo: "" },
        { name: "Claude Code", logo: "" }
      ],
      "Automation": [
        { name: "N8N", logo: "" },
        { name: "Zapier", logo: "" },
        { name: "Pipedream", logo: "" }
      ],
      "Bitcoin/Web3": [
        { name: "Taproot", logo: "" },
        { name: "Schnorr", logo: "" },
        { name: "Lightning", logo: "" },
        { name: "MuSig2", logo: "" },
        { name: "HTLCs", logo: "" },
        { name: "PTLCs", logo: "" },
        { name: "Stratum", logo: "" },
        { name: "Channels", logo: "" },
        { name: "Routing", logo: "" },
        { name: "RFQ", logo: "" }
      ],
      "Cloud": [
        { name: "AWS", logo: "" },
        { name: "Azure", logo: "" },
        { name: "GCP", logo: "" }
      ]
    }
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${userProfile.email}?subject=Let's Connect via Vibeume!&body=Hi ${userProfile.name}, I discovered your Vibeume and would love to discuss...`;
  };

  const handleScheduleInterviewClick = () => {
    // Open Calendly with Google Meet integration
    window.open(userProfile.calendlyUrl, '_blank');
    toast({
      title: "Opening Calendly Scheduler 📅",
      description: "Book your interview with Google Meet integration!",
    });
  };

  const handleLogoClick = () => {
    setActiveSection('podume');
    // Scroll to podume section
    const element = document.getElementById('podume-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toast({
      title: "Opening Podumé",
      description: "Navigating to podume section!",
    });
  };


  const handleSocialClick = (url: string, platform: string) => {
    window.open(url, '_blank');
    toast({
      title: `Opening ${platform}`,
      description: "Thanks for connecting!",
    });
  };

  const handleJobSiteClick = (site: string) => {
    toast({
      title: `Opening ${site}`,
      description: "Feature coming soon!",
    });
  };

  const handleDonateClick = () => {
    toast({
      title: "Thanks for the thought!",
      description: "Feature coming soon",
    });
  };

  const handleTipOptionClick = (option: string) => {
    switch (option) {
      case 'cashapp':
        window.open('https://cash.app/$holynakamoto', '_blank');
        break;
      case 'paypal':
        // Show PayPal QR code
        toast({
          title: "PayPal QR Code",
          description: "Scan the QR code to send payment via PayPal",
        });
        break;
      case 'zelle':
        toast({
          title: "Zelle Payment",
          description: "Send to: 424-392-2704",
        });
        break;
      case 'bitcoin':
        toast({
          title: "Bitcoin Payment",
          description: "Bitcoin address coming soon!",
        });
        break;
      case 'venmo':
        toast({
          title: "Venmo Payment",
          description: "Feature coming soon! Thanks for the thought! 💰",
        });
        break;
      case 'stripe':
        toast({
          title: "Stripe Payment",
          description: "Feature coming soon! Thanks for the thought! 💰",
        });
        break;
      default:
        toast({
          title: `${option} Tip`,
          description: "Feature coming soon! Thanks for the thought! 💰",
        });
    }
  };

  const handleRemixClick = () => {
    // Use the same approach as "Edit with Lovable" button
    const projectId = '8e049bf4-aeb3-40f9-a5bc-b088f79893bb';
    const remixUrl = `https://lovable.dev/projects/${projectId}?remix=true`;
    
    // Open the remix page in a new tab
    window.open(remixUrl, '_blank');
    
    toast({
      title: "Opening Remix! 🎛️",
      description: "Creating your own version on Lovable!",
    });
  };

  const sections = [
    { id: 'about', label: 'About', icon: User },
    { id: 'competencies', label: 'Core Skills', icon: Zap },
    { id: 'softskills', label: 'Soft Skills', icon: Heart },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'podume', label: 'Podumé', icon: Mic },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Tech Skills', icon: FileText },
    { id: 'preferences', label: 'Work Preferences', icon: Users },
    { id: 'references', label: 'References', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hidden Spotify Background Music */}
      <iframe
        src="https://open.spotify.com/embed/track/6aaQqhb2eLLvCY7UYDvkPW?utm_source=generator"
        width="0"
        height="0"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ 
          position: 'absolute', 
          left: '-9999px', 
          opacity: 0, 
          pointerEvents: 'none' 
        }}
      />
      
      {/* Hero Section */}
      <div className={`hero-section transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="relative overflow-hidden glass-effect border-b border-white/20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-purple-800/30" />
          
          {/* Podumé Logo - Upper Left Corner */}
          <div className="absolute top-6 left-6 z-10">
            <div 
              onClick={handleLogoClick}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-amber-500 rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300 group"
            >
              <div className="relative flex items-center justify-center">
                <Headphones className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                <Mic className="absolute w-4 h-4 text-amber-200 group-hover:text-amber-100 transition-colors duration-300" />
              </div>
            </div>
            <div className="mt-2 text-center">
              <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent tracking-wide">
                PODUME
              </span>
            </div>
          </div>

          {/* User Menu - Upper Right Corner */}
          <div className="absolute top-6 right-6 z-10">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm text-amber-300 font-medium">{user?.firstName || user?.emailAddresses?.[0]?.emailAddress}</p>
                <p className="text-xs text-amber-200/60">Signed in</p>
              </div>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                    userButtonPopoverCard: "bg-card border-border",
                    userButtonPopoverActionButton: "text-foreground hover:bg-accent"
                  }
                }}
              />
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center relative">
              
              {/* Virtual Cover Letter Section */}
              <div className="mb-12">
                {showCoverLetter ? (
                  <VirtualCoverLetter />
                ) : (
                  <div className="relative mx-auto">
                    <div 
                      onClick={() => setShowCoverLetter(true)}
                      className="w-64 h-64 rounded-3xl bg-gradient-to-br from-purple-600/20 to-amber-500/20 border-4 border-white/20 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-500 shadow-2xl backdrop-blur-sm mx-auto relative overflow-hidden group"
                    >
                      <div className="text-center group-hover:scale-105 transition-transform duration-300">
                        <div className="relative mb-4">
                          <Camera className="w-16 h-16 text-white/80 mx-auto" />
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-amber-400 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">+</span>
                          </div>
                        </div>
                        <p className="text-white/90 text-lg font-medium mb-2">Virtual Cover Letter</p>
                        <p className="text-white/70 text-sm">Click to create your 30s intro</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent mb-8 animate-fade-in tracking-tight">
                {userProfile.name}
              </h1>
              <p className="text-2xl md:text-4xl text-amber-200 mb-12 font-light animate-slide-up tracking-wide">
                {userProfile.tagline}
              </p>
              <div className="flex flex-col items-center justify-center gap-8 text-amber-300 mb-12 animate-scale-in">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg font-medium">{userProfile.location}</span>
                </div>

                {/* Podumé Button under Remote */}
                <Button 
                  size="lg" 
                  onClick={handleLogoClick}
                  className="h-12 px-8 apple-button bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
                >
                  <div className="relative flex items-center justify-center mr-3">
                    <Headphones className="w-5 h-5 text-white" />
                    <Mic className="absolute w-2 h-2 text-amber-200" />
                  </div>
                  Listen to Nick's Podumé
                </Button>
                
                {/* Upload Resume Button */}
                <Button 
                  size="sm" 
                  onClick={() => window.open('https://notebooklm.google.com/', '_blank')}
                  className="h-10 px-4 apple-button bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Resume
                </Button>
              </div>
              {/* Quick Actions */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <Button 
                  size="lg" 
                  onClick={handleEmailClick}
                  className="h-14 px-8 apple-button bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Get in Touch
                </Button>
                {/* Schedule Interview Dropdown with Platform Options */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="h-14 px-8 apple-button bg-white/80 border-2 border-amber-400 hover:bg-amber-50 hover:border-amber-500 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl"
                    >
                      <Calendar className="w-5 h-5 mr-3" />
                      Schedule Interview
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 glass-effect border border-purple-200/30 shadow-2xl rounded-2xl p-2">
                    <div className="text-center p-3 border-b border-purple-200/20 mb-2">
                      <span className="text-amber-300 font-semibold">Choose Your Platform</span>
                    </div>
                    <DropdownMenuItem 
                      onClick={() => {
                        window.open(userProfile.calendlyUrl, '_blank');
                        toast({
                          title: "Opening Calendly - Teams",
                          description: "Book your interview with Microsoft Teams!",
                        });
                      }}
                      className="rounded-xl cursor-pointer hover:bg-purple-100/10 p-3 flex items-center gap-3"
                    >
                      <Video className="w-5 h-5 text-blue-400" />
                      <div>
                        <div className="text-white font-medium">Microsoft Teams</div>
                        <div className="text-sm text-amber-200">Professional video calls</div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => {
                        window.open(userProfile.calendlyUrl, '_blank');
                        toast({
                          title: "Opening Calendly - Slack",
                          description: "Book your interview with Slack Huddles!",
                        });
                      }}
                      className="rounded-xl cursor-pointer hover:bg-purple-100/10 p-3 flex items-center gap-3"
                    >
                      <MessageSquare className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="text-white font-medium">Slack</div>
                        <div className="text-sm text-amber-200">Slack huddles available</div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => {
                        window.open(userProfile.calendlyUrl, '_blank');
                        toast({
                          title: "Opening Calendly - Zoom",
                          description: "Book your interview with Zoom!",
                        });
                      }}
                      className="rounded-xl cursor-pointer hover:bg-purple-100/10 p-3 flex items-center gap-3"
                    >
                      <Video className="w-5 h-5 text-purple-400" />
                      <div>
                        <div className="text-white font-medium">Zoom</div>
                        <div className="text-sm text-amber-200">Professional video calls</div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => {
                        window.open(userProfile.calendlyUrl, '_blank');
                        toast({
                          title: "Opening Calendly - Google Meet",
                          description: "Book your interview with Google Meet!",
                        });
                      }}
                      className="rounded-xl cursor-pointer hover:bg-purple-100/10 p-3 flex items-center gap-3"
                    >
                      <Video className="w-5 h-5 text-amber-400" />
                      <div>
                        <div className="text-white font-medium">Google Meet</div>
                        <div className="text-sm text-amber-200">Default platform</div>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                {/* Tip Button with Dropdown (including Bitcoin) */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      size="lg" 
                      className="h-14 px-8 apple-button bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl"
                    >
                      <DollarSign className="w-5 h-5 mr-3" />
                      Tip 💰
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 bg-background/95 backdrop-blur-xl border border-purple-200/30 rounded-2xl p-2">
                    <DropdownMenuItem 
                      onClick={() => handleTipOptionClick('cashapp')}
                      className="rounded-xl cursor-pointer hover:bg-purple-100/10 p-3"
                    >
                      <span className="text-green-500 mr-3">$</span>
                      CashApp
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => handleTipOptionClick('paypal')}
                      className="rounded-xl cursor-pointer hover:bg-purple-100/10 p-3"
                    >
                      <span className="text-blue-500 mr-3">📧</span>
                      PayPal
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => handleTipOptionClick('zelle')}
                      className="rounded-xl cursor-pointer hover:bg-purple-100/10 p-3"
                    >
                      <span className="text-yellow-500 mr-3">🏦</span>
                      Zelle
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => handleTipOptionClick('bitcoin')}
                      className="rounded-xl cursor-pointer hover:bg-purple-100/10 p-3"
                    >
                      <span className="text-orange-500 mr-3">₿</span>
                      Bitcoin
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => handleTipOptionClick('venmo')}
                      className="rounded-xl cursor-pointer hover:bg-purple-100/10 p-3"
                    >
                      <span className="text-purple-500 mr-3">💜</span>
                      Venmo
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => handleTipOptionClick('stripe')}
                      className="rounded-xl cursor-pointer hover:bg-purple-100/10 p-3"
                    >
                      <span className="text-indigo-500 mr-3">💳</span>
                      Stripe
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                {/* Remix Me Button moved down a level */}
                <Button 
                  size="lg" 
                  onClick={handleRemixClick}
                  className="h-14 px-8 apple-button bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl animate-bounce"
                >
                  <Repeat className="w-5 h-5 mr-3" />
                  Remix Me 🎛️
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={() => handleSocialClick(userProfile.linkedInUrl, 'LinkedIn')}
                  className="h-12 px-6 apple-button bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  My LinkedIn Profile
                </Button>
                <Button 
                  onClick={() => handleSocialClick(userProfile.githubUrl, 'GitHub')}
                  className="h-12 px-6 apple-button bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub Profile
                </Button>
              
              {/* Compact Audio Player */}
              {showAudioPlayer && (
                <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
                  <div className="bg-gradient-to-r from-purple-900/95 to-amber-900/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-4 shadow-2xl max-w-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-amber-300 font-bold text-sm">Nick's Podumé</h4>
                      <button 
                        onClick={() => setShowAudioPlayer(false)}
                        className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                      >
                        <span className="text-sm text-amber-200">×</span>
                      </button>
                    </div>
                       <div className="flex items-center justify-center bg-purple-900/30 rounded-2xl p-8 text-center">
                         <p className="text-amber-200">Audio player coming soon!</p>
                       </div>
                  </div>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="sticky top-0 z-40 glass-effect border-b border-white/20 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex flex-wrap justify-center py-6 gap-3">*
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 apple-button ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-purple-600 to-amber-500 text-white shadow-lg scale-105'
                        : 'text-amber-200 hover:text-white hover:bg-white/10 hover:shadow-md'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {section.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>


        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* About Section */}
          {activeSection === 'about' && (
            <div className="animate-fade-in space-y-8">
              <Card className="apple-card shadow-2xl border-0 glass-effect hover-lift border-purple-200/30">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-4 text-3xl font-light text-amber-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-amber-500/10 rounded-2xl flex items-center justify-center">
                      <User className="w-6 h-6 text-purple-600" />
                    </div>
                    Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <p className="text-xl text-amber-200 leading-relaxed font-light">
                    {userProfile.about}
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Core Competencies Section */}
          {activeSection === 'competencies' && (
            <div className="animate-fade-in space-y-8">
              <Card className="apple-card shadow-2xl border-0 glass-effect hover-lift border-purple-200/30">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-4 text-3xl font-light text-amber-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-amber-500/10 rounded-2xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    Core Competencies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {userProfile.coreCompetencies.map((competency, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 glass-effect rounded-2xl border border-purple-200/20">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-amber-200 leading-relaxed">{competency}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Soft Skills Section */}
          {activeSection === 'softskills' && (
            <div className="animate-fade-in space-y-8">
              <Card className="apple-card shadow-2xl border-0 glass-effect hover-lift border-purple-200/30">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-4 text-3xl font-light text-amber-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-amber-500/10 rounded-2xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-purple-600" />
                    </div>
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {userProfile.softSkills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 glass-effect rounded-2xl border border-purple-200/20">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <span className="text-amber-200">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Work Preferences Section */}
          {activeSection === 'preferences' && (
            <div className="animate-fade-in space-y-8">
              <Card className="apple-card shadow-2xl border-0 glass-effect hover-lift border-purple-200/30">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-4 text-3xl font-light text-amber-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-amber-500/10 rounded-2xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    Work Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="glass-effect border border-purple-200/20 rounded-3xl p-8">
                    <h3 className="text-xl font-semibold text-amber-300 mb-6 flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-amber-500" />
                      Work Environment Preferences (Ranked)
                    </h3>
                    <div className="space-y-4">
                      {userProfile.workPreferences.map((pref, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-purple-900/30 rounded-2xl">
                          <Badge className="bg-purple-600 text-white px-3 py-1 rounded-full text-lg font-bold">
                            #{pref.rank}
                          </Badge>
                          <span className="text-2xl">{pref.icon}</span>
                          <span className="text-amber-200 text-lg font-medium">{pref.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Experience Section */}
          {activeSection === 'experience' && (
            <div className="animate-fade-in space-y-8">
              <Card className="apple-card shadow-2xl border-0 glass-effect hover-lift border-purple-200/30">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-4 text-3xl font-light text-amber-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-amber-500/10 rounded-2xl flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-purple-600" />
                    </div>
                    Work Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="glass-effect border border-purple-200/20 rounded-3xl p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-amber-300 mb-2">{userProfile.workExperience.title}</h3>
                        <p className="text-lg text-purple-400 font-medium">{userProfile.workExperience.company}</p>
                        <p className="text-amber-200">{userProfile.workExperience.location}</p>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                        {userProfile.workExperience.period}
                      </Badge>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {userProfile.workExperience.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                          <p className="text-amber-200 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-semibold text-amber-300 mb-4">Key Clients:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {userProfile.workExperience.keyClients.map((client) => (
                          <div key={client.name} className="flex flex-col items-center gap-3 p-4 bg-purple-900/30 rounded-2xl hover:bg-purple-800/40 transition-colors">
                            <img 
                              src={client.logo} 
                              alt={client.name}
                              className="w-12 h-12 object-contain"
                              onError={(e) => {(e.target as HTMLImageElement).style.display = 'none'}}
                            />
                            <span className="text-amber-200 text-sm font-medium text-center">{client.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <div className="animate-fade-in space-y-8">
              <Card className="apple-card shadow-2xl border-0 glass-effect hover-lift border-purple-200/30">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-4 text-3xl font-light text-amber-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-amber-500/10 rounded-2xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-purple-600" />
                    </div>
                    Key Projects
                  </CardTitle>
                   <p className="text-amber-200 mt-4">
                     Explore my work and professional portfolio
                   </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  {userProfile.projects.map((project, index) => (
                    <div key={project.title} className="glass-effect border border-purple-200/20 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover-lift">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-amber-300 mb-2">{project.title}</h3>
                          <p className="text-lg text-purple-400 font-medium mb-4">{project.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-amber-200 mb-6 text-lg leading-relaxed">{project.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        {project.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Star className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                            <p className="text-amber-200">{achievement}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-purple-900/50 text-purple-300 hover:bg-purple-800/60 px-3 py-1 rounded-full">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      {project.liveUrl && (
                        <Button 
                          size="sm" 
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="apple-button bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Podumé Section */}
          {activeSection === 'podume' && (
            <div id="podume-section" className="animate-fade-in space-y-8">
              <Card className="apple-card shadow-2xl border-0 glass-effect hover-lift border-purple-200/30">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-4 text-3xl font-light text-amber-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-amber-500/10 rounded-2xl flex items-center justify-center">
                      <Mic className="w-6 h-6 text-purple-600" />
                    </div>
                    Podumé
                  </CardTitle>
                  <p className="text-amber-200 mt-4">
                    AI-powered resume-to-podcast transformation
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="glass-effect border border-purple-200/20 rounded-3xl p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-semibold text-amber-300 mb-2">Latest Episode</h3>
                      <p className="text-amber-200 mb-6">Deep dive into technology trends and professional insights</p>
                    </div>
                    <div className="max-w-2xl mx-auto">
                      <iframe 
                        data-testid="embed-iframe" 
                        style={{borderRadius: '12px'}} 
                        src="https://open.spotify.com/embed/episode/30g6vntQz41XIYGhq2fvcl?utm_source=generator" 
                        width="100%" 
                        height="352" 
                        frameBorder="0" 
                        allowFullScreen 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"
                        className="shadow-xl"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Education Section */}
          {activeSection === 'education' && (
            <div className="animate-fade-in space-y-8">
              <Card className="apple-card shadow-2xl border-0 glass-effect hover-lift border-purple-200/30">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-4 text-3xl font-light text-amber-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-amber-500/10 rounded-2xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-purple-600" />
                    </div>
                    Education & Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Education */}
                  <div className="glass-effect border border-purple-200/20 rounded-3xl p-8">
                    <h3 className="text-2xl font-semibold text-amber-300 mb-2">{userProfile.education.degree}</h3>
                    <p className="text-lg text-purple-400 font-medium">{userProfile.education.school}</p>
                    <p className="text-amber-200">{userProfile.education.year}</p>
                  </div>

                  {/* Certifications */}
                  <div className="glass-effect border border-purple-200/20 rounded-3xl p-8">
                    <h3 className="text-xl font-semibold text-amber-300 mb-6 flex items-center gap-3">
                      <Award className="w-6 h-6 text-amber-500" />
                      Certifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {userProfile.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-purple-900/30 rounded-2xl">
                          <img 
                            src={cert.logo} 
                            alt={cert.name}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {(e.target as HTMLImageElement).style.display = 'none'}}
                          />
                          <span className="text-amber-200">{cert.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Technical Skills Section */}
          {activeSection === 'skills' && (
            <div className="animate-fade-in space-y-8">
              <Card className="apple-card shadow-2xl border-0 glass-effect hover-lift border-purple-200/30">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-4 text-3xl font-light text-amber-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-amber-500/10 rounded-2xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-purple-600" />
                    </div>
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {Object.entries(userProfile.technicalSkills).map(([category, skills]) => (
                      <div key={category} className="glass-effect border border-purple-200/20 rounded-3xl p-6">
                        <h3 className="text-xl font-semibold text-amber-300 mb-4">{category}</h3>
                        
                        {/* Handle nested structures for AI/ML and Programming Languages */}
                        {(category === "AI/ML" || category === "Programming Languages") && typeof skills === 'object' && !Array.isArray(skills) ? (
                          <div className="space-y-6">
                            {Object.entries(skills).map(([subcategory, subSkills]) => (
                              <div key={subcategory}>
                                <h4 className="text-lg font-medium text-purple-200 mb-3">{subcategory}</h4>
                                <div className="grid grid-cols-2 gap-3">
                                  {subSkills.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-3 p-3 bg-purple-900/30 rounded-2xl hover:bg-purple-800/40 transition-colors">
                                      <img 
                                        src={skill.logo} 
                                        alt={skill.name}
                                        className="w-8 h-8 object-contain"
                                        onError={(e) => {(e.target as HTMLImageElement).style.display = 'none'}}
                                      />
                                      <span className="text-amber-200 text-sm font-medium">{skill.name}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          /* Handle flat array structure for other categories */
                          <div className="grid grid-cols-2 gap-4">
                            {Array.isArray(skills) && skills.map((skill) => (
                              <div key={skill.name} className="flex items-center gap-3 p-3 bg-purple-900/30 rounded-2xl hover:bg-purple-800/40 transition-colors">
                                <img 
                                  src={skill.logo} 
                                  alt={skill.name}
                                  className="w-8 h-8 object-contain"
                                  onError={(e) => {(e.target as HTMLImageElement).style.display = 'none'}}
                                />
                                <span className="text-amber-200 text-sm font-medium">{skill.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}


          {/* References Section */}
          {activeSection === 'references' && (
            <div className="animate-fade-in space-y-8">
              <Card className="apple-card shadow-2xl border-0 glass-effect hover-lift border-purple-200/30">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-4 text-3xl font-light text-amber-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-amber-500/10 rounded-2xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-purple-600" />
                    </div>
                    Professional References
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="glass-effect border border-purple-200/20 rounded-3xl p-8">
                    <h3 className="text-xl font-semibold text-amber-300 mb-6 flex items-center gap-3">
                      <Linkedin className="w-6 h-6 text-blue-500" />
                      Available References
                    </h3>
                    <p className="text-amber-200 mb-8">Connect with my professional references to learn more about my work experience and expertise.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       <Button
                         onClick={() => {
                           toast({
                             title: "Reference Contact",
                             description: "Derrick Sawyer's contact available upon request!",
                           });
                         }}
                         className="h-20 px-8 apple-button bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/30 hover:from-blue-500/40 hover:to-blue-600/40 hover:border-blue-400/60 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl flex items-center gap-4"
                       >
                        <Linkedin className="w-8 h-8 text-blue-400" />
                        <div className="text-left">
                          <div className="text-xl font-semibold text-amber-200">Derrick Sawyer</div>
                          <div className="text-sm text-blue-300">Professional Reference</div>
                          <div className="text-xs text-amber-300 mt-1">Contact Available</div>
                        </div>
                      </Button>
                      
                       <Button
                         onClick={() => {
                           window.open('https://www.linkedin.com/in/al-calderon-87808b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank');
                           toast({
                             title: "Opening Al Calderon's LinkedIn",
                             description: "Connecting you with my professional reference!",
                           });
                         }}
                         className="h-20 px-8 apple-button bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/30 hover:from-blue-500/40 hover:to-blue-600/40 hover:border-blue-400/60 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl flex items-center gap-4"
                       >
                        <Linkedin className="w-8 h-8 text-blue-400" />
                        <div className="text-left">
                          <div className="text-xl font-semibold text-amber-200">Al Calderon</div>
                          <div className="text-sm text-blue-300">Professional Reference</div>
                          <div className="text-xs text-amber-300 mt-1">View LinkedIn Profile</div>
                        </div>
                      </Button>
                      
                       <Button
                         onClick={() => {
                           window.open('https://www.linkedin.com/in/robert-l-perry?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank');
                           toast({
                             title: "Opening Robert Perry III's LinkedIn",
                             description: "Connecting you with my professional reference!",
                           });
                         }}
                         className="h-20 px-8 apple-button bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/30 hover:from-blue-500/40 hover:to-blue-600/40 hover:border-blue-400/60 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl flex items-center gap-4"
                       >
                        <Linkedin className="w-8 h-8 text-blue-400" />
                        <div className="text-left">
                          <div className="text-xl font-semibold text-amber-200">Robert Perry III</div>
                          <div className="text-sm text-blue-300">Professional Reference</div>
                          <div className="text-xs text-amber-300 mt-1">View LinkedIn Profile</div>
                        </div>
                      </Button>
                    </div>
                    
                    <div className="mt-8 p-6 bg-purple-900/20 rounded-2xl text-center">
                      <p className="text-amber-200 text-sm">
                        Additional references available upon request during the interview process.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

        </div>


      </div>
    </div>
  );
};

export default Index;
