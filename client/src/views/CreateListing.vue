<template>
  <div>
    <header>Create an item listing</header>
    <p>
      Enter the details for your item, along with a photo and you're good to go!
    </p>
    <b-row>
      <b-col class="col1">
        <p>Add item details</p>
        <form class="itemDetails">
          <input
            type="text"
            placeholder="Enter a name for your item"
            required
          />

          <input type="number" placeholder="Enter price" required />

          <select placeholder="Select a item category" required>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
          </select>
        </form>
      </b-col>
      <b-col
        >Upload a photo
        <b-form-file
          v-model="file1"
          :state="Boolean(file1)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
        <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
      </b-col>
    </b-row>
  </div>
</template>

<style>
input {
  margin-bottom: 15px;
}
</style>

<script>
export default {
  data() {
    return {
      file1: null,
      file2: null
    }
  }
}
</script>
