# 🎨 Portfolio Customization Guide

Welcome to your personalized portfolio! This guide will help you customize and maintain your portfolio with ease.

## 📁 Project Structure

```
src/
├── app/
│   ├── config/
│   │   └── portfolio-config.ts    ← **Edit this file to update content**
│   ├── components/
│   │   ├── AnimatedSection.tsx    ← Reusable animation wrapper
│   │   ├── SkillCard.tsx          ← Skills display component
│   │   ├── ProjectCard.tsx        ← Project showcase component
│   │   ├── ExperienceCard.tsx     ← Work experience timeline
│   │   ├── TestimonialCard.tsx    ← Testimonials display
│   │   └── SocialLink.tsx         ← Social media links
│   └── App.tsx                    ← Main application (rarely needs changes)
├── imports/
│   ├── 028196B9-5780-4612-BB98-299524E94B2A.PNG  ← Your profile photo
│   └── Sanskriti-Resume_QA.pdf                   ← Your resume/CV
└── styles/
    └── theme.css                  ← Color theme and styling
```

---

## 🎯 How to Customize Your Portfolio

### 1. **Update Personal Information**

**File:** `src/app/config/portfolio-config.ts`

#### Change Your Name, Title, or Bio
```typescript
export const personalInfo = {
  name: 'Your Name Here',
  title: 'Your Professional Title',
  tagline: 'Your professional tagline',
  bio: `Your detailed bio...`,
  // ...
};
```

#### Update Contact Information
```typescript
contact: {
  email: 'your.email@example.com',
  phone: '+1234567890',
  location: 'Your City, Country',
  availability: 'Open to Opportunities'
}
```

#### Update Social Media Links
```typescript
social: {
  linkedin: 'https://linkedin.com/in/your-profile',
  github: 'https://github.com/your-username',
  recommendations: 'https://linkedin.com/in/your-profile/details/recommendations'
}
```

---

### 2. **Add or Edit Professional Roles (Hero Badges)**

```typescript
export const roles = [
  { title: 'Your Role 1', color: 'bg-white text-black', icon: '💻' },
  { title: 'Your Role 2', color: 'bg-blue-200 text-black', icon: '🚀' },
  // Add more roles here
];
```

**Available colors:**
- `bg-white text-black`
- `bg-blue-200 text-black`
- `bg-yellow-300 text-black`
- `bg-purple-400 text-white`
- `bg-pink-300 text-black`
- `bg-green-200 text-black`

---

### 3. **Update Skills**

```typescript
export const skills = {
  'Category Name': ['Skill 1', 'Skill 2', 'Skill 3'],
  'Frontend': ['React', 'Next.js', 'TypeScript'],
  'Backend': ['Node.js', 'Python', 'Django'],
  // Add or modify categories and skills
};
```

---

### 4. **Add or Edit Projects**

```typescript
export const projects = [
  {
    title: 'Project Name',
    subtitle: 'Category | Technology',
    description: 'Detailed project description...',
    tags: ['React', 'TypeScript', 'Node.js'],
    image: 'https://images.unsplash.com/photo-xxx',  // Or local path
    category: 'Type of Project'
  },
  // Add more projects...
];
```

**Finding Images:**
- Use Unsplash for free, high-quality images: https://unsplash.com
- Or add your own images to `src/imports/` and reference them as `/src/imports/your-image.jpg`

---

### 5. **Update Work Experience**

```typescript
export const experience = [
  {
    role: 'Your Job Title',
    company: 'Company Name',
    period: 'Month Year → Month Year',
    location: 'City - Country',
    logo: '🚀',  // Emoji or icon
    color: 'bg-gradient-to-br from-blue-100 to-indigo-100',
    highlights: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
      'Achievement or responsibility 3'
    ]
  },
  // Add more positions...
];
```

**Gradient Color Options:**
- `bg-gradient-to-br from-pink-100 to-purple-100`
- `bg-gradient-to-br from-blue-100 to-indigo-100`
- `bg-gradient-to-br from-green-100 to-teal-100`
- `bg-gradient-to-br from-yellow-100 to-orange-100`

---

### 6. **Add Certifications**

```typescript
export const certifications = [
  {
    name: 'Certification Name',
    issuer: 'Issuing Organization',
    year: '2024',
    icon: '🏆'  // Choose an emoji that represents the cert
  },
  // Add more certifications...
];
```

---

### 7. **Update Testimonials**

