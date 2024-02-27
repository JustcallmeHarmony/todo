import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";

const Icon = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/Search");
  };

  const handleSettingClick = () => {
    navigate("/Setting");
  };

  return (
    <div>
      <div className="Icon">
        <div className="home">
          <HomeOutlinedIcon fontSize="" />
        </div>
        <div className="search">
          <SearchIcon fontSize="" onClick={handleSearchClick} />
        </div>
        <div className="note">
          <NoteAltOutlinedIcon fontSize="" />
        </div>
        <div className="person">
          <PersonOutlineIcon fontSize="" onClick={handleSettingClick} />
        </div>
      </div>
    </div>
  );
};

export default Icon;
