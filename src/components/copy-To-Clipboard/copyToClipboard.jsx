import { Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const CopyToClipboardButton = () => {
  const handleClick = () => navigator.clipboard.writeText(window.location);

  return (
    <Button onClick={handleClick}>
      <ContentCopyIcon sx={{color:'primary' ,fontSize:'20px'}}/>
    </Button>
  );
};

export default CopyToClipboardButton;
