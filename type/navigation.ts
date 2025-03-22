
type RootStackParamList = {
    SplashScreen: undefined;
    OnBoarding: undefined;
    Home: undefined;
    Login: undefined;
    GetStarted: undefined;
    BioData : undefined;
    Profile: undefined;
    Learning: undefined;
    Quest: undefined;
    SubjectDetail: { subject: { id: string; name: string; icon: any; topics: { id: string; name: string; questions: string[]; }[]; }; };
  };