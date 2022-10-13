<template>
    <div>
        <b-button v-b-toggle.sidebar-1>Filter By Categories</b-button>
        <b-sidebar id="sidebar-1" title="Categories" shadow width="40%">
            <div>
                <div>
                    <b-button v-b-toggle="'collapse-1'" class="m-1">Transport</b-button>
                </div>
                <b-collapse id="collapse-1">
                    <b-list-group>
                        <b-list-group-item button>Cars</b-list-group-item>
                        <b-list-group-item button>Boats</b-list-group-item>
                        <b-list-group-item button>Motercycle</b-list-group-item>
                        <b-list-group-item button>Construction</b-list-group-item>

                    </b-list-group>
                </b-collapse>
            </div>
            <div>
                <div>
                    <b-button v-b-toggle="'collapse-2'" class="m-1">Living</b-button>
                </div>
                <b-collapse id="collapse-2">
                    <b-list-group>
                        <b-list-group-item button>Apartments</b-list-group-item>
                        <b-list-group-item button>Houses</b-list-group-item>
                        <b-list-group-item button>Cabins</b-list-group-item>
                        <b-list-group-item button>Abroad</b-list-group-item>
                    </b-list-group>
                </b-collapse>
            </div>
            <div>
                <div>
                    <b-button v-b-toggle="'collapse-3'" class="m-1">Hobbies</b-button>
                </div>
                <b-collapse id="collapse-3">
                    <b-list-group>
                        <b-list-group-item button>Bikes</b-list-group-item>
                        <b-list-group-item button>Watersports</b-list-group-item>
                        <b-list-group-item button>Music</b-list-group-item>
                        <b-list-group-item button>Sports</b-list-group-item>

                    </b-list-group>
                </b-collapse>
            </div>

            <div>
                <div>
                    <b-button v-b-toggle="'collapse-4'" class="m-1">Tools</b-button>
                </div>
                <b-collapse id="collapse-4">
                    <b-list-group>
                        <b-list-group-item button>Drills</b-list-group-item>
                        <b-list-group-item button>Electric</b-list-group-item>
                        <b-list-group-item button>Saws</b-list-group-item>
                        <b-list-group-item button>Welders</b-list-group-item>

                    </b-list-group>
                </b-collapse>
            </div>

            <div>
                <div>
                    <b-button v-b-toggle="'collapse-5'" class="m-1">Services</b-button>
                </div>
                <b-collapse id="collapse-5">
                    <b-list-group>
                        <b-list-group-item button>Construction</b-list-group-item>
                        <b-list-group-item button>Cooking</b-list-group-item>
                        <b-list-group-item button>Exploration</b-list-group-item>
                        <b-list-group-item button>Study Help</b-list-group-item>

                    </b-list-group>
                </b-collapse>
            </div>

        </b-sidebar>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>
