# Countries Information App

A modern, responsive web application that provides detailed information about countries, built with Next.js 14, TypeScript, and Tailwind CSS. This application showcases country information including borders and population data visualization.

## 🌟 Features

- Browse available countries with an elegant grid layout
- View detailed country information including:
  - Official and common names
  - Regional information
  - Country flag
  - Border countries with interactive navigation
  - Historical population data visualization
- Responsive design that works on all devices
- Dark mode support
- Smooth animations and transitions
- Type-safe implementation

## 🛠️ Tech Stack

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts for data visualization

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Backend service running on port 3001 (see backend repository)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory with the following content:
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001/api
NEXT_PUBLIC_API_TIMEOUT=30000
```
4. Start the development server:
```
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   └── country/
│       └── [code]/        # Dynamic country pages
├── components/            # React components
│   ├── countries/        # Country-specific components
│   └── pages/            # Page-level components
├── lib/                  # Utilities and hooks
│   ├── api/             # API configuration and client
│   ├── hooks/           # Custom React hooks
│   └── types/           # TypeScript types
└── public/              # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## ⚙️ Environment Variables

|           Variable         |   Description   | Default |
| :------------------------: |:---------------:| :-------:|
| NEXT_PUBLIC_BACKEND_URL    | Backend API URL | `http://localhost:3001/api` |
| NEXT_PUBLIC_API_TIMEOUT    | API  request timeout in milliseconds | 30000





## 🌐 API Integration
The frontend communicates with two main API endpoints:

1. Get Available Countries:
- Endpoint: `GET /api/countries`
- Returns a list of all available countries


2. Get Country Details:

- Endpoint: `GET /api/countries/:code`
- Returns detailed information about a specific country including:
    - Common and official names
    - Border countries
    - Population data
    - Flag URL

## 🎨 Design Features

- Modern, clean UI with attention to detail
- Smooth animations and transitions using Framer Motion
- Responsive grid layout for optimal viewing on all devices
- Interactive data visualization with Recharts
- Dark mode support with Tailwind CSS

## ⚡ Performance Optimizations

- Server and Client components optimization
- Image optimization with Next.js Image component
- Lazy loading and code splitting
- TypeScript for type safety
- Efficient state management with React hooks

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
