<template>
    <div>
<b-row>
    <b-col class = 'userDiv'>
    <img src="https://images.timberland.com/is/image/TimberlandEU/10061713-hero" alt="boot">
    </b-col>
    <b-col class = 'iteminfo'>
        <h5>Item Name</h5>
        <body>
          <h6>Price/duration</h6>
          <p>This is the item description lorem ipulsum expleliarmus This is the item description lorem ipulsum expleliarmusThis is the item description lorem ipulsum expleliarmusThis is the item description lorem ipulsum expleliarmusThis is the item description lorem ipulsum expleliarmus</p>
          <div>
            <body id = 'userBox'>
            <h5 text-align='center'>Posted by:</h5>
            <p>Username:</p>
            <p>Location:</p>
            </body>
          </div>
        </body>
    </b-col>
</b-row>
<b-row>
<b-col id = "reviews">
<h5>Reviews for {itemName}:</h5>
</b-col>
</b-row>
    </div>
</template>

<style scoped>
#userBox{
  padding: 10px;
  border: 1px solid;
  text-align: left;
  margin-top: 20px;
  width: 250px;
}

.userDiv {
    margin: 40px;
    max-width: 25%;
}

#userbox{
    text-align: left;
}

.iteminfo {
  padding: 10px;
  text-align: left;
  margin: 30px;
  max-width: 60%;
}

img{
    align-content: center;
    border: 1px solid;
}

#reviews{
  width: 50%;
  margin: auto;
  margin-top: 20px;
}
</style>

<script>
import { Api } from '@/Api'

export default {
  name: 'Items',
  components: {},
  mounted() {
    this.getItems()
  },

  data() {
    return {
      items: [],
      item: { itemName: '', rentPrice: '', duration: '' }
    }
  },
  methods: {
    async getItems() {
      try {
        const response = Api.get('http://localhost:8080/api/v1/items')
          .then(response => (this.items = response.data))
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
