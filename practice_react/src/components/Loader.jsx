import { CircularProgress } from "@mui/material"

const Loader = () => {
    return (
        < CircularProgress sx={{ display: "flex", justifyItems: "center", alignItems: "center", marginTop: "20px" }
        } disableShrink />
    )
}

export default Loader