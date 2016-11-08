<style scoped>
.blackcover{position:fixed;width:100%;height:100%;left:0;top:0;z-index:9;background:rgba(0,0,0,0);}
.ui-loading{width:100%;position:fixed;left:0;top:50%;text-align:center;-webkit-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-o-transform:translate3d(0-50%,0);transform:translate3d(0,-50%,0);z-index:10;}
.ui-loading .loading-icon{width:.7rem;height:.7rem;background:rgba(0,0,0,.5);margin:0 auto;border-radius:.08rem;position:relative;}
.ui-loading .loading-icon:before{content:'';position:absolute;width:100%;height:100%;left:0;top:0;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFDUlEQVR4Xu1b/5ENQRDuLwJEgAgQASJABIjAiQARIAJEgAgQASJABO4iaPWdHtW3N7OvZ3te7bp6U/X+m53u+aZ/dz/ISktVH4nISyP/FMDbNVjBGkRJU1V/i8hlo38M4MoavKwJgPoLA1iFl1WImgT8/wCo6k0ReW+i3KXHqroYAEeXWD4A8G2p+qQkQFV/iMg1R/wugM8RZpYCoKq0G6Rb7Mc3ALciNGt7sgD8FJGr7uAwMwkAXonIE0fzBEABoxuHLAB0ZW8mVKkKZHJ2LQFAVe+IyKfJwe8AkI9FKwWAGTPq3w1H/VhEbgGgdDTXQgC+igjtTlknVEEApLlojQCg9iofADwYCYCqHrnAqRz9OBtApQEwKfggIvcmF541iD0SUDF8JPUFAMFPrVEA0BNQFS45bn4CuN7iTlU9aLN6rKp0tfcnZ1HNFru/ctYQAEwKnovIswmTsyKqqqeXAkAwqst8PnXfr9cAqBLpNRIAuiK+iHeLaR2tWP5fNIQZw+dRGwaASQFflOLKlXJPhUnTf3qUol6M/JoS0ysS5wBwYSb1mikq/XrYzRjDdE1p/XQgkBf+aFdm3asHwHhhys04gXegRJ4BrwbANLzlh0cA3vWiu+Z+VWW0SLvko8RznqMGwDS8LfdgjE9pGPay+wDIJJivXnORHwGc8SYtFeBlvUvzvDLMfdGjFvu46PRME3d6oZZ3YNR4Z/qAVSNoh/Eg/mpAUEooDcOMUQYkc6fMSVpJ0WuqQ+3RZr2AqtLwUI8eNhi83mOUMpfsjBPK9u80gHNqG3KDplcU/dsTRsL5/z4ub663liNQ3PniO7PSEADOHdGw0DUy2Bni57PAmJT6MPyjvXrIdXcB4IBgJLYZb2Ag0Lp/7uVrEQDZV9vS9wcAtvQaa/BykIA1UN8SzYMEuC5tpLb+FsDjLb1gJSeolc9qLDNOeIpJlzZyt9Wjv5mw2BdkInc5JgBEopX51Q4ZWpGJcBndY0lRqUhFPjshAKyWMGaOgLCJ8HfuZqrKUL2VvPlPmS8cHYxgRE4u8p6DBFzk143c7SABEZQu8p5uCbDy2CUAX7YCjBVEWKXitEhXoSYMgFWKWXktdXVWhhkVhjs1+wDMLs/maQnlWalmB2hcSazRZeF9QuMw+7j4pE45HZvh5VkUZTl8du0qi7MIyi6LH0vxBw7p0e9ickfkx9I923m1RXXgIzUn1+YaI3NdFrao2S/cUmOEIXB3N6vVGqNIdXdZMi+Z/dZsFJs4foTOH0u1oM06YyRrANTmfXgQrT5fvcvKZi/W+/1ME4dHhZqj1BffAfqbNa00zt4LgDOOtSw3BAANHqXgtPtjlw+5FBJXVaaiVB8SG+IizdVxCo39/bAEmlow1SdP1T5hOA6IvITVFsrkKEFj8zQMXo1GZURuaEFmGACNWb50+awyJEWpovtNAVvAHgnAdIiZNGbjBFU9Ha4EwIZmdf0XY3INJnuGH3ftrXmmIUHYEAlQVcYNfiZn5xDzglFZPypHaWEn+G7ENs3tSQPQGGLemSP0AGDeZXvD0g3D9x1AK3f49xi9ABgItdH8lKdJSUCjBB3SzYUAbOsPE5WuUniIeQkAJgXnvE3mL3dZCfAiudPweWOUAIBRpjeIvwD4P2512cUsANR1vkgpQPSEqdm/zZUx2FSClgKgC+rJ5qUSkKFZ+/YAwGhEo+dNutKp//5FaW5NAkq+Tr5Wqzf8AVAUVvJZ0dBjAAAAAElFTkSuQmCC') center no-repeat;background-size:56%;-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;}

.scale-enter-active{animation:scaleIn 3s ease;}

@keyframes scaleIn{
  from {transform:scale(.5);opacity:0;}
  to {transform:scale(1);opacity:1;}
}
@-webkit-keyframes rotate{
  from {transform:rotate(0);}
  to {transform:rotate(360deg);}
}
@keyframes rotate{
  from {transform:rotate(0);}
  to {transform:rotate(360deg);}
}
</style>
<template>
  <div>
    <div class="blackcover" v-if="coverVisible"></div>
    <div class="ui-loading">
      <transition name="scale">
        <div v-if="visible">
          <div class="loading-icon"></div>
        </div>
      </transition>
    </div>
  </div>
</template>