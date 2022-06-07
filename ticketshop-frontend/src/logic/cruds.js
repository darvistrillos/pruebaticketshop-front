import axios from "axios";

const ENDPOINT_PATH = "http://localhost:8000/api/v1/";

const token = localStorage.getItem('jwt');

export default {
    listarProductos() {
        return axios.get(ENDPOINT_PATH + "productos");
    },
    mostrarProducto(id) {
        return axios.get(ENDPOINT_PATH + "productos/" + id);
    },
    crearProducto(data) {
        return axios.post(ENDPOINT_PATH + "productos", {
            data: data,
            withCredentials: true,
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    eliminarProducto(id) {
        return axios.delete(ENDPOINT_PATH + "productos/" + id, {
            withCredentials: true,
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    actualizarProducto(id, data) {
        return axios.put(ENDPOINT_PATH + "productos/" + id, {
            data: data,
            withCredentials: true,
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    listarPedidos() {
        return axios.get(ENDPOINT_PATH + "pedidos");
    },
    mostrarPedidos(id) {
        return axios.get(ENDPOINT_PATH + "pedidos/" + id);
    },
    crearPedidos(data) {
        return axios.post(ENDPOINT_PATH + "pedidos", {
            data: data,
            withCredentials: true,
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    eliminarPedidos(id) {
        return axios.delete(ENDPOINT_PATH + "pedidos/" + id, {
            withCredentials: true,
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    actualizarPedidos(id, data) {
        return axios.put(ENDPOINT_PATH + "pedidos/" + id, {
            data: data,
            withCredentials: true,
            headers: { 'Authorization': 'Bearer ' + token }
        });
    }
};