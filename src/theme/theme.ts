import { extendTheme} from "@chakra-ui/react";
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/poppins/400.css'
export default extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    brand: {
      primary: "#48FE9D",
      secondary: "#636CBB",
      tertiary: "#9b9c9e",
      dark:"#1a202c",
      light:"#ffffff"
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "light",
      },
      size: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      variants: {
        santander: {
          bg: "red",
          color: "grey",
        },
      },
    },
  },
});
