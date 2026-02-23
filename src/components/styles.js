import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isWide = width > 800;
const PRIMARY = '#b91c1c';
const BG = '#f5f0eb';

export default StyleSheet.create({
  container: {
    padding: isWide ? 40 : 20,
    paddingTop: Platform.OS === 'web' ? 48 : 24,
    backgroundColor: BG,
    alignItems: 'stretch'
  },
  topbar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: isWide ? 40 : 16
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
    padding: 18,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2
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
    width: isWide ? '48%' : '100%',
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
    fontSize: 42,
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
    minHeight: isWide ? 420 : 360,
    flexDirection: isWide ? 'row' : 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: isWide ? 40 : 0
  },
  heroLeft: {
    flex: 1,
    paddingRight: isWide ? 40 : 0
  },
  heroRight: {
    width: isWide ? '40%' : '100%',
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
    fontSize: isWide ? 44 : 28,
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
    width: isWide ? 260 : 180,
    height: isWide ? 260 : 180,
    borderRadius: 9999,
    borderWidth: 6,
    borderColor: '#fff'
  },
  socialLeft: {
    position: 'absolute',
    left: 12,
    top: isWide ? 180 : 320,
    flexDirection: 'column',
    alignItems: 'center'
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
    position: 'absolute',
    right: 12,
    top: isWide ? 220 : 420,
    transform: [{ rotate: '90deg' }]
  },
  emailText: {
    color: '#b91c1c',
    fontWeight: '600'
  }
});
