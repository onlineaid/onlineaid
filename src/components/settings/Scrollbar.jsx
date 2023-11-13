import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflowY: 'scroll',
}));

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
    // Adjust the width for the vertical scrollbar
    width: 6, // Set your desired width
  },
  '& .simplebar-track.simplebar-vertical': {
    // Adjust the width for the vertical track
    width: 4, // Set your desired width
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
  "& .simplebar-placeholder": {
    height: '0 !important',
  },
  // Add your custom styles here:
  '& .my-custom-class': {
    // Your custom styles
    backgroundColor: 'red',
    // Add more styles as needed
  },
}));

// ----------------------------------------------------------------------

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default function Scrollbar({ children, sx, ...other }) {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <RootStyle>
      <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
}

export { SimpleBarStyle };
