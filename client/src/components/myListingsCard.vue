<template>
  <div>
    <b-card
      :title="itemName"
      :footer="rentPrice"
      :img-src="image"
      img-alt="Image"
      img-top
      class="navCard"
    >
      <a
        href=link
        class="stretched-link"
      ></a>
      <button v-on:click="editItem">Edit Item</button>
      <br />
      <b-button pill v-b-modal.modal-1 variant="outline-danger"
        >Remove Item</b-button
      >
      <b-modal id="modal-2" title="Leaving already?">
        // Modal has id=2 because modal-1 is used for deleting an account.
        <p class="my-4">
          Are you sure you want to permanently delete this item listing?.
        </p>
      </b-modal>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['itemName', 'rentPrice', 'image']
}
</script>

  <style>
.navCard {
  font-size: 40px;
  width: 400px;
  height: 300px;
  border-radius: 30px;
  margin: 10px;
}
</style>
