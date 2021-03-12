module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/attribute-hypenation': {
      'ignore': [
        // View
        'styleSheet',
        'mouseTracking',
        'windowOpacity',
        'windowTitle',

        // AbstractButton, ComboBox
        'iconSize',

        // ComboBox
        'currentIndex',
        'currentData',
        'currentText',
        'duplicatesEnabled',
        'insertPolicy',
        'maxCount',
        'maxVisibleItems',
        'minimumContentsLength',
        'modelColumn',
        'sizeAdjustPolicy',

        // Dial
        'notchesVisible',
        'wrapping',
        'notchTarget',

        // Image
        'aspectRatioMode',
        'transformationMode',

        // LineEdit,
        'placeholderText',
        'readOnly',
        'echoMode',

        // ScrollArea
        'widgetResizable',

        // Slider
        'tickInterval',
        'tickPosition',
        'invertedAppearance',
        'invertedControls',
        'pageStep',
        'singleStep', // SpinBox
        'isSliderDown',
        'sliderPosition',
        'hasTracking',

        // Text
        'wordWrap',
        'scaledContents',
        'openExternalLinks'
      ]
    }
  }
}
