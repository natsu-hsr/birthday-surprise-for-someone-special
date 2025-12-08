import {createTheme} from '@mui/material/styles';
import {COLORS} from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      light: COLORS.primaryLight,
      main: COLORS.primaryMain,
      dark: COLORS.primaryDark,
      contrastText: COLORS.white,
    },
    background: {
      // default: COLORS.gray100,
      paper: COLORS.white,
    },
    text: {
      primary: COLORS.gray800,
    },
  },

  shape: {
    borderRadius: 16, // как на макете
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          padding: '12px 28px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          borderRadius: 28,
          boxShadow: '0px 6px 20px rgba(255, 79, 122, 0.35)',
          background: `linear-gradient(135deg, ${COLORS.primaryLight} 0%, ${COLORS.primaryMain} 100%)`,
          transition: '0.2s ease',

          '&:hover': {
            boxShadow: '0px 8px 26px rgba(255, 79, 122, 0.45)',
            transform: 'translateY(-1px)',
            background: `linear-gradient(135deg, ${COLORS.primaryMain} 0%, ${COLORS.primaryDark} 100%)`,
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },

    // MuiDialog: {
    //   styleOverrides: {
    //     paper: {
    //       // borderRadius: 24,
    //       // padding: '32px 40px',
    //       // boxShadow:
    //       //   '0px 8px 24px rgba(0, 0, 0, 0.15), 0px 4px 16px rgba(0, 0, 0, 0.1)',
    //     },
    //   },
    // },

    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.backdrop,
          backdropFilter: 'blur(6px)',
        },
      },
    },
  },
});