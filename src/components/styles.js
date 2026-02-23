import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Breakpoints para diferentes tamanhos de tela
const isMobile = width < 480;
const isTablet = width >= 480 && width < 768;
const isSmallLaptop = width >= 768 && width < 1024;  // 15"
const isMediumLaptop = width >= 1024 && width < 1366; // 15.6", 16"
const isLargeScreen = width >= 1366;  // 19.5", 21.5"+

const isWide = width > 800;
const PRIMARY = '#b91c1c';
const BG = '#f5f0eb';

// Largura máxima do conteúdo para telas grandes
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
    backgroundColor: '#e6e9ef',
    marginBottom: 12
  },
  name: {
    fontSize: isWide ? 34 : 22,
    fontWeight: '800',
    letterSpacing: 0.3
  },
  subtitle: {
    color: '#4b5563',
    marginTop: 6,
    fontSize: isWide ? 16 : 13
  },
  nav: {
    flexDirection: 'row',
    marginTop: 12
  },
  navLink: {
    marginHorizontal: 12,
    color: '#b91c1c',
    fontWeight: '600',
    fontSize: 15
  },
  section: {
    marginVertical: 16,
    padding: isMobile ? 14 : 18,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
    width: '100%',
    maxWidth: maxContentWidth
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: '#0f172a'
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: '#334155'
  },
  projectsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  projectCard: {
    padding: 14,
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 8,
    width: isMobile ? '100%' : isTablet ? '100%' : '48%',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2
  },
  projectTitle: {
    fontWeight: '700',
    marginBottom: 6,
    color: '#0f172a'
  },
  cta: {
    marginTop: 12,
    backgroundColor: PRIMARY,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  ctaText: {
    color: '#fff',
    fontWeight: '700'
  },
  footer: {
    marginTop: 28,
    alignItems: 'center',
    padding: 12
  },
  footerText: {
    color: '#64748b'
  },
  logo: {
    fontWeight: '800',
    fontSize: 20,
    color: '#b91c1c'
  },
  logoContainer: {
    alignItems: 'center'
  },
  logoMain: {
    fontWeight: '900',
    fontSize: isMobile ? 32 : 42,
    color: '#b91c1c',
    letterSpacing: -2
  },
  logoSub: {
    fontSize: 10,
    color: '#b91c1c',
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
    marginBottom: isMobile || isTablet ? 20 : 0
  },
  heroRight: {
    width: isMobile ? '100%' : isTablet ? '60%' : '40%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  greeting: {
    color: '#b91c1c',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    borderLeftWidth: 2,
    borderLeftColor: '#b91c1c',
    paddingLeft: 8
  },
  heroTitle: {
    fontSize: isMobile ? 24 : isTablet ? 28 : isSmallLaptop ? 36 : 44,
    fontWeight: '800',
    marginBottom: 12,
    color: '#0f172a'
  },
  highlight: {
    color: '#b91c1c'
  },
  heroDesc: {
    fontSize: 16,
    color: '#334155',
    marginBottom: 16,
    maxWidth: 720
  },
  heroButton: {
    backgroundColor: '#b91c1c',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignSelf: 'flex-start'
  },
  heroButtonText: {
    color: '#fff',
    fontWeight: '700'
  },
  heroAvatar: {
    width: isMobile ? 160 : isTablet ? 200 : isSmallLaptop ? 220 : 280,
    height: isMobile ? 160 : isTablet ? 200 : isSmallLaptop ? 220 : 280,
    borderRadius: 9999,
    borderWidth: 6,
    borderColor: '#fff'
  },
  socialLeft: {
    position: isMobile || isTablet ? 'relative' : 'absolute',
    left: isMobile || isTablet ? 0 : 12,
    top: isMobile || isTablet ? 0 : isSmallLaptop ? 160 : 180,
    flexDirection: isMobile || isTablet ? 'row' : 'column',
    alignItems: 'center',
    justifyContent: isMobile || isTablet ? 'center' : 'flex-start',
    marginTop: isMobile || isTablet ? 16 : 0
  },
  socialIcon: {
    width: 36,
    height: 36,
    backgroundColor: '#b91c1c',
    borderRadius: 8,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialIconText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14
  },
  emailRight: {
    position: isMobile || isTablet ? 'relative' : 'absolute',
    right: isMobile || isTablet ? 0 : 12,
    top: isMobile || isTablet ? 0 : isSmallLaptop ? 200 : 220,
    transform: isMobile || isTablet ? [] : [{ rotate: '90deg' }],
    marginTop: isMobile || isTablet ? 12 : 0,
    alignItems: 'center'
  },
  emailText: {
    color: '#b91c1c',
    fontWeight: '600'
  }
});
