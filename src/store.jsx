import { proxy } from "valtio";

const state = proxy({
    jaw_rotation: -2.138415823631682,
    open: false,
    OrbitControlEnable: true,
    cameraPosition: [0, 0, 2],
});

export { state };