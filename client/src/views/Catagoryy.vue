<template>
  <div>
  <!-- Using value -->
  <div>
  <b-card
  overlay
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
  <footer>
    <b-button v-b-toggle="'collapse-1'" class="m-1">Transport</b-button>
</footer>
  </b-card>
</div>
<b-collapse id="collapse-1">
    <div>
            <b-card-group class="cardDeck" style="position: relative;">
                <div>
                    <h2>Transport</h2>
                </div>
                <b-row>
                    <b-col>
                        <b-card title="Cars" class="catagoryCard"
                            style="background-image:url('https://cdn.pixabay.com/photo/2019/05/02/09/50/camper-4172987_1280.jpg'); background-position: center; border-radius: 25px; height: 200px;">
                            <a href="https://www.googlse.com/" class="stretched-link" style="border-radius: 100%;"></a>
                        </b-card>
                </b-col>
                <b-col>
                    <b-card title="Boats" class="catagoryCard"
                            style="background-image:url('https://cdn.pixabay.com/photo/2015/09/22/19/00/ship-952292_1280.jpg?h=100&w=200'); background-position: center; border-radius: 25px; height: 200px;">
                        </b-card>
                        <a href="https://www.google.com/" class="stretched-link" style="border-radius: 100%;"></a>
                    </b-col>
                    <b-col>
                        <b-card title="Motorcycle" class="catagoryCard"
                            style="background-image:url('https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_1280.jpg'); background-position: center; border-radius: 25px;  height: 200px;">
                        </b-card>
                        <a href="https://www.google.com/" class="stretched-link" style="border-radius: 100%;"></a>
                    </b-col>

                    <b-col class="catagoryCard">
                        <b-card title="Construction" class="catagoryCard"
                            style="background-image:url('https://cdn.pixabay.com/photo/2017/09/11/14/43/accuracy-2739190_1280.jpg'); background-position: center; border-radius: 25px; height: 200px;">
                        </b-card>
                        <a href="https://www.google.com/" class="stretched-link" style="border-radius: 100%;"></a>
                    </b-col>
                </b-row>
            </b-card-group>
        </div>
  </b-collapse>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
