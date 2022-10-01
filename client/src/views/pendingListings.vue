<template>

    <Container>

        <b-list-group>
            <b-list-group-item href="#some-link">
                <b-row>
                    <b-col class="col">Listing Name:</b-col>
                    <b-col>Price:</b-col>
                    <b-col>Duration:</b-col>
                    <b-col>Description:</b-col>
                    <b-button variant="danger">Reject Listing</b-button>
                    <b-button variant="success">Approve Listing</b-button>
                </b-row>
            </b-list-group-item>

        </b-list-group>
    </Container>

</template>

<script>
export default {

}
</script>

<style>

.col{
    border-radius: 10px;
    margin: auto;
    max-width: 100px;
    max-height: 150px;
    border: 2px solid;
    color: black 50%;
}
</style>
