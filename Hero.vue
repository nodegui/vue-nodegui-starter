<template>
    <vn-view id="hero" :styleSheet="viewStyle">
        <vn-image id="img" src="https://docs.nodegui.org/img/logox200.png" />
        <vn-text id="heading">Vue nodegui</vn-text>
        <vn-text id="text">Powered by Vue3 🌈 and Qt 💚</vn-text>
    </vn-view>
</template>

<script>
export default {
    setup() {
        return {
            viewStyle: `
                #hero {
                    background-color: white;
                    padding: 20px;
                }

                #heading {
                    color: black;
                    font-size: 24px;
                    qproperty-alignment: AlignCenter;
                }

                #text {
                    color: black;
                    font-size: 18px;
                    qproperty-alignment: AlignCenter;
                }
            `
        }
    }
}
</script>