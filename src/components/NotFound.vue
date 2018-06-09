<template>
    <div>

        <section class="not-found">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <img src="@/assets/images/utilities/404-page.png" alt="Not Found" class="img-fluid d-block mx-auto">
                        <h1>Not Found</h1>
                        <p>Hmm, we couldn't quite find what you were looking for.</p>
                        <router-link :to="{name: 'home'}" class="btn btn-primary btn-xs">Go Home <i class="fa fa-long-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    name: 'notFound',
    mounted () {
    }
}
</script>

<style lang="scss" scoped>

    .not-found {
        margin-top: 100px;
        text-align: center;
    }

</style>
