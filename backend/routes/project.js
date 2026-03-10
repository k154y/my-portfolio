// const express=require("express");
// const router=express.Router();
// router.get("/",(req,res)=>{
//     res.json([
//         {id:'1',name:'robort arm'},
//         {id:'2',name:'fuel station'}
//     ]);
// });
// module.exports=router;

// ============================================
// routes/projects.js
// ============================================
// This file handles all /projects routes.
// Notice: paths here are RELATIVE to the mount point.
// If mounted at /projects:
//   router.get('/')     → GET /projects
//   router.get('/:id')  → GET /projects/1

const express = require('express');
const router = express.Router(); // Mini-app with just routing abilities

// ============================================
// DATA LAYER (later this becomes your database)
// ============================================
// Right now this is hardcoded — perfect for learning.
// In a real app you'd query a database here.
// Your React component had this data hardcoded — now it lives here!

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with payment integration, inventory management, and real-time analytics dashboard.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redux'],
    category: 'fullstack',
    featured: true,
    status: 'completed',
    liveUrl: 'https://your-ecommerce.vercel.app',
    githubUrl: 'https://github.com/yves/ecommerce',
    gradient: 'from-blue-50 to-blue-100',
    // Structured data is much richer than what React had!
    highlights: [
      'Handles 10k+ products',
      'Real-time inventory tracking',
      'Stripe payment integration'
    ],
    year: 2024
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team workspaces.',
    techStack: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    featured: true,
    status: 'completed',
    liveUrl: 'https://your-taskapp.vercel.app',
    githubUrl: 'https://github.com/yves/taskapp',
    gradient: 'from-red-50 to-red-100',
    highlights: [
      'Real-time collaboration via WebSockets',
      'Drag-and-drop with react-beautiful-dnd',
      'Team workspace management'
    ],
    year: 2024
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'AI-powered content creation tool that helps marketers generate blog posts, social media content, and more.',
    techStack: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Prisma'],
    category: 'ai',
    featured: true,
    status: 'in-progress',
    liveUrl: null,
    githubUrl: 'https://github.com/yves/ai-content',
    gradient: 'from-green-50 to-green-100',
    highlights: [
      'GPT-4 powered content generation',
      'SEO optimization built-in',
      'Multi-format export (blog, social, email)'
    ],
    year: 2025
  }
];

// ============================================
// ROUTE 1: GET /projects
// Returns all projects (with optional filtering)
// ============================================
router.get('/', (req, res) => {
  // req.query contains URL parameters after "?"
  // Example: GET /projects?featured=true&category=fullstack
  const { featured, category, status } = req.query;

  let filteredProjects = [...projects]; // Copy array so we don't mutate original

  // Apply filters if query params exist
  if (featured === 'true') {
    filteredProjects = filteredProjects.filter(p => p.featured === true);
  }

  if (category) {
    filteredProjects = filteredProjects.filter(
      p => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (status) {
    filteredProjects = filteredProjects.filter(
      p => p.status.toLowerCase() === status.toLowerCase()
    );
  }

  // Always good practice: tell the client how many results came back
  res.status(200).json({
    success: true,
    count: filteredProjects.length,
    filters: { featured, category, status }, // Echo back what filters were applied
    data: filteredProjects
  });
});

// ============================================
// ROUTE 2: GET /projects/:id
// Returns a SINGLE project by its ID
// ============================================
router.get('/:id', (req, res) => {
  // req.params.id comes from the :id placeholder in the route path
  // IMPORTANT: params are always STRINGS — convert to number for comparison!
  const id = parseInt(req.params.id);

  // Validate that ID is actually a number
  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid ID',
      message: 'Project ID must be a number. Example: /projects/1'
    });
  }

  const project = projects.find(p => p.id === id);

  // Handle "not found" explicitly — don't just return null!
  if (!project) {
    return res.status(404).json({
      success: false,
      error: 'Project not found',
      message: `No project found with ID ${id}`,
      availableIds: projects.map(p => p.id) // Helpful hint for debugging
    });
  }

  res.status(200).json({
    success: true,
    data: project
  });
});

// ============================================
// ROUTE 3: GET /projects/category/:category
// Returns projects filtered by category
// ============================================
// ⚠️ ORDER MATTERS: This specific route must come BEFORE /:id
// Otherwise Express would match 'category' as an ID param!
// (Actually we defined /:id after, which is fine here, but be careful)

router.get('/category/:category', (req, res) => {
  const { category } = req.params;
  const categoryProjects = projects.filter(
    p => p.category.toLowerCase() === category.toLowerCase()
  );

  res.status(200).json({
    success: true,
    category,
    count: categoryProjects.length,
    data: categoryProjects
  });
});

// ============================================
// ROUTE 4: POST /projects (for later — adding projects via API)
// ============================================
// This would be used in an admin panel to add new projects
router.post('/', (req, res) => {
  const { title, description, techStack, category } = req.body;

  // Basic validation
  if (!title || !description) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      message: 'Title and description are required'
    });
  }

  const newProject = {
    id: projects.length + 1,     // In real app: DB auto-generates this
    title,
    description,
    techStack: techStack || [],
    category: category || 'other',
    featured: false,
    status: 'in-progress',
    liveUrl: null,
    githubUrl: null,
    highlights: [],
    year: new Date().getFullYear()
  };

  projects.push(newProject);     // In real app: INSERT INTO database

  res.status(201).json({         // 201 = Created (not 200!)
    success: true,
    message: 'Project created successfully',
    data: newProject
  });
});

module.exports = router;