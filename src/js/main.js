const app = new WHS.App([
    new WHS.app.ElementModule(),
    new WHS.app.SceneModule(),
    new WHS.app.CameraModule({
        position: new THREE.Vector3(0, 0, 50)
    }),
    new WHS.app.RenderingModule({bgColor: 0x162129}),
    new WHS.app.ResizeModule(),
    new WHS.controls.OrbitModule({
        target: new THREE.Vector3(0, 0, 0),
        follow: false
    }),
]);

const sphere = new WHS.Sphere({ // Create sphere component.
    geometry: {
        radius: 3,
        widthSegments: 32,
        heightSegments: 32
    },

    material: new THREE.MeshBasicMaterial({
        color: 0xB2F2B2
    }),

    position: [0, 10, 0]
});

new WHS.AmbientLight( {
    light: {
        color: 0xffffff,
        intensity: 0.2
    }
}).addTo(app);

new WHS.PointLight( {
    light: {
        color: 0xff0000,
        intensity: 3,
        distance: 1000
    },

    position: [10, 20, 10],

    target: {
        x: 5
    }
}).addTo(app);

sphere.addTo(app); // Add sphere to world.

    new WHS.Plane({
        geometry: {
            width: 100,
            height: 100
        },

        material: new THREE.MeshBasicMaterial({
            color: 0x447F8B
        }),

        rotation: {
            x: - Math.PI / 2
        }
    }).addTo(app);

app.start(); // Start animations and physics simulation.
