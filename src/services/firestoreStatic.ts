import { collection } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useFirestore, useFirestoreCollectionData } from "reactfire"

export default function useCardCollection(collectionName: string, staticDefaults: CardData[] = []) {
    const db = useFirestore()
    const { status, data } = useFirestoreCollectionData(collection(db, collectionName))
    const [cardCollection, setCardCollection] = useState(staticDefaults)
    useEffect(() => {
        if (status !== "success") { setCardCollection(staticDefaults) }
        else {
            setCardCollection((data as CardData[]).map(card => {
                return {
                    ...staticDefaults.filter(def => def.img === card.img)[0],
                    ...card
                }
            }))
        }
    }, [status, data, staticDefaults])
    return {status, cardCollection}
}

export interface CardData {
    name: string,
    description: string,
    img: string,
    localFile?: string
}