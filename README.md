# 🎓 SkillSphere — Online Learning Platform

A modern online learning platform where users can explore courses, watch lesson previews, and enroll in skill-based programs like **Web Development, Design, Marketing, Data Science**, and more.

**Live URL:** _add your deployed link here after hosting (e.g. Vercel)_
**GitHub Repo:** _add your repo link here_

---

## ✨ Purpose

SkillSphere was built to demonstrate a full-featured course marketplace experience with authentication, a protected course-details flow, profile management, and a clean Next.js App Router structure — covering everything in the **category-A8-Orange** assignment spec.

---

## 🚀 Key Features

- **Persistent Navbar & Footer** with route-based rendering via the Next.js App Router
- **Hero slider** with 3 auto-playing slides ("Upgrade Your Skills Today 🚀", etc.)
- **Popular Courses** — top 3 highest-rated courses, pulled dynamically from JSON data
- **Learning Tips** section — study techniques & time-management tips
- **Top Instructors** section — 4 instructor cards with bio, experience, and students taught
- **Trending Courses / New Releases** — auto-playing carousel of trending & newly added courses
- **All Courses page** with a **live search by title** and category filter pills
- **🔒 Protected Course Details page** — redirects unauthenticated users to `/login`, then sends them back to the exact course they wanted after logging in. Shows full course info + a static curriculum list, "What You'll Learn", requirements, and instructor bio.
- **Authentication** (Better Auth + MongoDB):
  - Email/password Login & Register
  - Google social login
  - Login → redirects to Home (or back to the protected page that sent them to login)
  - Register → redirects to Login
  - Toast error messages on failure
- **My Profile page** — shows the logged-in user's data, tabs for courses/achievements/account
- **Update Information page** (`/profile/update`) — update name & profile image via Better Auth's `updateUser`
- **Toast notifications** throughout (login, logout, register, enroll, profile update, errors)
- **Loading states** on every route via Next.js `loading.jsx`
- **Custom 404 Not Found page**
- **Light / dark mode** toggle
- **Fully responsive** — mobile, tablet, and desktop
- **Animations** via `animate.css` on the hero section

---

## 🛠️ Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS**
- **HeroUI** (component library)
- **Better Auth** (authentication, MongoDB adapter, Google OAuth)

---

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `next`, `react`, `react-dom` | Core framework |
| `tailwindcss`, `@tailwindcss/postcss` | Styling |
| `@heroui/react`, `@heroui/styles` | UI components (Button, Card, Avatar, Dropdown, Switch, Spinner...) |
| `better-auth`, `@better-auth/mongo-adapter`, `mongodb` | Authentication & database |
| `next-themes` | Light/dark mode |
| `react-toastify` | Toast notifications |
| `lucide-react`, `react-icons` | Icons |
| `embla-carousel-react`, `embla-carousel-autoplay` | Hero slider & Trending Courses carousel |
| `animate.css` | Entrance animations on the hero section |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.js                  # Root <html>/<body>, fonts, theme + toast providers
│   ├── not-found.jsx               # Global 404 page
│   ├── api/auth/[...all]/route.js  # Better Auth API handler
│   └── (commonLayout)/             # Persistent Navbar + Footer wrapper
│       ├── page.js                 # Home
│       ├── courses/                # All Courses (+ [id] details)
│       ├── (auth)/login, register
│       ├── profile/ (+ update/)
│       ├── terms/, privacy/
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── auth/          # LoginForm, RegisterForm
│   └── modules/
│       ├── Home/        # Banner, PopularCourses, LearningTips, TopInstructors, TrendingCourses
│       ├── Courses/      # CoursesHeading, CoursesGrid, CoursesExplorer (search + filter)
│       ├── SingleCourse/ # CourseImage, CourseInfo, CourseCurriculum, CourseAdditionalInfo, CourseDetails
│       └── Shared/      # CourseCard, Loader
├── lib/                # auth.js, auth-client.js, ThemeToggler, toast-utils
└── providers/          # NextThemeProvider
```

---

## ⚙️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env.local` and fill in your own values:

```bash
cp .env.example .env.local
```

You'll need:
- A free **MongoDB** connection string ([MongoDB Atlas](https://www.mongodb.com/atlas))
- A **Better Auth secret** (`openssl rand -base64 32`)
- **Google OAuth** credentials ([Google Cloud Console](https://console.cloud.google.com/apis/credentials)) for "Continue with Google"

### 3. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### 4. Deploy

Deploy to **Vercel** (recommended) or any Node host that supports Next.js. Because this app uses the Next.js App Router (server-rendered routing, not a client-only SPA), reloading any route — including `/courses/3` or `/profile` — is handled server-side and will never throw a 404 on refresh, as long as your hosting platform runs the app as a Next.js server (Vercel does this automatically).

Remember to add the same environment variables to your hosting provider's dashboard, and update `NEXT_PUBLIC_BASE_URL` and `BETTER_AUTH_URL` to your production URL.

---

## 📝 Notes

- Email verification and "forgot password" flows are intentionally **not** implemented, per the assignment spec.
- Course images use [picsum.photos](https://picsum.photos) and instructor avatars use [pravatar.cc](https://pravatar.cc) as free placeholder image services — swap these out in `public/data.json` / `public/instructors.json` for real course media.
- Enrollment is a front-end demo action (toast + UI state) — no payment flow is included, since the spec doesn't require monetization.
- Server Components read `public/data.json` and `public/instructors.json` directly from disk (`src/lib/data.js`) rather than fetching them over HTTP, so the app works even before `NEXT_PUBLIC_BASE_URL` is configured. The Trending Courses carousel still fetches `/data.json` client-side with a relative path, which works in any browser without configuration.
