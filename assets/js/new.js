
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  console.log("quiubo")
//     apiKey: "AIzaSyBW7T1zcay7Adt8vuVfteRyjMOKaXGtiAQ",
//     authDomain: "firstplan-e3fec.firebaseapp.com",
//     databaseURL: "https://firstplan-e3fec.firebaseio.com",
//     projectId: "firstplan-e3fec",
//     storageBucket: "firstplan-e3fec.appspot.com",
//     messagingSenderId: "990687440118"
//   };
//   firebase.initializeApp(config);
//   console.log("ejubduebde");

//   db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });
firebase.initializeApp({
    apiKey: "AIzaSyBW7T1zcay7Adt8vuVfteRyjMOKaXGtiAQ",
    authDomain: "firstplan-e3fec.firebaseapp.com",
    // databaseURL: "https://firstplan-e3fec.firebaseio.com",
    projectId: "firstplan-e3fec",
    // storageBucket: "firstplan-e3fec.appspot.com",
    // messagingSenderId: "990687440118"
  });

  // Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Leer documentos
var tabla = document.getElementById('tabla');
console.log(tabla);

db.collection("carreras").get().then((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().autor}`);
        tabla.innerHTML +=  `

        <li class="icon fa-paper-plane-o" >
        <h3>${doc.data().nombre}</h3>
			<p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
		</li>
        `
    });
});

// db.collection("carreras").get().then((querySnapshot) => {
//     tabla.innerHTML = '';
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data().autor}`);
//         tabla.innerHTML +=  `
//         <tr >
//             <td>${doc.data().autor}</td>
//             <td>${doc.data().color}</td>
//             <td>${doc.data().descripcion}</td>
//             <td>${doc.data().id}</td>
//             <td><img src="${doc.data().imagen}" alt="" width="230" height="230"></td>
//             <td>${doc.data().nombre}</td>
//             <td>${doc.data().texto}</td>
//             <td><iframe width="560" height="315" src="${doc.data().videoUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td>
//           </tr>
//         `
//     });
// });


//Agregar documentos
// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });
