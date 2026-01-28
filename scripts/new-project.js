#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve)
  })
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

async function main() {
  console.log('\n🎬 Create New Project\n')
  console.log('This will create a new project markdown file.\n')

  const title = await question('Project title: ')
  const client = await question('Client name: ')

  console.log('\nCategories: Commercial, Residential, Corporate')
  const category = await question('Category: ')

  const dateInput = await question('Date (YYYY-MM-DD, or press Enter for today): ')
  const date = dateInput || new Date().toISOString().split('T')[0]

  const featuredInput = await question('Featured project? (y/n): ')
  const featured = featuredInput.toLowerCase() === 'y'

  const excerpt = await question('Short description (1-2 sentences): ')

  const slug = slugify(title)
  const projectsDir = path.join(process.cwd(), 'content', 'projects')
  const filePath = path.join(projectsDir, `${slug}.md`)

  // Ensure directory exists
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true })
  }

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`\n❌ A project with slug "${slug}" already exists.`)
    rl.close()
    process.exit(1)
  }

  const content = `---
title: "${title}"
client: "${client}"
category: "${category}"
date: "${date}"
featured: ${featured}
thumbnail: "/images/projects/${slug}-thumb.jpg"
images:
  - "/images/projects/${slug}-1.jpg"
  - "/images/projects/${slug}-2.jpg"
video: ""
excerpt: "${excerpt}"
---

## Project Overview

[Add project overview here]

## Scope of Work

- [List major work items]
- [Equipment installed]
- [Special features]

## Technology Highlights

[Describe the key technology used]

## Results

[Describe the outcomes and client feedback]
`

  fs.writeFileSync(filePath, content)

  console.log(`\n✅ Project created successfully!`)
  console.log(`   File: content/projects/${slug}.md`)
  console.log(`\nNext steps:`)
  console.log(`1. Edit the markdown file to add full project details`)
  console.log(`2. Add images to public/images/projects/`)
  console.log(`3. Run 'npm run dev' to preview\n`)

  rl.close()
}

main().catch((err) => {
  console.error('Error:', err)
  rl.close()
  process.exit(1)
})
