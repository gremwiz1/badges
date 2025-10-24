import PinkBadge from './PinkBadge.vue'

export default {
  title: 'Components/PinkBadge',
  component: PinkBadge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: { type: 'text' }
    },
    showIcon: {
      control: { type: 'boolean' }
    }
  }
}

const Template = (args) => ({
  components: { PinkBadge },
  setup() {
    return { args }
  },
  template: '<PinkBadge v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  text: '1 000',
  showIcon: true
}

export const WithoutIcon = Template.bind({})
WithoutIcon.args = {
  text: '750',
  showIcon: false
}

export const DifferentNumbers = {
  components: { PinkBadge },
  template: `
    <div style="display: flex; flex-wrap: wrap; gap: 15px; align-items: center; padding: 20px;">
      <PinkBadge text="1 000" :show-icon="true" />
      <PinkBadge text="750" :show-icon="true" />
      <PinkBadge text="250" :show-icon="true" />
      <PinkBadge text="50" :show-icon="true" />
    </div>
  `
}
