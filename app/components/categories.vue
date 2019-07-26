<template>
    <ul class="list-category mod-categories">
        <li
            v-for="(category, index) in categories"
            :key="index"
            class="item-main"
        >
            <h2 v-text="category.name"></h2>
            <ul class="list-instance">
                <li
                    v-for="(instance, index) in category.instances"
                    :key="index"
                    class="item-sub"
                >
                    <router-link
                        :to="instance.route"
                        v-text="instance.name">
                    </router-link>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
    import Vue from 'vue';

    const Categories = Vue.extend({
        props: {
            categories: {
                type: Array,
                default: [],
            }
        },
        data() {
            return {}
        },
        methods: {},
        mounted() {},
    });

    Vue.component('categories', Categories);

    export default Categories;

</script>
