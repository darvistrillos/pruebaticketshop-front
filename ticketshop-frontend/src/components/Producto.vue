<template>




    <div class="table-wrapper">
        <div class="table-title">
            <div class="row">
                <div class="col-sm-6">
                    <h2>Administrador de <b>Productos</b></h2>
                </div>
                <div class="col-sm-6">
                    <a href="#addProductModal" class="btn btn-success" data-toggle="modal"><i
                            class="material-icons">&#xE147;</i> <span>Añadir</span></a>
                    <a href="#deleteProductModal" class="btn btn-danger" data-toggle="modal"><i
                            class="material-icons">&#xE15C;</i> <span>Eliminar</span></a>
                </div>
            </div>
        </div>
    </div>
    <table class="table table-striped table-hover">
        <thead>

            <th>
                <span class="custom-checkbox">
                    <input type="checkbox" id="selectAll">
                    <label for="selectAll"></label>
                </span>
            </th>

            <th>Id</th>
            <th>Descripcion</th>
            <th>Valor</th>
            <th>Accion</th>
        </thead>
        <tbody>
            <tr v-for="item in this.productos">
                <td>
                    <span class="custom-checkbox">
                        <input type="checkbox" id="checkbox1" name="options[]" value="1">
                        <label for="checkbox1"></label>
                    </span>
                </td>
                <td>
                    {{ item.ProID }}
                </td>
                <td>
                    {{ item.ProDesc }}
                </td>
                <td>
                    {{ item.ProValor }}
                </td>
                <td>
                <td>
                    <a href="#editProductoModal" class="edit" data-toggle="modal"><i class="material-icons"
                            data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                    <a href="#deleteProductoModal" class="delete" data-toggle="modal"><i class="material-icons"
                            data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                </td>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import cruds from "../logic/cruds";
export default {
    name: "Producto",
    data() {
        return {
            productos: [],
            title: "",
            headers: [
                { text: "ProID", align: "start", sortable: false, value: "ProID" },
                { text: "ProDesc", value: "ProDesc", sortable: false },
                { text: "ProValor", value: "ProValor", sortable: false },
            ],
        };
    },
    methods: {
        recuperarProductos() {
            cruds.listarProductos()
                .then((response) => {
                    this.productos = response.data.map(this.getDisplayProducto);
                    console.log(this.productos);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        refreshList() {
            this.recuperarProductos();
        },
        editProducto(id) {
            this.$router.push({ name: "detalle-producto", params: { id: id } });
        },
        deleteProducto(id) {
            cruds.eliminarProducto(id)
                .then(() => {
                    this.refreshList();
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        getDisplayProducto(producto) {
            return {
                ProID: producto.ProID,
                ProDesc: producto.ProDesc.length > 30 ? producto.ProDesc.substr(0, 30) + "..." : producto.ProDesc,
                ProValor: producto.ProValor,
            };
        },
    },
    mounted() {
        this.recuperarProductos();
    },
};
</script>
<style>
.list {
    max-width: 750px;
}
</style>