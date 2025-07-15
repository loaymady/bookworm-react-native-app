import COLORS from "@/constants/colors";
import { useAuthStore } from "@/store/authStore";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const router = useRouter();
  const segments = useSegments();

  const { checkAuth, user, token, isCheckingAuth } = useAuthStore();

  const [fontsLoaded] = useFonts({
    "JetBrainsMono-Medium": require("../assets/fonts/JetBrainsMono-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  useEffect(() => {
    checkAuth();
  }, []);

  // handle navigation based on the auth state
  useEffect(() => {
    // Don't navigate while still checking auth or if fonts aren't loaded
    if (isCheckingAuth || !fontsLoaded) return;

    const inAuthScreen = segments[0] === "(auth)";
    const isSignedIn = user && token;

    if (!isSignedIn && !inAuthScreen) {
      router.replace("/(auth)");
    } else if (isSignedIn && inAuthScreen) {
      router.replace("/(tabs)" as any);
    }
  }, [user, token, segments, isCheckingAuth, fontsLoaded]);

  // Don't render navigation until auth check is complete and fonts are loaded
  if (isCheckingAuth || !fontsLoaded) {
    return null;
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: COLORS.background }}
          onLayout={onLayoutRootView}
        >
          <RootNavigation />
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="dark" />
    </>
  );
};

const RootNavigation = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
};

export default App;
