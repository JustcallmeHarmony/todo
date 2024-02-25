import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Icon = () => {
  return (
    <div>
      <div className="Icon">
        <div className="home">
          <HomeOutlinedIcon fontSize="" />
        </div>
        <div className="search">
          <SearchIcon fontSize="" />
        </div>
        <div className="note">
          <NoteAltOutlinedIcon fontSize="" />
        </div>
        <div className="person">
          <PersonOutlineIcon fontSize="" />
        </div>
      </div>
    </div>
  );
};

export default Icon;
