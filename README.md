# 📚 Bookworm – React Native Social Book App

## 🚀 Overview

**Bookworm** is a social mobile application built with **React Native** and **Expo**, designed for book lovers.  
The app enables users to **discover, share, and rate books**, create a personal collection, and explore recommendations from the community.

It runs on **Android** and **iOS**, offering a smooth, responsive, and visually appealing reading experience.

---

## 📦 Download

👉 [Download the latest Android APK Release](https://github.com/loaymady/bookworm-react-native-app/releases)

<div align="center">
  <img src="./bookworm-app-demo.webp" alt="Bookworm App" width="300"/>
</div>

---

## ✨ Features

- **🔐 User Authentication**: Secure login and registration system with persistent authentication
- **📚 Book Sharing**: Users can share book recommendations with titles, descriptions, ratings, and images
- **🌐 Social Feed**: Browse through book recommendations from the community
- **👤 Personal Profile**: View and manage your own book recommendations
- **📸 Image Upload**: Add book cover images using device camera or gallery
- **⭐ Rating System**: Rate books from 1-5 stars
- **🔄 Pull-to-Refresh**: Refresh feeds and profile data
- **📱 Responsive Design**: Optimized for both iOS and Android devices

## 🛠️ Technologies Used

### Frontend

- **React Native**: 0.79.5
- **Expo**: ~53.0.17
- **Expo Router**: ~5.1.3 (File-based routing)
- **TypeScript**: ~5.8.3
- **Zustand**: ^5.0.6 (State management)
- **Expo Image**: ~2.3.2 (Optimized image component)
- **React Native Reanimated**: ~3.17.4 (Animations)
- **AsyncStorage**: ^2.2.0 (Local storage)

### Navigation

- **@react-navigation/native**: ^7.1.6
- **@react-navigation/bottom-tabs**: ^7.3.10
- **Expo Router**: File-based navigation system

### UI & Styling

- **@expo/vector-icons**: ^14.1.0 (Ionicons)
- **Custom styling**: TypeScript style objects
- **Color theming**: Centralized color system with multiple themes (Ocean, Forest, Retro, Blossom)

### Device Features

- **Expo Image Picker**: ~16.1.4 (Camera and gallery access)
- **Expo File System**: ~18.1.11 (File operations)
- **Expo Haptics**: ~14.1.4 (Touch feedback)
- **Safe Area Context**: Handle device safe areas

---

## 📂 Project Structure

```
bookworm-app/
├── app/                          # Main application screens
│   ├── _layout.tsx              # Root layout with authentication routing
│   ├── (auth)/                  # Authentication screens
│   │   ├── _layout.tsx          # Auth stack layout
│   │   ├── index.tsx            # Login screen
│   │   └── signup.tsx           # Registration screen
│   └── (tabs)/                  # Tab navigation screens
│       ├── _layout.tsx          # Tab navigation layout
│       ├── index.tsx            # Home feed (book recommendations)
│       ├── create.tsx           # Create new book recommendation
│       └── profile.tsx          # User profile and personal books
├── components/                   # Reusable components
│   ├── Loader.tsx               # Loading indicator component
│   ├── LogoutButton.tsx         # Logout functionality
│   └── ProfileHeader.tsx        # User profile information display
├── store/                       # State management
│   └── authStore.ts             # Zustand store for authentication state
├── constants/                   # App constants
│   └── colors.ts                # App color themes and styling constants
├── lib/                         # Utility functions
│   └── utils.ts                 # Helper functions
├── assets/                      # Static assets
│   ├── fonts/                   # Custom fonts (JetBrains Mono)
│   ├── images/                  # App icons and images
│   └── styles/                  # Component-specific styles
├── android/                     # Android-specific configuration
├── package.json                 # Dependencies and scripts
├── app.json                     # Expo configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## 🔧 Key Screens & Functionality

### 🔐 Authentication Flow

- **Login Screen**: Email/password authentication with form validation
- **Signup Screen**: User registration with username, email, and password
- **Protected Routes**: Automatic navigation based on authentication state

### 📱 Main App Flow

- **Home Feed**: Displays all book recommendations from the community with infinite scroll and pull-to-refresh
- **Create Recommendation**: Form to add new book recommendations with image upload, title, caption, and rating
- **Profile**: User's personal recommendations with delete functionality and profile information

## 🗄️ State Management

The app uses **Zustand** for state management with the following stores:

### Auth Store (`authStore.ts`)

- User authentication state (user, token)
- Login/logout functionality
- Registration flow
- Persistent authentication with AsyncStorage
- Loading states for auth operations

## 🌐 API Integration

The app communicates with a backend API for:

- User authentication (login/register)
- Book CRUD operations (create, read, delete)
- User profile management
- Image upload and storage

API endpoints are configured through environment variables (`EXPO_PUBLIC_BACKEND_API_URL`).

## 🎨 Styling & Theming

### Color System

Multiple theme options available:

- **🌊 Ocean Theme** (default): Blue-based professional theme
- **🌲 Forest Theme**: Green nature-inspired theme
- **🍂 Retro Theme**: Warm earth-tone theme
- **🌸 Blossom Theme**: Pink/purple feminine theme

### Typography

- Primary font: **JetBrains Mono Medium**
- Responsive text sizing
- Consistent text hierarchy

## 📱 Platform Support

- **iOS**: Full support with iOS-specific optimizations
- **Android**: Full support with Material Design elements
- **Web**: Expo Web support for development and testing

## 🛠️ Development Features

### ⚡ Hot Reloading

- Expo development server with fast refresh
- Metro bundler for efficient builds

### 🔒 TypeScript

- Full TypeScript support for type safety
- Defined interfaces for API responses and component props

### 🚨 Error Handling

- Comprehensive error handling for network requests
- User-friendly error messages and alerts
- Loading states for better UX

## ⚡ Performance Optimizations

- **Expo Image**: Optimized image loading and caching
- **FlatList**: Efficient rendering for large lists
- **AsyncStorage**: Persistent local storage
- **Reanimated**: Smooth animations with native driver

## 🏗️ Installation & Setup

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **Expo CLI** (install with `npm install -g @expo/cli`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development - macOS only)

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/loaymady/bookworm-react-native-app.git
   cd bookworm-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   EXPO_PUBLIC_BACKEND_API_URL=your_backend_api_url
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

5. **Run on specific platforms**

   ```bash
   # iOS (requires Xcode on macOS)
   npm run ios

   # Android (requires Android Studio)
   npm run android

   # Web
   npm run web
   ```

## 📱 Available Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm start`       | Start Expo development server  |
| `npm run android` | Run on Android device/emulator |
| `npm run ios`     | Run on iOS device/simulator    |
| `npm run web`     | Run in web browser             |
| `npm run lint`    | Run ESLint for code quality    |