```typescript
export const testimonials = [
  {
    text: 'The testimonial text...',
    author: 'Person Name',
    role: 'Their Job Title, Company',
    rating: 5,  // 1-5 stars
    image: 'https://images.unsplash.com/photo-xxx'  // Profile photo URL
  },
  // Add more testimonials...
];
```

---

### 8. **Change Your Profile Photo**

1. **Replace the photo file:**
   - Add your new photo to `src/imports/`
   - Name it something memorable (e.g., `profile-photo.jpg`)

2. **Update the config:**
   ```typescript
   assets: {
     profilePhoto: '/src/imports/profile-photo.jpg',
     resume: '/src/imports/your-resume.pdf'
   }
   ```

---

### 9. **Update Your Resume/CV**

1. **Replace the PDF file:**
   - Add your latest resume to `src/imports/`
   - Keep it as a PDF for universal compatibility

2. **Update the config:**
   ```typescript
   assets: {
     profilePhoto: '/src/imports/028196B9-5780-4612-BB98-299524E94B2A.PNG',
     resume: '/src/imports/your-latest-resume.pdf'
   }
   ```

---

## 🎨 Changing Colors & Theme

**File:** `src/styles/theme.css`

### Primary Colors
```css
:root {
  --primary: #030213;           /* Main dark color */
  --secondary: #f3f3f5;          /* Light background */
  --accent: #e9ebef;             /* Accent color */
}
```

### Adding Custom Gradients
You can use Tailwind's gradient utilities in any component:
```html
className="bg-gradient-to-r from-blue-600 to-purple-600"
```

---

## 🚀 Advanced Customization

### Add New Sections

1. Create a new section in `App.tsx`:
```tsx
<section id="new-section" className="py-24 px-6 lg:px-12">
  <div className="max-w-7xl mx-auto">
    <AnimatedSection>
      <h2>Your New Section</h2>
      {/* Your content */}
    </AnimatedSection>
  </div>
</section>
```

2. Add it to the navigation:
```tsx
{['About', 'Skills', 'Projects', 'Your New Section', 'Contact'].map(...)}
```

### Modify Animations

**File:** `src/app/components/AnimatedSection.tsx`

Change animation direction:
```tsx
<AnimatedSection direction="left">  {/* Options: up, down, left, right */}
  {/* Content */}
</AnimatedSection>
```

Add delay:
```tsx
<AnimatedSection delay={0.3}>  {/* Delay in seconds */}
  {/* Content */}
</AnimatedSection>
```

---

## 📝 Blog Posts Section (Optional)

To activate the blog section:

1. **Uncomment in config:**
   ```typescript
   export const blogPosts = [
     {
       title: 'Your Article Title',
       excerpt: 'Brief description...',
       date: 'Month Year',
       readTime: 'X min read',
       tags: ['Tag1', 'Tag2'],
       image: 'https://image-url.com'
     }
   ];
   ```

2. **Add to App.tsx:**
   ```tsx
   import { blogPosts } from './config/portfolio-config';
   ```

---

## 🔧 Troubleshooting

### Profile Photo Not Showing?
- Check the file path in `portfolio-config.ts`
- Ensure the image is in `src/imports/`
- Use forward slashes: `/src/imports/photo.jpg`

### Resume Download Not Working?
- Verify the PDF is in `src/imports/`
- Check the file path in the config
- Make sure it's a valid PDF file

### Animations Not Working?
- Animations trigger on scroll
- Scroll down the page to see them
- They only play once (viewport: { once: true })

---

## 📱 Responsive Design

Your portfolio is fully responsive! It automatically adapts to:
- 📱 Mobile phones (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktops (> 1024px)

Test on different devices to ensure everything looks great!

---

## 🎉 Quick Tips

1. **Keep content concise:** Shorter descriptions are more impactful
2. **Use high-quality images:** They make a huge difference
3. **Update regularly:** Keep your projects and experience current
4. **Test on mobile:** Most visitors will view on phones
5. **Proofread everything:** Typos can hurt your professional image

---

## 💡 Need Help?

- All content is in `src/app/config/portfolio-config.ts`
- Components are reusable and documented
- The structure is designed to be beginner-friendly

**Remember:** You don't need to touch `App.tsx` for most changes. Just update the config file!

---

## 🌟 What's Included

✅ Smooth scroll animations  
✅ Responsive design  
✅ Contact form  
✅ Social media links  
✅ Downloadable resume  
✅ Project showcase  
✅ Skills display  
✅ Work experience timeline  
✅ Testimonials  
✅ Certifications  
✅ Achievements highlight  

---

