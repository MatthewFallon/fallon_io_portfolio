import { CardMedia, CircularProgress, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useStorage, useStorageDownloadURL } from "reactfire";

export default function FirebaseCardMedia({collection, file, localFile}: {collection: string, file: string, localFile?: string}) {

    const imageUrl = useLoadedImage({collection, file})

    const theme = useTheme()
    const aboveMedium = useMediaQuery(theme.breakpoints.up("md"))

    const mediaHeight = aboveMedium ? 360 : 200

    if (!imageUrl && !localFile) {
        return <Box height={mediaHeight} display="grid" alignItems="center" justifyItems="center">
            <CircularProgress color="primary" size={mediaHeight * (1/5)}/>
        </Box>
    }
 
    return (
        <CardMedia component="img" image={imageUrl || localFile} sx={{height: mediaHeight, objectPosition: "left"}} alt={file.slice(0, file.indexOf("."))}/>
    )
}

function useLoadedImage({collection, file}: {collection: string, file: string}) {
    const [image, setImage] = useState<HTMLImageElement|undefined>()
    const [imageStatus, setImageStatus] = useState<"loading"|"success">("loading")
    const storage = useStorage()
    const imageRef = ref(storage, `${collection}/${file}`)

    const { status, data } = useStorageDownloadURL(imageRef)

    useEffect(() => {
        console.log("Triggered");
        
        if (status !== "success" && imageStatus === "success") {
            setImageStatus("loading")
        } else if (status === "success" && imageStatus === "loading") {
            const imageToLoad = new Image()
            imageToLoad.src = data
            imageToLoad.onload = (e) => {
                setImageStatus("success")
                setImage(imageToLoad)
            }
        }
    }, [status, data, image, imageStatus])

    return image?.src
}