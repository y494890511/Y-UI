<!--
 * @Description: 
 * @Author: yinlele
 * @Date: 2022-02-07 19:02:50
 * @LastEditTime: 2022-02-07 19:02:52
 * @LastEditors: yinlele
 * @FilePath: /y-ui/src/lib/button/index.vue
-->
<template>
  <button class="y-button" :class="classes">
    <span v-if="loading" class="y-loadingIndicator"></span>

    <div v-if="iconPlacement === 'left' && solts.icon" class="slot-icon-left">
      <slot name="icon"></slot>
    </div>

    <slot></slot>
    <div v-if="iconPlacement === 'right' && solts.icon" class="slot-icon-right">
      <slot name="icon"></slot>
    </div>
  </button>
</template>
<script setup lang="ts">
import { computed, useSlots } from "vue";
const props = defineProps({
  theme: {
    type: String,
    default: "default",
  },
  dashed: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  iconPlacement: {
    type: String,
    default: "left",
  },
});
const { theme, dashed, size, round, disabled, circle } = props;
const solts = useSlots();
const classes = computed(() => {
  return {
    [`y-theme-${theme}`]: theme,
    [`is-dashed`]: dashed,
    [`y-button-${size}`]: size,
    [`is-round`]: round,
    [`is-circle`]: circle,
    [`is-disabled`]: disabled,
  };
});
</script>

<script lang="ts">
export default {
  name: "yButton",
};
</script>

<style lang="scss">
$h-default: 40px;
$h-small: 32px;
$h-large: 48px;
$white: #fff;
$default-color: #333;
$primary-color: #36ad6a;
$info-color: #4098fc;
$success-color: #85ce61;
$warning-color: #f0a020;
$error-color: #d03050;
$grey: grey;
$default-border-color: #d9d9d9;
$radius: 3px;
$green: #18a058;
.y-button {
  box-sizing: border-box;
  height: $h-default;
  font-size: 14px;
  background-color: #fff;
  padding: 12px 20px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all 250ms;
  color: $default-color;
  border: 1px solid $default-border-color;
  user-select: none;
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.is-circle.y-button-default {
    border-radius: 100%;
    height: $h-default;
    width: $h-default;
  }
  &.is-circle.y-button-small {
    border-radius: 100%;
    height: $h-small;
    width: $h-small;
  }
  &.is-circle.y-button-large {
    border-radius: 100%;
    height: $h-large;
    width: $h-large;
  }
  &.is-round.y-button-default {
    border-radius: calc($h-default / 2);
  }
  &.is-round.y-button-large {
    border-radius: calc($h-large / 2);
  }
  &.is-round.y-button-small {
    border-radius: calc($h-small / 2);
  }
  &.y-theme-default {
    &:hover {
      color: $green;
      border-color: $green;
      > .y-loadingIndicator {
        border-style: dashed;
        border-color: $green $green $green transparent;
      }
    }
    &:active {
      color: darken($green, 20%);
      border-color: darken($green, 20%);
      > .y-loadingIndicator {
        border-style: dashed;
        border-color: darken($green, 20%) darken($green, 20%)
          darken($green, 20%) transparent;
      }
    }
    &.is-dashed {
      border-style: dashed;
    }
    > .y-loadingIndicator {
      border-style: dashed;
      border-color: $default-color $default-color $default-color transparent;
    }
  }
  &.y-theme-primary {
    background-color: $primary-color;
    border-color: $primary-color;
    color: $white;
    &:hover {
      background: lighten($primary-color, 20%);
      border-color: lighten($primary-color, 20%);
    }
    &:active {
      background-color: darken($primary-color, 20%);
      border-color: darken($primary-color, 20%);
    }
    &.is-disabled {
      cursor: not-allowed;
      background: lighten($primary-color, 20%);
      border-color: lighten($primary-color, 20%);
      &:hover {
        background: lighten($primary-color, 20%);
        border-color: lighten($primary-color, 20%);
      }
    }
    &.is-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $primary-color;
      > .y-loadingIndicator {
        border-style: dashed;
        border-color: $primary-color $primary-color $primary-color transparent;
      }
    }
  }
  &.y-theme-info {
    background-color: $info-color;
    border-color: $info-color;
    color: $white;
    &:hover {
      background: lighten($info-color, 20%);
      border-color: lighten($info-color, 20%);
    }
    &:active {
      background-color: darken($info-color, 20%);
      border-color: darken($info-color, 20%);
    }
    &.is-disabled {
      cursor: not-allowed;
      background: lighten($info-color, 20%);
      border-color: lighten($info-color, 20%);
      &:hover {
        background: lighten($info-color, 20%);
        border-color: lighten($info-color, 20%);
      }
    }
    &.is-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $info-color;
      > .y-loadingIndicator {
        border-style: dashed;
        border-color: $info-color $info-color $info-color transparent;
      }
    }
  }
  &.y-theme-success {
    background-color: $success-color;
    border-color: $success-color;
    color: $white;
    &:hover {
      background: lighten($success-color, 20%);
      border-color: lighten($success-color, 20%);
    }
    &:active {
      background-color: darken($success-color, 20%);
      border-color: darken($success-color, 20%);
    }
    &.is-disabled {
      cursor: not-allowed;
      background: lighten($success-color, 20%);
      border-color: lighten($success-color, 20%);
      &:hover {
        background: lighten($success-color, 20%);
        border-color: lighten($success-color, 20%);
      }
    }
    &.is-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $success-color;
      > .y-loadingIndicator {
        border-style: dashed;
        border-color: $success-color $success-color $success-color transparent;
      }
    }
  }
  &.y-theme-warning {
    background-color: $warning-color;
    border-color: $warning-color;
    color: $white;
    &:hover {
      background: lighten($warning-color, 20%);
      border-color: lighten($warning-color, 20%);
    }
    &:active {
      background-color: darken($warning-color, 20%);
      border-color: darken($warning-color, 20%);
    }
    &.is-disabled {
      cursor: not-allowed;
      background: lighten($warning-color, 20%);
      border-color: lighten($warning-color, 20%);
      &:hover {
        background: lighten($warning-color, 20%);
        border-color: lighten($warning-color, 20%);
      }
    }
    &.is-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $warning-color;
      > .y-loadingIndicator {
        border-style: dashed;
        border-color: $warning-color $warning-color $warning-color transparent;
      }
    }
  }
  &.y-theme-error {
    background-color: $error-color;
    border-color: $error-color;
    color: $white;
    &:hover {
      background: lighten($error-color, 20%);
      border-color: lighten($error-color, 20%);
    }
    &:active {
      background-color: darken($error-color, 20%);
      border-color: darken($error-color, 20%);
    }
    &.is-disabled {
      cursor: not-allowed;
      background: lighten($error-color, 20%);
      border-color: lighten($error-color, 20%);
      &:hover {
        background: lighten($error-color, 20%);
        border-color: lighten($error-color, 20%);
      }
    }
    &.is-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $error-color;
      > .y-loadingIndicator {
        border-style: dashed;
        border-color: $error-color $error-color $error-color transparent;
      }
    }
  }
  &.y-button-large {
    font-size: 24px;
    height: $h-large;
    padding: 0 16px;
  }
  &.y-button-small {
    font-size: 12px;
    height: $h-small;
    padding: 0 8px;
  }
  > .y-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $white $white $white transparent;
    border-style: solid;
    border-width: 2px;
    animation: y-spin 1s infinite linear;
  }
  > .slot-icon-left {
    margin-right: 5px;
  }
  > .slot-icon-right {
    margin-left: 5px;
  }
}
@keyframes y-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>