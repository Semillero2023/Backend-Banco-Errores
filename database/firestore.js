const db = firebase.firestore();

export async function insert(item) {
    try {
        const response = await db.collection("banco").add(errorNew);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}