
// function promesa() {
//     return new Promise((resolve, rejects) => {
//         const precionoAntes = true;

//         // Simula que alguien presiona algo antes de 3 segundos
//         if (precionoAntes) {
//             resolve("Pasaron menos de 3 segundos")
//         }
//         // Si se tarda mas de 3 segundos, rechazamos (esto soolo se ejecuta si no resolvimos antse)
//         setTimeout(()=> {
//             rejects("Se espero mucho tiempo.")
//         }, 3000)
//     })
// }

// async function ejecutarPromesa() {
//     try {
//         const resultado = await promesa();
//         console.log(resultado);
//     } catch (error) {
//         console.log(error);
//     }
// }


// ejecutarPromesa()

"Nivel 1"

// function todoBien() {
//   return new Promise((resolve, reject) => {

//     resolve("Todo ha salido bien")
//     // TODO: usa resolve
//   });
// }

// async function ejecutar() {
//   try {
//     const resultado = await todoBien();
//     console.log(resultado); // ✅ Todo está bien
//   } catch (error) {
//     console.log(error);
//   }
// }

// ejecutar();

"Nivel 2"



// function lanzarMoneda() {
//   return new Promise((resolve, reject) => {
//     const cara = Math.random() > 0.5;

//     if (cara) {
//         resolve("🙂 Cara, ganaste");
//       // TODO: resuelve con ""
//     } else {
//       // TODO: rechaza con ""
//       reject("😢 Cruz, perdiste");
//     }
//   });
// }

// async function jugar() {
//   try {
//     const resultado = await lanzarMoneda();
//     console.log(resultado);
//   } catch (error) {
//     console.log(error);
//   }
// }

// jugar();


"Nivel 3"

// function esperar(ms) {
//   return new Promise((resolve, reject) => {
//     if (ms > 3000) {
//         reject("Rechazado")
        
//     } else {
//         setTimeout(() => {
//             resolve("⌛Espera completada")
//         }, ms)
//     }
//     // TODO: si ms > 3000, rechazar
//     // si no, esperar y luego resolver
//   });
// }

// async function usarEspera() {
//   try {
//     const mensaje = await esperar(2000); // prueba también con 4000
//     console.log(mensaje);
//   } catch (error) {
//     console.log("❌ Error:", error);
//   }
// }

// usarEspera();

"Nivel 4"
// function evaluarExamen() {
//   return new Promise((resolve, reject) => {
//     const nota = Math.random();

//     if (nota >= 0.3) {
//         resolve("🎓 ¡Aprobaste con " + nota.toFixed(2));
//       // TODO: resolve con "🎓 ¡Aprobaste con " + nota.toFixed(2)
//     } else {
//         reject("💥 Reprobaste con " + nota.toFixed(2))
//       // TODO: reject con "💥 Reprobaste con " + nota.toFixed(2)
//     }
//   });
// }

// async function resultado() {
//   try {
//     const mensaje = await evaluarExamen();
//     console.log(mensaje);
//   } catch (error) {
//     console.log(error);
//   }
// }

// resultado();

"Nivel 5"
function tarea(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve() // ESto hace que la promesa se cumpla
        }, ms)
    })
}

async function tareas() {
    try {
        await tarea(2000)
        console.log("Tarea 1 terminada") 
        await tarea(1000)
        console.log("Tarea 2 terminada")
        await tarea(3000)
        console.log("Tarea 3 terminada")
        await tarea(5000)
        console.log("Tarea 4 terminada")
        console.log("Todas las tareas fueron concluidas")

    } catch (error){
        console.log(error)
    }

}


tareas()