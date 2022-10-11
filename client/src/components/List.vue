<template>
  <b-card-group deck>
        <b-card class="list"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image" img-top
            :title="item.itemName">
            <b-card-text>
                {{ item.description }}
            </b-card-text>

            <template #footer>
                <b-container>
                    <b-row>
                        <b-col>
                            <small> {{ item.rentPrice + ' SEK per ' + item.duration }} </small>
                        </b-col>
                    </b-row>

                    <b-row>
                        <small> Catagory: {{ item.category + '' }} </small>
                    </b-row>

                    <b-row>
                        <small ref="itemId"> ID: {{ item._id }} </small>
                    </b-row>

                    <b-row>
                        <b-col>
                            <b-button variant="success" v-bind:key="item.id" v-on:click="approveListing(items._id)">Approve Listing</b-button>
                        </b-col>
                        <b-col>
                          <b-button variant="danger" v-bind:key="item._id" @:click="deleteListing">Reject Listing</b-button>
                        </b-col>
                    </b-row>
                </b-container>
            </template>
        </b-card>
    </b-card-group>
</template>

<script>
export default {
  props: ['name', 'price', 'duration', 'description', 'category']

}
</script>

<style>

</style>
