import { Typography } from "@/core/components/DataDisplay";
import useFooterStyles from "./useFooterStyles";
import { Container } from "@/core/components/Layout";
import { Box } from "@mui/material";
import { flexbox } from "@/core/utils/helpers";

const Footer = () => {
  const style = useFooterStyles();

  return (
    <Container fullWidth component="footer" sx={{ container: style?.mainContainer, content: {} }}>
      <Box {...flexbox.rowCenterBetween} gap={4}>
        <Box width="70%">
          <Box {...flexbox.rowCenter} gap={1}>
            <Typography text="S" variant="body1" sx={{ fontSize: 48, fontWeight: 900 }} />
            <Typography text="BalayIsabel" sx={{ fontSize: 24, fontWeight: 400 }} />
          </Box>
          <Box>
            <Typography
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, tenetur deleniti! Quia, accusamus. Facilis, officia itaque neque illo maiores dolorum enim quo quia quae quam, harum sapiente repellendus deserunt atque?"
              sx={{ fontSize: 12, fontWeight: 400 }}
            />
          </Box>
        </Box>
        <Box width="30%">
          <Box {...flexbox.rowCenter} gap={1}>
            <Typography text="Title 1" sx={{ fontSize: 24, fontWeight: 400 }} />
          </Box>
          <Box>
            <Typography
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, tenetur deleniti! Quia, accusamus. Facilis, officia itaque neque illo"
              sx={{ fontSize: 12, fontWeight: 400 }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
