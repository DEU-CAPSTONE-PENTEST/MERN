import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  // Aktif olan linklerin temalarını değiştirmek için kullanılır
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        {/* Meterial UI icon componenti */}
        <AcUnitIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          OSINT
        </Typography>
      </FlexBetween>
      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem" pr="2rem">
        <Box>
          <Link
            to="/admin/dashboard"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected == "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box>
          <Link
            to="/user/osint"
            onClick={() => setSelected("osint")}
            style={{
              color: selected == "osint" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Osint
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
