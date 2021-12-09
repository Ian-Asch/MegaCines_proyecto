const rewire = require("rewire")
const usuarios_servicio = rewire("./usuarios-servicio")
const listar_usuarios = usuarios_servicio.__get__("listar_usuarios")
// @ponicode
describe("listar_usuarios", () => {
    test("0", async () => {
        await listar_usuarios()
    })
})
