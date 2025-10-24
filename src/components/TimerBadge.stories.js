import TimerBadge from './TimerBadge.vue'

export default {
  title: 'Components/TimerBadge',
  component: TimerBadge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: { type: 'text' }
    }
  }
}

const Template = (args) => ({
  components: { TimerBadge },
  setup() {
    return { args }
  },
  template: '<TimerBadge v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  text: '05:05:59'
}

export const DifferentTimes = {
  components: { TimerBadge },
  template: `
    <div style="display: flex; flex-wrap: wrap; gap: 15px; align-items: center; padding: 20px;">
      <TimerBadge text="05:05:59" />
      <TimerBadge text="02:30:15" />
      <TimerBadge text="00:45:30" />
      <TimerBadge text="01:15:00" />
      <TimerBadge text="00:05:00" />
    </div>
  `
}

export const Countdown = {
  components: { TimerBadge },
  template: `
    <div style="display: flex; flex-wrap: wrap; gap: 15px; align-items: center; padding: 20px;">
      <TimerBadge text="00:10:00" />
      <TimerBadge text="00:05:00" />
      <TimerBadge text="00:01:00" />
      <TimerBadge text="00:00:30" />
      <TimerBadge text="00:00:05" />
    </div>
  `
}
