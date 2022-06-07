<template>
  <div v-if="currentProducto" class="edit-form py-3">
    <p class="headline">Editar Producto</p>
    <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="currentProducto.ProID"
        :rules="[(v) => !!v || 'Id es requerido']"
        label="ID"
        required
      ></v-text-field>
      <v-text-field
        v-model="currentProducto.ProDesc"
        :rules="[(v) => !!v || 'Descripcion es requerido']"
        label="Descripcion"
        required
      ></v-text-field>
      <label><strong>Estado:</strong></label>
      {{ currentProducto.published ? "Published" : "Pending" }}
      <v-divider class="my-5"></v-divider>
      <v-btn v-if="currentProducto.published"
        @click="updatePublished(false)"
        color="primary" small class="mr-2"
      >
        Despublicar
      </v-btn>
      <v-btn v-else
        @click="updatePublished(true)"
        color="primary" small class="mr-2"
      >
        Publicar
      </v-btn>
      <v-btn color="error" small class="mr-2" @click="deleteProducto">
        Eliminar
      </v-btn>
      <v-btn color="success" small @click="updateProducto">
        Actualizar
      </v-btn>
    </v-form>
    <p class="mt-3">{{ message }}</p>
  </div>
  <div v-else>
    <p>Porfavor click en un Producto...</p>
  </div>
</template>
<script>
import cruds from "../logic/cruds";
export default {
  name: "producto",
  data() {
    return {
      currentProducto: null,
      message: "",
    };
  },
  methods: {
    getProducto(id) {
      cruds.mostrarProducto(id)
        .then((response) => {
          this.currentProducto = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updatePublished(status) {
      var data = {
        ProID: this.currentProducto.ProID,
        ProDesc: this.currentProducto.ProDesc,
        ProValor: this.currentProducto.ProValor,
        published: status,
      };
      cruds.actualizarProducto(this.currentProducto.ProID, data)
        .then((response) => {
          this.currentProducto.published = status;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateProducto() {
        cruds.actualizarProducto(this.currentProducto.ProID, this.currentProducto)
        .then((response) => {
          console.log(response.data);
          this.message = "El producto a sido actualizado con exito";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteProducto() {
      cruds.eliminarProducto(this.currentProducto.ProID)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "productos" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getTutorial(this.$route.params.id);
  },
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>