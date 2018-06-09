<template>

    <div class="wrapper">
        <div class="wrapper__left-wrapper">
            <h1 class="wrapper__left-wrapper__lead-text">John <span class="blue-text">Datserakis</span></h1>

            <div class="wrapper__left-wrapper__social-wrapper">
                <div v-for="socialItem in socialItems" :key="socialItem.name" class="wrapper__left-wrapper__social-wrapper__item">
                    <a :href="socialItem.link" target="_blank">
                        <i :class="'fa ' + socialItem.icon"></i>
                    </a>
                </div>
            </div>

            <p class="wrapper__left-wrapper__sub-text">
                Hi there. My name is John Datserakis. I'm a Full-Stack Web/Mobile App Developer and Designer from Boston's North Shore. I currently make cool things at <a href="https://promosis.com">Promosis</a>. The two blogs I write for are <a href="https://blog.innermonkdesign.com">The Inner Monk Blog</a> and <a href="https://thehiphographies.com">The Hiphographies</a>. You can find my iOS Apps and Games on the <a href="http://appstore.com/johndatserakis">App Store</a>. I like to write open-source code to share with the community. Check out my <a href="https://github.com/johndatserakis">GitHub</a> to see those projects. Thanks for checking out my work. Email me at adstwlearn at gmail dot com if you'd like.
            </p>
        </div>

        <div class="wrapper__right-wrapper">
            <h1 class="wrapper__right-wrapper__lead-text">My Recent Work</h1>
            <div v-for="project in projects" :key="project.title" class="wrapper__right-wrapper__item">
                <div class="wrapper__right-wrapper__item__title">
                    {{project.title}}
                </div>
                <div class="wrapper__right-wrapper__item__description">
                    {{project.description}}
                    <a :href="project.link" class="wrapper__right-wrapper__item__link" target="_blank">
                        {{project.linkText}} <i class="fa fa-long-arrow-right"></i>
                    </a>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import projects from '../data/projects'
export default {
    name: 'home',
    props: {
    },
    data () {
        return {
            projects: projects,
            socialItems: [
                {
                    name: 'GitHub',
                    icon: 'fa-github',
                    link: 'https://github.com/johndatserakis'
                },
                {
                    name: 'Twitter',
                    icon: 'fa-twitter',
                    link: 'https://twitter.com/johndatserakis'
                },
                {
                    name: 'LinkedIn',
                    icon: 'fa-linkedin',
                    link: 'https://www.linkedin.com/in/johndatserakis'
                },
                {
                    name: 'CodePen',
                    icon: 'fa-codepen',
                    link: 'https://codepen.io/johndatserakis/'
                }
            ]
        }
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    mounted () {
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/css/app.scss';

    .wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;

        @media (min-width: 992px) {
            flex-direction: row;
            height: 100vh;
        }

        &__left-wrapper {
            height: 100%;
            width: 100%;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: $white;
            background: linear-gradient(115deg, $white, darken($white, 10%));

            @media (min-width: 992px) {
                width: 50%;
                border-right: 2px solid darken($blue, 15%);
            }

            &__lead-text {
                margin-bottom: 20px;
                font-size: 2.2rem;
                font-weight: bold;

                @media (min-width: 992px) {
                    font-size: 4.0rem;
                }
            }

            &__sub-text {
                font-size: 0.9rem;
                color: $muted;
            }

            &__social-wrapper {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                margin-bottom: 20px;

                &__item {
                    margin-right: 10px;
                }
            }
        }

        &__right-wrapper {
            padding: 30px;
            height: 100%;
            width: 100%;
            background: $blue;
            background: linear-gradient(115deg, $blue, darken($blue, 10%));
            color: $white;

            @media (min-width: 992px) {
                // box-shadow: -2px 0 4px 0 rgba($black, 0.05);
                width: 50%;
                overflow: scroll;
            }

            &__lead-text {
                margin-bottom: 40px;
                font-size: 2.2rem;
                font-weight: bold;
                color: $white;

                @media (min-width: 992px) {
                    font-size: 2.8rem;
                }
            }

            &__item {
                margin-bottom: 45px;

                &__title {
                    font-size: 1.4rem;
                    margin-bottom: 5px;
                }

                &__description {
                    font-size: 0.9rem;
                }

                &__link {
                    margin-left: 5px;
                    font-size: 0.9rem;
                    color: $yellow;

                    &:hover {
                        color: darken($yellow, 5%);
                    }
                }
            }
        }
    }

    .blue-text {
        color: $blue;
    }
</style>