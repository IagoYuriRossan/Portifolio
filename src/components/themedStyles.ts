import { StyleSheet, Platform, Dimensions } from 'react-native';
import { ThemeColors } from '../types';

const { width } = Dimensions.get('window');

// Breakpoints
const isMobile = width < 480;
const isTablet = width >= 480 && width < 768;
const isSmallLaptop = width >= 768 && width < 1024;
const isMediumLaptop = width >= 1024 && width < 1366;
const isLargeScreen = width >= 1366;

const isWide = width > 800;
const maxContentWidth = 1200;

export const getStyles = (theme: ThemeColors) => StyleSheet.create({
  container: {
    padding: isMobile ? 12 : isTablet ? 16 : isSmallLaptop ? 24 : 40,
    paddingTop: Platform.OS === 'web' ? 48 : 24,
    backgroundColor: theme.bg,
    alignItems: 'center',
    overflow: 'hidden' as any
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
    paddingHorizontal: isMobile ? 12 : isTablet ? 16 : 40,
    position: 'relative',
    zIndex: 100
  },
  header: {
    marginBottom: 24,
    alignItems: 'center'
  },
  avatar: {
    width: isWide ? 140 : 96,
    height: isWide ? 140 : 96,
    borderRadius: 100,
    backgroundColor: theme.card,
    marginBottom: 12
  },
  name: {
    fontSize: isWide ? 34 : 22,
    fontWeight: '800',
    letterSpacing: 0.3,
    color: theme.text
  },
  subtitle: {
    color: theme.textSecondary,
    marginTop: 6,
    fontSize: isWide ? 16 : 13
  },
  nav: {
    flexDirection: 'row',
    marginTop: 12
  },
  navLink: {
    marginHorizontal: 12,
    color: theme.primary,
    fontWeight: '600',
    fontSize: 15
  },
  section: {
    marginVertical: 16,
    padding: isMobile ? 14 : 18,
    borderRadius: 10,
    backgroundColor: theme.card,
    shadowColor: '#000',
    shadowOpacity: theme.mode === 'dark' ? 0.2 : 0.08,
    shadowRadius: 8,
    elevation: 2,
    width: '100%',
    maxWidth: maxContentWidth
  },
  sectionTitle: {
    fontSize: isMobile ? 22 : 26,
    fontWeight: '700',
    marginBottom: isMobile ? 20 : 28,
    color: theme.text
  },
  paragraph: {
    fontSize: isMobile ? 16 : 17,
    lineHeight: isMobile ? 26 : 28,
    color: theme.textSecondary,
    marginBottom: isMobile ? 12 : 16
  },
  projectsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  projectCard: {
    padding: 18,
    backgroundColor: theme.projectCard,
    marginVertical: 12,
    borderRadius: 8,
    width: isMobile ? '100%' : isTablet ? '100%' : '48%',
    shadowColor: '#000',
    shadowOpacity: theme.mode === 'dark' ? 0.2 : 0.08,
    shadowRadius: 6,
    elevation: 2
  },
  projectTitle: {
    fontWeight: '700',
    fontSize: isMobile ? 17 : 18,
    marginBottom: 10,
    color: theme.text
  },
  cta: {
    marginTop: 12,
    backgroundColor: theme.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  ctaText: {
    color: theme.buttonText,
    fontWeight: '700'
  },
  footer: {
    marginTop: 28,
    alignItems: 'center',
    padding: 12
  },
  footerText: {
    color: theme.textSecondary
  },
  logo: {
    fontWeight: '800',
    fontSize: 20,
    color: theme.primary
  },
  logoContainer: {
    alignItems: 'center'
  },
  logoMain: {
    fontWeight: '900',
    fontSize: isMobile ? 32 : 42,
    color: theme.primary,
    letterSpacing: -2
  },
  logoSub: {
    fontSize: 10,
    color: theme.primary,
    letterSpacing: 2,
    marginTop: -6
  },
  topNavRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  themeToggle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
    borderWidth: 1,
    borderColor: theme.border
  },
  themeToggleText: {
    fontSize: 18
  },
  
  /* MOBILE MENU */
  mobileHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  hamburger: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: theme.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    borderWidth: 1,
    borderColor: theme.border
  },
  hamburgerText: {
    fontSize: 22,
    color: theme.primary
  },
  mobileMenu: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    backgroundColor: theme.card,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    zIndex: 100
  },
  mobileMenuItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.border
  },
  mobileMenuText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    textAlign: 'center'
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
    color: theme.primary,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    borderLeftWidth: 2,
    borderLeftColor: theme.primary,
    paddingLeft: 8
  },
  heroTitle: {
    fontSize: isMobile ? 24 : isTablet ? 28 : isSmallLaptop ? 36 : 44,
    fontWeight: '800',
    marginBottom: 12,
    color: theme.text
  },
  highlight: {
    color: theme.primary,
    marginHorizontal: 12
  },
  heroDesc: {
    fontSize: 16,
    color: theme.textSecondary,
    marginBottom: 16,
    maxWidth: 720
  },
  heroButton: {
    backgroundColor: theme.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignSelf: 'flex-start',
    marginTop: isMobile ? 16 : 24,
    marginBottom: isMobile ? 20 : 28
  },
  heroButtonText: {
    color: theme.buttonText,
    fontWeight: '700'
  },
  heroAvatar: {
    width: isMobile ? 160 : isTablet ? 200 : isSmallLaptop ? 220 : 280,
    height: isMobile ? 160 : isTablet ? 200 : isSmallLaptop ? 220 : 280,
    borderRadius: 9999,
    borderWidth: 4,
    borderColor: theme.avatarBorder,
    objectFit: 'cover',
    objectPosition: 'center 15%'
  } as any,
  socialLeft: {
    position: isMobile || isTablet ? 'relative' : 'absolute',
    left: isMobile || isTablet ? 0 : 40,
    top: isMobile || isTablet ? 0 : isSmallLaptop ? 80 : 100,
    flexDirection: isMobile || isTablet ? 'row' : 'column',
    alignItems: 'center',
    justifyContent: isMobile || isTablet ? 'center' : 'flex-start',
    marginTop: isMobile || isTablet ? 16 : 0,
    marginHorizontal: isMobile || isTablet ? 8 : 0
  } as any,
  socialIcon: {
    width: 36,
    height: 36,
    backgroundColor: theme.primary,
    borderRadius: 8,
    marginVertical: 6,
    marginHorizontal: isMobile || isTablet ? 8 : 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialIconText: {
    color: theme.buttonText,
    fontWeight: '700',
    fontSize: 14
  },
  emailRight: {
    position: isMobile || isTablet ? 'relative' : 'absolute',
    right: isMobile || isTablet ? 0 : -20,
    top: isMobile || isTablet ? 0 : isSmallLaptop ? 200 : 240,
    marginTop: isMobile || isTablet ? 12 : 0,
    alignItems: 'center'
  } as any,
  emailText: {
    color: theme.primary,
    fontWeight: '600',
    fontSize: 14,
    marginTop: 12,
    textAlign: 'center'
  },
  
  // Estilos específicos para experiências
  expRole: {
    fontWeight: '700',
    fontSize: isMobile ? 16 : 17,
    color: theme.text,
    marginBottom: 4
  },
  expPeriod: {
    color: theme.primary,
    fontSize: isMobile ? 14 : 15,
    marginBottom: 8
  }
});
