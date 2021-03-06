import {db} from "./firebase";


export function getProducts() {
    return db.ref("products").once('value');
}

// const idGenerator = () => {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//         const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//         return v.toString(16);
//     });
// };

// export function placeOrder(placeId, startTime, endTime) {
//     var placeRef = db.collection(`places`)
//         .doc(placeId);
//     placeRef.update({
//         bookedIntervals: firebase.firestore.FieldValue.arrayUnion({
//             startTime: startTime,
//             endTime: endTime
//         })
//     })
//         .then(function () {
//             console.log("Document successfully written!");
//         })
//         .catch(function (error) {
//             placeRef.set({
//                 bookedIntervals: {
//                     startTime: startTime,
//                     endTime: endTime
//                 }
//             })
//             .then(function () {
//                 console.log("Document successfully written!");
//             })
//             .catch(function(error) {
//                 console.error("Error writing document: ", error);
//             })
//         });
// }


// export function getFreePlaces(startTime, endTime) {
//     db.collection("places")
//         .where("bookedIntervals.$.startTime", "<=", endTime)
//         .where("bookedIntervals.$.endTime", ">=", startTime)
//         .get()
//         .then(function (querySnapshot) {
//             querySnapshot.foreach(function (doc) {
//                 console.log(doc)
//             })
//         })
// }

// export function readChats() {
//     let abc = [];
//     db.ref("chats").on("value", snapshot => {
//         snapshot.forEach(snap => {
//             abc.push(snap.val())
//         });
//         return abc;
//     });
// }
//
// export function writeChats(message) {
//     return db.ref("chats").push({
//         content: message.content,
//         timestamp: message.timestamp,
//         uid: message.uid
//     });
// }
