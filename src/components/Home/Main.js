import { Card } from "@mui/material";
import TopPicks from "./TopPicks";

function Main() {
  return (
    <Card sx={{padding: '20px', borderRadius: '15px'}}>
      <TopPicks heading={'Favorites'} />
      <TopPicks heading={'Recommended'} />
    </Card>
  )
}

export default Main;