import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Breakpoints
const isMobile = width < 480;
const isTablet = width >= 480 && width < 768;
const isSmallLaptop = width >= 768 && width < 1024;
const isMediumLaptop = width >= 1024 && width < 1366;
const isLargeScreen = width >= 1366;

const isWide = width > 800;
const PRIMARY = '#06b6d4';
const ACCENT = '#0891b2';
const BG = '#0f172a';

const maxContentWidth = 1200;

export default StyleSheet.create({
  container: {
    padding: isMobile ? 12 : isTablet ? 16 : isSmallLaptop ? 24 : 40,
    paddingTop: Platform.OS === 'web' ? 48 : 24,
    backgroundColor: BG,
    alignItems: 'center'
  },
  innerContainer: {
    width: '100%',
    maxWidth: maxContentWidth
  },
  topbar: {
    width: '100%',
    maxWidth: maxContentWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: isMobile ? 12 : isTablet ? 16 : 40
  },
  header: {
    marginBottom: 24,
    alignItems: 'center'
  },
  avatar: {
    width: isWide ? 140 : 96,
    height: isWide ? 140 : 96,
    borderRadius: 100,
    backgroundColor: '#1e293b',
    marginBottom: 12
  },
  name: {
    fontSize: isWide ? 34 : 22,
    fontWeight: '800',
    letterSpacing: 0.3,
    color: '#f8fafc'
  },
  subtitle: {
    color: '#94a3b8',
    marginTop: 6,
    fontSize: isWide ? 16 : 13
  },
  nav: {
    flexDirection: 'row',
    marginTop: 12
  },
  navLink: {
    marginHorizontal: 12,
    color: '#06b6d4',
    fontWeight: '600',
    fontSize: 15
  },
  section: {
    marginVertical: 16,
    padding: isMobile ? 14 : 18,
    borderRadius: 10,
    backgroundColor: '#1e293b',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
    width: '100%',
    maxWidth: maxContentWidth
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: '#f8fafc'
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: '#94a3b8'
  },
  projectsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  projectCard: {
    padding: 14,
    backgroundColor: '#1e293b',
    marginVertical: 8,
    borderRadius: 8,
    width: isMobile ? '100%' : isTablet ? '100%' : '48%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 2
  },
  projectTitle: {
    fontWeight: '700',
    marginBottom: 6,
    color: '#f8fafc'
  },
  cta: {
    marginTop: 12,
    backgroundColor: PRIMARY,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  ctaText: {
    color: '#0f172a',
    fontWeight: '700'
  },
  footer: {
    marginTop: 28,
    alignItems: 'center',
    padding: 12
  },
  footerText: {
    color: '#94a3b8'
  },
  logo: {
    fontWeight: '800',
    fontSize: 20,
    color: '#06b6d4'
  },
  logoContainer: {
    alignItems: 'center'
  },
  logoMain: {
    fontWeight: '900',
    fontSize: isMobile ? 32 : 42,
    color: '#06b6d4',
    letterSpacing: -2
  },
  logoSub: {
    fontSize: 10,
    color: '#06b6d4',
    letterSpacing: 2,
    marginTop: -6
  },
  topNavRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  /* HERO */
  hero: {
    width: '100%',
    maxWidth: maxContentWidth,
    minHeight: isMobile ? 300 : isTablet ? 360 : 480,
    flexDirection: isMobile || isTablet ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: isMobile ? 12 : isTablet ? 16 : 40
  },
  heroLeft: {
    flex: 1,
    paddingRight: isMobile || isTablet ? 0 : 40,
    paddingLeft: isMobile || isTablet ? 0 : 60,
    marginBottom: isMobile || isTablet ? 20 : 0
  },
  heroRight: {
    width: isMobile ? '100%' : isTablet ? '60%' : '40%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  greeting: {
    color: '#06b6d4',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    borderLeftWidth: 2,
    borderLeftColor: '#06b6d4',
    paddingLeft: 8
  },
  heroTitle: {
    fontSize: isMobile ? 24 : isTablet ? 28 : isSmallLaptop ? 36 : 44,
    fontWeight: '800',
    marginBottom: 12,
    color: '#f8fafc'
  },
  highlight: {
    color: '#06b6d4'
  },
  heroDesc: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 16,
    maxWidth: 720
  },
  heroButton: {
    backgroundColor: '#06b6d4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignSelf: 'flex-start'
  },
  heroButtonText: {
    color: '#0f172a',
    fontWeight: '700'
  },
  heroAvatar: {
    width: isMobile ? 160 : isTablet ? 200 : isSmallLaptop ? 220 : 280,
    height: isMobile ? 160 : isTablet ? 200 : isSmallLaptop ? 220 : 280,
    borderRadius: 9999,
    borderWidth: 4,
    borderColor: '#06b6d4'
  },
  socialLeft: {
    position: isMobile || isTablet ? 'relative' : 'absolute',
    left: isMobile || isTablet ? 0 : 40,
    top: isMobile || isTablet ? 0 : isSmallLaptop ? 80 : 100,
    flexDirection: isMobile || isTablet ? 'row' : 'column',
    alignItems: 'center',
    justifyContent: isMobile || isTablet ? 'center' : 'flex-start',
    marginTop: isMobile || isTablet ? 16 : 0,
    marginHorizontal: isMobile || isTablet ? 8 : 0
  },
  socialIcon: {
    width: 36,
    height: 36,
    backgroundColor: '#06b6d4',
    borderRadius: 8,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialIconText: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 14
  },
  emailRight: {
    position: isMobile || isTablet ? 'relative' : 'absolute',
    right: isMobile || isTablet ? 0 : -20,
    top: isMobile || isTablet ? 0 : isSmallLaptop ? 200 : 240,
    marginTop: isMobile || isTablet ? 12 : 0,
    alignItems: 'center'
  },
  emailText: {
    color: '#06b6d4',
    fontWeight: '600',
    fontSize: 14
  }
});
