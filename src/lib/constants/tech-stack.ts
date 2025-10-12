import {
  Docker,
  Git,
  NodeJs,
  Python,
  AWS,
  Azure,
  //Terraform,
  CSharp,
  MicrosoftSQLServer,
  Jira,
  GitLab,
  GitHubLight,
} from "developer-icons";

//import HonoIcon from '@/components/ui/icons/hono.astro'
//import FastapiIcon from '@/components/ui/icons/fastapi.astro'


export const TECH_STACK = [

  // Cloud Solutions
  {
    title: "Azure",
    href: "https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account/",
    icon: Azure,
  },
  {
    title: "AWS",
    href: "https://aws.amazon.com/",
    icon: AWS,
  },

  {
    title: "Terraform",
    href: "https://developer.hashicorp.com/terraform",
    //icon: Terraform,
  },

  
  // Programming Languages
  {
    title: "Python",
    href: "https://www.python.org/",
    icon: Python,
  },

  // Backend Technologies
  {
    title: "Node.js",
    href: "https://nodejs.org/",
    icon: NodeJs,
  },
  {
    title: "C#",
    href: "https://dotnet.microsoft.com/en-us/languages/csharp",
    icon: CSharp,
  },
  
  // Databases & Caching
  {
    title: "SQL Server",
    href: "https://www.microsoft.com/en-us/sql-server",
    icon: MicrosoftSQLServer,
  },
  
  // DevOps & Development Tools
  {
    title: "Docker",
    href: "https://www.docker.com/",
    icon: Docker,
  },
  {
    title: "Git",
    href: "https://git-scm.com/",
    icon: Git,
  },
  {
    title: "Github",
    href: "https://github.com/",
    icon: GitHubLight
  },
  {
    title: "Gitlab",
    href: "https://about.gitlab.com/",
    icon: GitLab,
  },

  // Miscellaneous
  {
    title: "Jira",
    href: "https://www.atlassian.com/software/jira",
    icon: Jira,
  },
];

