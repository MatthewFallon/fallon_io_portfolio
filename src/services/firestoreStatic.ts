import { collection } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useFirestore, useFirestoreCollectionData } from "reactfire"

/**
 * This hook allows for us to track state of the cards as they load as well as map
 * external firestore data to internal data for the website to preload.
 * @param collectionName name of the collection in firestore
 * @param staticDefaults default array of items to have preloaded before firestore intializes
 * @returns A masked observable representing the state of the card loading and dynamically loaded components
 */
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
    link?: string,
    img?: string,
    localFile?: string
}