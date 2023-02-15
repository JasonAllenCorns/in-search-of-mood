import { Avatar } from '@mui/material';
// import { createTheme } from '@mui/material';
// import { ThemeProvider, styled } from '@mui/material/styles';

// const [boxWidth, boxHeight] = ['160px', '160px'];
// const StyledArtistAvatar = styled(Avatar)(() => ({
//   height: boxHeight,
//   width: boxWidth,
//   boxShadow: '5px 5px 17px -1px rgba(46, 46, 46, .8)',
//   marginLeft: 'auto',
//   marginRight: 'auto',
// }));
// const darkThemeArtistCardTheme = createTheme({ palette: { mode: 'dark' } });

const ArtistAvatar = ({ src, name = 'Unknown Artist' }) => {
  return (
    <Avatar
      alt={name}
      src={src}
      sx={{
        width: '160px',
        height: '160px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '8px',
      }}
    />
  );
  // return (
  //   <ThemeProvider theme={darkThemeArtistCardTheme}>
  //     <StyledArtistAvatar alt="aslfidsjals" src={src} />
  //   </ThemeProvider>
  // );
};

export default ArtistAvatar;
